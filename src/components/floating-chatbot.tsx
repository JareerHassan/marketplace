"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
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
  }, [isOpen, isInitialized]);

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
            "Sorry, I encountered an error. Please try again.",
          type: "question",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
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
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50",
          "bg-primary hover:bg-primary/90 text-black",
          "transition-all duration-300",
          isOpen && "scale-90"
        )}
        size="icon"
      >
        {isOpen ? (
          <Icons.X className="h-6 w-6" />
        ) : (
          <Icons.Bot className="h-6 w-6" />
        )}
      </Button>

      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-[450px] shadow-2xl z-50 flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary/20 text-primary">
                  <Icons.Bot className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-sm">AI Assistant</h3>
                <p className="text-xs text-muted-foreground">Ask me anything</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClear}
                className="h-7 w-7 p-0"
                title="New chat"
              >
                <Icons.PlusCircle className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClose}
                className="h-7 w-7 p-0"
                title="Close"
              >
                <Icons.X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
            {/* Messages */}
<div
  className="flex-1 overflow-y-auto p-3 space-y-3 max-h-[380px] chat-scroll"
  style={{
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  }}
>              {messages.length === 0 && (
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
                      "flex gap-2 items-start",
                      isUser ? "justify-end" : "justify-start"
                    )}
                  >
                    {!isUser && (
                      <Avatar className="h-6 w-6 shrink-0">
                        <AvatarFallback className="bg-primary/20 text-primary">
                          <Icons.Bot className="h-3 w-3" />
                        </AvatarFallback>
                      </Avatar>
                    )}

                    <div
                      className={cn(
                        "max-w-[80%] rounded-lg px-3 py-2 text-sm",
                        isUser
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      )}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>

                      {/* Recommendations */}
                      {message.recommendations &&
                        message.recommendations.length > 0 && (
                          <div className="mt-2 space-y-2">
                            {message.recommendations.map((rec) => (
                              <Link
                                key={rec.id}
                                href={rec.link}
                                className="block p-2 bg-background border rounded text-xs hover:bg-accent transition-colors"
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1 mb-1">
                                      <h5 className="font-semibold truncate">
                                        {rec.name}
                                      </h5>
                                      {rec.pricingModel && (
                                        <Badge variant="outline" className="text-[10px] shrink-0">
                                          {rec.pricingModel}
                                        </Badge>
                                      )}
                                    </div>
                                    <p className="text-muted-foreground line-clamp-2 text-[10px]">
                                      {rec.shortDescription}
                                    </p>
                                  </div>
                                  <Icons.ArrowRight className="h-3 w-3 text-muted-foreground shrink-0 mt-1" />
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                    </div>

                    {isUser && (
                      <Avatar className="h-6 w-6 shrink-0">
                        <AvatarFallback className="bg-primary/20 text-primary">
                          <Icons.User className="h-3 w-3" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                );
              })}

              {/* Loading */}
              {isLoading && (
                <div className="flex items-start gap-2">
                  <Avatar className="h-6 w-6 shrink-0">
                    <AvatarFallback className="bg-primary/20 text-primary">
                      <Icons.Bot className="h-3 w-3" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-lg px-3 py-2">
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 bg-primary rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                      <span className="h-1.5 w-1.5 bg-primary rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                      <span className="h-1.5 w-1.5 bg-primary rounded-full animate-pulse"></span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="p-4 flex items-center gap-2"
            >
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 h-9 text-sm"
                disabled={isLoading || !isInitialized}
              />
              <Button
                type="submit"
                size="sm"
                className="h-9 px-3"
                disabled={isLoading || !isInitialized || !input.trim()}
              >
                <Icons.Send className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  );
}
