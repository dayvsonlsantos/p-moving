// Google Material Icon
export const IconArrow = ({ ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 -960 960 960"
            className={`fill-current duration-100 ${props.isDropdownMenu ? 'rotate-180' : 'rotate-0'} `}>
            <path
                d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"
            />
        </svg>
    )
}

// Heroicons
export const IconAboutUs = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.1}
            stroke="currentColor"
            className="w-2/4">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
        </svg>
    )
}

// Heroicons
export const IconEmail = ({ ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 ${props.mr_4_text_moving_orange_01}`}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
        </svg>

    )
}

// Heroicons
export const IconPhone = ({ ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 ${props.mr_4_text_moving_orange_01}`}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
        </svg>
    )
}

// Feather Icon
export const IconInstagram = ({ ...props }) => {
    return (
        <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className={`${props.w_8_h_8_text_moving_orange_01}`}>
            <rect
                width="20"
                height="20"
                x="2"
                y="2"
                rx="5"
                ry="5"
            ></rect>
            <path
                d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
            >
            </path>
            <path
                d="M17.5 6.5h.01"
            >
            </path>
        </svg>
    )
}

// IonicIcons
export const IconWhatsapp = ({ ...props }) => {
    return (
        <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={`${props.w_8_h_8_mx_6_text_moving_orange_01}`}
        >
            <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M414.73 97.1A222.14 222.14 0 0 0 256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0 0 29.78 111L32 480l118.25-30.87a223.63 223.63 0 0 0 106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 0 0 414.73 97.1ZM256.94 438.66h-.08a185.75 185.75 0 0 1-94.36-25.72l-6.77-4l-70.17 18.32l18.73-68.09l-4.41-7A183.46 183.46 0 0 1 71.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 0 1 185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52Zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78s-14.4 18-17.65 21.75s-6.5 4.16-12.07 1.38s-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26s.93-6.94-.46-9.71s-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52c-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 0 0-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38s39.3 59.73 95.21 83.76a323.11 323.11 0 0 0 31.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2c10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37s-5.11-3.71-10.69-6.48Z"
            />

        </svg>


    )
}

// Majesticons
export const IconGmail = ({ ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={`${props.w_8_h_8_text_moving_orange_01}`}
        >
            <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m7 9l3.75 3a2 2 0 0 0 2.5 0L17 9m4 8V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"
            />
        </svg>
    )
}

// Basicons
export const IconFile = () => {
    return (
        <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-2/5">
            <path
                d="M4 21h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-9L9.297 3.445A1 1 0 0 0 8.465 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z"
            >

            </path>
        </svg>
    )
}

// SVG Repo
export const IconHandShake = ({ ...props }) => {
    return (
        <svg
            width="58"
            height="53"
            viewBox="0 0 58 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${props.class}`}
        >
            <path
                d="M49.9238 32.0945C50.1607 34.4751 49.4636 36.8052 47.9636 38.6579L42.5956 45.2848C41.0956 47.1375 38.9715 48.2884 36.6186 48.5244C35.8799 48.5982 35.1466 48.5816 34.4304 48.4747C33.0785 48.2739 31.7997 47.7378 30.6649 46.9325L28.4097 49.7167C26.4467 52.1414 23.3196 53.3627 20.2513 52.9053C18.6713 52.67 17.1788 52.0027 15.9375 50.976L9.37953 45.5497C7.54697 44.0345 6.40811 41.8885 6.17255 39.508C5.93768 37.1282 6.63547 34.7966 8.13552 32.9467L11.1397 29.2344C11.3534 28.9702 11.6627 28.8025 11.9986 28.7687C12.3332 28.7342 12.6705 28.8377 12.9306 29.053L27.7966 41.3496C27.8887 41.3931 27.9809 41.4456 28.0635 41.5139L31.7362 44.5506C33.043 45.6312 34.6857 46.1342 36.3633 45.9644C38.0422 45.794 39.5559 44.9736 40.6245 43.655L45.9931 37.0274C48.1998 34.3026 47.7997 30.2729 45.1048 28.0428L41.2908 25.053C39.5068 27.0057 37.3731 28.0807 34.9329 28.2457C30.2265 28.5637 25.6902 25.3545 23.6112 23.6233C20.6227 27.9593 17.0982 28.0524 16.9371 28.0545C16.8688 28.0552 16.8026 28.0504 16.7371 28.04C16.5903 28.0186 16.4476 27.971 16.3172 27.9006C15.0076 27.1851 14.2381 26.3005 13.965 25.193C13.5984 23.7095 14.1453 21.9645 15.7416 19.5384C19.7078 13.5008 24.3759 13.5395 27.1657 13.5622C27.8048 13.5671 28.3578 13.5726 28.7777 13.5105C30.6253 13.24 31.4234 11.3176 31.4316 11.2969C31.6904 10.6373 32.4305 10.3157 33.0826 10.5724C33.736 10.8339 34.0583 11.5812 33.7988 12.2422C33.7476 12.3768 32.466 15.5688 29.1437 16.0552C28.5319 16.1449 27.858 16.1394 27.1445 16.1339C24.436 16.1111 21.0651 16.0835 17.8602 20.9605C16.4681 23.0789 16.3158 24.0932 16.4346 24.5693C16.4824 24.7694 16.6196 25.0654 17.2 25.4414C17.9975 25.2883 20.2724 24.5506 22.2156 21.0268C22.4088 20.6769 22.7529 20.4382 23.1449 20.3809C23.5368 20.3236 23.9355 20.4534 24.2182 20.7342C24.2714 20.7873 29.6353 26.0273 34.7697 25.6774C36.8119 25.5367 38.5188 24.5389 39.9902 22.6269C40.3343 22.1818 40.9092 22.0321 41.409 22.2067C41.6691 22.2143 41.9306 22.2978 42.1518 22.4716L46.6909 26.0293C48.5501 27.5688 49.6889 29.714 49.9238 32.0945ZM28.6391 45.3724L12.3018 31.8599L10.1026 34.5772C9.03336 35.8958 8.53835 37.5567 8.70495 39.2527C8.87291 40.9501 9.68541 42.4806 10.9909 43.5597L17.5489 48.986C18.4344 49.7188 19.4975 50.1942 20.6213 50.3619C22.8444 50.6924 25.0177 49.843 26.4392 48.0897L28.6391 45.3724Z"
                fill={`${props.wristColor}`}
            />
            <path
                d="M3.70417 23.2313C5.51761 24.73 8.18997 24.4596 9.67431 22.6276L20.8854 8.77976C22.3697 6.94709 22.1028 4.2457 20.2893 2.74631L18.14 0.969528C16.3265 -0.529866 13.6542 -0.260761 12.1712 1.57329L0.958748 15.4197C-0.524229 17.2538 -0.257266 19.9545 1.55481 21.4539L3.70417 23.2313Z"
                fill={`${props.handColor}`}
            />
            <path
                d="M43.1478 1.16963L56.5342 12.8791C58.306 14.4289 58.4985 17.1365 56.9644 18.9277L55.1482 21.0495C53.6147 22.8394 50.9341 23.0347 49.163 21.4849L35.7773 9.77545C34.0048 8.22568 33.813 5.51877 35.3451 3.72819L37.164 1.60503C38.6961 -0.18486 41.3767 -0.380823 43.1478 1.16963Z"
                fill={`${props.handColor}`}
            />
        </svg>

    )
}

// SVG Repo
export const IconMission = ({ ...props }) => {
    return (
        <svg
            width="91"
            height="105"
            viewBox="0 0 91 105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${props.class}`}
        >
            <path
                d="M58.8903 -2.693e-06L51.9614 10.3507L62.3553 17.2508L69.2841 6.90006L58.8903 -2.693e-06Z"
                fill={`${props.flagColor}`} />
            <path
                d="M55.003 87.6522C55.6855 87.4057 56.3196 87.0259 56.8565 86.5015C58.0275 85.356 58.5747 83.7711 58.3582 82.1494L55.4276 60.2619V44.7117L68.2088 40.1664C69.8128 39.5953 70.9994 38.205 71.3042 36.5355L73.2475 25.8876L89.1396 35.9578L90.9998 33.0463L73.8069 22.1518C73.767 21.0357 73.3617 19.9542 72.6274 19.078C71.6556 17.9189 70.2285 17.2532 68.7113 17.2532C68.0044 17.2532 67.3378 17.4067 66.7244 17.6621L52.8934 8.89783L51.0333 11.8097L64.1386 20.1136C63.9202 20.5636 63.7506 21.0434 63.6693 21.5608L62.0619 31.9637L51.8943 35.3911C49.9975 33.7178 47.5554 32.7777 45.0349 32.7777C42.8038 32.7777 40.658 33.4985 38.7631 34.9131L38.2281 35.3546C38.098 35.4669 35.2609 38.0335 32.9104 40.1601V34.6871C32.9104 32.0722 31.0465 29.7988 28.5748 29.3985C27.0524 29.1482 25.5123 29.5762 24.3502 30.5609C23.1843 31.546 22.5177 32.9826 22.5177 34.5024V48.5656C22.5177 52.224 25.5075 55.2014 29.1812 55.2014C30.8318 55.2014 32.4152 54.596 33.638 53.4972L34.6427 52.5986V60.2626L31.7294 82.0239C31.3968 84.5078 32.8243 86.8486 35.0706 87.6508C32.3077 88.4268 29.618 89.5172 27.0735 90.9541L7.50244 101.999L9.21034 105L28.7814 93.9554C38.8086 88.2995 51.2661 88.2977 61.2914 93.9554L80.8625 105L82.5704 101.999L62.9993 90.9541C60.4537 89.5186 57.764 88.4287 55.003 87.6522ZM31.3196 50.9339C30.7324 51.4616 29.972 51.7515 29.1805 51.7515C27.4171 51.7515 25.9812 50.3216 25.9812 48.5656V34.5024C25.9812 33.9953 26.2029 33.5158 26.5928 33.188C26.9878 32.8549 27.4918 32.7206 28.0183 32.8016C28.8187 32.9326 29.4458 33.7605 29.4458 34.6867V47.9565L32.3421 45.3347C32.3421 45.3347 40.2057 38.2175 40.4692 37.985L40.9041 37.6243C43.7553 35.4992 47.7963 35.9268 50.152 38.523L50.9139 39.3631L65.164 34.5591L67.0902 22.0845C67.0954 22.055 67.1128 22.0326 67.118 22.0035L70.0903 23.8872L67.8939 35.9184C67.809 36.3773 67.4834 36.76 67.0418 36.9171L51.963 42.2819V60.3763L54.9232 82.6054C54.9941 83.14 54.8142 83.6626 54.4277 84.0405C54.2026 84.2631 53.709 84.6219 52.9518 84.5027C52.2364 84.3941 51.6389 83.7229 51.5299 82.9053L48.2822 58.6512H41.785L38.5182 83.0536C38.4524 83.54 38.1804 83.9728 37.768 84.2436C37.3505 84.5196 36.8398 84.5939 36.3288 84.4559C35.5546 84.2421 35.0399 83.3763 35.1596 82.481L38.0888 60.6037L38.1061 44.8519L31.3196 50.9339ZM40.3613 86.5623C41.2186 85.7568 41.7954 84.6907 41.9532 83.511L44.818 62.1014H45.2493L48.0967 83.3627C48.2664 84.6271 48.8727 85.7446 49.7404 86.5674C46.6283 86.1671 43.4741 86.1656 40.3613 86.5623Z"
                fill={`${props.mainColor}`} />
            <path
                d="M55.4274 22.4282C55.4274 16.7204 50.7663 12.0787 45.0347 12.0787C39.3032 12.0787 34.6421 16.7204 34.6421 22.4282C34.6421 28.1359 39.3032 32.7777 45.0347 32.7777C50.7663 32.7777 55.4274 28.1359 55.4274 22.4282ZM45.0347 29.3278C41.2136 29.3278 38.1063 26.2335 38.1063 22.4282C38.1063 18.6229 41.2136 15.5285 45.0347 15.5285C48.8559 15.5285 51.9632 18.6229 51.9632 22.4282C51.9632 26.2335 48.8559 29.3278 45.0347 29.3278Z"
                fill={`${props.mainColor}`} />
            <path
                d="M86.6052 46.577H83.141V50.0268H79.6768V53.4766H83.141V56.9265H86.6052V53.4766H90.0694V50.0268H86.6052V46.577Z"
                fill={`${props.mainColor}`} />
            <path
                d="M72.7484 63.8261V62.101H74.4807V58.6512H72.7484V56.9265H69.2842V58.6512H67.5522V62.101H69.2842V63.8261H72.7484Z"
                fill={`${props.mainColor}`} />
            <path
                d="M83.1413 62.101H79.6771V65.5508H76.2129V69.0007H79.6771V72.4505H83.1413V69.0007H86.6055V65.5508H83.1413V62.101Z"
                fill={`${props.mainColor}`} />
            <path
                d="M19.0531 15.5285H22.5173V12.0787H25.9815V8.62885H22.5173V5.17902H19.0531V8.62885H15.5889V12.0787H19.0531V15.5285Z"
                fill={`${props.mainColor}`} />
            <path
                d="M5.19614 10.3536V8.62885H6.92843V5.17902H5.19614V3.45392H1.73192V5.17902H0V8.62885H1.73192V10.3536H5.19614Z"
                fill={`${props.mainColor}`} />
            <path
                d="M10.3928 25.878V22.4282H13.857V18.9783H10.3928V15.5285H6.92857V18.9783H3.46436V22.4282H6.92857V25.878H10.3928Z"
                fill={`${props.mainColor}`} />
        </svg>

    )
}

// SVG Repo
export const IconVision = ({ ...props }) => {
    return (
        <svg
            width="91"
            height="99"
            viewBox="0 0 91 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${props.class}`}
        >
            <path
                d="M91 21.6562V0H59.9773V34.0312H53.7728V52.5938H26.8864V71.1562H0V99H83.7612V34.0312H63.0796V21.6562H91ZM63.0796 3.09375H87.8977V18.5625H63.0796V3.09375ZM29.9887 55.6875H53.7728V60.8438H29.9887V55.6875ZM3.10227 74.25H26.8864V79.4063H3.10227V74.25ZM80.659 95.9062H3.10227V82.5001H26.8864V89.2033H29.9887V63.9376H53.7728V74.7657H56.875V45.3751H80.6592V95.9062H80.659ZM80.659 37.125V42.2813H56.875V37.125H80.659Z"
                fill={`${props.mainColor}`} />
            <path
                d="M83.2442 6.1875H76.0056V9.28125H83.2442V6.1875Z"
                fill={`${props.mainColor}`} />
            <path
                d="M83.2443 12.375H67.7329V15.4688H83.2443V12.375Z"
                fill={`${props.mainColor}`} />
            <path
                d="M33.6079 11.3438V14.4376H42.2722L3.55664 53.0466L5.75014 55.2346L44.4659 16.6252V23.2031H47.5681V11.3438H33.6079Z"
                fill={`${props.mainColor}`} />
            <path
                d="M9.82379 85.5938H5.6875V88.6876H9.82379V85.5938Z"
                fill={`${props.mainColor}`} />
            <path
                d="M24.3008 85.5938H20.1646V88.6876H24.3008V85.5938Z"
                fill={`${props.mainColor}`} />
            <path
                d="M36.71 67.0313H32.5737V70.1251H36.71V67.0313Z"
                fill={`${props.mainColor}`} />
            <path
                d="M51.1876 67.0313H47.0513V70.1251H51.1876V67.0313Z"
                fill={`${props.mainColor}`} />
            <path
                d="M63.5963 48.4688H59.46V51.5626H63.5963V48.4688Z"
                fill={`${props.mainColor}`} />
            <path
                d="M78.0738 48.4688H73.9375V51.5626H78.0738V48.4688Z"
                fill={`${props.mainColor}`} />
        </svg>

    )
}

export const IconValues = ({ ...props }) => {
    return (
        <svg
            fill={`${props.mainColor}`}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className={`${props.class}`}
            >
            <path d="M29.064 19.701c-0.421-0.177-0.91-0.28-1.423-0.28-0.577 0-1.123 0.13-1.611 0.362l0.023-0.010-5.778 2.595c0.003-0.047 0.026-0.087 0.026-0.134-0.015-1.371-1.129-2.476-2.502-2.476-0.069 0-0.137 0.003-0.204 0.008l0.009-0.001h-3.783l-4.76-1.395c-0.062-0.020-0.133-0.031-0.207-0.031-0.001 0-0.003 0-0.004 0h-2.169v-0.757c-0-0.414-0.336-0.75-0.75-0.75h-3.883c-0.414 0-0.75 0.336-0.75 0.75v0 12.208c0 0.414 0.336 0.75 0.75 0.75h3.883c0.414-0 0.75-0.336 0.75-0.75v0-1.005c1.818 0.284 3.445 0.742 4.987 1.367l-0.149-0.054c1.15 0.416 2.478 0.656 3.862 0.656 0.007 0 0.014 0 0.021-0h-0.001c0.005 0 0.011 0 0.017 0 1.604 0 3.133-0.319 4.528-0.898l-0.078 0.029c1.243-0.553 2.298-1.136 3.297-1.799l-0.082 0.051c0.338-0.209 0.674-0.418 1.014-0.619 1.633-0.967 2.945-1.816 4.129-2.672 0.579-0.412 1.083-0.819 1.563-1.253l-0.014 0.013c0.373-0.302 0.671-0.682 0.871-1.116l0.008-0.019c0.031-0.079 0.048-0.17 0.048-0.266 0-0.057-0.006-0.112-0.018-0.165l0.001 0.005c-0.146-1.017-0.755-1.866-1.603-2.337l-0.016-0.008zM5.181 29.041h-2.383v-10.709h2.383zM28.719 22.541c-0.412 0.37-0.86 0.729-1.328 1.062l-0.047 0.032c-1.143 0.826-2.418 1.65-4.014 2.596-0.348 0.205-0.691 0.418-1.037 0.631-0.854 0.573-1.837 1.12-2.864 1.586l-0.13 0.053c-1.152 0.474-2.49 0.748-3.892 0.748-1.203 0-2.359-0.203-3.436-0.575l0.074 0.022c-1.555-0.648-3.363-1.145-5.248-1.407l-0.117-0.013v-7.436h2.062l4.76 1.395c0.062 0.020 0.133 0.031 0.207 0.031 0.001 0 0.003 0 0.004 0h3.89c0.883 0 1.197 0.521 1.197 0.969s-0.314 0.969-1.197 0.969h-6.809c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h7.781c0.001 0 0.003 0 0.004 0 0.11 0 0.214-0.024 0.307-0.068l-0.004 0.002 7.795-3.5c0.288-0.132 0.625-0.209 0.98-0.209 0.265 0 0.52 0.043 0.758 0.122l-0.017-0.005c0.383 0.23 0.658 0.604 0.752 1.046l0.002 0.011c-0.136 0.159-0.278 0.302-0.429 0.435l-0.005 0.004zM16.432 16.74c0.138 0.153 0.336 0.248 0.557 0.248s0.419-0.095 0.556-0.247l0.001-0.001 5.969-6.616c1.082-1.007 1.774-2.421 1.832-3.997l0-0.010c0-0.012 0-0.026 0-0.040 0-1.332-0.543-2.536-1.42-3.405l-0-0c-0.904-0.878-2.138-1.42-3.5-1.42-1.334 0-2.546 0.52-3.445 1.367l0.003-0.002c-0.851-0.723-1.962-1.163-3.176-1.163-0.432 0-0.85 0.056-1.249 0.16l0.034-0.008c-1.754 0.498-3.107 1.852-3.597 3.569l-0.009 0.037c-0.094 0.364-0.148 0.781-0.148 1.212 0 1.455 0.619 2.766 1.609 3.683l0.003 0.003zM10.437 5.601c0.351-1.238 1.306-2.193 2.518-2.539l0.026-0.006c0.249-0.070 0.536-0.11 0.832-0.11h0c1.048 0.034 1.983 0.493 2.643 1.209l0.002 0.003c0.136 0.136 0.323 0.22 0.53 0.22s0.395-0.084 0.53-0.22v0c0.742-0.818 1.79-1.347 2.961-1.407l0.010-0h0.025c1.842 0.012 3.33 1.508 3.33 3.351 0 0.002 0 0.003 0 0.005v-0c-0.060 1.182-0.589 2.229-1.403 2.969l-0.003 0.003-0.027 0.028-5.424 6.013-5.45-6.041c-0.737-0.651-1.199-1.598-1.199-2.653 0-0.292 0.035-0.576 0.102-0.848l-0.005 0.024z"></path>
        </svg>

    )
}