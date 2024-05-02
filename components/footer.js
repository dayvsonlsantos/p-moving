import Link from "next/link";
import { IconEmail, IconGmail, IconInstagram, IconPhone, IconWhatsapp } from "./icons";

export default function Footer() {
    return (
        <footer className="flex items-center justify-center flex-col w-full py-2 text-sm larger:text-base extra-larger:text-lg">
            <section className="flex items-center justify-center flex-col md:flex-row w-full md:px-24 2xl:w-5/6">
                <article className="flex items-center justify-start flex-col w-full md:w-1/2 mb-6">
                    <div className="w-full flex items-center justify-center md:justify-start">
                        <img
                            src={'/logo.svg'}
                            alt="Logo da empresa Moving"
                            className="w-36"
                        />
                    </div>
                    <span className="text-center md:text-left w-full my-4">
                        Seg à Sex ~ 09:00 - 18:00
                    </span>
                    <div className="text-justify w-full flex items-center justify-center md:justify-start">
                        <p className="w-3/5 md:w-4/5 2xl:w-3/4">Um RH estratégico, alinhado ao negócio focado no desenvolvimento organizacional com profissionais especialistas em Gestão de Pessoas.</p>
                    </div>
                </article>
                <article className="flex items-center justify-end flex-col w-full md:w-1/2 mb-6">
                    <ul className="text-center md:text-right w-full">
                        <li className="cursor-pointer hover:text-moving-orange-01 transition duration-200 ease-in-out"><Link href="/em_desenvolvimento">Termos Gerais e Condições</Link></li>
                        <li className="cursor-pointer hover:text-moving-orange-01 transition duration-200 ease-in-out"><Link href="/em_desenvolvimento">Políticas de Privacidade</Link></li>
                        <li className="cursor-pointer hover:text-moving-orange-01 transition duration-200 ease-in-out"><Link href="/desenvolvedores">Desenvolvedores</Link></li>
                        <li className="cursor-pointer hover:text-moving-orange-01 transition duration-200 ease-in-out"><Link href="/em_desenvolvimento">Administrador</Link></li>
                        <li className="cursor-pointer hover:text-moving-orange-01 transition duration-200 ease-in-out">
                            <Link href="/creditos">Creditos</Link>
                        </li>
                    </ul>
                    <div className="my-6 flex items-center justify-center md:justify-end flex-row w-full">
                        <a href="mailto:contato@movingrh.com.br">
                            <IconGmail w_8_h_8_text_moving_orange_01="w-8 h-8 text-moving-orange-01"/>
                        </a>
                        <a href="https://wa.me//5521988332645?text=Olá, gostaria de tirar uma dúvida." target="_blank">
                            <IconWhatsapp w_8_h_8_mx_6_text_moving_orange_01="w-8 h-8 mx-6 text-moving-orange-01"/>
                        </a>
                        <a href="https://www.instagram.com/movingrh/" target="_blank">
                            <IconInstagram w_8_h_8_text_moving_orange_01="w-8 h-8 text-moving-orange-01"/>
                        </a>
                    </div>
                    <span className="w-full text-center md:text-right">Copyright © 2023 MovingRH</span>
                    <span className="w-full text-center md:text-right">Todos os Direitos Reservados</span>
                </article>
            </section>
            <section className="border-solid border-t-2 w-full py-4 flex items-center justify-center">
                <div className="w-full 2xl:w-5/6 flex items-center justify-center flex-col md:flex-row">
                    <article className="flex items-center justify-center md:justify-start w-full flex-row mb-4 md:mb-0 md:px-24">
                        <IconPhone mr_4_text_moving_orange_01={"mr-4 text-moving-orange-01"} />
                        <span>(21) 98833-2645</span>
                    </article>
                    <article className="flex items-center justify-center md:justify-end w-full flex-row md:px-24">
                        <IconEmail mr_4_text_moving_orange_01={"mr-4 text-moving-orange-01"} />
                        <span>contato@movingrh.com.br</span>
                    </article>
                </div>
            </section>
        </footer>
    )
}