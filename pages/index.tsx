import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import DishMenu from "@/components/DishMenu/DishMenu";
import AboutDish from "@/components/AboutDish/AboutDish";
import Footer from "@/components/Footer/Footer";
const Home = () => (
  <>
    <Head>
      <title>Food delivered</title>
      <meta
        name="description"
        content="Смачна їжа, доставка до вашого дому. Ресторан Food Delivered пропонує широкий вибір страв із свіжих інгредієнтів, високу якість обслуговування та швидку доставку. Замовляйте онлайн та насолоджуйтесь нашими смаколиками прямо вдома."
      />
      <link rel="icon" href="favicon.png" />
    </Head>
    <div className="max-w-screen-2xl m-auto">
      <Layout />
      <main>
        <DishMenu />
        <AboutDish />
      </main>
    </div>
    <Footer />
  </>
);

export default Home;
