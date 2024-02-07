import CarouselMiddle from "./CarouselNetflix";
import { Header } from "./Header";
import { SearchSection } from "./SearchSection";
import { Footer } from "../components/footer";
export const Home = () => {
    return (
        <>
            <div className="main-home-page">
                <div className="main-home">
                    <Header />
                    <CarouselMiddle />
                    <SearchSection />
                    <Footer />
                </div>
            </div>
        </>
    );
}