import { 
    Field,
    ErrorMessage 
} from "formik";
export const Input = ({
    name,
    type="text",
    textarea=false,
    label=null,
    ...rest
}) =>{
    const design = (
        <>
           <div className="flex flex-col">
           {
                 label ? <label 
                 className="text-sm font-bold text-left mb-2">{label}</label> 
                 : null
            }
           <Field 
            name={name} 
            type={type} 
            as={textarea ? "textarea" : null}
            {...rest}
            />
            <ErrorMessage 
            name={name} 
            component="p"
            className="text-red-500 text-sm font-bold p-0 m-0"
            />
           </div>
        </>
    );
    return design;
}

export const Select = ({name,data,...rest}) =>{
    const design = (
        <>
                <Field
                name={name}
                as="select"
                {...rest}
                >
                    {
                        data.map((item,index)=>{
                            return <option 
                            key={index}
                            value={item.value}> 
                            {item.label}
                            </option>
                        })
                    }
                </Field>
          <ErrorMessage 
          name={name}
          component="p"   
          className="text-red-500 text-sm font-bold p-0 m-0"       
          />
        </>
    );
    return design;
}

export const UploadInput = ({label=null,...rest}) =>{
    const design = (
        <>
          <div className="flex flex-col">
           {
           label ?  
           <label className="text-sm font-bold text-left mb-2">{label}</label> 
           : null
           }
              <Field type="file" {...rest} />  
              <ErrorMessage 
                name={rest.name}
                component="p"   
                className="text-red-500 text-sm font-bold p-0 m-0"       
            />
          </div>
        </>
    );return design
}