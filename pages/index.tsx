import Layout from "@/components/Layout";
import DishMenu from "@/components/DishMenu";
import Footer from "@/components/Footer";
const Home = () => (
  <div className="flex flex-col justify-center items-center min-h-screen">
    <div className="max-w-screen-2xl m-auto">
      <Layout />
      <DishMenu />
    </div>
    <Footer />
  </div>
);

export default Home;
