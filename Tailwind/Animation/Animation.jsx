import { Icon } from "..";

export const Carousel = ({
      data,
      height=720,
      arrow=true,
      dots=true,
      counting=true
}) =>{
      const Anim = ({item}) =>{
            const a = (
                  <>
                      <div style={{
                        width : "100%",
                        height : height,
                        background : `url(${item.image})`,
                        backgroundSize : "cover"
                      }}></div>
                  </>
            );
            return a;
      }
    const design = (
      <>
          <div className="overflow-hidden relative">
            <div className="flex" style={{
                  width : `${100*data.length}%`
            }}>
                  {
                        data.map((item,index)=>{
                              return <Anim key={index} item={item} />
                        })
                  }
            </div>
            {/*  next and forward code  */}
            <div className="absolute 
            left-0 top-0 
             p-5 
            h-full flex flex-col justify-between"
            >
                  {
                        counting ?<label>1/3</label> : <label></label>
                  }
                 {
                    arrow ?<button>
                   <Icon className="text-white">arrow_back_ios</Icon>
             </button> : null
                 }
                  <label></label>
            </div>
            <div className="absolute 
            right-0 top-0 
             p-5 
            h-full flex flex-col justify-between"
            >
                  <label></label>
                    {
                        arrow ?  <button>
                        <Icon className="text-white">arrow_forward_ios</Icon>
                  </button> : null
                    }
                  <label></label>
            </div>
            {
                  dots ?
                  <div 
                  className="absolute bottom-0 
                  left-0 
                  w-full flex justify-center p-5"
                  >
                       <div className="flex gap-3">
                       {
                              data.map((item,index)=>{
                                    return (
                                          <>
                                             <button style={{
                                                width : "50px",
                                                height : "5px",
                                                background : "rgba(255,255,255,0.3)"
                                             }}></button>
                                          </>
                                    )
                              })
                        }
                       </div>

                  </div> : null
            }

          </div>
      </>
    );
    return design;
} 