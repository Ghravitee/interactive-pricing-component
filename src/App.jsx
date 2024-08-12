import bgPattern from "../src/images/pattern-circles.svg";
import RangeSlider from "./components/RangeSlider";

function App() {

  const sliderOptions = [
    { pageviews: "10K", price: 8 },
    { pageviews: "50K", price: 12 },
    { pageviews: "100K", price: 16 },
    { pageviews: "500K", price: 24 },
    { pageviews: "1M", price: 36 },
  ];
  return (
    <main className="bg-Very-Pale-Blue-Main-Background">
      <div className="bg-main-background bg-no-repeat bg-cover lg:bg-center pt-[12rem] pb-[12rem] px-4 relative flex justify-center items-end">
      <img
            src={bgPattern}
            alt=""
            className="absolute left-0 right-0 mx-auto top-[20%] "
          />
        <div className="flex flex-col justify-center items-center gap-2 absolute">
         
          <h1 className="text-xl md:text-2xl lg:text-3xl text-Dark-Desaturated-Blue-Text-CTA-Background manrope-800 font-extrabold">
            Simple, traffic-based pricing
          </h1>
          <div className="md:flex gap-1">
            <p className="text-Grayish-Blue-Text manrope-600 font-semibold text-sm">
              Sign-up for our 30-day trial.
            </p>
            <p className="text-Grayish-Blue-Text manrope-600 font-semibold text-sm text-center">
              No credit card required.
            </p>
          </div>
        </div>
      
      </div>
     
      <RangeSlider options={sliderOptions} />
    
    </main>
  );
}

export default App;
