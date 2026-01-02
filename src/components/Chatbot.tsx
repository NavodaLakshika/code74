'use client'

import { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

const initialMessages = [
  { id: 1, text: "Hello! I'm Code 74 AI Assistant. How can I help you today?", sender: 'bot', timestamp: new Date() }
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user' as const,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate AI response delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // AI responses based on keywords
    const response = generateAIResponse(input.toLowerCase())
    
    const aiMessage = {
      id: messages.length + 2,
      text: response,
      sender: 'bot' as const,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, aiMessage])
    setIsTyping(false)
  }

  const generateAIResponse = (userInput: string): string => {
    const responses = {
      greeting: [
        "Hello! I'm Code 74 AI Assistant. How can I help you today?",
        "Hi there! How can I assist you with Code 74 Software Solutions?"
      ],
      services: [
        "We offer a wide range of services including:\n• Web Development (.NET, React, Next.js)\n• Mobile Applications (React Native, Flutter)\n• Enterprise Software (C#, ASP.NET)\n• Cloud Solutions (AWS, Azure)\n• Custom Software Development",
        "Our services cover web development, mobile apps, enterprise solutions, and cloud services using modern technologies like .NET, React, and Laravel."
      ],
      technologies: [
        "We work with a variety of technologies:\n• Frontend: React, Next.js, Vue.js, TypeScript\n• Backend: .NET, ASP.NET, C#, Node.js, Laravel, PHP\n• Mobile: React Native, Flutter, iOS, Android\n• Database: MySQL, PostgreSQL, MongoDB\n• Cloud: AWS, Azure, Docker, Kubernetes",
        "Our tech stack includes .NET, React, Next.js, Laravel, MySQL, and various cloud technologies for comprehensive software solutions."
      ],
      contact: [
        "You can contact us at:\n• Phone: +94 77 718 3746\n• Email: hello@code74.com\n• Office: Colombo, Sri Lanka\n\nYou can also fill out the contact form on our website for a quick response.",
        "Reach us via phone +94 77 718 3746 or email hello@code74.com. We're located in Colombo, Sri Lanka and happy to discuss your project!"
      ],
      pricing: [
        "Our pricing depends on project scope and requirements. We offer custom quotes after understanding your specific needs. Would you like to schedule a free consultation?",
        "We provide custom pricing based on project complexity and duration. Contact us for a personalized quote and free consultation."
      ],
      portfolio: [
        "We have worked on numerous projects across various industries. Check our website for case studies or contact us to see specific examples relevant to your industry.",
        "Our portfolio includes web applications, mobile apps, and enterprise solutions. We can share relevant case studies based on your requirements."
      ],
      default: [
        "I understand you're asking about: " + userInput + ". Could you please provide more details so I can assist you better?",
        "That's interesting! Could you tell me more about what you need help with regarding " + userInput + "?",
        "I'd love to help you with that. Could you provide some additional context about your requirements?"
      ]
    }

    const userInputLower = userInput.toLowerCase()
    
    if (userInputLower.includes('hello') || userInputLower.includes('hi')) {
      return responses.greeting[Math.floor(Math.random() * responses.greeting.length)]
    } else if (userInputLower.includes('service') || userInputLower.includes('what do you do')) {
      return responses.services[Math.floor(Math.random() * responses.services.length)]
    } else if (userInputLower.includes('tech') || userInputLower.includes('technology') || userInputLower.includes('stack')) {
      return responses.technologies[Math.floor(Math.random() * responses.technologies.length)]
    } else if (userInputLower.includes('contact') || userInputLower.includes('email') || userInputLower.includes('phone')) {
      return responses.contact[Math.floor(Math.random() * responses.contact.length)]
    } else if (userInputLower.includes('price') || userInputLower.includes('cost') || userInputLower.includes('quote')) {
      return responses.pricing[Math.floor(Math.random() * responses.pricing.length)]
    } else if (userInputLower.includes('portfolio') || userInputLower.includes('project') || userInputLower.includes('work')) {
      return responses.portfolio[Math.floor(Math.random() * responses.portfolio.length)]
    } else {
      return responses.default[Math.floor(Math.random() * responses.default.length)]
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        <MessageCircle className="w-5 h-5" />
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 md:w-96 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Code 74 AI Assistant</h3>
                  <p className="text-xs opacity-90">Ask me about our services</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-80 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white rounded-tr-none'
                      : 'bg-gray-100 text-gray-800 rounded-tl-none'
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    {message.sender === 'bot' ? (
                      <Bot className="w-3 h-3" />
                    ) : (
                      <User className="w-3 h-3" />
                    )}
                    <span className="text-xs font-medium">
                      {message.sender === 'bot' ? 'Code 74 AI' : 'You'}
                    </span>
                    <span className="text-xs opacity-70">
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-gray-100 rounded-lg rounded-tl-none p-3">
                  <div className="flex items-center space-x-2">
                    <Bot className="w-3 h-3" />
                    <span className="text-xs font-medium">Code 74 AI</span>
                  </div>
                  <div className="flex space-x-1 mt-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          <div className="px-4 py-2 bg-gray-100 border-t border-gray-200">
            <div className="flex flex-wrap gap-1.5 mb-2">
              <button
                onClick={() => setInput("What services do you offer?")}
                className="px-2 py-1 bg-white text-xs text-gray-700 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => setInput("What technologies do you use?")}
                className="px-2 py-1 bg-white text-xs text-gray-700 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Technologies
              </button>
              <button
                onClick={() => setInput("How can I contact you?")}
                className="px-2 py-1 bg-white text-xs text-gray-700 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => setInput("What's your pricing?")}
                className="px-2 py-1 bg-white text-xs text-gray-700 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Pricing
              </button>
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-3 border-t border-gray-200">
            <div className="flex space-x-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={1}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className={`p-2 rounded-lg ${
                  input.trim()
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                } transition-colors`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}