import { IconHandShake } from "./icons";

export default function Header({ ...props }) {
    return (
        <article className="flex items-center justify-center flex-col my-4">
            <div className="flex items-center justify-center flex-row w-60 md:w-96 text-md md:text-base">
                <div className="w-1/6">
                    <IconHandShake class="w-8 md:w-10" wristColor="#384550" handColor="#F0A65B"/>
                </div>
                <span className="text-sm larger:text-base extra-larger:text-lg text-center w-5/6">{props.text}</span>
            </div>
            <hr className="rounded-full border-4 w-2/4 2xl:w-2/5 my-6 border-moving-orange-01-35"/>
        </article>
    )
}