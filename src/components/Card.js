
const Card = ({date, company, role, disc}) => {
    
    return (
        <div className="bg-ccDark text-white p-6 rounded-lg">
            <p className="italic text-sm tracking-wide mb-4">{date}</p>
            <p className="text-xl font-bold md:text-lg">{company}</p>
            <p className="text-lg pb-4 border-b border-white md:text-base">{role}</p>
            <ul className="list-disc flex flex-col gap-2 pt-4 ml-4">
                {disc.map((item, index)=> (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
};

export default Card