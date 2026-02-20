"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
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

interface AIModePanelProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

export default function AIModePanel({ isOpen, onClose, initialQuery = "" }: AIModePanelProps) {
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

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Initialize session when opened
  useEffect(() => {
    if (isOpen && !isInitialized) {
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
    }
  }, [isOpen, isInitialized, initialQuery]);

  // Reset when closed
  useEffect(() => {
    if (!isOpen) {
      setMessages([]);
      setInput("");
      setIsInitialized(false);
      setSessionId(null);
    }
  }, [isOpen]);

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

  if (!isOpen) return null;

  return (
    <div className="w-full max-w-4xl mx-auto mt-4">
      <Card className="shadow-lg border-t-0 rounded-t-none">
        <CardContent className="p-0">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary/20 text-primary">
                  <Icons.Bot className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-sm">AI Assistant</h3>
                <p className="text-xs text-muted-foreground">Powered by AI</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClear}
                className="h-8 text-xs"
              >
                New chat
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-8 w-8 p-0"
              >
                <Icons.X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[500px] overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <Icons.Bot className="h-12 w-12 mx-auto mb-2 text-muted-foreground/50" />
                  <p className="text-sm text-muted-foreground">
                    Start a conversation...
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
                    "flex gap-3 items-start",
                    isUser ? "justify-end" : "justify-start"
                  )}
                >
                  {!isUser && (
                    <Avatar className="h-8 w-8 shrink-0">
                      <AvatarFallback className="bg-primary/20 text-primary">
                        <Icons.Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}

                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg px-4 py-3",
                      isUser
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>

                    {/* Recommendations */}
                    {message.recommendations &&
                      message.recommendations.length > 0 && (
                        <div className="mt-3 space-y-2">
                          <p className="text-xs font-semibold text-muted-foreground mb-2">
                            Recommended Tools:
                          </p>
                          {message.recommendations.map((rec) => (
                            <Link
                              key={rec.id}
                              href={rec.link}
                              className="block p-3 bg-background border rounded-lg hover:bg-accent transition-colors"
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

                  {isUser && (
                    <Avatar className="h-8 w-8 shrink-0">
                      <AvatarFallback className="bg-primary/20 text-primary">
                        <Icons.User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              );
            })}

            {/* Loading */}
            {isLoading && (
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8 shrink-0">
                  <AvatarFallback className="bg-primary/20 text-primary">
                    <Icons.Bot className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-muted rounded-lg px-4 py-3">
                  <div className="flex items-center gap-1">
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
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1"
              disabled={isLoading || !isInitialized}
            />
            <Button
              type="submit"
              size="sm"
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
