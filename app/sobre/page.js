import Footer from "@/components/footer";
import { IconAboutUs } from "@/components/icons";
import Image from "@/components/image";
import Logo from "@/components/logo";
import Navbar from "@/components/navbar";
import NavbarMobile from "@/components/navbar_mobile";

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
    ],
    topic: 'Missão, visão e valores',
    itens: [
        {
            name: 'Missão',
            highlighted: 'Potencializar o sucesso dos nossos clientes, por meio do desenvolvimento humano e do engajamento das pessoas.',
            paragraph: 'Nosso compromisso fundamental é criar um ambiente onde o sucesso de nossos clientes não seja apenas uma meta, mas uma realidade tangível. Acreditamos que o desenvolvimento humano é fundamental para alcançar esse sucesso duradouro. Quando investimos nas habilidades, conhecimentos e bem-estar das pessoas, estamos construindo uma base para o crescimento e realizações contínuas.'
        },
        {
            name: 'Visão',
            highlighted: 'Ser reconhecida como uma empresa em constante movimento rumo à excelência em Recursos Humanos para nossos clientes.',
            paragraph: 'Na Moving RH, nossa visão transcende os limites convencionais. Visualizamos uma jornada contínua de progresso e inovação, sempre em movimento para moldar o futuro acompanhando as tendências de mercado.'
        },
        {
            name: 'Valores',
            content: [
                {
                    item_name: 'Trabalho em Equipe:',
                    item_description: 'A coesão e a harmonia estimulam a colaboração e a comunicação aberta, permitindo que ideias fluam livremente e problemas sejam resolvidos de maneira eficaz.'
                },
                {
                    item_name: 'Empatia:',
                    item_description: 'Quando praticamos a empatia e nos colocamos no lugar do outro, construímos conexões significativas e duradouras.'
                },
                {
                    item_name: 'Simplicidade:',
                    item_description: 'Simplicidade, clareza e qualidade não apenas aumentam a eficiência, mas também nos capacitam a cumprir nossas responsabilidades de maneira ética e eficaz.'
                },
                {
                    item_name: 'Fazer acontecer:',
                    item_description: 'Faça. Comece agora, concentre-se no resultado e no alcance de suas metas.'
                },
                {
                    item_name: 'Inovação:',
                    item_description: 'Explore novas ideias, inove e fique sempre atento às necessidades do mercado. Este é um chamado para um comportamento proativo e estratégico no mundo dos negócios.'
                },
                {
                    item_name: 'Olho do dono:',
                    item_description: 'Tenha atitude de dono, comprometa-se e tenha responsabilidade. Esse princípio é uma chamada para a excelência e a liderança pessoal em tudo o que fazemos.'
                },
            ]
        },
    ]

}

let imageDetails = {
    mobile: {
        src: './bg_quem_somos_mobile.webp',
        alt: 'Três pessoas sentadas conversando numa reunião de negócios.'
    },
    hd: {
        src: './bg_quem_somos_hd.webp',
        alt: 'Três pessoas sentadas conversando numa reunião de negócios.'
    },
    fullhd: {
        src: './bg_quem_somos_fullhd.webp',
        alt: 'Três pessoas sentadas conversando numa reunião de negócios.'
    },
    ultrawide: {
        src: './bg_quem_somos_ultrawide.webp',
        alt: 'Três pessoas sentadas conversando numa reunião de negócios.'
    },
}

export default function Sobre() {
    return (
        <>
            <NavbarMobile/>
            <Navbar />
            <main className="w-full">
                <Logo srcLogo={"/logo.svg"} />
                {/* small, medium, larger and extra-larger are screen measurements, configured in tailwinds.config.js */}

                <Image imageDetails={imageDetails}/>
            
                <section className="flex items-center justify-center w-full flex-col">
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-moving-orange-01-35">
                        {/* <img className="w-3/5" src={'./icons/icon_aboutus.svg'} alt={'Icone ilustrando três pessoas'} /> */}
                        <IconAboutUs />
                    </div>
                    <article className="my-8 flex items-center justify-center w-full flex-col">
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

                        <p className="font-normal text-moving-orange-01 text-base larger:text-lg extra-larger:text-xl w-3/5 md:w-4/5 2xl:w-3/4 text-justify my-8 flex items-center justify-center">
                            {pageContent.topic}
                        </p>

                        {
                            pageContent.itens.map(function(element) {
                                if(element.name != 'Valores'){
                                    return (
                                        <section className="w-3/5 md:w-4/5 2xl:w-3/4 my-2">
                                            <span className="text-base larger:text-lg extra-larger:text-xl font-normal text-moving-orange-01 text-justify mb-4 flex items-center justify-center md:justify-start">{element.name}</span>
                                            <span className="text-sm font-normal larger:text-base extra-larger:text-lg text-justify mb-4 flex items-center justify-start">{element.highlighted}</span>
                                            <p className="text-sm larger:text-base extra-larger:text-lg text-justify mb-4 flex items-center justify-start">{element.paragraph}</p>
                                        </section>
                                    )
                                } else {
                                    return(
                                        <section className="w-3/5 md:w-4/5 2xl:w-3/4 my-2">
                                            <span className="text-base larger:text-lg extra-larger:text-xl font-normal text-moving-orange-01 text-justify mb-4 flex items-center justify-center md:justify-start">{element.name}</span>
                                            <ul>
                                            {
                                                element.content.map(function(element){
                                                    return(
                                                        <li className="list-disc ml-5">
                                                            <p className="text-sm larger:text-base extra-larger:text-lg text-justify mb-4">
                                                                <span className="mr-2 font-normal">{element.item_name}</span>
                                                                {element.item_description}
                                                            </p>
                                                        </li>
                                                    )
                                                })
                                            }
                                            </ul>
                                        </section>
                                    )
                                }
                            })
                        }
                    </article>
                    {/* <hr className="rounded-full border-4 w-4/6 md:w-5/6 mb-12 border-moving-orange-01-35" /> */}
                </section>
            </main>
            <Footer/>
        </>
    )
}