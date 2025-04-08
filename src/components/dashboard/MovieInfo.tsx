
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MovieInfo = () => {
  const { t } = useLanguage();
  
  // This would come from an API in a real application
  const movieData = [
    { time: "14:00", title: "玩具總動員 4 / Toy Story 4" },
    { time: "16:30", title: "星際大戰：天行者崛起 / Star Wars: The Rise of Skywalker" },
    { time: "19:00", title: "鬼滅之刃：無限列車 / Demon Slayer: Mugen Train" },
    { time: "21:30", title: "攻殼機動隊 / Ghost in the Shell" }
  ];
  
  return (
    <Card className="info-card movie-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-morandi-text">
          {t("movieInfo")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {movieData.map((movie, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-morandi-green/10 p-3 rounded-xl">
              <div className="bg-morandi-green/30 p-2 rounded-lg font-medium min-w-16 text-center">
                {movie.time}
              </div>
              <p className="text-sm">{movie.title}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieInfo;
