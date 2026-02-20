"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import api from "@/lib/api";
import { cn } from "@/lib/utils";

type Recommendation = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  link: string;
  category: string;
  pricingModel: string;
};

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  type?: "question" | "results";
  recommendations?: Recommendation[];
};

export default function AISearchBar() {
  const [query, setQuery] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentResponse, setCurrentResponse] = useState<string | null>(null);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize session on mount
  useEffect(() => {
    const initSession = async () => {
      try {
        const response = await api.post("/chatbot/start", {});
        setSessionId(response.data.sessionId);
      } catch (error) {
        console.error("Error initializing AI search:", error);
      }
    };
    initSession();
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };

    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isActive]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading || !sessionId) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: query,
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentQuery = query;
    setQuery("");
    setIsLoading(true);
    setCurrentResponse(null);
    setRecommendations([]);

    try {
      const response = await api.post("/chatbot/message", {
        sessionId,
        message: currentQuery,
      });

      const assistantMessage: Message = {
        id: Date.now().toString() + "_ai",
        role: "assistant",
        content: response.data.message,
        type: response.data.type,
        recommendations: response.data.recommendations,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setCurrentResponse(response.data.message);
      setRecommendations(response.data.recommendations || []);

      // If we got results, keep it open; if it's a question, keep it open too
      if (response.data.type === "results" && response.data.recommendations?.length) {
        // Results shown, can close after a moment
      }
    } catch (error: any) {
      console.error("Error processing query:", error);
      setCurrentResponse(
        error.response?.data?.message ||
          "Sorry, I encountered an error. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleClear = () => {
    setQuery("");
    setMessages([]);
    setCurrentResponse(null);
    setRecommendations([]);
    inputRef.current?.focus();
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      {/* Google-style Search Bar */}
      <form onSubmit={handleSubmit} className="relative">
        <div
          className={cn(
            "flex items-center w-full rounded-full border transition-all duration-200",
            isActive
              ? "border-primary/50 shadow-lg shadow-primary/5 bg-background"
              : "border-border/50 hover:shadow-md hover:border-border bg-background/50 backdrop-blur-sm",
            "bg-background"
          )}
        >
          {/* Search Icon */}
          <div className="pl-5 pr-3">
            <Icons.Search className="h-5 w-5 text-muted-foreground" />
          </div>

          {/* Input */}
          <Input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={handleFocus}
            placeholder="Ask anything... Find tools, get recommendations"
            className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base py-6 pr-4 bg-transparent"
          />

          {/* AI Badge */}
          <div className="pr-3 flex items-center gap-2">
            {isLoading && (
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 bg-primary rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                <span className="h-2 w-2 bg-primary rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                <span className="h-2 w-2 bg-primary rounded-full animate-pulse"></span>
              </div>
            )}
            {query && !isLoading && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handleClear}
                className="h-8 w-8 p-0"
              >
                <Icons.X className="h-4 w-4" />
              </Button>
            )}
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary border-primary/30 font-medium"
            >
              <Icons.Bot className="h-3 w-3 mr-1.5" />
              AI
            </Badge>
          </div>
        </div>
      </form>

      {/* Results Panel */}
      {isActive && (messages.length > 0 || isLoading || currentResponse) && (
        <Card className="absolute top-full mt-1 w-full shadow-2xl border-t-0 rounded-t-none rounded-b-xl max-h-[600px] overflow-y-auto z-50 bg-background/95 backdrop-blur-sm">
          <CardContent className="p-4 space-y-4">
            {/* Messages */}
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "space-y-2",
                  message.role === "user" ? "text-right" : "text-left"
                )}
              >
                {message.role === "user" && (
                  <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">
                    {message.content}
                  </div>
                )}
                {message.role === "assistant" && (
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      {message.content}
                    </p>
                    {message.recommendations &&
                      message.recommendations.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-muted-foreground">
                            Recommended Tools:
                          </p>
                          {message.recommendations.map((rec) => (
                            <Link
                              key={rec.id}
                              href={rec.link}
                              className="block p-3 border rounded-lg hover:bg-accent transition-colors"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-semibold text-sm">
                                      {rec.name}
                                    </h4>
                                    {rec.pricingModel && (
                                      <Badge variant="outline" className="text-xs">
                                        {rec.pricingModel}
                                      </Badge>
                                    )}
                                  </div>
                                  <p className="text-xs text-muted-foreground line-clamp-2">
                                    {rec.shortDescription}
                                  </p>
                                  {rec.category && (
                                    <Badge
                                      variant="secondary"
                                      className="text-xs mt-1"
                                    >
                                      {rec.category}
                                    </Badge>
                                  )}
                                </div>
                                <Icons.ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                  </div>
                )}
              </div>
            ))}

            {/* Loading State */}
            {isLoading && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 bg-primary rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                  <span className="h-2 w-2 bg-primary rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                  <span className="h-2 w-2 bg-primary rounded-full animate-pulse"></span>
                </div>
                <span>Thinking...</span>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
