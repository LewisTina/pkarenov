import Link from "next/link"

interface NavItemProps {
    label: string
    path: string
}

export default function NavItem(props: NavItemProps) {
    const {
        label,
        path
    } = props
    return (
        <Link 
            className={`px-5 py-2 mx-1 lg:px-1 rounded-full font-medium text-xs`} 
            href={path}>
            {label}
        </Link>
    )
}