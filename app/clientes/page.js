import Footer from "@/components/footer";
import { IconAboutUs } from "@/components/icons";
import Image from "@/components/image";
import Logo from "@/components/logo";
import Navbar from "@/components/navbar";
import NavbarMobile from "@/components/navbar_mobile";

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

let clients = [
    {
        name: 'IGT Motors',
    },
    {
        name: 'Fox Creche Escola Bilingue',
    },
    {
        name: 'Grupo Kovalent',
    },
    {
        name: 'Global Trend',
    },
    {
        name: 'OdontoLiuzzi',
    },
    {
        name: 'Rede Economia',
    },
    {
        name: 'Top Esmalteria',
    },
    {
        name: 'MQ Corretora',
    },
    {
        name: 'Street',
    },
    {
        name: 'Nova GM',
    },
    {
        name: 'Rota GNV',
    },
    {
        name: 'LogIn Logística',
    },
]

export default function Clientes() {
    return (
        <>
            <NavbarMobile/>
            <Navbar />

            <main className="w-full">
                <Logo srcLogo={"/logoWhite.svg"} />
                {/* small, medium, larger and extra-larger are screen measurements, configured in tailwinds.config.js */}
                <Image imageDetails={imageDetails}/>
                <section className="flex items-center justify-center w-full flex-col">
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-moving-orange-01-35">
                        {/* <img className="w-3/5" src={'./icons/icon_aboutus.svg'} alt={'Icone ilustrando três pessoas'} /> */}
                        <IconAboutUs />
                    </div>
                    
                    {/* <hr className="rounded-full border-4 w-4/6 md:w-5/6 mb-12 border-moving-orange-01-35" /> */}

                    <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 text-center gap-3 my-10">
                    {
                        clients.map(function(element)  {
                            return (
                                <section className="p-4 m-2 bg-moving-orange-01-15 rounded-3xl font-light text-sm transition duration-200 ease-in-out hover:scale-110 hover:bg-moving-orange-01 hover:text-white hover:font-normal">
                                    {element.name}
                                </section>
                            )
                        })
                    }
                    </section>
                </section>
            </main>

            <Footer />
        </>
    )
}