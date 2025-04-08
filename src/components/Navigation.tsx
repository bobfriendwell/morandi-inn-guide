
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Info, MessageSquare, ThumbsUp, LayoutDashboard } from "lucide-react";

type NavItem = {
  id: string;
  icon: JSX.Element;
  label: string;
};

type NavigationProps = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const { t } = useLanguage();
  
  const navItems: NavItem[] = [
    { id: "dashboard", icon: <LayoutDashboard size={20} />, label: t("dashboard") },
    { id: "survey", icon: <ThumbsUp size={20} />, label: t("survey") },
    { id: "message", icon: <MessageSquare size={20} />, label: t("message") },
    { id: "roomInfo", icon: <Info size={20} />, label: t("roomInfo") },
  ];
  
  return (
    <nav className="w-full p-3 glass-card rounded-t-2xl flex justify-around sticky bottom-0 z-10">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`nav-item ${activeSection === item.id ? "active" : ""} flex flex-col items-center gap-1`}
          onClick={() => setActiveSection(item.id)}
        >
          {item.icon}
          <span className="text-xs">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
