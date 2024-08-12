import check from "../images/icon-check.svg";

const Features = () => {
  return (
    <div className="flex flex-col md:flex-row px-6 md:px-10 justify-between items-center">
      <div className="flex flex-col justify-center md:justify-start items-center md:items-start gap-4">
        {[
          {
            itemIcon: check,
            itemParagraph: "Unlimited Websites",
          },
          {
            itemIcon: check,
            itemParagraph: "100% data ownership",
          },
          {
            itemIcon: check,
            itemParagraph: "Email reports",
          },
        ].map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-start items-center gap-4 md:justify-between "
            >
              <img src={item.itemIcon} alt={item.itemParagraph} />
              <p className="manrope-600 text-Grayish-Blue-Text text-sm">
                {item.itemParagraph}
              </p>
            </div>
          );
        })}
      </div>
      <button className="bg-Dark-Desaturated-Blue-Text-CTA-Background manrope-800 text-[0.75rem] hover:text-white flex justify-center mt-6 md:mt-0 items-center px-4 w-[60%] md:w-[40%] py-2 rounded-full text-Pale-Blue-CTA-Text">
        Start my trial
      </button>
    </div>
  );
};

export default Features;
