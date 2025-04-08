
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";  // Changed import to directly use 'sonner'
import { MessageSquare, Send } from "lucide-react";

const Message = () => {
  const { t } = useLanguage();
  const [messageType, setMessageType] = useState("roomIssue");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<{ sender: string; text: string; time: string }>>([
    { 
      sender: "staff", 
      text: "您好，有什麼我可以幫忙的嗎？ / Hello, how may I assist you today?", 
      time: "10:30"
    }
  ]);
  
  // This would come from an API in a real application
  const staffStatus = "online"; // or "offline"
  
  const handleSend = () => {
    if (!message.trim()) return;
    
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const time = `${hours}:${minutes}`;
    
    const newMessage = {
      sender: "guest",
      text: message,
      time
    };
    
    setMessages([...messages, newMessage]);
    setMessage("");
    
    // Simulate staff response
    setTimeout(() => {
      const responseMessage = {
        sender: "staff",
        text: "我們已收到您的訊息，工作人員將盡快處理。 / We have received your message and our staff will address it as soon as possible.",
        time: `${hours}:${parseInt(minutes) + 1 < 60 ? (parseInt(minutes) + 1).toString().padStart(2, '0') : '00'}`
      };
      setMessages(prev => [...prev, responseMessage]);
    }, 1000);
  };
  
  return (
    <div className="space-y-4 pb-20 h-full flex flex-col">
      <h2 className="text-xl font-medium mb-2">{t("message")}</h2>
      
      <Card className="info-card flex-1 flex flex-col">
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-medium text-morandi-text">
            {t("message")}
          </CardTitle>
          <div className="flex items-center gap-2">
            <span className={`inline-block w-2 h-2 rounded-full ${staffStatus === "online" ? "bg-green-500" : "bg-gray-400"}`}></span>
            <span className="text-sm">{t(staffStatus === "online" ? "staffOnline" : "staffOffline")}</span>
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <div className="mb-4">
            <Label className="mb-2 block">{t("messageType")}</Label>
            <RadioGroup 
              value={messageType} 
              onValueChange={setMessageType}
              className="flex flex-col space-y-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="roomIssue" id="roomIssue" />
                <Label htmlFor="roomIssue">{t("roomIssue")}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="deliveryRequest" id="deliveryRequest" />
                <Label htmlFor="deliveryRequest">{t("deliveryRequest")}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="facilityInquiry" id="facilityInquiry" />
                <Label htmlFor="facilityInquiry">{t("facilityInquiry")}</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="flex-1 overflow-y-auto mb-4 p-2 space-y-3 bg-morandi-green/5 rounded-xl">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.sender === "guest" ? "justify-end" : "justify-start"}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.sender === "guest" 
                      ? "bg-morandi-green text-white" 
                      : "bg-morandi-green/20 text-morandi-text"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className="text-xs mt-1 opacity-70 text-right">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex gap-2">
            <Input 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t("typeMessage")}
              className="bg-morandi-green/10 border-morandi-green/30"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />
            <Button 
              onClick={handleSend}
              className="bg-morandi-green hover:bg-morandi-accent"
            >
              <Send size={18} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Message;
