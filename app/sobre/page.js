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
                    <p className="text-sm larger:text-base extra-larger:text-lg w-3/5 md:w-4/5 2xl:w-3/4 text-justify mb-4 flex items-center justify-center">
                        Conheça a Moving RH em apenas dez passos e descubra um novo caminho para o sucesso da sua empresa
                    </p>

                    <ul className="text-sm larger:text-base extra-larger:text-lg w-3/5 md:w-4/5 2xl:w-3/4 text-justify my-6 flex items-center justify-center flex-col">
                        <li className="mb-4 w-11/12 before:content-['•'] before:text-moving-orange-01 before:mr-2">
                            <span className="text-moving-orange-01 font-normal">Foco principal:</span> a Moving RH se concentra em atender as necessidades dos clientes e das organizações no que diz respeito às pessoas e à construção da área de RH.
                        </li>

                        <li className="mb-4 w-11/12 before:content-['•'] before:text-moving-orange-01 before:mr-2">
                            <span className="text-moving-orange-01 font-normal">Construção e potencialização da Área de RH:</span> a empresa trabalha para construir e fortalecer a área de Recursos Humanos nas organizações, auxiliando-as a desenvolver práticas eficazes de gerenciamento de pessoal.
                        </li>

                        <li className="mb-4 w-11/12 before:content-['•'] before:text-moving-orange-01 before:mr-2">
                            <span className="text-moving-orange-01 font-normal">Seleção eficaz de profissionais:</span> a Moving RH utiliza as melhores ferramentas do mercado para garantir a eficácia das contratações, visando oferecer profissionais de alta qualidade para os clientes.
                        </li>

                        <li className="mb-4 w-11/12 before:content-['•'] before:text-moving-orange-01 before:mr-2">
                            <span className="text-moving-orange-01 font-normal">Desenvolvimento da Liderança:</span> a empresa oferece mentorias individualizadas, palestras e treinamentos específicos para o desenvolvimento da liderança nas organizações.
                        </li>

                        <li className="mb-4 w-11/12 before:content-['•'] before:text-moving-orange-01 before:mr-2">
                            <span className="text-moving-orange-01 font-normal">Valores orientadores:</span> a Moving RH se guia por valores como simplicidade, empatia, confiança, inovação e resultados, buscando proporcionar um serviço completo e eficaz.
                        </li>

                        <li className="mb-4 w-11/12 before:content-['•'] before:text-moving-orange-01 before:mr-2">
                            <span className="text-moving-orange-01 font-normal">Abordagem simples e empática:</span> a Moving RH acredita na importância da simplicidade e da empatia com os clientes. Ao compreender as necessidades individuais de cada empresa, a consultoria busca soluções personalizadas e acessíveis.
                        </li>

                        <li className="mb-4 w-11/12 before:content-['•'] before:text-moving-orange-01 before:mr-2">
                            <span className="text-moving-orange-01 font-normal">Parceria de confiança:</span> a base de toda a relação da Moving RH com seus clientes é a confiança mútua. A consultoria se esforça para estabelecer e manter parcerias sólidas, com base na transparência e na integridade.
                        </li>

                        <li className="mb-4 w-11/12 before:content-['•'] before:text-moving-orange-01 before:mr-2">
                            <span className="text-moving-orange-01 font-normal">Inovação contínua:</span> ao reconhecer a rápida evolução do ambiente de negócios, a Moving RH abraça a inovação como um princípio essencial. A empresa se mantém atualizada com as tendências da indústria e busca constantemente maneiras novas e criativas de melhorar suas abordagens.
                        </li>

                        <li className="mb-4 w-11/12 before:content-['•'] before:text-moving-orange-01 before:mr-2">
                            <span className="text-moving-orange-01 font-normal">Foco em resultados mensuráveis:</span> a Moving RH não apenas fornece serviços, mas também se empenha em alcançar resultados tangíveis e mensuráveis para seus clientes, seja aumentando a eficiência das operações de RH ou fortalecendo a liderança interna.
                        </li>

                        <li className="mb-4 w-11/12 before:content-['•'] before:text-moving-orange-01 before:mr-2">
                            <span className="text-moving-orange-01 font-normal">Compromisso com o aprendizado contínuo:</span> alinhada à crença no desenvolvimento, a Moving RH incentiva o aprendizado contínuo em todas as suas interações. Com palestras sobre renovação e treinamentos personalizados, a consultoria capacita tanto os líderes quanto as equipes a crescerem e se aprimorarem.
                        </li>
                    </ul>

                    <p className="text-sm larger:text-base extra-larger:text-lg w-3/5 md:w-4/5 2xl:w-3/4 text-justify mb-4 flex items-center justify-center indent-8">
                        Na Moving RH, não apenas entendemos a importância das pessoas nas organizações, mas também estamos comprometidos em elevar o potencial humano por meio de soluções práticas, centradas no cliente e orientadas para resultados.
                    </p>

                    <p className="text-sm larger:text-base extra-larger:text-lg w-3/5 md:w-4/5 2xl:w-3/4 text-justify mb-4 flex items-center justify-center indent-8">
                        Estamos ansiosos para trabalhar lado a lado com você, ajudando a moldar um ambiente de trabalho mais produtivo, colaborativo e orientado para o sucesso. Juntos, podemos alcançar conquistas notáveis e criar um futuro brilhante para sua organização.
                    </p>
                </article>
                <hr className="rounded-full border-4 w-4/6 md:w-5/6 mb-12 border-moving-orange-01-35" />
            </section>
        </main>
    )
}