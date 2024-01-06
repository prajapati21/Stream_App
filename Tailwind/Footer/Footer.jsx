import Image from "next/image";
import Logo from "../../components/Logo/Logo";
const Footer = () =>{
      const design = (
            <>
                  <div className="bg-slate-900 p-16 mt-16 flex justify-between gap-5">
                        <div className="mx-auto">
                         <Logo/>
                         <p className="text-gray-300 my-5">Lorem, ipsum dolor sit amet 
                              consectetur adipisicing elit.<br/> 
                              Veritatis, cum. Dolorum, assumenda? 
                              Iure doloremque porro eaque quibusdam .
                              </p>
                              <div className="flex item-center gap-3">
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
                                          height={6}
                                          />
                                    </button>
                              </div>
                        </div>

                        <div className="mx-auto">
                         <Logo/>
                         <p className="text-gray-300 my-5">Lorem, ipsum dolor sit amet 
                              consectetur adipisicing elit.<br/> 
                              Veritatis, cum. Dolorum, assumenda? 
                              Iure doloremque porro eaque quibusdam .
                              </p>
                              <div className="flex item-center gap-3">
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
                                          height={6}
                                          />
                                    </button>
                              </div>
                        </div>

                        <div className="mx-auto">
                         <Logo/>
                         <p className="text-gray-300 my-5">Lorem, ipsum dolor sit amet 
                              consectetur adipisicing elit.<br/> 
                              Veritatis, cum. Dolorum, assumenda? 
                              Iure doloremque porro eaque quibusdam .
                              </p>
                              <div className="flex item-center gap-3">
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
                                          height={6}
                                          />
                                    </button>
                              </div>
                        </div>

                  </div>
            </>
      );
      return design;
}

export default Footer;