import Header from "./Header.js";
import TopImg from "./TopImg.js";
import OurStory from "./OurStory.js";
import SpecialMenu from "./SpecialMenu.js";
import RandomQuote from "./RandomQuote.js";
import Reviews from "./Reviews.js";
import ContactUs from "./ContactUs.js";
import Footer from "./Footer.js";


export default function App() {
  return (
    <div class={"app"}>
      <Header />
      <TopImg />
      <OurStory />
      <SpecialMenu />
      <RandomQuote />
      <Reviews />
      <ContactUs />
      <Footer />
    </div>
  );
}
