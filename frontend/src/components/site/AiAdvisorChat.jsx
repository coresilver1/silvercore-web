import { useEffect, useMemo, useState } from "react";
import { Bot, MessageSquareText, Send, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { sendChatMessage } from "../../lib/api";

export const AiAdvisorChat = ({ chat, brand }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState([]);
  const [context, setContext] = useState({ business: "", sector: "", size: "", goals: "" });

  useEffect(() => {
    if (chat?.welcome_message) {
      setMessages([{ role: "assistant", content: chat.welcome_message }]);
    }
  }, [chat]);


  if (!chat) {
    return null;
  }

  const handleSend = async (promptText = message) => {
    const trimmed = promptText.trim();
    if (!trimmed) return;

    const nextMessages = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setMessage("");
    setIsSending(true);

    try {
      const response = await sendChatMessage({
        message: trimmed,
        session_id: sessionId || undefined,
        context,
      });

      if (!sessionId) {
        setSessionId(response.session_id);
      }

      setMessages([...nextMessages, { role: "assistant", content: response.reply }]);

      if (!response.configured) {
        toast.info("Add your OpenAI API key in backend/.env to activate live AI responses.");
      }

      if (response.success === false) {
        toast.error("The chat service had a temporary issue. A fallback message was shown.");
      }
    } catch (error) {
      console.error("Chat request failed", error);
      toast.error("We couldn’t send that message just now.");
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content:
            "We couldn’t send that message right now. Please try again in a moment, or leave your note through the contact page.",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed bottom-28 right-4 z-[80] flex max-w-[calc(100vw-2rem)] flex-col items-end gap-3 sm:bottom-28 sm:right-6" data-testid="ai-chat-widget">
      {isOpen && (
        <div className="w-[360px] max-w-full border border-white/10 bg-[#0b1221]/90 p-4 shadow-[0_24px_80px_rgba(2,6,23,0.65)] backdrop-blur-2xl" data-testid="ai-chat-panel">
          <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-sky-300" data-testid="ai-chat-brand">
                {brand.name}
              </p>
              <h3 className="mt-2 font-['Cormorant_Garamond'] text-2xl tracking-tight text-white" data-testid="ai-chat-heading">
                M&A Advisor
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-300" data-testid="ai-chat-helper-text">
                Ask about process, capital strategy, buyer or investor fit, transaction pacing or cross-border advisory.
              </p>
            </div>
            <Button variant="ghost" className="rounded-full text-slate-300 hover:bg-white/10 hover:text-white" onClick={() => setIsOpen(false)} data-testid="ai-chat-close-button">
              Close
            </Button>
          </div>

          <div className="mt-4 border border-sky-300/20 bg-sky-300/10 p-3 text-sm leading-6 text-slate-200" data-testid="ai-chat-disclaimer">
            {chat.disclaimer}
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Input
              value={context.business}
              onChange={(event) => setContext((current) => ({ ...current, business: event.target.value }))}
              placeholder="Business type"
              className="rounded-none border-white/10 bg-white/[0.03]"
              data-testid="ai-chat-business-input"
            />
            <Input
              value={context.sector}
              onChange={(event) => setContext((current) => ({ ...current, sector: event.target.value }))}
              placeholder="Sector"
              className="rounded-none border-white/10 bg-white/[0.03]"
              data-testid="ai-chat-sector-input"
            />
            <Input
              value={context.size}
              onChange={(event) => setContext((current) => ({ ...current, size: event.target.value }))}
              placeholder="Size range"
              className="rounded-none border-white/10 bg-white/[0.03]"
              data-testid="ai-chat-size-input"
            />
            <Input
              value={context.goals}
              onChange={(event) => setContext((current) => ({ ...current, goals: event.target.value }))}
              placeholder="Primary goal"
              className="rounded-none border-white/10 bg-white/[0.03]"
              data-testid="ai-chat-goals-input"
            />
          </div>

          <div className="mt-4 max-h-64 space-y-3 overflow-y-auto pr-1" data-testid="ai-chat-messages">
            {messages.map((entry, index) => (
              <div
                key={`${entry.role}-${index}`}
                className={`border p-3 text-sm leading-6 ${
                  entry.role === "assistant"
                    ? "border-white/10 bg-white/[0.03] text-slate-100"
                    : "border-sky-300/20 bg-sky-300/10 text-slate-100"
                }`}
                data-testid={`ai-chat-message-${entry.role}-${index}`}
              >
                <p className="mb-2 text-[11px] uppercase tracking-[0.25em] text-slate-400">{entry.role}</p>
                <p>{entry.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {suggestedPrompts.map((prompt, index) => (
              <button
                key={prompt}
                type="button"
                onClick={() => handleSend(prompt)}
                className="rounded-full border border-white/10 px-3 py-2 text-left text-xs leading-5 text-slate-300 transition hover:border-sky-300/40 hover:text-white"
                data-testid={`ai-chat-suggested-prompt-${index}`}
              >
                {prompt}
              </button>
            ))}
          </div>

          <div className="mt-4 space-y-3">
            <Textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Ask about process, capital strategy, buyer or investor fit, transaction pacing or cross-border advisory."
              className="min-h-[96px] rounded-none border-white/10 bg-white/[0.03]"
              data-testid="ai-chat-message-input"
            />
            <Button
              onClick={() => handleSend()}
              disabled={isSending}
              className="w-full rounded-none border border-sky-300 bg-sky-300 text-slate-950 hover:bg-sky-200"
              data-testid="ai-chat-send-button"
            >
              <Send className="mr-2 h-4 w-4" />
              {isSending ? "Sending..." : "Send to M&A Advisor"}
            </Button>
          </div>
        </div>
      )}

      <Button
        onClick={() => setIsOpen((current) => !current)}
        className="rounded-full border border-sky-300 bg-sky-300 px-5 py-6 text-slate-950 shadow-[0_14px_40px_rgba(56,189,248,0.35)] hover:bg-sky-200"
        data-testid="ai-chat-toggle-button"
      >
        {isOpen ? <MessageSquareText className="mr-2 h-4 w-4" /> : <Bot className="mr-2 h-4 w-4" />}
        {isOpen ? "Hide M&A Advisor" : "Ask M&A Advisor"}
        <Sparkles className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};
