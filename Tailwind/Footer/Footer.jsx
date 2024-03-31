import Image from "next/image";
import Logo from "../../components/Logo/Logo";
import ContactForm from "../../components/ContactForm/ContactForm";
import { IconButton } from "..";
const Footer = () =>{
      const design = (
            <>
                 <div className="bg-slate-900 p-16 flex justify-between flex-col sm:flex-row gap-10 sm:gap-0"
                  >
                        <div className="mx-auto">
                         <Logo className="text-white"/>
                         <p className="text-gray-300 my-5">Lorem, ipsum dolor sit amet 
                              consectetur adipisicing elit.<br/> 
                              Veritatis, cum. Dolorum, assumenda? 
                              Iure doloremque porro eaque quibusdam .
                              </p>
                              <div className="flex items-center gap-3">
                                    <button className="bg-slate-800 px-5 py-2 rounded-md">
                                          <Image 
                                          src="/google-play.png"
                                          width={150}
                                          height={48}
                                          />
                                    </button>
                                    <button >
                                          <Image 
                                          src="/app-store.png"
                                          width={190}
                                          height={60}
                                          />
                                    </button>
                              </div>
                        </div>

                        <div className="mx-auto">
                         <h1 className="text-gray-300 text-xl">
                              Follow Us
                         </h1>
                         <div className="flex gap-3 my-4">
                              <IconButton theme="primary">home</IconButton>
                              <IconButton theme="secondary">home</IconButton>
                              <IconButton theme="warning">home</IconButton>
                              <IconButton theme="success">home</IconButton>
                              <IconButton theme="error">home</IconButton>
                              <IconButton theme="info">home</IconButton>
                         </div>
                              
                        </div>

                        <div className="mx-auto w-full sm:w-3/12">
                         <h1 className="text-xl text-gray-300">CONTACT</h1>
                         <div className=" my-5">
                             <ContactForm />
                              </div>
                        </div>

                  </div>
            </>
      );
      return design;
}

export default Footer;