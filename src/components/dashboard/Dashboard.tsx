
import { useLanguage } from "@/contexts/LanguageContext";
import PoolInfo from "@/components/dashboard/PoolInfo";
import BarInfo from "@/components/dashboard/BarInfo";
import VipInfo from "@/components/dashboard/VipInfo";
import RestaurantInfo from "@/components/dashboard/RestaurantInfo";
import MovieInfo from "@/components/dashboard/MovieInfo";
import ActivitiesInfo from "@/components/dashboard/ActivitiesInfo";

const Dashboard = () => {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-4 pb-20">
      <h2 className="text-xl font-medium mb-2">{t("dashboard")}</h2>
      <PoolInfo />
      <BarInfo />
      <VipInfo />
      <RestaurantInfo />
      <MovieInfo />
      <ActivitiesInfo />
    </div>
  );
};

export default Dashboard;
