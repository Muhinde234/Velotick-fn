import RecentSchedules from "../components/recentschedules";
import SEO from "../components/ui/seo";

const Route = () => {
  return (
    <div className="mt-32">
      <SEO title="Routes" description="Routes" content="Routes" />
      <section>
        <RecentSchedules />
      </section>
    </div>
  );
};

export default Route;
