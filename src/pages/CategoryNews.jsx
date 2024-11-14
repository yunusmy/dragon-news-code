import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/layout-components/NewsCard";


const CategoryNews = () => {
    const {data:news} =useLoaderData();
    console.log(news)
    return (
        <div>
            <h2 className="font-semibold mb-3">Gragon news Home</h2>
            <div className="">
                {
                    news.map((singleNews)=>(
                    <NewsCard key={singleNews._id} news={singleNews} ></NewsCard>
                ))}

            </div>
        </div>
    );
};

export default CategoryNews;