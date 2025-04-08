
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PoolInfo = () => {
  const { t } = useLanguage();
  
  // This would come from an API in a real application
  const poolData = {
    hours: "06:00-22:00",
    temperature: "28°C",
    depth: "1.2m - 2.0m",
    ph: "7.4"
  };
  
  return (
    <Card className="info-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-morandi-text">
          {t("poolInfo")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-morandi-green/10 p-3 rounded-xl">
            <p className="text-sm text-morandi-darkGray">{t("poolHours")}</p>
            <p className="font-medium">{poolData.hours}</p>
          </div>
          <div className="bg-morandi-green/10 p-3 rounded-xl">
            <p className="text-sm text-morandi-darkGray">{t("poolTemp")}</p>
            <p className="font-medium">{poolData.temperature}</p>
          </div>
          <div className="bg-morandi-green/10 p-3 rounded-xl">
            <p className="text-sm text-morandi-darkGray">{t("poolDepth")}</p>
            <p className="font-medium">{poolData.depth}</p>
          </div>
          <div className="bg-morandi-green/10 p-3 rounded-xl">
            <p className="text-sm text-morandi-darkGray">{t("poolPh")}</p>
            <p className="font-medium">{poolData.ph}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PoolInfo;
