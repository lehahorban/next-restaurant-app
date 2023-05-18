import Layout from "@/components/Layout";
import DishMenu from "@/components/DishMenu";
import Footer from "@/components/Footer";
const Home = () => (
  <div>
    <div className="max-w-screen-2xl m-auto">
      <Layout />
      <DishMenu />
    </div>
    <Footer />
  </div>
);

export default Home;
