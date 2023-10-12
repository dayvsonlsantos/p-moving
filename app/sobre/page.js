import { IconAboutUs } from "@/components/icons";
import Image from "@/components/image";
import Logo from "@/components/logo";

export default function Sobre() {
    return (
        <main className="w-full">
            <Logo srcLogo={"./logo.svg"} />
            {/* small, medium, larger and extra-larger are screen measurements, configured in tailwinds.config.js */}
            <Image
                srcImage={'./bg_sobre_mobile.webp'}
                alt={'Três pessoas sentadas conversando numa reunião de negócios.'}
                class={'small:flex medium:hidden larger:hidden extra-larger:hidden'}
            />
            <Image
                srcImage={'./bg_sobre_hd.webp'}
                alt={'Três pessoas sentadas conversando numa reunião de negócios.'}
                class={'small:hidden medium:flex larger:hidden extra-larger:hidden'}
            />
            <Image
                srcImage={'./bg_sobre_fullhd.webp'}
                alt={'Três pessoas sentadas conversando numa reunião de negócios.'}
                class={'small:hidden medium:hidden larger:flex extra-larger:hidden'}
            />
            <Image
                srcImage={'./bg_sobre_ultrawide.webp'}
                alt={'Três pessoas sentadas conversando numa reunião de negócios.'}
                class={'small:hidden medium:hidden larger:hidden extra-larger:flex'}
            />
            <section className="flex items-center justify-center w-full flex-col">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-moving-orange-01-35">
                    {/* <img className="w-3/5" src={'./icons/icon_aboutus.svg'} alt={'Icone ilustrando três pessoas'} /> */}
                    <IconAboutUs />
                </div>
                <article className="my-12 flex items-center justify-center w-full flex-col">
                    <p className="text-sm larger:text-base extra-larger:text-lg w-3/5 md:w-4/5 2xl:w-3/4 text-justify mb-4">
                        A Moving RH é uma consultoria de Recursos Humanos <span className="text-moving-orange-01">sempre em constante movimento</span>.
                    </p>
                    <p className="text-sm larger:text-base extra-larger:text-lg w-3/5 md:w-4/5 2xl:w-3/4 text-justify mb-4">
                        Desenvolvemos soluções completas em RH. Utilizamos metodologias e ferramentas que potencializam as fortalezas e desenvolvem competências que contribuem para agilidade do seu negócio através das pessoas.
                    </p>
                    <p className="text-sm larger:text-base extra-larger:text-lg w-3/5 md:w-4/5 2xl:w-3/4 text-justify mb-4">
                        Contamos com profissionais de excelência reconhecida pelo mercado, com mais de <span className="text-moving-orange-01">20 anos de experiência</span> em gestão.
                    </p>
                    <p className="text-sm larger:text-base extra-larger:text-lg w-3/5 md:w-4/5 2xl:w-3/4 text-justify mb-4">
                        Nosso foco não se limita aos bons resultados, mas também a uma Gestão Humanizada, criando estratégias que utilizando as melhores ferramentas de RH do mercado.
                    </p>
                    <p className="text-sm larger:text-base extra-larger:text-lg w-3/5 md:w-4/5 2xl:w-3/4 text-justify">
                        Atendemos clientes em <span className="text-moving-orange-01">todo o Brasil</span>.
                    </p>
                </article>
                <hr className="rounded-full border-4 w-4/6 md:w-5/6 mb-12 border-moving-orange-01-35" />
            </section>
        </main>
    )
}