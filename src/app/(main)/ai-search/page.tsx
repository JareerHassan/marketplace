"use client";

import { useState, useRef, useEffect, FormEvent, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import api from "@/lib/api";
import { cn } from "@/lib/utils";

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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, []);

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

        if (initialQuery.trim()) {
          setTimeout(() => {
            handleSendMessage(initialQuery, response.data.sessionId);
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

  const handleSendMessage = async (
    messageText?: string,
    providedSessionId?: string
  ) => {
    const textToSend = messageText || input.trim();
    const activeSessionId = providedSessionId || sessionId;

    if (!textToSend || isLoading || !activeSessionId) return;

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
        sessionId: activeSessionId,
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
      console.error("Error re-initializing chat:", error);
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

  return (
    <div className="container mx-auto max-w-5xl px-3 py-4 sm:px-4 sm:py-6 lg:py-8">
      {/* Header */}
      <div className="mb-4 sm:mb-6">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h1 className="text-2xl font-bold sm:text-3xl">AI Assistant</h1>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">
              Ask me anything and I&apos;ll help you find the right tools
            </p>
          </div>

          <Button
            variant="ghost"
            onClick={() => router.push("/")}
            className="w-24"
          >
            <Icons.X className="mr-2 h-4 w-4" />
            Close
          </Button>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Icons.Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && input.trim()) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder="Ask me anything... Find tools, get recommendations"
              className="h-11 pl-10 text-sm sm:h-12 sm:text-base"
              disabled={isLoading || !isInitialized}
            />
          </div>

          <Button
            onClick={handleClear}
            variant="outline"
            className="h-11 w-full sm:h-12 sm:w-auto"
          >
            <Icons.PlusCircle className="mr-2 h-4 w-4" />
            New Chat
          </Button>
        </div>
      </div>

      {/* Chat Interface */}
      <Card className="overflow-hidden shadow-lg">
        <CardContent className="flex h-[calc(100dvh-220px)] min-h-[500px] flex-col p-0 sm:h-[calc(100dvh-240px)] lg:h-[700px]">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6 space-y-4">
            {messages.length === 0 && (
              <div className="flex h-full items-center justify-center">
                <div className="px-4 text-center">
                  <Icons.Bot className="mx-auto mb-4 h-14 w-14 text-muted-foreground/50 sm:h-16 sm:w-16" />
                  <p className="text-sm text-muted-foreground sm:text-base">
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
                  className={cn(
                    "flex items-start gap-2 sm:gap-3 lg:gap-4",
                    isUser ? "justify-end" : "justify-start"
                  )}
                >
                  {!isUser && (
                    <Avatar className="h-8 w-8 shrink-0 sm:h-10 sm:w-10">
                      <AvatarFallback className="bg-primary/20 text-primary">
                        <Icons.Bot className="h-4 w-4 sm:h-5 sm:w-5" />
                      </AvatarFallback>
                    </Avatar>
                  )}

                  <div
                    className={cn(
                      "max-w-[88%] rounded-lg px-3 py-2 sm:max-w-[82%] sm:px-4 sm:py-3 lg:max-w-[80%]",
                      isUser
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    <p className="whitespace-pre-wrap break-words text-sm">
                      {message.content}
                    </p>

                    {message.recommendations &&
                      message.recommendations.length > 0 && (
                        <div className="mt-4 space-y-3">
                          <p className="mb-2 text-xs font-semibold text-muted-foreground">
                            Recommended Tools:
                          </p>

                          {message.recommendations.map((rec) => (
                            <Link
                              key={rec.id}
                              href={rec.link}
                              className="block rounded-lg border bg-background p-3 transition-colors hover:bg-accent sm:p-4"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0 flex-1">
                                  <div className="mb-2 flex flex-wrap items-center gap-2">
                                    <h4 className="text-sm font-semibold sm:text-base">
                                      {rec.name}
                                    </h4>

                                    {rec.pricingModel && (
                                      <Badge
                                        variant="outline"
                                        className="text-[10px] sm:text-xs"
                                      >
                                        {rec.pricingModel}
                                      </Badge>
                                    )}
                                  </div>

                                  <p className="mb-2 line-clamp-2 text-xs text-muted-foreground sm:text-sm">
                                    {rec.shortDescription}
                                  </p>

                                  {rec.category && (
                                    <Badge
                                      variant="secondary"
                                      className="text-[10px] sm:text-xs"
                                    >
                                      {rec.category}
                                    </Badge>
                                  )}
                                </div>

                                <Icons.ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground sm:h-5 sm:w-5" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                  </div>

                  {isUser && (
                    <Avatar className="h-8 w-8 shrink-0 sm:h-10 sm:w-10">
                      <AvatarFallback className="bg-primary/20 text-primary">
                        <Icons.User className="h-4 w-4 sm:h-5 sm:w-5" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              );
            })}

            {isLoading && (
              <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                <Avatar className="h-8 w-8 shrink-0 sm:h-10 sm:w-10">
                  <AvatarFallback className="bg-primary/20 text-primary">
                    <Icons.Bot className="h-4 w-4 sm:h-5 sm:w-5" />
                  </AvatarFallback>
                </Avatar>

                <div className="rounded-lg bg-muted px-3 py-2 sm:px-4 sm:py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-primary [animation-delay:-0.3s]"></span>
                    <span className="h-2 w-2 animate-pulse rounded-full bg-primary [animation-delay:-0.15s]"></span>
                    <span className="h-2 w-2 animate-pulse rounded-full bg-primary"></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="border-t p-3 sm:p-4"
          >
            <div className="flex items-center gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="h-11 flex-1 text-sm sm:h-12 sm:text-base"
                disabled={isLoading || !isInitialized}
              />
              <Button
                type="submit"
                className="h-11 px-3 sm:h-12 sm:px-4"
                disabled={isLoading || !isInitialized || !input.trim()}
              >
                <Icons.Send className="h-4 w-4" />
              </Button>
            </div>
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
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-primary"></div>
          </div>
        </div>
      }
    >
      <AISearchContent />
    </Suspense>
  );
}