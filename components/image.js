export default function Image({ ...props }) {
    return (
        <div>
            {/* mobile */}
            <img
                src={`/images/${props.imageDetails.mobile.src}`}
                className='small:flex medium:hidden larger:hidden extra-larger:hidden'
                alt={`${props.imageDetails.mobile.alt}`}
            />
            {/* hd */}
            <img
                src={`/images/${props.imageDetails.hd.src}`}
                className='small:hidden medium:flex larger:hidden extra-larger:hidden'
                alt={`${props.imageDetails.hd.alt}`}
            />
            {/* fullhd */}
            <img
                src={`/images/${props.imageDetails.fullhd.src}`}
                className='small:hidden medium:hidden larger:flex extra-larger:hidden'
                alt={`${props.imageDetails.fullhd.alt}`}
            />
            {/* ultrawide */}
            <img
                src={`/images/${props.imageDetails.ultrawide.src}`}
                className='small:hidden medium:hidden larger:hidden extra-larger:flex'
                alt={`${props.imageDetails.ultrawide.alt}`}
            />
        </div>
    )
}