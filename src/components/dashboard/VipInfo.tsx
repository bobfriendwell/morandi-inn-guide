
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VipInfo = () => {
  const { t } = useLanguage();
  
  // This would come from an API in a real application
  const vipData = {
    happyHourTime: "17:00-19:00",
    happyHourContent: [
      "免費香檳 / Free Champagne",
      "精選點心 / Premium Snacks",
      "專屬調酒師 / Exclusive Bartender"
    ]
  };
  
  return (
    <Card className="info-card vip-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-morandi-text">
          {t("vipInfo")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="bg-morandi-green/10 p-3 rounded-xl">
            <p className="text-sm text-morandi-darkGray">{t("happyHour")}</p>
            <p className="font-medium">{vipData.happyHourTime}</p>
          </div>
          <div>
            <h3 className="text-sm text-morandi-darkGray mb-1">{t("happyHourContent")}</h3>
            <ul className="space-y-1">
              {vipData.happyHourContent.map((item, idx) => (
                <li key={idx} className="bg-morandi-green/10 p-2 rounded-lg text-sm">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VipInfo;
