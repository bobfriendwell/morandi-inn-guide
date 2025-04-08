
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";  // Changed import to directly use 'sonner'
import { ThumbsUp, AlertTriangle } from "lucide-react";

const Survey = () => {
  const { t } = useLanguage();
  const [feedbackType, setFeedbackType] = useState<"praise" | "report">("praise");
  const [ratings, setRatings] = useState({
    cleanliness: 0,
    facilities: 0,
    service: 0,
    food: 0
  });
  const [feedback, setFeedback] = useState("");
  
  // This would come from an API in a real application
  const recentPraises = [
    {
      comment: "服務人員非常親切，房間乾淨舒適 / Staff were very friendly, room was clean and comfortable",
      date: "2023-04-05"
    },
    {
      comment: "餐廳的早餐非常美味 / Breakfast at the restaurant was delicious",
      date: "2023-04-04"
    }
  ];
  
  const handleRatingChange = (category: keyof typeof ratings, value: number) => {
    setRatings(prev => ({ ...prev, [category]: value }));
  };
  
  const handleSubmit = () => {
    toast.success(
      feedbackType === "praise" 
        ? "感謝您的讚美！我們的團隊會很高興收到您的回饋。 / Thank you for your compliment! Our team will be happy to receive your feedback."
        : "感謝您的回報！我們將盡快處理。 / Thank you for your report! We will process it as soon as possible."
    );
    setRatings({ cleanliness: 0, facilities: 0, service: 0, food: 0 });
    setFeedback("");
  };
  
  return (
    <div className="space-y-4 pb-20">
      <h2 className="text-xl font-medium mb-2">{t("survey")}</h2>
      
      <Tabs 
        defaultValue="praise" 
        onValueChange={(value) => setFeedbackType(value as "praise" | "report")}
      >
        <TabsList className="grid grid-cols-2 mb-2">
          <TabsTrigger value="praise">
            <div className="flex items-center gap-2">
              <ThumbsUp size={16} />
              <span>{t("praise")}</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="report">
            <div className="flex items-center gap-2">
              <AlertTriangle size={16} />
              <span>{t("report")}</span>
            </div>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="praise" className="space-y-4">
          <Card className="info-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-morandi-text">
                {t("praise")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.keys(ratings).map((category) => (
                  <div key={category} className="space-y-2">
                    <Label>{t(category)}</Label>
                    <RadioGroup 
                      className="flex space-x-1" 
                      value={String(ratings[category as keyof typeof ratings])}
                      onValueChange={(value) => handleRatingChange(category as keyof typeof ratings, Number(value))}
                    >
                      {[1, 2, 3, 4, 5].map((value) => (
                        <div key={value} className="flex flex-col items-center">
                          <RadioGroupItem value={String(value)} id={`${category}-${value}`} className="sr-only" />
                          <Label
                            htmlFor={`${category}-${value}`}
                            className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-morandi-green/20 ${
                              ratings[category as keyof typeof ratings] === value ? "bg-morandi-green/30 font-bold" : "bg-morandi-green/10"
                            }`}
                          >
                            {value}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                ))}
                <div className="space-y-2">
                  <Label htmlFor="feedback">{t("otherFeedback")}</Label>
                  <Textarea 
                    id="feedback" 
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder={t("otherFeedback")}
                    className="bg-morandi-green/10 border-morandi-green/30"
                  />
                </div>
                <Button 
                  onClick={handleSubmit}
                  className="w-full bg-morandi-green hover:bg-morandi-accent text-white"
                >
                  {t("submitFeedback")}
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="info-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-morandi-text">
                {t("recentPraises")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentPraises.map((praise, idx) => (
                  <div key={idx} className="bg-morandi-green/10 p-3 rounded-xl">
                    <p className="text-sm mb-1">{praise.comment}</p>
                    <p className="text-xs text-morandi-darkGray">{praise.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="report" className="space-y-4">
          <Card className="info-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-morandi-text">
                {t("report")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.keys(ratings).map((category) => (
                  <div key={category} className="space-y-2">
                    <Label>{t(category)}</Label>
                    <RadioGroup 
                      className="flex space-x-1" 
                      value={String(ratings[category as keyof typeof ratings])}
                      onValueChange={(value) => handleRatingChange(category as keyof typeof ratings, Number(value))}
                    >
                      {[1, 2, 3, 4, 5].map((value) => (
                        <div key={value} className="flex flex-col items-center">
                          <RadioGroupItem value={String(value)} id={`${category}-report-${value}`} className="sr-only" />
                          <Label
                            htmlFor={`${category}-report-${value}`}
                            className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-morandi-green/20 ${
                              ratings[category as keyof typeof ratings] === value ? "bg-morandi-green/30 font-bold" : "bg-morandi-green/10"
                            }`}
                          >
                            {value}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                ))}
                <div className="space-y-2">
                  <Label htmlFor="report-feedback">{t("otherFeedback")}</Label>
                  <Textarea 
                    id="report-feedback" 
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder={t("otherFeedback")}
                    className="bg-morandi-green/10 border-morandi-green/30"
                  />
                </div>
                <Button 
                  onClick={handleSubmit}
                  className="w-full bg-morandi-accent hover:bg-morandi-text text-white"
                >
                  {t("submitFeedback")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Survey;
