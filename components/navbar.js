export default function Navbar() {
    return (
        <header className="hidden max-w-3xl w-1/2 lg:flex items-center justify-center fixed left-1/2 -translate-x-1/2 rounded-full bg-slate-50 p-2 mt-4 shadow-md">
            <nav className="flex items-center justify-center flex-row w-full">
                <ul className="flex items-center justify-evenly flex-row w-full">
                    <li className="cursor-pointer hover:text-moving-orange-01 transition duration-200 ease-in-out">Home</li>
                    <li className="cursor-pointer hover:text-moving-orange-01 transition duration-200 ease-in-out">Quem Somos</li>
                    <li className="cursor-pointer hover:text-moving-orange-01 transition duration-200 ease-in-out">Serviços</li>
                    <li className="cursor-pointer hover:text-moving-orange-01 transition duration-200 ease-in-out">Contato</li>
                    <li className="bg-moving-orange-01 py-2 px-4 rounded-full text-white cursor-pointer transition duration-200 ease-in-out hover:scale-125">Vagas</li>
                </ul>
            </nav>
        </header>
    )
}