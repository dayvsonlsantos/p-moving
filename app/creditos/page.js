import { IconAboutUs, IconArrow, IconClose, IconEmail, IconFile, IconGmail, IconHandShake, IconHistory, IconImages, IconInstagram, IconMenu, IconMission, IconPhone, IconValues, IconVision, IconWhatsapp } from "@/components/icons";
import Logo from "@/components/logo";

const ReferencesLinks = [
    {
        link: "https://basicons.xyz/",
        linkName: "Basicons",
        linkIcon: <IconFile />
    },
    {
        link: "https://fonts.google.com/icons?selected=Material+Symbols+Outlined:expand_more:FILL@0;wght@400;GRAD@0;opsz@24&icon.query=arrow",
        linkName: "Material Symbols",
        linkIcon: <IconArrow />
    },
    {
        link: "https://heroicons.com/",
        linkName: "Heroicons",
        linkIcon: <IconAboutUs />
    },
    {
        link: "https://heroicons.com/",
        linkName: "Heroicons",
        linkIcon: <IconEmail />
    },
    {
        link: "https://heroicons.com/",
        linkName: "Heroicons",
        linkIcon: <IconPhone />
    },
    {
        link: "https://feathericons.com/?query=instagram",
        linkName: "Feather Icons",
        linkIcon: <IconInstagram />
    },
    {
        link: "https://icones.js.org/collection/ion?s=whatsapp",
        linkName: "IonIcons",
        linkIcon: <IconWhatsapp />
    },
    {
        link: "https://icones.js.org/collection/ion?s=whatsapp",
        linkName: "IonIcons",
        linkIcon: <IconGmail />
    },
    {
        link: "https://www.svgrepo.com/svg/118143/handshake-cartoon-gesture",
        linkName: "SVG Repo",
        linkIcon: <IconHandShake class="w-6 h-6" wristColor="currentcolor" handColor="currentcolor" />
    },
    {
        link: "https://www.svgrepo.com/svg/157677/goal",
        linkName: "SVG Repo",
        linkIcon: <IconMission class="w-7 h-7" flagColor="currentcolor" mainColor="currentcolor" />
    },
    {
        link: "https://www.svgrepo.com/svg/213612/goal",
        linkName: "SVG Repo",
        linkIcon: <IconVision class="w-7 h-7" mainColor="currentcolor" />
    },
    {
        link: "https://www.svgrepo.com/svg/473225/hand-holding-heart",
        linkName: "SVG Repo",
        linkIcon: <IconValues class="w-8 h-8" mainColor="currentcolor" />
    },
    {
        link: "https://www.svgrepo.com/svg/527129/history",
        linkName: "SVG Repo",
        linkIcon: <IconHistory class="w-8 h-8" mainColor="#384550" secondColor="#384550" />
    },
    {
        link: "https://www.svgrepo.com/svg/509382/menu",
        linkName: "SVG Repo",
        linkIcon: <IconMenu class="w-8 h-8" mainColor="#384550" />
    },
    {
        link: "https://www.svgrepo.com/svg/526920/close-circle",
        linkName: "SVG Repo",
        linkIcon: <IconClose class="w-8 h-8" mainColor="#384550" xColor="#384550" />
    },
    {
        link: "https://www.svgrepo.com/svg/506507/image",
        linkName: "SVG Repo",
        linkIcon: <IconImages class="w-8 h-8" mainColor="#384550" />
    },
]

const ReferencesImages = [
    {
        link: "https://www.freepik.com/free-photo/smiling-businesswoman-shaking-hand-male-partner-group-meeting_3939784.htm",
        url: "./images/imagem01.webp",
        site: "Image por yanalya no Freepik",
        alt: "Três pessoas conversando e sorrindo numa reunião de negócios"
    },
    {
        link: "https://br.freepik.com/fotos-gratis/empresarios-sorridentes-com-comida_13377836.htm#&position=16&from_view=collections",
        url: "./images/imagem02.webp",
        site: "Freepik",
        alt: "Quatro pessoas conversando e sorrindo numa reunião de planejamento"
    },
    {
        link: "https://br.freepik.com/fotos-gratis/pessoas-negocio-apertar-mao-em-um-sala-reuniao_2770459.htm#query=business-people-shaking-hands-meeting-room%201&position=8&from_view=search&track=ais",
        url: "./images/imagem03.webp",
        site: "Imagem por rawpixel.com no Freepik",
        alt: "Duas pessoas apertando a mão, indicando que estão fechando um negócio"
    },
    {
        link: "https://www.freepik.com/free-photo/adorable-cheerful-young-lady-working-home_11136392.htm#query=adorable-cheerful-young-lady-working-home&position=0&from_view=search&track=sph",
        url: "./images/imagem04.webp",
        site: "Image por wayhomestudio no Freepik",
        alt: "Uma pessoa ao smartphone conversando, enquanto está sentada de frente ao notebook"
    },
    {
        link: "https://br.freepik.com/fotos-gratis/homem-com-contrato-para-seu-novo-trabalho-de-escritorio-apos-a-entrevista_16392731.htm#query=carta%20trabalho&position=2&from_view=keyword&track=ais",
        url: "./images/imagem05.webp",
        site: "Freepik",
        alt: "Uma pessoa entregando seu currículo, durante uma entrevista de emprego"
    },
    
]

export default function Creditos() {
    return (
        <main className="w-full">
            <Logo srcLogo={"./logo.svg"} />
            <section className="flex items-center justify-center w-full flex-col pt-28">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-moving-orange-01-35">
                    {/* <img className="w-3/5" src={'./icons/icon_aboutus.svg'} alt={'Icone ilustrando três pessoas'} /> */}
                    <IconFile />
                </div>
                <article className="my-20 justify-center grid grid-cols-1 medium:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                    {ReferencesLinks.map((item, index) => {
                        return (
                            <a
                                href={item.link}
                                target="_blank"
                                // py-4 px-10
                                className="hover:scale-105 flex items-center justify-center flex-col border-2 h-20 w-52 border-moving-orange-01-35 rounded-full hover:bg-moving-orange-01 hover:text-white transition duration-200 ease-in-out"
                                key={index}
                            >
                                <div className="flex items-center justify-center w-10">{item.linkIcon}</div>
                                <p className="mt-2">{item.linkName}</p>
                            </a>
                        )
                    })}
                </article>
                <hr className="rounded-full border-4 w-4/6 md:w-5/6 mb-12 border-moving-orange-01-35" />
            </section>
            <section className="flex items-center justify-center w-full flex-col pt-14">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-moving-orange-01-35">
                    <IconImages class="w-10 h-10" mainColor="#384550" />
                </div>
                <article className="my-20 justify-center flex items-center flex-col w-4/6">
                    {ReferencesImages.map((item, index) => {
                        return (
                            <a
                                href={item.link}
                                target="_blank"
                                // py-4 px-10
                                className="hover:scale-105 my-4 p-5 flex items-center justify-center flex-col border-2 h-full w-full border-moving-orange-01-35 rounded-2xl transition duration-200 ease-in-out"
                                key={index}
                            >
                                <div className="w-100 flex items-center justify-center"><img className="rounded-2xl" src={item.url} alt={item.alt}/></div>
                                <p className="mt-4 text-sm font-light">{item.site}</p>
                            </a>
                        )
                    })}
                </article>
                <hr className="rounded-full border-4 w-4/6 md:w-5/6 mb-12 border-moving-orange-01-35" />
            </section>
        </main>
    )
}