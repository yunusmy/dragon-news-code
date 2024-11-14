import { Link } from "react-router-dom";
import userIcon from '../assets/user.png';

const Navber = () => {
    return (
        <div className="flex justify-between items-center">
            <div className=""></div>
            <div className="nav space-x-5 space-y-2">
                <Link to="/">Home</Link>
                <Link to="/home">Career</Link>
                <Link to="/aboout">About</Link>
            </div>
            <div className="logo flex gap-2 items-center">
                <img src={userIcon} />
                <button className="btn btn-neutral">Login</button>
            </div>
    
        </div>
    );
};

export default Navber;