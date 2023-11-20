import Link from "next/link"

interface NavItemProps {
    label: string
    path: string
    customClass?: string
    onclick?: () => void
}

export default function NavItem(props: NavItemProps) {
    const {
        label,
        path,
        customClass,
        onclick
    } = props
    return (
        <Link 
            className={`px-5 py-2 mx-1 lg:px-2 ${customClass} rounded-full font-medium text-xs md:text-sm`} 
            onClick={onclick}
            href={path}>
            {label}
        </Link>
    )
}