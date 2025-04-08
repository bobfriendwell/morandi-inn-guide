
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BarInfo = () => {
  const { t } = useLanguage();
  
  // This would come from an API in a real application
  const barData = {
    status: "open", // or "closed"
    specialDrinks: ["莫蘭迪雞尾酒 Morandi Cocktail", "抹茶琴酒 Matcha Gin"],
    seatingStatus: "available" // or "full"
  };
  
  return (
    <Card className="info-card">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium text-morandi-text">
          {t("barInfo")}
        </CardTitle>
        <Badge variant={barData.status === "open" ? "default" : "outline"} className={barData.status === "open" ? "bg-green-500" : "text-gray-500"}>
          {t(barData.status)}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <h3 className="text-sm text-morandi-darkGray mb-1">{t("specialDrinks")}</h3>
            <ul className="space-y-1">
              {barData.specialDrinks.map((drink, idx) => (
                <li key={idx} className="bg-morandi-green/10 p-2 rounded-lg text-sm">{drink}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm text-morandi-darkGray mb-1">{t("seatingStatus")}</h3>
            <div className="flex items-center gap-2">
              <span className={`inline-block w-2 h-2 rounded-full ${barData.seatingStatus === "available" ? "bg-green-500" : "bg-red-500"}`}></span>
              <span>{t(barData.seatingStatus)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarInfo;
