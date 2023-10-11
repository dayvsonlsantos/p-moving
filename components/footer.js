export default function Footer() {
    return (
        <footer className="flex items-center justify-center flex-col w-full  py-2 text-sm lg:text-base 2xl:text-lg">
            <section className="flex items-center justify-center flex-col md:flex-row w-full md:px-24 2xl:w-5/6">
                <article className="flex items-center justify-start flex-col w-full md:w-1/2 mb-6">
                    <div className="w-full flex items-center justify-center md:justify-start">
                        <img
                            src={'./logo.svg'}
                            alt="Logo da empresa Moving"
                            className="w-36"
                        />
                    </div>
                    <span className="text-center md:text-left w-full my-4">
                        Seg à Sex ~ 09:00 - 18:00
                    </span>
                    <div className="text-justify w-full flex items-center justify-center md:justify-start">
                        <p className="w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus at augue quis bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus at augue quis bibendum.</p>
                    </div>
                </article>
                <article className="flex items-center justify-end flex-col w-full md:w-1/2 mb-6">
                    <ul className="text-center md:text-right w-full">
                        <li>Termos Gerais e Condições</li>
                        <li>Políticas de Privacidade</li>
                        <li>Desenvolvedores</li>
                        <li>Administrador</li>
                    </ul>
                    <div className="my-6 flex items-center justify-center md:justify-end flex-row w-full">
                        <img className="w-8 h-8" src="./icons/icon_gmail.svg" alt="Icone do Gmail" />
                        <img className="w-8 h-8 mx-6" src="./icons/icon_whatsapp.svg" alt="Icone do Whatsapp" />
                        <img className="w-8 h-8" src="./icons/icon_instagram.svg" alt="Icone do Instagram" />
                    </div>
                    <span className="w-full text-center md:text-right">Copyright © 2023 MovingRH</span>
                    <span className="w-full text-center md:text-right">Todos os Direitos Reservados</span>
                </article>
            </section>
            <section className="border-solid border-t-2 w-full py-4 flex items-center justify-center">
                <div className="w-full 2xl:w-5/6 flex items-center justify-center flex-col md:flex-row">
                    <article className="flex items-center justify-center md:justify-start w-full flex-row mb-4 md:mb-0 md:px-24">
                        <img
                            src="./icons/icon_phone.svg"
                            alt="Icone de Telefone"
                            className="w-6 mr-4"
                        />
                        <span>(21) 98833-2645</span>
                    </article>
                    <article className="flex items-center justify-center md:justify-end w-full flex-row md:px-24">
                        <img
                            src="./icons/icon_email.svg"
                            alt="Icone de E-mail"
                            className="w-6 mr-4"
                        />
                        <span>contato@movingrh.com.br</span>
                    </article>
                </div>
            </section>
        </footer>
    )
}