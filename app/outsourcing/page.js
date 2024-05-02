import Footer from "@/components/footer";
import { IconAboutUs } from "@/components/icons";
import Image from "@/components/image";
import Logo from "@/components/logo";
import Navbar from "@/components/navbar";
import NavbarMobile from "@/components/navbar_mobile";

let pageContent = {
    paragraph: [
        {
            content: 'O serviço de Outsourcing de RH é uma solução em que uma empresa especializada em Recursos Humanos assume total ou parcialmente as atividades relacionadas à gestão de pessoas de outra empresa. Isso inclui processos como recrutamento e seleção, administração de pessoal, remuneração e benefícios, endomarketing, treinamento e desenvolvimento, entre outros subsistemas da área. O objetivo é otimizar a gestão de recursos humanos, reduzir custos e permitir que a empresa contratante foque em suas atividades principais.'
        },
    ],
    ourDifference:[
      {
        title: 'Nosso diferencial:',
        paragraph: [
          {
            content: 'A Moving possui uma abordagem estratégica em Recursos Humanos, em que o RH atua como um parceiro de negócios para as demais áreas da empresa. Assim trabalhamos em estreita colaboração com os líderes e gestores, fornecendo suporte e orientação em questões relacionadas a pessoas, como planejamento de talentos, desenvolvimento de liderança, gestão de desempenho e estratégias de clima e engajamento.'
          },
          {
            content: 'O objetivo é alinhar as práticas de RH com os objetivos organizacionais e contribuir para o sucesso do negócio como um todo.'
          },
        ]
      }
    ]
}

let imageDetails = {
    mobile: {
        src: './bg_outsourcing_mobile.webp',
        alt: 'Três pessoas sentadas conversando numa reunião de negócios.'
    },
    hd: {
        src: './bg_outsourcing_hd.webp',
        alt: 'Três pessoas sentadas conversando numa reunião de negócios.'
    },
    fullhd: {
        src: './bg_outsourcing_fullhd.webp',
        alt: 'Três pessoas sentadas conversando numa reunião de negócios.'
    },
    ultrawide: {
        src: './bg_outsourcing_ultrawide.webp',
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