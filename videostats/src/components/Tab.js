import "./tab.css"
import { NavLink } from "react-router-dom";
function Tab(props) {
    return (
        <div className="bartabcontainer">
            <NavLink className="bartab" to={props.src}>{props.value}</NavLink>
        </div>
    );
}

export default Tab;