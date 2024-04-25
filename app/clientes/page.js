import { IconAboutUs } from "@/components/icons";
import Image from "@/components/image";
import Logo from "@/components/logo";

let imageDetails = {
    mobile: {
        src: './bg_clientes_mobile.webp',
        alt: 'Três pessoas sentadas conversando numa reunião de negócios.'
    },
    hd: {
        src: './bg_clientes_hd.webp',
        alt: 'Três pessoas sentadas conversando numa reunião de negócios.'
    },
    fullhd: {
        src: './bg_clientes_fullhd.webp',
        alt: 'Três pessoas sentadas conversando numa reunião de negócios.'
    },
    ultrawide: {
        src: './bg_clientes_ultrawide.webp',
        alt: 'Três pessoas sentadas conversando numa reunião de negócios.'
    },
}

export default function Clientes() {
    return (
        <main className="w-full">
            <Logo srcLogo={"./logoWhite.svg"} />
            {/* small, medium, larger and extra-larger are screen measurements, configured in tailwinds.config.js */}
            <Image imageDetails={imageDetails}/>
            <section className="flex items-center justify-center w-full flex-col">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-moving-orange-01-35">
                    {/* <img className="w-3/5" src={'./icons/icon_aboutus.svg'} alt={'Icone ilustrando três pessoas'} /> */}
                    <IconAboutUs />
                </div>
                
                <hr className="rounded-full border-4 w-4/6 md:w-5/6 mb-12 border-moving-orange-01-35" />
            </section>
        </main>
    )
}