import { IconHistory } from "@/components/icons";
import Logo from "@/components/logo";

let pageContent = {
    imageSrc: './images/img_perfil.webp',
    paragraph: [
        {
            content: 'A trajetória da Moving RH é marcada pela visão empreendedora de sua fundadora, Jéssica Nogueira. Com mais de 20 anos de experiência em empresas de médio e grande porte, Jéssica identificou uma lacuna no mercado: a falta de consultoria estratégica em Gestão de Pessoas. Movida por sua percepção aguçada e determinação, ela decidiu empreender.'
        },
        {
            content: 'Fundada com o propósito em  atender diversas empresas, a Moving RH oferece consultoria especializada em Recursos Humanos.'
        },
        {
            content: 'Utilizando expertise técnica para proporcionar soluções valiosas aos clientes.'
        },
        {
            content: 'A empresa cresceu, impactando positivamente a vida de inúmeras pessoas e o desempenho das organizações em diversos segmentos.'
        },
        {
            content: 'Com cases de sucesso relevantes, a Moving RH deixou sua marca ao influenciar positivamente tanto a vida das pessoas quanto o desempenho das organizações em que atua e parceiros de negócios. Hoje, ela é reconhecida por potencializar empresas e transformar negócios através da gestão estratégica de pessoas.'
        },
    ]
}

export default function Historia() {
    return (
        <main className="w-full flex justify-center">
            <Logo srcLogo={"./logo.svg"} />
            <section className="pt-28 flex items-center justify-evenly flex-col larger:flex-row extra-larger:flex-row text-sm larger:text-base extra-larger:text-lg w-3/5 md:w-4/5 2xl:w-3/4 text-justify">
                <section className="w-60 h-60 md:w-96 md:h-96">
                    <img
                        src="./images/img_perfil.webp"
                        alt="
                            Jéssica, mulher morena de cabelos castalhos na altura do ombro,
                            usando brincos laranjas e battom vermelho. Vestindo uma camisa preta
                            com o nome da empresa: 'Moving rg', e uma calça bege."
                        className="w-full h-full object-cover object-top rounded-full"
                    />
                </section>
                <div className="my-8 larger:w-2/5 extra-larger:w-2/5 flex items-center justify-center flex-col">
                    <div className="flex items-center justify-center gap-4 flex-row">
                        <IconHistory class="w-8 h-8" mainColor="#384550" secondColor="#F0A65B" />
                        <span className="text-base larger:text-lg extra-larger:text-xl font-normal text-center">História</span>
                    </div>
                    <hr className="rounded-full border-4 my-6 w-full border-moving-orange-01-35" />
                    {
                        pageContent.paragraph.map(function(element){
                            return(
                                <p className="text-sm larger:text-base extra-larger:text-lg w-full text-justify mb-4 flex items-center justify-start indent-8">
                                    {element.content}
                                </p>
                            )
                        })
                    }
                </div>
            </section>

        </main>
    )
}