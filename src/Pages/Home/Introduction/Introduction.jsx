import Nav from "../../../Components/Nav/Nav";

const Introduction = () => {
    return (
        <div className="w-full h-screen">
            <div className="">
                <Nav heading={'Featured Projects'} btnText={'Hire Me'} ></Nav>
            </div>
            <div>
                <h1>Who Am I</h1>
            </div>
        </div>
    );
};

export default Introduction;