export default function Card({...props}){
    return(
        <div className="w-96 md:h-96 p-6 flex items-center justify-start flex-col">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-moving-orange-01-35">
                {props.selectIcon}
            </div>
            <span className="text-base larger:text-lg extra-larger:text-xl font-normal text-center my-4">{props.cardTextSpan}</span>
            <div className="w-3/4 md:w-full text-sm larger:text-base extra-larger:text-lg text-center">{props.cardTextContent}</div>
        </div>
    )
}