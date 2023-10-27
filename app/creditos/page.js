import { IconAboutUs, IconArrow, IconClose, IconEmail, IconFile, IconGmail, IconHandShake, IconHistory, IconInstagram, IconMenu, IconMission, IconPhone, IconValues, IconVision, IconWhatsapp } from "@/components/icons";
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
        linkIcon: <IconHistory class="w-8 h-8" mainColor="#384550" secondColor="#384550"/>
    },
    {
        link: "https://www.svgrepo.com/svg/509382/menu",
        linkName: "SVG Repo",
        linkIcon: <IconMenu class="w-8 h-8" mainColor="#384550"/>
    },
    {
        link: "https://www.svgrepo.com/svg/526920/close-circle",
        linkName: "SVG Repo",
        linkIcon: <IconClose class="w-8 h-8" mainColor="#384550" xColor="#384550"/>
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
        </main>
    )
}