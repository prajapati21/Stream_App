import "./Form.css";
import { 
    Formik,
    Form
} from "formik";
import * as yup from "yup";
const FormDesign = ({children,...rest}) =>{
    const schema = yup.object({
        fullname : yup.string()
        .required("This Field Is Required !"),
        email : yup.string()
        .required("This Field Is Required !")
        .email("Enter a valid email"),
        password : yup.string()
        .required("This Field Is Required !")
    })
    const defaultValues = {
        fullname : "",
        email : "",
        password : ""
    }
    const design = (
        <>
            <Formik 
            initialValues={defaultValues}
            validationSchema={schema}
            {...rest}
            >
                {
                    (formik)=>{
                        return (
                            <>
                                <Form>
                                {children}
                                <button 
                                className="p-3 mt-4 bg-red-500 text-white"
                                >
                                    Submit
                                </button>
                                </Form>
                            </>
                        )
                    }
                }
            </Formik>
        </>
    );
    return design;
}
export default FormDesign;