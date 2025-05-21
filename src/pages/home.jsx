import Hero from "../components/features/hero";
import SEO from "../components/ui/seo";

const Home = () => {
  return (
    <div>
      <SEO title=" Home page" description="Home page" content="Home page" />
      <Hero />
    </div>
  );
};

export default Home;
