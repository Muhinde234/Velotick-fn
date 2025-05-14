import home from "../../assets/home.jpg";
import CardSection from "../cardsection";
import RecentSchedules from "../recentschedules";

const Hero = () => {
  return (
    <div>
 
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-28 mt-16 sm:mt-20 md:mt-[84px]">
        <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] rounded-3xl overflow-hidden">
          <img
            src={home}
            alt="Bus travel background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col px-4 sm:px-8 md:px-14 pt-8 sm:pt-10 md:pt-14">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 mt-12 sm:mt-16 md:mt-24">
              Seamless Ticket <br /> Booking with Velotick
            </h1>
            <p className="text-white text-sm sm:text-md md:text-lg lg:w-[933px] mb-4 sm:mb-6">
              Say goodbye to long queues! Book your bus tickets instantly,
              securely, and hassle-free. Whether you're commuting or traveling
              long distances, Velotick makes your journey smoother with just a
              few clicks.
            </p>

            <button className="bg-primary-100 hover:bg-blue-700 text-white rounded-lg font-semibold transition w-full sm:w-[190px] h-[45px] p-2">
              View Schedules Now
            </button>
          </div>
          
      
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] bg-white rounded-t-xl p-3 sm:p-4 md:p-6 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-3 sm:gap-4 md:gap-6">
            <select className="w-full sm:w-[48%] md:w-[23%] border border-gray-300 p-2 sm:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option className="w-[22%] sm:full">Start location</option>
            </select>

            
            <select className="w-full sm:w-[48%] md:w-[23%] border border-gray-300 p-2 sm:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          
              <option>End location</option>
            </select>
            
           
            <input
              type="date"
              className="w-full sm:w-[48%] md:w-[23%] border border-gray-300 p-2 sm:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="2025-05-25"
            />
            <div className="w-full sm:w-[48%] md:w-auto">
              <button className="w-full md:w-[150px] h-[45px] bg-primary-100 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                Find schedules
              </button>
            </div>
          </div>
        </section>
      </div>

    
      <div>
        <section>
          <div className="text-center mt-16 sm:mt-20 md:mt-24">
            <h1 className="text-primary-100 text-2xl sm:text-3xl font-extrabold">
              Why Choose us
            </h1>
          </div>
          <div>
            <CardSection />
          </div>
        </section>
        
      
        <section>
          <RecentSchedules />
        </section>
      </div>
    </div>
  );
};

export default Hero;