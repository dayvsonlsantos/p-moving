export default function Logo({...props}) {
    return (
        <div className="absolute w-40 mt-4 left-1/2 -translate-x-1/2 lg:ml-14 lg:left-0 lg:-translate-x-0">
            <img
                src={`${props.srcLogo}`}
                alt="Logo da empresa Moving"
            />
        </div>
    )
}