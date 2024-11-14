import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavber from "../components/layout-components/LeftNavber";
import RightNavber from "../components/layout-components/RightNavber";
import Navber from "../components/Navber";


const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto">
            <Navber></Navber>
            </nav>
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
            <aside className="col-span-3">
                <LeftNavber></LeftNavber>
            </aside>
            <section className="col-span-6">
        
            <Outlet></Outlet>

            </section>
            <aside className="col-span-3">
                <RightNavber></RightNavber>
            </aside>

            </main>
        </div>
    );
};

export default HomeLayout;