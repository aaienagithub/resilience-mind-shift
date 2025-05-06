
import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Message {
  content: string;
  isUser: boolean;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { content: "Hello! I'm the Aaiena AI assistant. How can I help you learn about our resilience training program?", isUser: false },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user message
    setMessages([...messages, { content: newMessage, isUser: true }]);
    setNewMessage("");

    // Simulate AI response (in a real implementation this would call an API)
    setTimeout(() => {
      let response: string;
      const lcMessage = newMessage.toLowerCase();
      
      if (lcMessage.includes("book") || lcMessage.includes("call") || lcMessage.includes("schedule")) {
        response = "You can book a call with our team by clicking the 'Book a Call' button at the top of any page. We'll be happy to discuss how our program can help you.";
      } else if (lcMessage.includes("price") || lcMessage.includes("cost") || lcMessage.includes("pricing")) {
        response = "Our pricing varies based on your needs. For individual training, therapist certification, or organizational programs, please book a call to discuss the options that best fit your goals.";
      } else if (lcMessage.includes("science") || lcMessage.includes("brain") || lcMessage.includes("neuro")) {
        response = "Aaiena is built on neuroscience principles including vagus nerve regulation, neuroplasticity, and polyvagal theory. Check out our Science page to learn more about our research-backed approach.";
      } else {
        response = "Thank you for your message. To learn more about how Aaiena can help with emotional resilience training, please explore our website or book a call with our team for personalized guidance.";
      }

      setMessages((msgs) => [...msgs, { content: response, isUser: false }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen ? (
        <Card className="w-80 sm:w-96 h-96 flex flex-col shadow-lg animate-slide-in-right">
          <div className="bg-brand-blue text-white p-3 flex justify-between items-center rounded-t-lg">
            <div className="flex items-center gap-2">
              <MessageSquare size={18} />
              <h3 className="font-medium">Aaiena Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          
          <div className="flex-1 overflow-auto p-4 bg-white">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "p-3 rounded-lg max-w-[80%]",
                    msg.isUser 
                      ? "bg-brand-blue text-white ml-auto" 
                      : "bg-gray-100 text-gray-800"
                  )}
                >
                  {msg.content}
                </div>
              ))}
            </div>
          </div>
          
          <form onSubmit={handleSendMessage} className="p-3 border-t bg-white rounded-b-lg">
            <div className="flex gap-2">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit" className="bg-brand-blue hover:bg-opacity-90">
                Send
              </Button>
            </div>
          </form>
        </Card>
      ) : (
        <Button 
          onClick={() => setIsOpen(true)} 
          className="h-14 w-14 rounded-full shadow-lg bg-brand-blue hover:bg-opacity-90"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default ChatBot;
