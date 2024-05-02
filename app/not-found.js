import Logo from "@/components/logo";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="w-full">
            <Logo srcLogo={"/logo.svg"} />
            {/* small, medium, larger and extra-larger are screen measurements, configured in tailwinds.config.js */}
            <section className="flex items-center justify-center h-screen w-full flex-col">
                <h1 className="text-lg larger:text-xl extra-larger:text-2xl text-center w-5/6 text-moving-orange-01 font-normal">Ops! A página que você estava procurando, não existe</h1>
                <span className="mt-4 text-sm larger:text-base extra-larger:text-lg text-center w-3/5 md:w-4/5 2xl:w-3/4">Você pode ter digitado o endereço errado ou a página pode ter sido movida.</span>
                <Link className="py-4 px-8 mt-8 bg-moving-orange-01-15 rounded-3xl font-light text-sm transition duration-200 ease-in-out hover:scale-110 hover:bg-moving-orange-01 hover:text-white hover:font-normal" href="/">Voltar para a Tela Inicial</Link>
            </section>
        </main>
    )
}