import { 
      Navbar,
      IconButton,
      Footer
 } from "../../Tailwind";
 import Logo from "../Logo/Logo";
const Template = ({children}) =>{
     // conts
     const menus = {
      brand : <Logo/>,
      link : [
            {
                  label : "HOME",
                  href : "/"
            },
            {
                  label : "MOVIES",
                  href : "/movies"
            },
            {
                  label : "VIDEOS",
                  href : "/videos"
            },
            {
                  label : "BLOG",
                  href : "/blog"
            },
            {
                  label : "CONTACT",
                  href : "/contact"
            },

      ]
     }

     const dMenu = [
      {
            label : "register",
             href : "/register"
      },
      {
            label : "login",
             href : "/login"
      }
     ]
     const toolbars =
     [
            {
                  label : <IconButton 
                  theme ="primary"
                  size="sm"
                  className="bg-inherit"
                  >search</IconButton>
            },
            {
                  label : <IconButton 
                  dropdown
                  dropdownMenu={dMenu}
                  theme ="error"
                  size="sm"
                  >person</IconButton>
            }
     ]

     //markup
      const design = (
            <>
                  <Navbar 
                  menu={menus} 
                  theme="dark"
                  toolbar={toolbars}
                  variant="three"
                  />
                  <div>
                        {children}
                  </div>
                  <Footer />
            </>
      );
      return design;
}
export default Template;