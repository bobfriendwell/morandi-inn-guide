
import { createContext, useContext, useState, ReactNode } from "react";

type Language = "zh-TW" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  "zh-TW": {
    // Dashboard
    "dashboard": "即時資訊",
    "poolInfo": "泳池資訊",
    "barInfo": "酒吧資訊",
    "vipInfo": "VIP樓層",
    "restaurantInfo": "餐廳推薦",
    "movieInfo": "電影院時間表",
    "activities": "活動公告",
    
    // Pool Info
    "poolHours": "開放時間",
    "poolTemp": "溫度",
    "poolDepth": "深度",
    "poolPh": "酸鹼值 (pH)",
    
    // Bar Info
    "barStatus": "營業狀況",
    "specialDrinks": "特調推薦",
    "seatingStatus": "座位狀態",
    
    // VIP Floor
    "happyHour": "Happy Hour 時間",
    "happyHourContent": "Happy Hour 內容",
    
    // Restaurant
    "breakfast": "早餐推薦",
    "lunch": "午餐推薦",
    "dinner": "晚餐推薦",
    
    // Survey
    "survey": "意見回饋",
    "praise": "讚美",
    "report": "舉報",
    "cleanliness": "清潔",
    "facilities": "設施",
    "service": "服務",
    "food": "餐點",
    "otherFeedback": "其他回饋",
    "submitFeedback": "提交回饋",
    "recentPraises": "近期正向留言",
    
    // Message
    "message": "聯繫客服",
    "roomIssue": "客房問題",
    "deliveryRequest": "外送需求",
    "facilityInquiry": "設施諮詢",
    "staffOnline": "客服在線",
    "staffOffline": "客服離線",
    "typeMessage": "輸入訊息...",
    "send": "送出",
    
    // Room Info
    "roomInfo": "房間資訊",
    "wifiPassword": "WiFi 密碼",
    "breakfastTime": "早餐時間與地點",
    "checkoutTime": "退房時間",
    "roomService": "客房服務時間",
    "phoneExtensions": "電話分機一覽",
    "emergency": "緊急聯絡方式",
    
    // UI Elements
    "open": "開放中",
    "closed": "已關閉",
    "available": "可使用",
    "full": "已滿座",
    "online": "在線",
    "offline": "離線",
    "am": "上午",
    "pm": "下午",
    "switchLang": "Switch to English",
    "darkMode": "夜間模式",
    "lightMode": "日間模式",
  },
  "en": {
    // Dashboard
    "dashboard": "Live Info",
    "poolInfo": "Pool Information",
    "barInfo": "Bar Information",
    "vipInfo": "VIP Floor",
    "restaurantInfo": "Restaurant Recommendations",
    "movieInfo": "Movie Schedule",
    "activities": "Activities",
    
    // Pool Info
    "poolHours": "Opening Hours",
    "poolTemp": "Temperature",
    "poolDepth": "Depth",
    "poolPh": "pH Level",
    
    // Bar Info
    "barStatus": "Status",
    "specialDrinks": "Special Drinks",
    "seatingStatus": "Seating Status",
    
    // VIP Floor
    "happyHour": "Happy Hour Time",
    "happyHourContent": "Happy Hour Details",
    
    // Restaurant
    "breakfast": "Breakfast Special",
    "lunch": "Lunch Special",
    "dinner": "Dinner Special",
    
    // Survey
    "survey": "Survey",
    "praise": "Compliments",
    "report": "Issues",
    "cleanliness": "Cleanliness",
    "facilities": "Facilities",
    "service": "Service",
    "food": "Food",
    "otherFeedback": "Other Feedback",
    "submitFeedback": "Submit Feedback",
    "recentPraises": "Recent Compliments",
    
    // Message
    "message": "Contact Staff",
    "roomIssue": "Room Issue",
    "deliveryRequest": "Delivery Request",
    "facilityInquiry": "Facility Inquiry",
    "staffOnline": "Staff Online",
    "staffOffline": "Staff Offline",
    "typeMessage": "Type a message...",
    "send": "Send",
    
    // Room Info
    "roomInfo": "Room Information",
    "wifiPassword": "WiFi Password",
    "breakfastTime": "Breakfast Time & Location",
    "checkoutTime": "Checkout Time",
    "roomService": "Room Service Hours",
    "phoneExtensions": "Phone Extensions",
    "emergency": "Emergency Contact",
    
    // UI Elements
    "open": "Open",
    "closed": "Closed",
    "available": "Available",
    "full": "Full",
    "online": "Online",
    "offline": "Offline",
    "am": "AM",
    "pm": "PM",
    "switchLang": "切換至中文",
    "darkMode": "Dark Mode",
    "lightMode": "Light Mode",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("zh-TW");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
