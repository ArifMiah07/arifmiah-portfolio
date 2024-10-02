import Nav from "../../../Components/Nav/Nav";
import Timeline from "../../../Components/Timeline/Timeline";
import WhoIAm from "../../../Components/WhoIAm/WhoIAm";
import Hero from "../Hero/Hero";
import Introduction from "../Introduction/Introduction";


const Features = () => {
    return (
        <div>
            <Hero></Hero>
            {/* <Introduction></Introduction> */}
            <div className="min-h-screen bg-gray-100">
                <Nav heading={'About'} btnText={'Hire Me'} />
                <WhoIAm />
                <Timeline />
            </div>
        </div>
    );
};

export default Features;