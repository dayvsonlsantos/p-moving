import Footer from "@/components/footer";
import { IconAboutUs } from "@/components/icons";
import Image from "@/components/image";
import Logo from "@/components/logo";
import Navbar from "@/components/navbar";
import NavbarMobile from "@/components/navbar_mobile";

let pageContent = {
    paragraph: [
        {
            content: 'Na busca por amadurecer os colaboradores e seu processo de aprendizado de novas habilidades, informações, atitudes e comportamentos, as empresas podem utilizar o Treinamento & Desenvolvimento como uma ferramenta fundamental.'
        },
        {
          content: 'Os treinamentos têm o objetivo de agregar valor às pessoas, tornando-as mais preparadas para exercer suas funções e assumir novas responsabilidades dentro da organização. Realizamos um levantamento e análise das necessidades de treinamento nas áreas técnicas e comportamentais da sua empresa, a fim de identificar o plano de treinamento ideal para a melhoria contínua dos processos. Além disso, desenvolvemos e ministramos programas específicos e personalizados de treinamentos de acordo com as necessidades da sua empresa.'
      },
    ],
    ourDifference:[
      {
        title: 'Nosso diferencial:',
        paragraph: [
          {
            content: 'Oferecer programas de treinamento personalizados, ministrar treinamentos de qualidade e acompanhar a evolução dos colaboradores de forma contínua. Além disso, a Moving valoriza a aplicação prática dos conhecimentos adquiridos, promove a participação ativa dos colaboradores e a busca de resultados mensuráveis no desenvolvimento das habilidades e competências dos indivíduos.'
          }
        ]
      }
    ]
}

let imageDetails = {
    mobile: {
        src: './bg_treinamento_mobile.webp',
        alt: 'Três pessoas sentadas conversando numa reunião de negócios.'
    },
    hd: {
        src: './bg_treinamento_hd.webp',
        alt: 'Três pessoas sentadas conversando numa reunião de negócios.'
    },
    fullhd: {
        src: './bg_treinamento_fullhd.webp',
        alt: 'Três pessoas sentadas conversando numa reunião de negócios.'
    },
    ultrawide: {
        src: './bg_treinamento_ultrawide.webp',
        alt: 'Três pessoas sentadas conversando numa reunião de negócios.'
    },
}

export default function Outsourcing() {
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
                    <article className="my-12 flex items-center justify-center w-full flex-col">
                        <p className="text-sm larger:text-base extra-larger:text-lg w-3/5 md:w-4/5 2xl:w-3/4 text-justify mb-4 flex items-center justify-center">
                            {pageContent.headerInfo}
                        </p>
                        
                        {
                            pageContent.paragraph.map(function(element) {
                                return(
                                    <p className="text-sm larger:text-base extra-larger:text-lg w-3/5 md:w-4/5 2xl:w-3/4 text-justify mb-4 flex items-center justify-start indent-8">
                                        {element.content}
                                    </p>
                                )
                            })
                        }

                        {
                            pageContent.ourDifference.map(function(element) {
                                return (
                                    <>
                                        <p className="text-sm larger:text-base font-medium text-moving-orange-01 extra-larger:text-lg w-3/5 md:w-4/5 2xl:w-3/4 text-justify mb-4 flex items-center justify-start indent-8">
                                            {element.title}
                                        </p>
                                        {element.paragraph.map(function(paragraphElement) {
                                            return (
                                                <p key={paragraphElement} className="text-sm larger:text-base extra-larger:text-lg w-3/5 md:w-4/5 2xl:w-3/4 text-justify mb-4 flex items-center justify-start indent-8">
                                                    {paragraphElement.content}
                                                </p>
                                            );
                                        })}
                                    </>
                                );
                            })
                        }

                    </article>
                    <hr className="rounded-full border-4 w-4/6 md:w-5/6 mb-12 border-moving-orange-01-35" />
                </section>
            </main>
            <Footer/>
        </>
    )
}