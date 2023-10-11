import { useEffect, useState } from "react";

export default function Image({ ...props }) {
    const [bgImageSrc, setBgImageSrc] = useState(`${props.bg_mobile}`);

    useEffect(() => {
        const src_bg_image = () => {
            // < 451
            let selectImageByScreenSize = `${props.bg_mobile}`;

            if (window.innerWidth >= 451 && window.innerWidth <= 1280) {
                selectImageByScreenSize = `${props.bg_hd}`;
            }
            if (window.innerWidth >= 1281 && window.innerWidth <= 1750) {
                selectImageByScreenSize = `${props.bg_fullhd}`;
            }
            if (window.innerWidth >= 1751) {
                selectImageByScreenSize = `${props.bg_ultrawide}`;
            }
            setBgImageSrc(selectImageByScreenSize);
        }

        // Set the initial image source
        src_bg_image();

        window.addEventListener("resize", src_bg_image);

        // Clean up on unmount
        return () => {
            window.removeEventListener("resize", src_bg_image);
        };
    }, []);

    return (
        <div>
            <img
                className="w-full"
                src={`/images/${bgImageSrc}`}
                alt={`${props.alt}`}
            />
        </div>
    )
}