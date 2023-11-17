interface customButtonProps {
    label: string
    bgColor?: string
    color?: string
    action?: () => {}
    customClass?: string
}

export default function CustomButton(props: customButtonProps){
    const {
        label, 
        bgColor,
        color,
        action,
        customClass,
    } = props

    return (
        <button 
            className={`${bgColor} ${color} ${customClass} px-5 py-2.5 lg:px-4 mx-1 rounded-full font-medium text-sm`}
            onClick={action}>
            {label}
        </button>
    )
}