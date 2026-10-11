
import MainNews from "../components/MainNews";
import NewsCard from "../components/NewsCard";
import MostRead from "../components/MostRead";

export default async function Home() {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections')
  const data = await res.json()
  const sections = data.data;
  const mainNews = sections[0].articles
  const otherSections = sections.slice(1)
  return (
    <div>
      <div className="grid grid-cols-3">
        {/* news section */}
        <div className="col-span-2">
          <MainNews news={mainNews}></MainNews>

          <div className="grid gap-5 mt-5">
            {
              otherSections.map(os => <div key={os.curationId} className="">
                <h1 className=" border-b-2 pb-2 border-red-500 font-bold text-2xl">{os.title}</h1>

                <div className="grid grid-cols-3 gap-3">
                  {
                    os.articles.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                  }
                </div>
              </div>)
            }
          </div>
        </div>
        {/* most read section */}
        <div className=" col-span-1">
          <MostRead></MostRead>
        </div>
      </div>
    </div>
  );
}
