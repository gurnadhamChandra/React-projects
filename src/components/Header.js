import { LOGO_URL } from "../utils/constants";
export const Header=()=>{
    return(
        <div id="header">
            <div id="log-container">
                <img src={LOGO_URL} alt="altimg" id="logo"/>
            </div>
            <div id="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
    )
}

export default Header;