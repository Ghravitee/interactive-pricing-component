import { useState } from "react";
import Features from "./Features";
import Billing from "./Billing";

// eslint-disable-next-line react/prop-types
const RangeSlider = ({ options }) => {
  const [index, setIndex] = useState(0);
  const [isYearly, setIsYearly] = useState(false);

  const toggleBilling = () => {
    setIsYearly((prev) => !prev);
  };

  // eslint-disable-next-line react/prop-types
  const { pageviews, price } = options[index];

  const billingCycle = isYearly ? "year" : "month";

  const handleChange = (event) => {
    setIndex(event.target.value);
  };

  return (
    <div className="-translate-y-36 md:-translate-y-40 bg-white rounded-xl py-8 w-[85%] mx-auto md:w-[70%] lg:w-[60%] xl:w-[40%] shadow-[rgba(0,0,0,0.05)_0px_6px_6px_2px] my-6">
      <div className="grid grid-row-3 md:grid-cols-2 md:grid-row-2 gap-2 md:gap-4 px-6 md:px-10 lg:px-16 mb-8">
        <label
          htmlFor="range"
          className="text-center md:col-start-1 md:col-end-2 flex md:justify-start justify-center items-center manrope-800 font-bold text-[0.75rem] md:text-[.9rem] tracking-widest text-Grayish-Blue-Text mb-6 md:mb-0"
        >
          {pageviews} PAGEVIEWS
        </label>
        <div className="md:col-start-1 md:col-end-3">
          <input
            id="range"
            type="range"
            min="0"
            // eslint-disable-next-line react/prop-types
            max={options.length - 1}
            value={index}
            onChange={handleChange}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-Strong-Cyan-Slider-Background"
            style={{
              background: `linear-gradient(to right, #a5f3eb 0%, #a5f3eb ${
                // eslint-disable-next-line react/prop-types
                (index / (options.length - 1)) * 100
              }%, #eaeefb ${
                // eslint-disable-next-line react/prop-types
                (index / (options.length - 1)) * 100
              }%, #eaeefb 100%)`,
            }}
          />
        </div>
        <div className="flex gap-2 items-center md:justify-end justify-center md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 mt-4 md:mt-0">
          <h1 className="text-[2rem] md:text-[2.5rem] text-Dark-Desaturated-Blue-Text-CTA-Background manrope-800 font-extrabold ">
            {" "}
            $
            {isYearly
              ? (price * 0.25 * 12).toFixed(2)
              : parseFloat(price).toFixed(2)}
          </h1>
          <p className="text-base font-medium text-Grayish-Blue-Text ">
            / {billingCycle}
          </p>
        </div>
      </div>
      <Billing yearly={isYearly} toggle={toggleBilling} />

      <hr className="bg-Light-Grayish-Blue-Toggle-Background h-[1px] w-full my-6 lg:my-12" />
      <Features />
    </div>
  );
};

export default RangeSlider;
