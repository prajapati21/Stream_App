import { 
      FormDesign,
      Input
 } from "../../Tailwind";
const ContactForm = () =>{
      const fields =[
            {
                  component : "input",
                  props : {
                    name : "name",
                    placeholder : "name",
                    className: "bg-gray-100 rounded-sm border-0 p-3 w-full",
                    width : "full"
                  }
                },
            {
                  component : "input",
                  props : {
                    name : "email",
                    placeholder : "Email",
                    className: "bg-gray-100 rounded-sm border-0 p-3 w-full",
                    width : "full",
                    type : "email"
                  }
                },
            {
                  component : "input",
                  props : {
                    name : "mobile",
                    placeholder : "Mobile",
                    className: "bg-gray-100 rounded-sm border-0 p-3 w-full",
                    width : "full",
                    type : "number"
                  }
                },
            {
                  component : "input",
                  props : {
                    name : "message",
                    placeholder : "Message",
                    className: "bg-gray-100 rounded-sm border-0 p-3 w-full",
                    width : "full",
                    type : "number",
                    textarea : true
                  }
                },
      ]
      const design = (
            <>
              <FormDesign 
              fields={fields}
              />
            </>
      );
      return design;
}
export default ContactForm;