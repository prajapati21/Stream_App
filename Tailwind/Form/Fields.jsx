import { 
    Field,
    ErrorMessage 
} from "formik";
export const Input = ({name,
    type="text",
    textarea=false,
    ...rest
}) =>{
    const design = (
        <>
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
        </>
    );
    return design;
}

export const Select = ({name,data,...rest}) =>{
    const design = (
        <>
          <Field
          name={name}
          as="Select"
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