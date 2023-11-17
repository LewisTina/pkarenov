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
        <div className={`m-3 md:mx-0`}>
            {label ? <label className='font-bold capitalize'> {label} <b>{isRequired ? "*" : ""}</b> <br /></label>: ''}
            <textarea
                    {...controller(name, {
                            required: isRequired ? true : false,
                        }
                        )}
                    min ="0"
                    className='rounded-md p-2 px-4 w-[41.5rem] md:w-full max-w-full h-40' 
                    placeholder={placeholder}
                    onKeyUp={onChange}
                    />
                    {
                        (isRequired != undefined) && (isRequired[name] && <ErrorForm message={`${isRequired[name]?.message}`}/>)
                    }
        </div>
    )
}