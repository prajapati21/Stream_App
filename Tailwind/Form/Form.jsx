import "./Form.css";
import { 
    Formik,
    Form
} from "formik";
import * as yup from "yup";
import { Button } from "..";
const FormDesign = ({children,...rest}) =>{
    const schema = yup.object({
        fullname : yup.string()
        .required("This Field Is Required !"),
        name : yup.string()
        .required("This Field Is Required !"),
        email : yup.string()
        .required("This Field Is Required !")
        .email("Enter a valid email"),
        password : yup.string()
        .required("This Field Is Required !"),
        mobile : yup.string()
        .required("This Field Is Required !"),
        message : yup.string()
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
                                <Button 
                                theme="error"
                                >
                                    Submit
                                </Button>
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