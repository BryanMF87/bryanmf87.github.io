import { FaAngleDoubleRight } from "react-icons/fa";
import Bullet from "./Bullet";

const Project = ({id, name, description, techStack, liveLink, codeLink, fileLink}) => {
    
    return (
        <div className="mb-48">
            <h2 className="text-6xl font-bold tracking-tighter">{id}</h2>
            <h3 className="text-3xl font-bold tracking-tight mb-4">{name}</h3>
            <p>{description}</p>
            <div className="flex flex-wrap gap-2 my-4">
                {techStack.map((tech, index) => (
                    <Bullet key={index} skill={tech}/>
                ))}
            </div>
            <ul className="flex flex-col gap-2 pt-4">
                <li>
                    <a href={codeLink} target="_blank" rel="noopener noreferrer">
                        <button className="font-bold text-xl flex items-center gap-1">
                            View the code <FaAngleDoubleRight />
                        </button>
                    </a>
                </li>
                <li>
                    <a href={liveLink} target="_blank" rel="noopener noreferrer">
                        <button className="font-bold text-xl flex items-center gap-1">
                            See the demo <FaAngleDoubleRight />
                        </button>
                    </a>
                </li>
                {
                    fileLink
                       ? (
                            <>
                                <li>
                                    <a href={fileLink} download>
                                        <button className="font-bold text-xl flex items-center gap-1">
                                            See the design <FaAngleDoubleRight />
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