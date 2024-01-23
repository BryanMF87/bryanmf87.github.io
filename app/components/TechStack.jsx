import { stackData } from "../data";

const TechStackSlider = () => {

  const loopedStack = [...stackData, ...stackData];

    return (
      <div className="relative w-full overflow-hidden box-content lg:max-w-8xl lg:mx-auto">
        <div className="tech-slide flex gap-14 mt-6">
            {loopedStack.map((skill,index) => (
                <li key={index}
                    className="flex flex-col gap-2 items-center text-ccGray hover:text-white">
                    <skill.icon className="text-7xl"/>
                    <p className="text-sm font-medium">{skill.name}</p>
                </li>
            ))};
        </div>
      </div>
    );
  };

export default TechStackSlider;