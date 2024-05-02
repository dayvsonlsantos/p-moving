"use client"

import Footer from "@/components/footer";
import { IconAboutUs, IconEmail, IconHeadset, IconPhone, IconWhatsapp } from "@/components/icons";
import Image from "@/components/image";
import Logo from "@/components/logo";
import Navbar from "@/components/navbar";
import NavbarMobile from "@/components/navbar_mobile";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contato() {

    const notify = () => toast("E-mail enviado!");

    let imageDetails = {
        mobile: {
            src: './bg_contato_mobile.webp',
            alt: 'Três pessoas sentadas conversando numa reunião de negócios.'
        },
        hd: {
            src: './bg_contato_hd.webp',
            alt: 'Três pessoas sentadas conversando numa reunião de negócios.'
        },
        fullhd: {
            src: './bg_contato_fullhd.webp',
            alt: 'Três pessoas sentadas conversando numa reunião de negócios.'
        },
        ultrawide: {
            src: './bg_contato_ultrawide.webp',
            alt: 'Três pessoas sentadas conversando numa reunião de negócios.'
        },
    }

    return (
        <>
            <NavbarMobile/>
            <Navbar />
            <main className="w-full">
                <Logo srcLogo={"/logoWhite.svg"} />
                {/* small, medium, larger and extra-larger are screen measurements, configured in tailwinds.config.js */}
                
                <Image imageDetails={imageDetails}/>

                <section className="flex items-center justify-center w-full flex-col">
                    <div className="flex items-center justify-center w-20 mb-12 h-20 rounded-full bg-moving-orange-01-35">
                        {/* <img className="w-3/5" src={'./icons/icon_aboutus.svg'} alt={'Icone ilustrando três pessoas'} /> */}
                        <IconHeadset className="w-2 h-2" mainColor={"#384550"} size={"w-3/5"} />
                    </div>

                    {/* <hr className="rounded-full border-4 w-4/6 md:w-5/6 mb-12 mt-12 border-moving-orange-01-35" /> */}
                </section>

                <article className="flex items-center justify-center flex-col larger:flex-row extra-larger:flex-row max-w-7xl w-4/6 md:w-5/6 m-auto p-2 medium:p-6 larger:p-6 extra-larger:p-6 shadow-md mb-12 bg-moving-orange-01-35 rounded-2xl">
                    <section className="larger:w-1/3 extra-larger:w-2/3 p-4 mb-4">
                        <h1 className="text-center text-xl font-normal mb-2">Contatos</h1>
                        <div className="flex items-center justify-start flex-row mt-6">
                            <IconEmail className="w-2 h-2" />
                            <span className="ml-3 text-sm larger:text-base extra-larger:text-lg">contato@movingrh.com.br</span>
                        </div>
                        <div className="flex items-center justify-start flex-row mt-6">
                            <IconWhatsapp className="w-2 h-2" />
                            <span className="ml-3 text-sm larger:text-base extra-larger:text-lg">(21) 98833-2645</span>
                        </div>
                        <div className="flex items-center justify-start flex-row mt-6">
                            <IconPhone className="w-2 h-2" />
                            <span className="ml-3 text-sm larger:text-base extra-larger:text-lg">(21) 98833-2645</span>
                        </div>
                    </section>
                    <section className="medium:w-4/5 larger:w-2/3 extra-larger:w-2/3 px-2 py-6 flex items-center justify-center flex-col bg-white rounded-2xl">

                        <h1 className="text-base medium:text-base larger:text-lg extra-larger:text-xl font-normal mb-2">Entre em Contato</h1>

                        <form action="https://formsubmit.co/contato@movingrh.com.br" method="POST" className="lg:w-5/6">
                            <div className="flex items-center justify-center flex-col md:flex-row w-full gap-4 mt-4">
                                <input className="p-2 rounded-2xl border border-moving-orange-01-35 w-full text-sm larger:text-base extra-larger:text-lg" type="text" name="full_name" id="full_name" required placeholder="Nome completo" />
                                <input className="p-2 rounded-2xl border border-moving-orange-01-35 w-full text-sm larger:text-base extra-larger:text-lg" type="email" name="email" id="email" required placeholder="E-mail" />
                            </div>

                            <input className="p-2 rounded-2xl border border-moving-orange-01-35 w-full mt-4 text-sm larger:text-base extra-larger:text-lg" type="text" name="subject" id="subject" required placeholder="Assunto" />

                            <textarea className="p-2 rounded-2xl border border-moving-orange-01-35 w-full mt-4 text-sm larger:text-base extra-larger:text-lg" name="message" id="message" cols="30" rows="4" required placeholder="Mensagem"></textarea>

                            <div className="w-100 flex items-center justify-end mt-4">
                                <button type="submit"  className="px-4 py-2 bg-moving-orange-01-35 rounded-lg text-sm larger:text-base extra-larger:text-lg">Enviar</button>
                            </div>

                            {/* <input type="hidden" name="_next" value="http://localhost:3000/" /> */}
                        </form>


                    </section>
                </article>
            </main>
            <Footer/>
        </>
    )
}