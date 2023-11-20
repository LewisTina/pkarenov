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


    const fileInputClass = `block text-sm text-slate-500 file:mr-4 mt-2 file:py-2 file:px-4 file:rounded-full file:cursor-pointer file:border-0 file:text-sm file:font-semibold file:bg-secondary/10 file:text-secondary hover:file:text-white hover:file:bg-secondary cursor-pointer border-none`

    return(
        <div className={`my-2 md:mx-0 sm:max-w-none sm:pr-0 md:pr-4 md:max-w-full sm:w-full`}>
            <input
                    {...controller(name, {
                            required: isRequired ? true : false,
                        }
                        )}
                    type={type ? type : 'text'}
                    className={`${type == "file" ? fileInputClass : 'p-2 px-4 border-[1px] bg-white dark:bg-darkest'} rounded-md border-gray/40 dark:border-dark-gray/20 focus:ring-[1px] focus:ring-secondary focus:ring-offset-[1px] w-80 max-w-full sm:w-full outline-none ${(isRequired != undefined) && (isRequired[name] && " ring-blood-red ring-offset-[1px] ring-[1px]")}`}
                    min ={min ? min : 0}
                    max ={max}
                    accept='.pdf, image/*, .docx'
                    placeholder={`${placeholder} ${isRequired ? "*" : ""}`}
                    onKeyUp={onChange}
                    onChangeCapture={handleImageUpload}
                    />
        </div>
    )
}