
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RestaurantInfo = () => {
  const { t } = useLanguage();
  
  // This would come from an API in a real application
  const restaurantData = {
    breakfast: [
      "法式吐司與有機蜂蜜 / French Toast with Organic Honey",
      "煙燻鮭魚班尼迪克蛋 / Smoked Salmon Eggs Benedict"
    ],
    lunch: [
      "和牛漢堡與松露薯條 / Wagyu Burger with Truffle Fries",
      "香煎鱸魚佐季節蔬菜 / Pan-seared Bass with Seasonal Vegetables"
    ],
    dinner: [
      "28天乾式熟成肋眼牛排 / 28-day Dry-aged Ribeye Steak",
      "龍蝦義大利麵 / Lobster Pasta"
    ]
  };
  
  return (
    <Card className="info-card restaurant-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-morandi-text">
          {t("restaurantInfo")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="breakfast">
          <TabsList className="grid grid-cols-3 mb-2">
            <TabsTrigger value="breakfast">{t("breakfast")}</TabsTrigger>
            <TabsTrigger value="lunch">{t("lunch")}</TabsTrigger>
            <TabsTrigger value="dinner">{t("dinner")}</TabsTrigger>
          </TabsList>
          <TabsContent value="breakfast">
            <ul className="space-y-1">
              {restaurantData.breakfast.map((item, idx) => (
                <li key={idx} className="bg-morandi-green/10 p-2 rounded-lg text-sm">{item}</li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="lunch">
            <ul className="space-y-1">
              {restaurantData.lunch.map((item, idx) => (
                <li key={idx} className="bg-morandi-green/10 p-2 rounded-lg text-sm">{item}</li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="dinner">
            <ul className="space-y-1">
              {restaurantData.dinner.map((item, idx) => (
                <li key={idx} className="bg-morandi-green/10 p-2 rounded-lg text-sm">{item}</li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default RestaurantInfo;
