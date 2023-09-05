// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// const Tech = () => {
//   return (
//     <div className="flex flex-row flex-wrap justify-center gap-10">
//       {technologies.map((technology) => (
//         <div className="w-28 h-28" key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import "../index.css"

const Tech = () => {
  return (
    <>
      <div className="bg-tertiary flex justify-center items-center h-[10rem] mt-[4rem]">
        <div className="h-[7rem] relative bg-tertiary overflow-hidden flex justify-center items-center sc-slider">
          <div className="h-[7rem] flex items-center animate-slider sc-slide">
            {technologies.map((preImg, index) => {
              return (
                <span key={index} className="p-[3rem]">
                  <img
                    src={preImg.icon}
                    alt={preImg.name}
                    className="h-[5rem] mr-10 ml-10"
                  />
                </span>
              );
            })}
          </div>
          <div className="h-[7rem] flex items-center animate-slider">
            {technologies.map((preImg, index) => {
              return (
                <span key={index} className="p-[3rem]">
                  <img
                    src={preImg.icon}
                    alt={preImg.name}
                    className="h-[5rem] mr-10 ml-10"
                  />
                </span>
              );
            })}
          </div>
          <div className="h-[7rem] flex items-center animate-slider">
            {technologies.map((preImg, index) => {
              return (
                <span key={index} className="p-[3rem]">
                  <img
                    src={preImg.icon}
                    alt={preImg.name}
                    className="h-[5rem] mr-10 ml-10"
                  />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tech;
