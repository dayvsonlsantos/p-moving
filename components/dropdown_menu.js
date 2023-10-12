import Link from "next/link"
import { IconArrow } from "./icons"

export default function DropdownMenu({ ...props }) {

    return (
        <div onMouseEnter={props.closeOtherDropdown} className="cursor-pointer">
            <span onMouseEnter={props.toggleDropdownMenu} className="flex items-center justify-center flex-row hover:text-moving-orange-01 transition duration-200 ease-in-out">{props.dropdownName}<IconArrow isDropdownMenu={props.isDropdownMenu} /> </span>
            {props.isDropdownMenu ? (
                <div className="absolute rounded-xl bg-slate-50 p-4 mt-4 shadow-md">
                    <ul>
                        {props.selectDropdown.map((item, index) => {
                            return (
                                <Link key={index} href={item.link}><li className="p-3 text-center cursor-pointer rounded-xl hover:bg-moving-orange-01-35 transition duration-200 ease-in-out">{item.linkName}</li></Link>
                            )
                        })}
                    </ul>
                </div>
            ) : null
            }
        </div>
    )
}