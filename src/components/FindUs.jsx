import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa6";

const FindUs = () => {
    return (
        <div>
        <h2 className="font-semibold mb-3">Find Us On</h2>
        <div className="join flex join-vertical *:bg-white-100">
        <button className="btn join-item justify-start">
            <FaFacebook></FaFacebook> Facebook
        </button>
        <button className="btn join-item justify-start">
            <FaInstagram></FaInstagram> Instgram
        </button>
        <button className="btn join-item justify-start">
            <FaTwitter></FaTwitter>
            Twitter
            </button>
        </div>
                    
        </div>
    );
};

export default FindUs;