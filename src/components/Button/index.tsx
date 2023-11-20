interface customButtonProps {
    label: string
    bgColor?: string
    color?: string
    action?: () => void
    customClass?: string
    disabled?: boolean
}

export default function CustomButton(props: customButtonProps){
    const {
        label, 
        bgColor,
        color,
        action,
        customClass,
        disabled
    } = props

    return (
        <button 
            className={`${bgColor} ${color} ${customClass} px-5 py-2 lg:px-4 mr-2 rounded-full font-medium text-xs md:text-sm`}
            onClick={action}>
            {label}
        </button>
    )
}