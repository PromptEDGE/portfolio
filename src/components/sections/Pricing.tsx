import Plus from '../../assets/pricing/plus.svg';
import Minus from '../../assets/pricing/minus.svg';

type Plans = {
  id: number;
  category?: string;
  title: string;
  price: string | number;
  description: string;
  features: string[];
  buttonText: string;
};

const plans: Plans[] = [
  {
    id: 1,
    title: "Consultation",
    price: "Free",
    description: "Your digital marketing efforts, instead of handling in-house.",
    features: ["Brand Design", "- Market Analysis", "- Production"],
    buttonText: "CONTACT US",
  },
  {
    id: 2,
    category: "Popular",
    title: "Design",
    price: "$1500",
    description: "Provide your business with a variety of digital solutions to promote.",
    features: ["Brand Design", "Market Analysis", "- Production"],
    buttonText: "CONTACT US",
  },
  {
    id: 3,
    title: "Design+Code",
    price: "$2900",
    description: "Help you hit your marketing goals and grow your business.",
    features: ["Brand Design", "Market Analysis", "Production"],
    buttonText: "CONTACT US",
  },
];

const PricingDataBlock = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-24 bg-white py-12 px-4 md:px-12">
      {/* Section heading */}
      <div className="text-center">
        <h5 className="font-['Epilogue'] text-[16px] tracking-[3px] uppercase text-[#EF6D58] mb-2">
          Pricing
        </h5>
        <h2 className="font-['Epilogue'] font-extrabold text-[36px] md:text-[56px] leading-11 md:leading-16 text-[#391400]">
          Check Our <br /> Pricing Plans
        </h2>
      </div>

      {/* Pricing cards row container */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-center w-full">
        {plans.map((plan) => {
          const isPopular = plan.category === "Popular";

          return (
            // individual pricing cards
            <div
              key={plan.id}
              className={`h-[512px] border border-[#F3D1BF] rounded-md p-6 flex flex-col w-full max-w-xs 
                ${isPopular ? "w-[391px] h-[560px] pt-8 md:mt-[-45px] mx-px border-[#F3D1BF] border-r border-l rounded-tl-md rounded-tr-md rounded-br-none rounded-bl-none gap-4" : "bg-white gap-8"}
                ${plan.id === 1 ? "md:border-r-0 rounded-tr-none rounded-br-none": plan.id === plans.length ? "md:border-l-0" : "md:border-x"}
              `}
            >
              {/* Category badge */}
              {isPopular && (
                <span className="w-[92px] h-[38px] px-3.5 pt-[11px] bg-[#EF6D58] text-white text-[12px] font-['Epilogue'] uppercase tracking-[2px] rounded-full inline-block mb-2">
                  {plan.category}
                </span>
              )}

              {/* Title */}
              <h5 className={`w-[142px] h-8 font-normal font-['Epilogue'] text-[16px] uppercase tracking-[3px] text-[#EF6D58] ${plan.id === 1 || plan.id === plans.length ? "mt-5" : "mb-0"}`}>
                {plan.title}
              </h5>

              {/* Price */}
              <h3 className={`font-['Epilogue'] h-12 font-extrabold text-[32px] md:text-[40px] text-[#391400] ${plan.id === 1 || plan.id === plans.length ? "-mt-5" : "mb-0"}`}>
                {plan.price}
              </h3>

              {/* Description */}
              <p className="font-['Epilogue'] text-[16px] text-[#391400]">
                {plan.description}
              </p>

              {/* Features */}
              <div className="flex flex-col gap-4">
                {plan.features.map((feature) => {
                  const isMinus = feature.trim().startsWith("-");
                  const cleanText = isMinus ? feature.replace("-", "").trim() : feature;

                  return (
                    <div key={feature} className="flex items-center gap-2">
                      <img src={isMinus ? Minus : Plus} alt="" className="w-4 h-4" />
                      <p className="font-['Epilogue'] text-[16px] text-[#391400]">{cleanText}</p>
                    </div>
                  );
                })}
              </div>

              {/* Button */}
              <button
                className={`mt-6 w-[154px] h-12 py-3 uppercase font-['Epilogue'] font-semibold rounded-md transition 
                  ${isPopular ? "bg-[#EF6D58] text-white mt-11 hover:bg-[#d65c48]" : "bg-white text-[#391400] shadow-md hover:bg-gray-100"}
                `}
              >
                {plan.buttonText}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const Pricing = () => <PricingDataBlock />;

export default Pricing;
