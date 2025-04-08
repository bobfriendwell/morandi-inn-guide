
import { useState } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Dashboard from "@/components/dashboard/Dashboard";
import Survey from "@/components/survey/Survey";
import Message from "@/components/message/Message";
import RoomInfo from "@/components/roomInfo/RoomInfo";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  
  const renderActiveSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "survey":
        return <Survey />;
      case "message":
        return <Message />;
      case "roomInfo":
        return <RoomInfo />;
      default:
        return <Dashboard />;
    }
  };
  
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-morandi-bg bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmOGY4ZjgiPjwvcmVjdD4KPC9zdmc+')] backdrop-blur-sm">
          <div className="max-w-md mx-auto min-h-screen flex flex-col backdrop-blur-xl bg-white/30 dark:bg-black/10">
            <Header />
            <main className="flex-1 p-4">
              {renderActiveSection()}
            </main>
            <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
