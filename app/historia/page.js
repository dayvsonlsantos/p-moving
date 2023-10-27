import { IconHistory } from "@/components/icons";
import Logo from "@/components/logo";

export default function Historia() {
    return (
        <main className="w-full flex justify-center">
            <Logo srcLogo={"./logo.svg"} />
            <section className="pt-28 flex items-center justify-evenly flex-col larger:flex-row extra-larger:flex-row text-sm larger:text-base extra-larger:text-lg w-3/5 md:w-4/5 2xl:w-3/4 text-justify">
                <img
                    src="./images/img_perfil.webp"
                    alt="
                        Jéssica, mulher morena de cabelos castalhos na altura do ombro, 
                        usando brincos brancos e battom vermelho. Vestindo uma camisa com 
                        listras vermelhas e brancas na vertical. Usando um relogio digital 
                        no pulso esquerdo com a tela apagada e pulseira de metal. Segurando 
                        com ambas as mãos uma placa, escrita movingrh de fundo azul com manchas 
                        laranja e azul mais claro."
                    className="w-full md:w-1/3 max-w-sm"
                />
                <div className="my-8 larger:w-2/5 extra-larger:w-2/5 flex items-center justify-center flex-col">
                    <div className="flex items-center justify-center gap-4 flex-row">
                        <IconHistory class="w-8 h-8" mainColor="#384550" secondColor="#F0A65B" />
                        <span className="text-base larger:text-lg extra-larger:text-xl font-normal text-center">História</span>
                    </div>
                    <hr className="rounded-full border-4 my-6 w-full border-moving-orange-01-35" />
                    <p className="text-sm larger:text-base extra-larger:text-lg w-full text-justify mb-4 flex items-center justify-center indent-8">
                        A história da Moving RH começou quando a nossa fundadora, Jéssica Nogueira, depois de mais de 15 anos trabalhando
                        em empresas de médio e grande porte, percebeu a necessidade de um consultoria mais estratégica em relação a Gestão
                        de Pessoas e decidiu não atender apenas a uma e sim a várias empresas com a necessidade de implantar ou implementar
                        um RH e transformar o RH das empresas com RH apenas voltado para questões de cumprimentos legais.
                    </p>
                    <p className="text-sm larger:text-base extra-larger:text-lg w-full text-justify mb-4 flex items-center justify-center indent-8">
                        Então, finalmente foi o momento de tomar coragem e empreender, olhando para o mercado, para as oportunidades, para a
                        sua forte rede de relacionamento construída ao longo da sua carreira profissional, pela sua capacidade técnica e
                        generalista em RH, o potencial que a Moving podia oferecer aos seus clientes.
                    </p>
                    <p className="text-sm larger:text-base extra-larger:text-lg w-full text-justify mb-4 flex items-center justify-center indent-8">
                        Hoje, 5 anos depois, a Moving cresceu impactando a vida de várias pessoas através da atuação dos seus consultores,
                        parceiros de negócios em empresas de diversos segmentos – e impactando positivamente a vida das pessoas e das organizações.
                    </p>
                </div>
            </section>

        </main>
    )
}