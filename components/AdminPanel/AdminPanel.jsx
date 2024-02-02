"use client"
import Logo from "../Logo/Logo";
import { IconButton } from "../../Tailwind";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
const AdminPanel = ({children}) =>{
      const dispatch = useDispatch();
      const [sidebar,setSidebar] = useState(null);
      const [section,setSection] = useState(null);
      const [open,setOpen] = useState(true);

      useEffect(()=>{
            if(open)
            {
                  return(
                        setSidebar("w-0 sm:w-2/12"),
                        setSection("w-full sm:w-10/12")
                  )
            }
            else{
                  return(
                        setSidebar("absolute sm:static top-0 left-0 w-8/12 min-h-screen sm:w-0"),
                        setSection("w-full")
                  )

            }
      },[open])

      const design = (
            <>
               <div className="min-h-screen flex">
                  <div className={`bg-white shadow-lg overflow-x-hidden ${sidebar}`}>
                        Sidebar
                  </div>
                  <div className={`bg-slate-800 ${section}`}>
                        <nav className="px-5 py-3 bg-gray-100 flex 
                         justify-between items-center">
                              <Logo className="text-black"/>
                              <div className="flex gap-4 items-center">
                                   <IconButton
                                   onClick={()=>setOpen(!open)}
                                   size="sm"
                                   theme="t-secondary"
                                   >format_align_right</IconButton>
                                    <IconButton
                                   onClick={()=>dispatch({type : "OPEN_DIALOG"})}
                                   size="sm"
                                   theme="secondary"
                                   >add</IconButton>
                              </div>
                        </nav>
                          <div className="p-5">
                               {children}
                          </div>
                  </div>
               </div>
            </>
      );
      return design;

}
export default AdminPanel;