export default function Card({...props}){
    return(
        <div className="w-96 md:h-96 p-6 flex items-center justify-start flex-col">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-moving-orange-01-35">
                <img className="w-3/5" src={`./icons${props.cardImage}`} alt={`${props.cardAlt}`} />
            </div>
            <span className="text-base lg:text-lg 2xl:text-xl font-normal text-center my-4">{props.cardTextSpan}</span>
            <div className="w-3/4 md:w-full text-sm lg:text-base 2xl:text-lg text-center">{props.cardTextContent}</div>
        </div>
    )
}