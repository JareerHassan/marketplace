"use client";

import { useState, useRef, useEffect, FormEvent, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import api from "@/lib/api";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  type?: "question" | "results";
  recommendations?: Recommendation[];
};

type Recommendation = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  link: string;
  category: string;
  pricingModel: string;
};

function AISearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState(initialQuery);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Focus input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, []);

  // Initialize session on mount
  useEffect(() => {
    const initSession = async () => {
      try {
        const response = await api.post("/chatbot/start", {});
        setSessionId(response.data.sessionId);
        setMessages([
          {
            id: "init",
            role: "assistant",
            content: response.data.message,
            type: response.data.type,
          },
        ]);
        setIsInitialized(true);

        // If there's an initial query, send it automatically
        if (initialQuery.trim()) {
          setTimeout(() => {
            handleSendMessage(initialQuery);
          }, 500);
        }
      } catch (error) {
        console.error("Error initializing chat:", error);
        setMessages([
          {
            id: "init",
            role: "assistant",
            content:
              "Hi! I'm your AI assistant. How can I help you find the perfect tools?",
            type: "question",
          },
        ]);
        setIsInitialized(true);
      }
    };
    initSession();
  }, []);

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || input.trim();
    if (!textToSend || isLoading || !sessionId) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: textToSend,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await api.post("/chatbot/message", {
        sessionId,
        message: textToSend,
      });

      const assistantMessage: Message = {
        id: Date.now().toString() + "_ai",
        role: "assistant",
        content: response.data.message,
        type: response.data.type,
        recommendations: response.data.recommendations,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error: any) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content:
            error.response?.data?.message ||
            "Sorry, I encountered an error. Please try again.",
          type: "question",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await handleSendMessage();
  };

  const handleClear = async () => {
    if (sessionId) {
      try {
        await api.post("/chatbot/clear", { sessionId });
      } catch (error) {
        console.error("Error clearing chat:", error);
      }
    }
    setMessages([]);
    setInput("");
    setIsInitialized(false);
    setSessionId(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold">AI Search</h1>
            <p className="text-muted-foreground mt-1">
              Ask me anything and I'll find the perfect tools for you
            </p>
          </div>
          <Button variant="ghost" onClick={() => router.push("/")}>
            <Icons.X className="h-4 w-4 mr-2" />
            Close
          </Button>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && input.trim()) {
                  handleSubmit(e);
                }
              }}
              placeholder="Ask me anything... Find tools, get recommendations"
              className="pl-10 h-12 text-base"
              disabled={isLoading || !isInitialized}
            />
          </div>
          <Button
            onClick={handleClear}
            variant="outline"
            size="sm"
            className="h-12"
          >
            <Icons.PlusCircle className="h-4 w-4 mr-2" />
            New Chat
          </Button>
        </div>
      </div>

      {/* Chat Interface */}
      <Card className="shadow-lg">
        <CardContent className="p-0">
          {/* Messages */}
          <div className="h-[600px] overflow-y-auto p-6 space-y-4">
            {messages.length === 0 && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <Icons.Bot className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
                  <p className="text-muted-foreground">
                    Start a conversation to get AI-powered recommendations
                  </p>
                </div>
              </div>
            )}

            {messages.map((message) => {
              const isUser = message.role === "user";
              return (
                <div
                  key={message.id}
                  className={`flex gap-4 items-start ${
                    isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  {!isUser && (
                    <Avatar className="h-10 w-10 shrink-0">
                      <AvatarFallback className="bg-primary/20 text-primary">
                        <Icons.Bot className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                  )}

                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-3 ${
                      isUser
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">
                      {message.content}
                    </p>

                    {/* Recommendations */}
                    {message.recommendations &&
                      message.recommendations.length > 0 && (
                        <div className="mt-4 space-y-3">
                          <p className="text-xs font-semibold text-muted-foreground mb-2">
                            Recommended Tools:
                          </p>
                          {message.recommendations.map((rec) => (
                            <Link
                              key={rec.id}
                              href={rec.link}
                              className="block p-4 bg-background border rounded-lg hover:bg-accent transition-colors"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <h4 className="font-semibold text-base">
                                      {rec.name}
                                    </h4>
                                    {rec.pricingModel && (
                                      <Badge variant="outline" className="text-xs">
                                        {rec.pricingModel}
                                      </Badge>
                                    )}
                                  </div>
                                  <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                                    {rec.shortDescription}
                                  </p>
                                  {rec.category && (
                                    <Badge variant="secondary" className="text-xs">
                                      {rec.category}
                                    </Badge>
                                  )}
                                </div>
                                <Icons.ArrowRight className="h-5 w-5 text-muted-foreground shrink-0 mt-1" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                  </div>

                  {isUser && (
                    <Avatar className="h-10 w-10 shrink-0">
                      <AvatarFallback className="bg-primary/20 text-primary">
                        <Icons.User className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              );
            })}

            {/* Loading */}
            {isLoading && (
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10 shrink-0">
                  <AvatarFallback className="bg-primary/20 text-primary">
                    <Icons.Bot className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-muted rounded-lg px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-primary rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                    <span className="h-2 w-2 bg-primary rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                    <span className="h-2 w-2 bg-primary rounded-full animate-pulse"></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="p-4 border-t flex items-center gap-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1"
              disabled={isLoading || !isInitialized}
            />
            <Button
              type="submit"
              disabled={isLoading || !isInitialized || !input.trim()}
            >
              <Icons.Send className="h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default function AISearchPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      }
    >
      <AISearchContent />
    </Suspense>
  );
}
