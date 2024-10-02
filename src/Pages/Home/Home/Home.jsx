import Features from "../Features/Features";
import Introduction from "../Introduction/Introduction";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div className="mx-auto w-full h-[2000px] ">
            <Features></Features>
            <Introduction></Introduction>
            <Skills></Skills>
        </div>
    );
};

export default Home;