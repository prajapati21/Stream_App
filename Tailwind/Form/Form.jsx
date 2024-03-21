import "./Form.css";
import { 
    Formik,
    Form
} from "formik";
import * as yup from "yup";
import { 
    Button,
    Input,
    UploadInput,
    Select
} from "..";
const FormDesign = ({fields,grid=1,gap=4}) =>{
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
    const validation={};

    const Fields = () =>{
        const allFields = fields.map((item,index)=>{
            const {component,props} = item;
            switch(component)
            {
                case "input" : return <Input key={index} {...props} />
                case "upload" : return <UploadInput key={index} {...props} />
                case "select" : return <Select key={index} {...props} />
                default :return null;
            }
        });
        return allFields;
    }

   
    const design = (
        <>
            <Formik>
                {
                    (formik)=>{
                        return (
                            <>
                                <Form className={`grid gap-${gap}`}>
                                    <div className={`grid grid-cols-${grid} gap-${gap}`}>
                                      <Fields />
                                    </div>
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