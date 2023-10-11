export default function Image({ ...props }) {
    return (
        <div>
            <img
                className={`${props.class}`}
                src={`/images/${props.srcImage}`}
                alt={`${props.alt}`}
            />
        </div>
    )
}