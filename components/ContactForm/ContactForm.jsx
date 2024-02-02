import { 
      FormDesign,
      Input
 } from "../../Tailwind";
const ContactForm = () =>{
      const fields =[
            "name",
            "email",
            "mobile",
            "message"
      ]
      const design = (
            <>
              <FormDesign fields={fields}>
                  <div className="flex mb-3 flex-col gap-3">
                  <Input 
                  name="name"
                  placeholder="Name"
                  />
                  <Input 
                  name="email"
                  type="email"
                  placeholder="Email"
                  />
                  <Input 
                  name="mobile"
                  placeholder="number"
                  />
                  <Input 
                  name="Text"
                  placeholder="Message"
                  textarea
                  />
                  </div>
              </FormDesign>
            </>
      );
      return design;
}
export default ContactForm;