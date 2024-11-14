import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const LatestNews = () => {
    return (
        <div className="flex gap-2">
            <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest news</p>
            <Marquee speed={100} pauseOnHover={true} className="space-x-10 bg-base-200">
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quod.</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quod.</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quod.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;