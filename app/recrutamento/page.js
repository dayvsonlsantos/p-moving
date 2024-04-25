import { IconAboutUs } from "@/components/icons";
import Image from "@/components/image";
import Logo from "@/components/logo";

let pageContent = {
    paragraph: [
        {
            content: 'Na Moving, estamos comprometidos em oferecer soluções eficientes para o seu negócio.'
        },
        {
            content: 'Nossa expertise em Recursos Humanos permite que sua empresa reduza custos por meio da redução da rotatividade (turnover).'
        },
        {
            content: 'Realizamos um processo seletivo criterioso, em até 5 etapas, para garantir a escolha dos candidatos mais qualificados e alinhados com a cultura da sua empresa.'
        },
        {
            content: 'Acreditamos que a seleção adequada é fundamental para o sucesso de qualquer organização.'
        },
        {
            content: 'Além disso, caso seja necessário, oferecemos a reposição da vaga sem custo adicional por um determinado período. Queremos assegurar que a qualidade dos profissionais selecionados esteja sempre em conformidade com suas expectativas.'
        },
        {
            content: 'Entre em contato conosco e descubra como podemos otimizar seus processos de seleção e contribuir para o Employee branding da sua empresa.'
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

export default function Recrutamento() {
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

                    <ol className="text-sm larger:text-base extra-larger:text-lg w-3/5 md:w-4/5 2xl:w-3/4 text-justify my-6 flex items-center justify-center flex-col">
                        {
                            pageContent.paragraph.map(function(element) {
                                return (
                                    <li className="mb-4 w-11/12 before:content-['•'] before:text-moving-orange-01 before:mr-2">
                                        <span>{element.content}</span>
                                    </li>
                                )
                            })
                        }
                    </ol>
                    
                    {/* {
                        pageContent.paragraph.map(function(element) {
                            return(
                                <p className="text-sm larger:text-base extra-larger:text-lg w-3/5 md:w-4/5 2xl:w-3/4 text-justify mb-4 flex items-center justify-start indent-8">
                                    {element.content}
                                </p>
                            )
                        })
                    } */}
                </article>
                <hr className="rounded-full border-4 w-4/6 md:w-5/6 mb-12 border-moving-orange-01-35" />
            </section>
        </main>
    )
}