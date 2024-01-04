import { IconAboutUs } from "@/components/icons";
import Image from "@/components/image";
import Logo from "@/components/logo";

export default function EmDesenvolvimento() {
    return (
        <main className="w-full">
            <Logo srcLogo={"./logo.svg"} />
            {/* small, medium, larger and extra-larger are screen measurements, configured in tailwinds.config.js */}
            <section className="flex items-center justify-center h-screen w-full flex-col">
                <h1 className="text-3xl flex items-center justify-center">Em Desenvolvimento</h1>
            </section>
        </main>
    )
}