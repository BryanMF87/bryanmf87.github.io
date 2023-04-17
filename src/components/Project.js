import { FaAngleDoubleRight } from "react-icons/fa";
import Bullet from "./Bullet";

const Project = ({id, name, description, techStack, liveLink, codeLink, fileLink}) => {
    
    return (
        <div className="mb-40">
            <h2 className="text-6xl font-bold tracking-tighter">{id}</h2>
            <h3 className="text-3xl font-bold tracking-tight mb-4">{name}</h3>
            <p className="text-lg md:text-base">{description}</p>
            <div className="flex flex-wrap gap-2 my-4">
                {techStack.map((tech, index) => (
                    <Bullet key={index} skill={tech}/>
                ))}
            </div>
            <ul className="flex flex-col pt-2 gap-2">
                <li className="w-fit">
                    <a href={codeLink} target="_blank" rel="noopener noreferrer">
                        <button className="font-bold text-xl flex items-center gap-1 md:text-lg transition duration-300 ease-in-out transform hover:translate-x-3">
                         <FaAngleDoubleRight /> View the code
                        </button>
                    </a>
                </li>
                <li className="w-fit">
                    <a href={liveLink} target="_blank" rel="noopener noreferrer">
                        <button className="font-bold text-xl flex items-center gap-1 md:text-lg transition duration-300 ease-in-out transform hover:translate-x-3 ">
                            <FaAngleDoubleRight /> See the demo
                        </button>
                    </a>
                </li>
                {
                    fileLink
                       ? (
                            <>
                                <li className="w-fit">
                                    <a href={fileLink} download>
                                        <button className="font-bold text-xl flex items-center gap-1 md:text-lg transition duration-300 ease-in-out transform hover:translate-x-3">
                                            <FaAngleDoubleRight /> See the design
                                        </button>
                                    </a>
                                </li>
                            </>
                        )
                        : ( null )
                }
            </ul>
        </div>
    )
};

export default Project