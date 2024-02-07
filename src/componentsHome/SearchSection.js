import { useRef } from "react"
import { NavLink } from "react-router-dom";
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export const SearchSection = () => {

    const inputRef = useRef(null);
    const handleNavLinkClick = () => {
        // Focus on the input element when NavLink is clicked
        inputRef.current.focus();
    };
    return (
        <>
            <div className="search-container" style={{ marginTop: "0", marginBottom: "5rem" }}>
                <h1 style={{ color: "white", fontSize: "3rem", marginTop: "0" }}>Unlimited movies, TV shows and more</h1>
                <h3 style={{ color: "white", margin: "1rem" }}>Watch anywhere, cancel anytime</h3>
                <h3 style={{ color: "white" }}>Ready to watch? Enter your Email to create or restart your membership</h3>
                <div className="search-section display-flex" style={{ margin: "1rem" }}>
                    <input ref={inputRef} type="text" id="input" style={{ borderRadius: "8px", height: "4rem", width: "100%", fontSize: "1.2rem", paddingLeft: "1rem", marginRight: "1rem", backgroundColor: "black", opacity: "90%", color: "wheat" }} placeholder="Email Address" />
                    <button type="submit"  style={{ width: "16rem", height: "4rem", borderRadius: "8px", backgroundColor: "red", color: 'white' }}>
                        <NavLink to="/" onClick={handleNavLinkClick} className="nav" style={{ fontSize: "1.5rem", fontWeight: "500",margin:"0"}}>Get Started {'>'}</NavLink>
                    </button>
                </div>
            </div>
        </>
    );
}