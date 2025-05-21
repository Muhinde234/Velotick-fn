import Button from "../../components/ui/button";
import SEO from "../../components/ui/seo";
import Topsection from "../../components/ui/topsection";

const Routes = () => {
  return (
    <div className="p-6 bg-white ml-0 md:ml-64 min-h-screen">
      <SEO
        title="Routes Management dashboard "
        description="Routes Management dashboard"
        content="Routes Management dashboard"
      />
      <div>
        <Topsection />
      </div>

      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Routes</h1>
        <Button className="flex items-center px-4 py-2 text-white bg-primary-100 hover:bg-primary-80 rounded-full text-sm font-medium transition-colors whitespace-nowrap">
          Add <span className="ml-1 text-xl leading-none">＋</span>
        </Button>
      </div>
      <div>
        <p className="text-gray-400">showing 30 of 50 routes</p>
      </div>
    </div>
  );
};

export default Routes;
