
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ActivitiesInfo = () => {
  const { t } = useLanguage();
  
  // This would come from an API in a real application
  const activitiesData = [
    { title: "今日天氣 / Today's Weather", content: "晴朗 26°C / Sunny 26°C" },
    { title: "瑜珈課程 / Yoga Class", content: "09:00 @ 健身中心 / Fitness Center" },
    { title: "池畔派對 / Pool Party", content: "15:00-17:00 @ 主泳池 / Main Pool" },
    { title: "古蹟導覽 / Historical Tour", content: "10:00 @ 大廳集合 / Meet at Lobby" }
  ];
  
  return (
    <Card className="info-card activities-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-morandi-text">
          {t("activities")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {activitiesData.map((activity, idx) => (
            <div key={idx} className="bg-morandi-green/10 p-3 rounded-xl">
              <h3 className="font-medium text-sm mb-1">{activity.title}</h3>
              <p className="text-sm text-morandi-darkGray">{activity.content}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivitiesInfo;
