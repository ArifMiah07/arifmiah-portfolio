import Features from "../Features/Features";
import Introduction from "../Introduction/Introduction";


const Home = () => {
    return (
        <div className="mx-auto w-full h-[2000px] ">
            <Features></Features>
            <Introduction></Introduction>
        </div>
    );
};

export default Home;