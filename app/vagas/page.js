import { IconAboutUs, IconDoc, IconInstagram, IconLinkedin } from "@/components/icons";
import Image from "@/components/image";
import Logo from "@/components/logo";

const social = [
    {
        link: "https://www.linkedin.com/company/moving-rh/",
        linkIcon: <IconLinkedin mainColor="currentcolor"/>
    },
    {
        link: "https://www.instagram.com/movingrh/",
        linkIcon: <IconInstagram/>
    },
]

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
                <div className="flex items-center justify-center mt-8 flex-row">
                    {/* <img className="w-3/5" src={'./icons/icon_aboutus.svg'} alt={'Icone ilustrando três pessoas'} /> */}
                    <div className="w-8 h-8 mr-2">
                        <IconDoc mainColor="#F0A65B" />
                    </div>
                    <span className="text-sm larger:text-base extra-larger:text-lg text-center">Procurando por uma vaga ?</span>
                </div>

                <hr className="rounded-full border-4 w-2/6 my-8 border-moving-orange-01-35" />

                <div className="flex items-center justify-center flex-col md:flex-row">
                    <span className="w-2/3 md:w-2/4 text-center mb-2 md:my-0 md:mx-2 text-sm larger:text-base extra-larger:text-lg">Encontre o seu emprego ideal em nossas redes</span>
                        {social.map((item, index) => {
                            return (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    // py-4 px-10
                                    className="hover:scale-105 flex items-center justify-center flex-col border-2 h-20 w-20 border-moving-orange-01-35 rounded-full hover:bg-moving-orange-01 hover:text-white transition duration-200 ease-in-out my-1 md:my-0 md:mx-1"
                                    key={index}
                                >
                                    <div className="flex items-center justify-center w-6">{item.linkIcon}</div>
                                </a>
                            )
                        })}
                </div>
            </section>
        </main>
    )
}