import Footer from "@/components/footer";
import { IconHistory } from "@/components/icons";
import Logo from "@/components/logo";
import Navbar from "@/components/navbar";
import NavbarMobile from "@/components/navbar_mobile";

export default function Desenvolvedores() {
    return (
        <>
            <NavbarMobile/>
            <Navbar />
            <main className="w-full flex justify-center">
                <Logo srcLogo={"/logo.svg"} />
                <section className="pt-28 flex items-center justify-evenly flex-col larger:flex-row extra-larger:flex-row text-sm larger:text-base extra-larger:text-lg w-3/5 md:w-4/5 2xl:w-3/4 text-justify">
                    <img
                        src="https://avatars.githubusercontent.com/u/102249811?v=4"
                        alt="
                            Dayvson, homem de cabelo preto, com oculos de cor transparente, pele morena, usando camisa branca, com fundo de tijolos marrons"
                        className="w-full md:w-1/3 max-w-sm rounded-full"
                    />
                    <div className="my-8 larger:w-2/5 extra-larger:w-2/5 flex items-center justify-center flex-col">
                        <div className="flex items-center justify-center gap-4 flex-row">
                            <IconHistory class="w-8 h-8" mainColor="#384550" secondColor="#F0A65B" />
                            <span className="text-base larger:text-lg extra-larger:text-xl font-normal text-center">Sobre mim</span>
                        </div>
                        <hr className="rounded-full border-4 my-6 w-full border-moving-orange-01-35" />
                        <p className="text-sm larger:text-base extra-larger:text-lg w-full text-justify mb-4 flex items-center justify-center">
                            👋🏽 Olá! me chamo Dayvson, atualmente em 2024, tenho 22 anos, sou formado como técnico em Desenvolvimento de sistemas e atualmente graduando em Análise e Desenvolvimento de Sistemas. 
                        </p>
                        <p className="text-sm larger:text-base extra-larger:text-lg w-full text-justify mb-4 flex items-center justify-center">
                            Nos projetos, busco compreender as necessidades do cliente, de forma a tornar o desenvolvimento mais claro e proporcionar uma experiência positiva ao usuário. 🔭
                        </p>
                        <p className="text-sm larger:text-base extra-larger:text-lg w-full text-justify mb-4 flex items-center justify-center flex-col">
                            🚀 Sobre as minhas experiências, você pode verificar nas minhas redes sociais:
                            <ul className="mt-2 text-center">
                                {/* <li><a href="" target="_blank" className="hover:text-moving-orange-01">Portfólio</a></li> */}
                                <li><a href="https://www.linkedin.com/in/dayvsonlimasantos/" target="_blank" className="hover:text-moving-orange-01">Linkedin</a></li>
                                <li><a href="https://github.com/dayvsonlsantos" target="_blank" className="hover:text-moving-orange-01">Github</a></li>
                            </ul>
                        </p>
                        <p className="text-sm larger:text-base extra-larger:text-lg w-full text-justify mb-4 flex items-center justify-center">
                            Caso queira, também pode entrar em contato comigo pelo meu e-mail:
                        </p>
                        <a href="mailto:dayvsonlsantos@gmail.com" className="hover:text-moving-orange-01">dayvsonlsantos@gmail.com</a>
                    </div>
                </section>

            </main>
            <Footer/>
        </>
    )
}