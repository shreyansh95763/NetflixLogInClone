export const Footer = () => {
    return (
        <>
            <div className="footer-container ">
                <div className="footer-section">
                    <h3>Questions? Call<a href="#" className="toll-number">000-800-919-1694</a></h3>
                    <div className="grids">
                        <div className="terms">
                            <a href="#" className="navlink">FAQ</a>
                            <a href="#" className="navlink">Cookie Preferences</a>
                            <div className="language">
                                <select className="lang-section">
                                    <option value="English">English</option>
                                    <option value="Hindi">Hindi</option>
                                </select>
                            </div>

                        </div>
                        <div className="terms">
                            <a href="#" className="navlink">Help Centre</a>
                            <a href="#" className="navlink">Corporate Information</a>
                        </div>
                        <div className="terms">
                            <a href="#" className="navlink">Terms of Use</a>
                        </div>
                        <div className="terms">
                            <a href="#" className="navlink">Privacy</a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}