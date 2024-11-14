// import { FaShareAlt } from "react-icons/fa";

// import { AiFillStar } from "react-icons/ai";


const NewsCard = (props={}) => {
    const {news} =props || {};
    return (
        <div className=" p-4 bg-white rounde-lg shadow-md">
         <div className="flex items-center mb-4">
            <img 
            src={news.author.img} 
            alt={news.author.name}
            className="w-10 h-10 rounded-full mr-3" />
            <div>
                <p className="font-semibold">{news.author.name}</p>
                <p className="text-sm text-gray-500">{news.author.pub}</p>
            </div>
            <div className="ml-auto">
                {/* <FaShareAlt className="text-gray-600"></FaShareAlt> */}
            </div>
         </div>
         <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
        <img 
        src={news.thumbnail_url} alt="thumbnail"
        className="w-full h-48 object-cover rounded-lg mb-4"
        />

        <p className="text-gray-700 text-sm mb-4">

            {news.details.slice(0,150)}...{""}
            <span className="text-primary">Read More</span>
        </p>


        </div>
    );
};

export default NewsCard;