import "./topbar.css";
import Tab from "./Tab.js";

function Topbar(props) {
   
    return (
        <div className="barContainer">            
            <div className="baralltabscontainer">
                <Tab value={"First"} src={"/"} />
                <Tab value={"Second"} src={"/Second"} />
                <Tab value={"Third"} src={"/Third"} />
                <Tab value={"Fourth"} src={"/"} />
                <Tab value={"Fifth"} src={"/Fifth"} />
                <Tab value={"Sixth"} src={"/Sixth"} />
            </div>
        </div>
    );
}

export default Topbar;