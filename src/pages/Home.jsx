import Banner from "../components/Home/Banner";
import EcoFriendly from "../components/Home/EcoFriendly";
import Faq from "../components/Home/Faq";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import Newsletter from "../components/Home/Newsletter";
import Services from "../components/Home/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedProducts />
      <Services />
      <EcoFriendly />
      <Faq />
      <Newsletter />
    </div>
  );
};

export default Home;
