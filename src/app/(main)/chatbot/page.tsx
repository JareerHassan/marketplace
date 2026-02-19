"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  score?: number;
};

const PulsingDots = () => (
  <div className="flex items-center space-x-1">
    <span className="h-2 w-2 bg-primary rounded-full animate-pulse [animation-delay:-0.3s]"></span>
    <span className="h-2 w-2 bg-primary rounded-full animate-pulse [animation-delay:-0.15s]"></span>
    <span className="h-2 w-2 bg-primary rounded-full animate-pulse"></span>
  </div>
);

const ProductRecommendation = ({ product }: { product: Recommendation }) => (
  <Card className="mt-3 border-primary/20 hover:border-primary/40 transition-colors">
    <CardContent className="p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-semibold text-base">{product.name}</h4>
            {product.pricingModel && (
              <Badge variant="outline" className="text-xs">
                {product.pricingModel}
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {product.shortDescription}
          </p>
          {product.category && (
            <Badge variant="secondary" className="text-xs mb-3">
              {product.category}
            </Badge>
          )}
          <Link
            href={product.link}
            className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center gap-1"
          >
            View Tool <Icons.ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Initialize chat session on mount
  useEffect(() => {
    const initializeChat = async () => {
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
      } catch (error) {
        console.error("Error initializing chat:", error);
        setMessages([
          {
            id: "init",
            role: "assistant",
            content:
              "Hi! I'm your recommendation assistant. What kind of tool or solution are you looking for?",
            type: "question",
          },
        ]);
        setIsInitialized(true);
      }
    };

    if (!isInitialized) {
      initializeChat();
    }
  }, [isInitialized]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !sessionId) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsLoading(true);

    try {
      const response = await api.post("/chatbot/message", {
        sessionId,
        message: currentInput,
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
            "⚠️ Oops! Something went wrong. Please try again in a moment.",
          type: "question",
        },
      ]);
    }

    setIsLoading(false);
  };

  const handleClearChat = async () => {
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
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-gradient-to-b from-background to-muted/30">
      {/* HEADER */}
      <header className="p-4 border-b shadow-sm backdrop-blur-sm bg-background/60 sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-wide text-primary">
              AI Recommendation Assistant
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Tell me what you need, and I'll find the perfect tools for you
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearChat}
            className="text-xs"
          >
            <Icons.X className="w-4 h-4 mr-1" />
            New Chat
          </Button>
        </div>
      </header>

      {/* CHAT AREA */}
      <main
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-5 md:p-8 space-y-6 container mx-auto max-w-4xl"
      >
        {messages.length === 0 && (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <Icons.Bot className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
              <p className="text-muted-foreground">Starting conversation...</p>
            </div>
          </div>
        )}

        {messages.map((message) => {
          const isUser = message.role === "user";

          return (
            <div
              key={message.id}
              className={cn(
                "flex gap-4 items-start",
                isUser ? "justify-end" : "justify-start"
              )}
            >
              {!isUser && (
                <Avatar className="w-9 h-9 shadow-md shrink-0">
                  <AvatarFallback className="bg-primary/20 text-primary">
                    <Icons.Bot className="w-5 h-5" />
                  </AvatarFallback>
                </Avatar>
              )}

              <div
                className={cn(
                  "max-w-xl px-4 py-3 rounded-2xl shadow-sm border text-sm md:text-base leading-relaxed",
                  isUser
                    ? "bg-primary text-primary-foreground rounded-br-none"
                    : "rounded-bl-none border-primary/20 bg-card"
                )}
              >
                <p className="whitespace-pre-wrap mb-2">{message.content}</p>

                {/* Show recommendations if available */}
                {message.recommendations &&
                  message.recommendations.length > 0 && (
                    <div className="mt-4 space-y-3">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">
                        Recommended Tools:
                      </p>
                      {message.recommendations.map((rec) => (
                        <ProductRecommendation key={rec.id} product={rec} />
                      ))}
                    </div>
                  )}
              </div>

              {isUser && (
                <Avatar className="w-9 h-9 shadow-md shrink-0">
                  <AvatarFallback className="bg-primary/20 text-primary">
                    <Icons.User className="w-5 h-5" />
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          );
        })}

        {/* LOADING DOTS */}
        {isLoading && (
          <div className="flex items-start gap-4">
            <Avatar className="w-9 h-9 shrink-0">
              <AvatarFallback className="bg-primary/20 text-primary">
                <Icons.Bot className="w-5 h-5" />
              </AvatarFallback>
            </Avatar>
            <div className="px-4 py-3 rounded-2xl border border-primary/30 shadow-sm rounded-bl-none bg-card">
              <PulsingDots />
            </div>
          </div>
        )}
      </main>

      {/* FOOTER INPUT */}
      <footer className="p-4 border-t bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-3 w-full"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="E.g., 'I need a free AI chatbot for customer support'..."
              className="flex-1 h-12 rounded-xl border-primary/30 shadow-sm text-base"
              disabled={isLoading || !isInitialized}
            />
            <Button
              type="submit"
              variant="default"
              className="h-12 px-5 rounded-xl shadow-md"
              disabled={isLoading || !isInitialized || !input.trim()}
            >
              <Icons.Send className="w-5 h-5" />
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            I'll ask 1-2 questions to understand your needs, then recommend the best tools
          </p>
        </div>
      </footer>
    </div>
  );
}
