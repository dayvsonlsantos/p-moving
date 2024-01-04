import { IconAboutUs } from "@/components/icons";
import Image from "@/components/image";
import Logo from "@/components/logo";

export default function Vagas() {
    return (
        <main className="w-full">
            <Logo srcLogo={"./logoWhite.svg"} />
            {/* small, medium, larger and extra-larger are screen measurements, configured in tailwinds.config.js */}
            <Image
                srcImage={'./bg_vagas_mobile.webp'}
                alt={'Três pessoas sentadas conversando numa reunião de negócios.'}
                class={'small:flex medium:hidden larger:hidden extra-larger:hidden'}
            />
            <Image
                srcImage={'./bg_vagas_hd.webp'}
                alt={'Três pessoas sentadas conversando numa reunião de negócios.'}
                class={'small:hidden medium:flex larger:hidden extra-larger:hidden'}
            />
            <Image
                srcImage={'./bg_vagas_fullhd.webp'}
                alt={'Três pessoas sentadas conversando numa reunião de negócios.'}
                class={'small:hidden medium:hidden larger:flex extra-larger:hidden'}
            />
            <Image
                srcImage={'./bg_vagas_ultrawide.webp'}
                alt={'Três pessoas sentadas conversando numa reunião de negócios.'}
                class={'small:hidden medium:hidden larger:hidden extra-larger:flex'}
            />
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