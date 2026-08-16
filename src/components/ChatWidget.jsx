import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, RotateCcw, Bot } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const initialMessages = [
    {
      sender: 'ai',
      text: `Hi! I'm Avin Saji's AI assistant. Ask me anything about Avin's experience, projects, skills, database architecture, or work philosophy!`
    }
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickPrompts = [
    { label: '💼 Experience', query: 'Tell me about your software engineering experience.' },
    { label: '🚀 Top Projects', query: 'What are your top projects?' },
    { label: '❓ Why hire him?', query: 'What makes Avin unique and why hire him?' },
    { label: '✉️ Contact', query: 'How can I reach Avin?' }
  ];

  const handleReset = () => {
    setMessages([
      {
        sender: 'ai',
        text: `Conversation restarted! Ask me anything about Avin's background, skills, projects, or work.`
      }
    ]);
    setInputValue('');
  };

  const handleSend = (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const lower = text.toLowerCase().trim();

    // Check for start over command
    if (lower === 'start over' || lower === 'reset' || lower === 'clear' || lower === '/reset') {
      handleReset();
      return;
    }

    const newMessages = [...messages, { sender: 'user', text }];
    setMessages(newMessages);
    if (!textToSend) setInputValue('');

    // Generate response strictly scoped to Avin Saji's profile
    setTimeout(() => {
      let reply = "";

      if (lower.includes('exp') || lower.includes('work') || lower.includes('history') || lower.includes('job') || lower.includes('kristu') || lower.includes('role') || lower.includes('company')) {
        reply = `I am currently a Software Development Engineer at Kristu Jayanti Software Development Center in Bengaluru. I serve as Production Deployment Lead for the KJUSYS ERP (99.9% uptime on AWS) and engineer Vert.x & Spring Boot microservices. Previously, I interned at Kristu Jayanti SDC and Rats Technologies.`;
      } else if (lower.includes('project') || lower.includes('built') || lower.includes('lms') || lower.includes('erp') || lower.includes('code') || lower.includes('skill-tree') || lower.includes('payroll')) {
        reply = `My key projects include:\n1. KJUSYS ERP Platform (Vert.x Java + Spring Boot + Redis 30% speedup)\n2. Skill-Tree LMS (Ionic + Angular + Firebase Firestore)\n3. Job Portal Microservices (Spring Boot + Docker + AWS ECS)\n4. Payroll Management System (C#)\n5. Smart Interview Management System (Java + Concurrency engine)`;
      } else if (lower.includes('why') || lower.includes('hire') || lower.includes('strength') || lower.includes('unique') || lower.includes('drives') || lower.includes('superpower') || lower.includes('excel')) {
        reply = `My superpower is end-to-end product ownership! I don't just write code — I engage with stakeholders, design robust database schemas from scratch (like the KJUSYS ERP DB), and ensure clean code practices with 99.9% uptime AWS deployments.`;
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('reach') || lower.includes('phone') || lower.includes('linkedin') || lower.includes('hire avin')) {
        reply = `You can reach me directly via:\n📧 Email: avinsaji.199@gmail.com\n📞 Phone: +91 6238549453\n🔗 LinkedIn: linkedin.com/in/avinsaji\n📍 Location: Bengaluru, India`;
      } else if (lower.includes('stack') || lower.includes('skill') || lower.includes('tech') || lower.includes('vert.x') || lower.includes('java') || lower.includes('aws') || lower.includes('angular') || lower.includes('mongo') || lower.includes('redis')) {
        reply = `My core technical stack includes Java, Eclipse Vert.x (Reactive Java), Spring Boot, Angular, Ionic Framework, MongoDB, Redis, and AWS (EC2, ECS, Lambda, API Gateway, S3, SES, Docker). Note: I specialize in Vert.x & Java backend architecture.`;
      } else if (lower.includes('edu') || lower.includes('degree') || lower.includes('college') || lower.includes('mca') || lower.includes('b.com') || lower.includes('certif') || lower.includes('nptel')) {
        reply = `My qualifications:\n🎓 MCA (Master of Computer Applications) — Kristu Jayanti College (80% Distinction)\n🎓 B.Com ACCA — Kristu Jayanti College (77% Distinction)\n📜 NPTEL Certification in Fundamentals of Artificial Intelligence (IIT Guwahati / MoE)\n🏆 Virtual Engineering Programs (JPMorgan Chase, EA)`;
      } else if (lower.includes('who are you') || lower.includes('who is avin') || lower.includes('about')) {
        reply = `I'm Avin Saji, a Software Engineer & Backend Architect based in Bengaluru. I excel at end-to-end product delivery, stakeholder requirement analysis, custom DB design, and high-concurrency microservices.`;
      } else {
        // Strict boundary: Only answer profile questions
        reply = `I am specifically designed to answer questions about Avin Saji's professional background, skills, projects, and work experience. \n\nFeel free to ask about:\n• Avin's work history at Kristu Jayanti SDC\n• Vert.x, Spring Boot, & AWS expertise\n• KJUSYS ERP & Skill-Tree LMS projects\n• How to get in touch with Avin!`;
      }

      setMessages(prev => [...prev, { sender: 'ai', text: reply }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button (No gradient border around picture) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group hover:scale-110 transition-transform duration-300"
          aria-label="Open AI Assistant"
        >
          {/* Cartoon avatar icon */}
          <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-2xl shadow-black/40 border-2 border-white/80 dark:border-slate-700">
            <img
              src="/bot-avatar.png"
              alt="Chat with Avin"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Green availability indicator */}
          <span className="absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full bg-emerald-400 border-2 border-white dark:border-slate-900 animate-pulse shadow-md" />
        </button>
      )}

      {/* Chatbot Window Modal (Muted tones in dark mode) */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[380px] h-[520px] rounded-3xl bg-slate-900/95 dark:bg-[#11131a]/95 backdrop-blur-xl border border-slate-800 shadow-2xl flex flex-col justify-between overflow-hidden animate-fadeIn text-slate-100">
          
          {/* Chat Header (Clean border avatar, muted dark mode tones) */}
          <div className="p-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-700/60 bg-white">
                <img src="/bot-avatar.png" alt="Avin Saji" className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-slate-100 flex items-center gap-1.5">
                  <span>Avin Saji</span>
                  <Bot className="w-3.5 h-3.5 text-maroon-400" />
                </h4>
                <p className="text-[11px] text-slate-400 font-mono">Ask me about my experience</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title="Start over"
                className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1 text-xs"
                aria-label="Start over"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Body & Messages */}
          <div className="p-4 overflow-y-auto flex-1 space-y-4 text-xs font-sans">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-[#800020] text-white rounded-br-none shadow-md border border-slate-700/40'
                      : 'bg-slate-800/80 text-slate-200 border border-slate-700/50 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Quick Prompts (Muted dark mode buttons) */}
            {messages.length === 1 && (
              <div className="grid grid-cols-2 gap-2 pt-2">
                {quickPrompts.map((qp, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(qp.query)}
                    className="p-2.5 rounded-xl bg-slate-800/70 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/50 hover:border-slate-600 text-[11px] font-medium text-left transition-all flex items-center justify-between"
                  >
                    <span>{qp.label}</span>
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 bg-slate-950/90 border-t border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about Avin's profile or type 'start over'..."
                className="flex-1 px-4 py-2.5 rounded-full bg-slate-800/80 border border-slate-700/70 text-slate-100 placeholder-slate-400 focus:outline-none focus:border-slate-500 text-xs"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-2.5 rounded-full bg-[#800020] hover:bg-[#68001a] disabled:opacity-40 text-white transition-all shadow-md"
                aria-label="Send"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      )}
    </div>
  );
};
