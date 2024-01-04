"use client"

import Link from 'next/link'
import DropdownMenu from './dropdown_menu'
import { useState } from 'react'
import { DropdownAboutUsLink, DropdownServiceLink } from './dropdown_links'

export default function Navbar() {

    // Dropdown -> About Us ("Quem Somos") menu item

    const [isDropdownAboutUs, setDropdownAboutUs] = useState(false)

    const toggleDropdownAboutUs = () => { setDropdownAboutUs(!isDropdownAboutUs) }

    const closeDropdownAboutUs = () => { setDropdownAboutUs(false) }


    // Dropdown -> Service ("Serviços") menu item

    const [isDropdownService, setDropdownService] = useState(false)

    const toggleDropdownService = () => { setDropdownService(!isDropdownService) }

    const closeDropdownService = () => { setDropdownService(false) }


    // Close bothDropdown

    const closeBothDropdown = () => {
        setDropdownService(false)
        setDropdownAboutUs(false)
    }



    return (
        <header onMouseLeave={closeBothDropdown} className="hidden max-w-3xl w-1/2 lg:flex items-center justify-center fixed left-1/2 -translate-x-1/2 rounded-full bg-slate-50 p-2 mt-4 shadow-md">
            <nav className="flex items-center justify-center flex-row w-full">
                <ul className="flex items-center justify-evenly flex-row w-full">
                    <li onMouseEnter={closeBothDropdown} className="cursor-pointer hover:text-moving-orange-01 transition duration-200 ease-in-out"><Link href="/">Home</Link></li>
                    {/* About Us ("Quem Somos") Dropdown */}
                    <DropdownMenu
                        dropdownName={"Quem Somos"} //Dropdown Name
                        closeOtherDropdown={closeDropdownService} //Close Dropdown Service ("Serviços")
                        toggleDropdownMenu={toggleDropdownAboutUs} // Change DropdownMenu State
                        isDropdownMenu={isDropdownAboutUs} // Change Arrow Position by DropdownMenu State
                        selectDropdown={DropdownAboutUsLink} // Select the DropdownMenu to it's menu item
                    />

                    {/* Service ("Serviços") Dropdown */}
                    <DropdownMenu
                        dropdownName={"Serviços"} //Dropdown Name
                        closeOtherDropdown={closeDropdownAboutUs} //Close Dropdown About Us ("Quem Somos")
                        toggleDropdownMenu={toggleDropdownService} // Change DropdownMenu State
                        isDropdownMenu={isDropdownService} // Change Arrow Position by DropdownMenu State
                        selectDropdown={DropdownServiceLink} // Select the DropdownMenu to it's menu item
                    />
                    <li onMouseEnter={closeBothDropdown} className="cursor-pointer hover:text-moving-orange-01 transition duration-200 ease-in-out"><Link href="/contato">Contato</Link></li>
                    <li onMouseEnter={closeBothDropdown} className="bg-moving-orange-01 py-2 px-4 rounded-full text-white cursor-pointer transition duration-200 ease-in-out hover:scale-125"><Link href="/vagas">Vagas</Link></li>
                </ul>
            </nav>
        </header>

    )
}