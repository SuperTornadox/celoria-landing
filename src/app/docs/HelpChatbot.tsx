'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// ---------- ChatMessage ----------

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  isStreaming?: boolean;
}

function ChatMessage({ role, content, isStreaming }: ChatMessageProps) {
  const isUser = role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? 'bg-[var(--accent-500)] text-white rounded-br-md'
            : 'bg-[var(--surface-soft)] text-[var(--ink-900)] rounded-bl-md'
        }`}
      >
        {isUser ? (
          <div className="whitespace-pre-wrap">{content}</div>
        ) : (
          <div className="chat-markdown prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&_p]:my-1.5 [&_ul]:my-1.5 [&_ol]:my-1.5 [&_li]:my-0.5 [&_h1]:text-base [&_h2]:text-sm [&_h3]:text-sm [&_h1]:font-semibold [&_h2]:font-semibold [&_h3]:font-medium [&_code]:bg-[var(--bg)] [&_code]:px-1 [&_code]:rounded [&_code]:text-xs [&_strong]:font-semibold [&_table]:text-xs [&_th]:px-2 [&_th]:py-1 [&_td]:px-2 [&_td]:py-1">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        )}
        {isStreaming && (
          <span className="inline-block w-1.5 h-4 ml-0.5 bg-[var(--ink-500)] animate-pulse rounded-sm" />
        )}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex justify-start mb-3">
      <div className="bg-[var(--surface-soft)] rounded-2xl rounded-bl-md px-5 py-3">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 bg-[var(--accent-300)] rounded-full animate-bounce [animation-delay:0ms]" />
          <span className="w-2 h-2 bg-[var(--accent-300)] rounded-full animate-bounce [animation-delay:150ms]" />
          <span className="w-2 h-2 bg-[var(--accent-300)] rounded-full animate-bounce [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}

// ---------- HelpChatbot ----------

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const PAGE_GREETINGS: Record<string, string> = {
  'day-end-closeout': '看起来你正在查看日结相关文档，需要帮助吗？',
  appointments: '有预约相关的问题吗？',
  checkout: '结账遇到问题了吗？',
  schedules: '需要排班方面的帮助吗？',
  'time-card': '打卡考勤有什么疑问吗？',
};

function getGreeting(page?: string): string {
  if (!page) return '你好！我是 Celoria 助手，有什么可以帮你的？';
  for (const [key, greeting] of Object.entries(PAGE_GREETINGS)) {
    if (page.includes(key)) return greeting;
  }
  return '你好！我是 Celoria 助手，有什么可以帮你的？';
}

interface HelpChatbotProps {
  apiBaseUrl?: string;
}

export default function HelpChatbot({ apiBaseUrl = 'http://localhost:3000' }: HelpChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [streamingContent, setStreamingContent] = useState('');
  const [currentPage, setCurrentPage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingContent, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  const greeting = getGreeting(currentPage);

  async function handleSend() {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = { role: 'user', content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    setStreamingContent('');

    try {
      const res = await fetch(`${apiBaseUrl}/api/help-chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          history: messages.slice(-10),
          context: { page: currentPage, locale: 'zh' },
        }),
      });

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let fullContent = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const text = decoder.decode(value);
          const lines = text.split('\n');

          for (const line of lines) {
            if (!line.startsWith('data: ')) continue;
            const data = line.slice(6).trim();
            if (data === '[DONE]') continue;
            try {
              const parsed = JSON.parse(data);
              if (parsed.content) {
                fullContent += parsed.content;
                setStreamingContent(fullContent);
              }
            } catch {
              // Ignore incomplete JSON chunks
            }
          }
        }
      }

      setStreamingContent('');
      if (fullContent) {
        setMessages((prev) => [...prev, { role: 'assistant', content: fullContent }]);
      }
    } catch {
      setStreamingContent('');
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: '抱歉，服务暂时不可用，请稍后再试。' },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[var(--accent-500)] text-white shadow-lg hover:bg-[var(--accent-600)] transition-all hover:scale-105 flex items-center justify-center"
          title="Celoria 助手"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[400px] h-[520px] bg-[var(--surface)] rounded-2xl shadow-2xl border border-[var(--line)] flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3.5 bg-[var(--accent-500)] text-white">
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/celoria-icon-rounded.png"
                alt="Celoria"
                className="w-8 h-8 rounded-lg"
              />
              <div>
                <div className="font-medium text-sm">Celoria 助手</div>
                <div className="text-[11px] text-white/70">基于帮助文档回答</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4">
            <ChatMessage role="assistant" content={greeting} />
            {messages.map((msg, i) => (
              <ChatMessage key={i} role={msg.role} content={msg.content} />
            ))}
            {isLoading && !streamingContent && <TypingIndicator />}
            {streamingContent && (
              <ChatMessage role="assistant" content={streamingContent} isStreaming />
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="px-4 py-3 border-t border-[var(--line)]">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                placeholder="输入你的问题..."
                disabled={isLoading}
                className="flex-1 px-4 py-2.5 text-sm bg-[var(--bg)] border border-[var(--line)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent-500)]/30 focus:border-[var(--accent-500)] disabled:opacity-50 text-[var(--ink-900)]"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="p-2.5 bg-[var(--accent-500)] text-white rounded-xl hover:bg-[var(--accent-600)] disabled:opacity-30 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
