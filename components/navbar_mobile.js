"use client"

import Link from 'next/link'
import { useState } from 'react'
import { IconArrow, IconClose, IconMenu } from './icons'
import { DropdownAboutUsLink, DropdownServiceLink } from './dropdown_links'

export default function NavbarMobile() {

    // Mobile Navbar

    const [isMobileNav, setMobileNav] = useState(false)

    const toogleNav = () => {
        setMobileNav(!isMobileNav)
        setAboutUs(false)
        setService(false)
    }


    // Modal -> AboutUs ("Serviços") menu item

    const [isAboutUs, setAboutUs] = useState(false)

    const toggleAboutUs = () => { setAboutUs(!isAboutUs) }

    // Modal -> Service ("Serviços") menu item

    const [isService, setService] = useState(false)

    const toggleService = () => { setService(!isService) }


    return (
        <>
            <button onClick={toogleNav} className='absolute lg:hidden w-full h-14 mt-4 flex items-center justify-end pr-6'>
                <IconMenu class={"w-8 h-8"} mainColor={"#F0A65B"} />
            </button>
            {isMobileNav ? (
                <div className='bg-modal-shadow-darker lg:bg-transparent w-screen h-screen fixed z-20 flex item-start justify-end'>
                    <header className="w-screen medium:w-80 rounded-b-3xl medium:rounded-l-3xl flex lg:hidden items-center justify-center fixed bg-slate-50 p-8 shadow-md">
                        <button onClick={toogleNav} className='absolute top-0 w-full flex items-start justify-end mr-6 mt-2'>
                            <IconClose class={"absolute w-10 h-10"} mainColor={"#F0A65B"} xColor={"#384550"} />
                        </button>
                        <nav className="flex items-center justify-center w-full">
                            <ul className="flex items-center justify-evenly flex-col w-full">
                                <Link
                                    className='w-full cursor-pointer hover:text-moving-orange-01 transition duration-200 ease-in-out'
                                    href="/"
                                    onClick={toogleNav}
                                >
                                    <li className="w-full text-center py-4">Home</li>
                                </Link>

                                <button
                                    className='w-full cursor-pointer hover:text-moving-orange-01 transition duration-200 ease-in-out'
                                    onClick={toggleAboutUs}
                                >
                                    <li className="w-full text-center py-4 flex items-center justify-center gap-2 flex-row">
                                        Quem Somos
                                        <IconArrow isDropdownMenu={isAboutUs} Absolute={true} />
                                    </li>
                                </button>


                                <div className={`w-full bg-moving-orange-01-15 rounded-3xl ${isAboutUs ? "max-h-100" : "max-h-0 overflow-hidden"}`}>
                                    {DropdownAboutUsLink.map((item, index) => {
                                        return (
                                            <Link
                                                key={index}
                                                className='w-full cursor-pointer hover:text-moving-orange-01 transition duration-200 ease-in-out'
                                                href={item.link}
                                                onClick={toogleNav}
                                            >
                                                <li className="w-full text-center py-4">{item.linkName}</li>
                                            </Link>
                                        )
                                    })}
                                </div>


                                <button
                                    className='w-full cursor-pointer hover:text-moving-orange-01 transition duration-200 ease-in-out'
                                    onClick={toggleService}
                                >
                                    <li className="w-full text-center py-4 flex items-center justify-center gap-2 flex-row">
                                        Serviços
                                        <IconArrow isDropdownMenu={isService} Absolute={true} />
                                    </li>
                                </button>

                                <div className={`w-full bg-moving-orange-01-15 rounded-3xl ${isService ? "max-h-100" : "max-h-0 overflow-hidden"}`}>
                                    {DropdownServiceLink.map((item, index) => {
                                        return (
                                            <Link
                                                key={index}
                                                className='w-full cursor-pointer hover:text-moving-orange-01 transition duration-200 ease-in-out'
                                                href={item.link}
                                                onClick={toogleNav}
                                            >
                                                <li className="w-full text-center py-4">{item.linkName}</li>
                                            </Link>
                                        )
                                    })}
                                </div>

                                <Link
                                    className='w-full cursor-pointer hover:text-moving-orange-01 transition duration-200 ease-in-out'
                                    href="/contato"
                                    onClick={toogleNav}
                                >
                                    <li className="w-full text-center py-4">Contato</li>
                                </Link>

                                <Link
                                    className='my-4 w-4/5 bg-moving-orange-01 rounded-3xl text-white cursor-pointer transition duration-200 ease-in-out'
                                    href="/vagas"
                                    onClick={toogleNav}
                                >
                                    <li className="text-center py-2">Vagas</li>
                                </Link>
                            </ul >
                        </nav >
                    </header >
                </div >
            ) : null}
        </>
    )
}