import ErrorForm from '../ErrorForm';

export interface formInput {
    label?:   string;
    placeholder?:   any;
    type?:   string;
    controller:  any;
    name: string;
    onChange?: any
    isRequired?: any
    min?: number
    max?: number
    valueSetter?: any
}

export default function InputTextField(props: formInput){
    const {
        label,
        name, 
        type,
        placeholder, 
        isRequired, 
        onChange,
        controller ,
        min,
        max,
        valueSetter
    } = props

    function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
    
        if (file && type == 'file') {
          const reader = new FileReader();
          reader.onload = () => {
            valueSetter("base64", reader["result"])
          };
          reader.readAsDataURL(file);
        }
      }


    const fileInputClass = `block text-sm text-slate-500 file:mr-4 mt-2 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-deep-purple hover:file:bg-deep-purple/25`

    return(
        <div className={`m-3 md:mx-0 sm:max-w-none sm:pr-0 md:pr-4 md:max-w-[50%]`}>
            {label ? <label className='font-bold'> {label} <b>{isRequired ? "*" : ""}</b> <br /></label>: ''}
            <input
                    {...controller(name, {
                            required: isRequired ? true : false,
                        }
                        )}
                    type={type ? type : 'text'}
                    className={`${type == "file" ? fileInputClass : 'rounded-md p-2 px-4 focus:ring-1'}  w-80 max-w-full sm:w-full`}
                    min ={min ? min : 0}
                    max ={max}
                    accept='.pdf, image/*, .docx'
                    placeholder={placeholder}
                    onKeyUp={onChange}
                    onChangeCapture={handleImageUpload}
                    />
                    {
                        (isRequired != undefined) && (isRequired[name] && <ErrorForm message={`${isRequired[name]?.message}`}/>)
                    }
        </div>
    )
}