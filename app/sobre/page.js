import { IconAboutUs } from "@/components/icons";
import Image from "@/components/image";
import Logo from "@/components/logo";

let pageContent = {
    headerInfo: 'Conheça a Moving RH em três passos e descubra um novo caminho para o sucesso da sua empresa.',
    orderList: [
        {
            title: 'Foco nas Necessidades do Cliente e Construção da Área de RH:',
            content: 'A Moving RH concentra seus esforços em atender às necessidades específicas dos clientes e organizações no âmbito das pessoas, priorizando a construção e fortalecimento da área de Recursos Humanos. O objetivo é auxiliar as empresas na implementação de práticas eficazes de gerenciamento de pessoal.'
        },
        {
            title: 'Seleção Eficaz de Profissionais e Desenvolvimento da Liderança:',
            content: 'Utilizando as melhores ferramentas do mercado, a Moving RH assegura a eficácia nas contratações, visando fornecer profissionais de alta qualidade aos clientes. Além disso, a empresa oferece programas de desenvolvimento de liderança, incluindo mentorias individualizadas, palestras e treinamentos específicos.'
        },
        {
            title: 'Valores Orientadores e Compromisso com a Inovação e Resultados:',
            content: 'A Moving RH guia-se por valores fundamentais, como simplicidade, empatia, confiança, inovação e resultados. A consultoria adota uma abordagem simples e empática, baseia suas relações em parcerias de confiança, busca continuamente inovações para se manter atualizada e foca em alcançar resultados mensuráveis para seus clientes. Além disso, o compromisso com o aprendizado contínuo é evidenciado por meio de palestras e treinamentos personalizados, promovendo o desenvolvimento constante das equipes e líderes.'
        }
    ],
    paragraph: [
        {
            content: 'Esses três pilares refletem a abordagem abrangente da Moving RH, que vai desde a construção estratégica da área de Recursos Humanos até a seleção criteriosa de profissionais e o desenvolvimento contínuo da liderança, tudo alinhado aos seus valores fundamentais e compromisso com resultados mensuráveis.'
        },
        {
            content: 'Na Moving RH, não apenas entendemos a importância das pessoas nas organizações, mas também estamos comprometidos em elevar o potencial humano por meio de soluções práticas, centradas no cliente e orientadas para resultados.'
        },
        {
            content: 'Ficaremos felizes em trabalhar lado a lado com você, ajudando a moldar um ambiente de trabalho mais produtivo, colaborativo e orientado para o sucesso. Juntos, podemos alcançar conquistas notáveis e criar um futuro brilhante para sua organização.'
        }
    ]

}

let imageDetails = {
    mobile: {
        src: './bg_home_mobile.webp',
        alt: 'Três pessoas sentadas conversando numa reunião de negócios.'
    },
    hd: {
        src: './bg_home_hd.webp',
        alt: 'Três pessoas sentadas conversando numa reunião de negócios.'
    },
    fullhd: {
        src: './bg_home_fullhd.webp',
        alt: 'Três pessoas sentadas conversando numa reunião de negócios.'
    },
    ultrawide: {
        src: './bg_home_ultrawide.webp',
        alt: 'Três pessoas sentadas conversando numa reunião de negócios.'
    },
}

export default function Sobre() {
    return (
        <main className="w-full">
            <Logo srcLogo={"./logo.svg"} />
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

                    <ol className="text-sm list-decimal larger:text-base extra-larger:text-lg w-3/5 md:w-4/5 2xl:w-3/4 text-justify my-6 flex items-center justify-center flex-col">
                        {
                            pageContent.orderList.map(function(element){
                                return (
                                    <li className="mb-4 w-11/12 before:text-moving-orange-01 before:mr-2">
                                        <span className="text-moving-orange-01 font-normal">{element.title}</span>
                                        <p className="mt-3">{element.content}</p>
                                    </li>
                                )
                            })
                        }
                    </ol>
                    
                    {
                        pageContent.paragraph.map(function(element) {
                            return(
                                <p className="text-sm larger:text-base extra-larger:text-lg w-3/5 md:w-4/5 2xl:w-3/4 text-justify mb-4 flex items-center justify-center indent-8">
                                    {element.content}
                                </p>
                            )
                        })
                    }
                </article>
                <hr className="rounded-full border-4 w-4/6 md:w-5/6 mb-12 border-moving-orange-01-35" />
            </section>
        </main>
    )
}