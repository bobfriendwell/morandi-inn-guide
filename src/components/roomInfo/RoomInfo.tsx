
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wifi, Coffee, Clock, PhoneCall, PhoneForwarded } from "lucide-react";

const RoomInfo = () => {
  const { t } = useLanguage();
  
  // This would come from an API in a real application
  const roomInfoData = {
    wifiPassword: "MorandiInn2023",
    breakfastTime: "07:00-10:30 @ 2F Garden Restaurant",
    checkoutTime: "12:00",
    roomService: "06:00-23:00",
    phoneExtensions: [
      { name: "前台 / Front Desk", number: "0" },
      { name: "客房服務 / Room Service", number: "1" },
      { name: "禮賓部 / Concierge", number: "2" },
      { name: "SPA", number: "3" },
      { name: "健身中心 / Fitness Center", number: "4" }
    ],
    emergency: "9 / 112 (外線 / External)"
  };
  
  return (
    <div className="space-y-4 pb-20">
      <h2 className="text-xl font-medium mb-2">{t("roomInfo")}</h2>
      
      <Card className="info-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-morandi-text flex items-center gap-2">
            <Wifi size={18} />
            {t("wifiPassword")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-morandi-green/10 p-4 rounded-xl text-center">
            <p className="font-bold text-lg tracking-wider">{roomInfoData.wifiPassword}</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="info-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-morandi-text flex items-center gap-2">
            <Coffee size={18} />
            {t("breakfastTime")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-morandi-green/10 p-4 rounded-xl">
            <p>{roomInfoData.breakfastTime}</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="info-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-morandi-text flex items-center gap-2">
            <Clock size={18} />
            {t("checkoutTime")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-morandi-green/10 p-4 rounded-xl text-center">
            <p className="font-bold text-lg">{roomInfoData.checkoutTime}</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="info-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-morandi-text flex items-center gap-2">
            <PhoneCall size={18} />
            {t("roomService")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-morandi-green/10 p-4 rounded-xl text-center">
            <p>{roomInfoData.roomService}</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="info-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-morandi-text flex items-center gap-2">
            <PhoneForwarded size={18} />
            {t("phoneExtensions")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {roomInfoData.phoneExtensions.map((ext, idx) => (
              <div key={idx} className="flex justify-between items-center bg-morandi-green/10 p-3 rounded-xl">
                <span>{ext.name}</span>
                <span className="font-bold bg-morandi-green/30 px-3 py-1 rounded-lg">{ext.number}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card className="info-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-morandi-text flex items-center gap-2 text-red-500">
            <PhoneCall size={18} className="text-red-500" />
            {t("emergency")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl text-center border border-red-200 dark:border-red-800">
            <p className="font-bold text-lg text-red-500 dark:text-red-400">{roomInfoData.emergency}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoomInfo;
