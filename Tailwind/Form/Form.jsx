import "./Form.css";
import { 
    Formik,
    Form
} from "formik";
import * as yup from "yup";
import { Button } from "..";
const FormDesign = ({
    children, 
    className="",
    fields,
    ...rest
}) =>{
    const schema = {
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
        .required("This Field Is Required !"),
        title : yup.string()
        .required("This Field Is Required !"),
        desc : yup.string()
        .required("This Field Is Required !"),
        duration : yup.string()
        .required("This Field Is Required !"),
        staring : yup.string()
        .required("This Field Is Required !"),
        thumbnail : yup.string()
        .required("This Field Is Required !"),
        movie : yup.string()
        .required("This Field Is Required !"),
        tags : yup.string()
        .required("This Field Is Required !"),
    }
    const defaultValues = {};
    const validation={}

    fields.map((item,index)=>{
        return (
            defaultValues[item] = "",
            validation[item] =""
        )
    });
    const design = (
        <>
            <Formik 
            initialValues={defaultValues}
            validationSchema={yup.object(validation)}
            {...rest}
            >
                {
                    (formik)=>{
                        return (
                            <>
                                <Form className={className}>
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