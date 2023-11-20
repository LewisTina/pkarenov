import ErrorForm from '../ErrorForm';

export interface formInput {
    label?:   string;
    placeholder?:   any;
    type?:   string;
    controller:  any;
    name: string;
    onChange?: any
    isRequired?: any
}

export default function InputTextArea(props: formInput){
    const {
        label,
        name, 
        placeholder, 
        isRequired, 
        onChange,
        controller 
    } = props

    return(
        <div className={`my-2 md:mx-0 sm:max-w-none sm:pr-0 md:pr-4 md:max-w-full sm:w-full`}>
            <textarea
                    {...controller(name, {
                            required: isRequired ? true : false,
                        }
                        )}
                    min ="0"
                    className={`border-[1px] bg-white dark:bg-darkest border-gray/40 dark:border-dark-gray/20 rounded-md p-2 px-4 w-80 max-w-full sm:w-full h-40 focus:ring-1 focus:ring-secondary focus:ring-offset-1 outline-none ${(isRequired != undefined) && (isRequired[name] && " ring-blood-red ring-offset-1 ring-1")}`}
                    placeholder={placeholder}
                    onKeyUp={onChange}
                    />
        </div>
    )
}