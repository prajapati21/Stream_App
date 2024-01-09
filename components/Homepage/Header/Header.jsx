import { Button,Carousel,Icon } from "../../../Tailwind";
const Header = () =>{

      const Caption = ({data}) =>{
            const cap = (
                  <>
                  <div className="flex flex-col gap-4 sm:gap-10 px-5">
                     <div>
                        <h1 className="text-white mb-3 font-bold text-2xl sm:text-8xl">
                              {data.title}
                        </h1>
                        <div className="flex gap-16 items-center">
                              <div>
                                    {
                                       Array(data.rating).fill("sachin").map((item,index)=>{
                                          return <Icon key={index} className="text-red-600">star</Icon>
                                       })   
                                    }
                                    {
                                       Array(5-data.rating).fill("sachin").map((item,index)=>{
                                          return <Icon key={index} className="text-red-600">star_outline</Icon>
                                       })   
                                    }
                              </div>
                              <p className="text-white text-lg">
                              <span className="font-bold text-red-500">
                                    Duration : &nbsp;
                              </span>
                              {data.duration}
                        </p>

                        </div>
                     </div>
                     <div className="text-white flex flex-col gap-0 sm:gap-2">
                        <p className="text-sm sm:text-lg">
                              <span className="font-bold text-red-500">
                                    Staring : &nbsp;
                              </span>
                              {data.staring}
                        </p>
                        <p className="text-sm sm:text-lg">
                              <span className="font-bold text-red-500">
                                    Category : &nbsp;
                              </span>
                              {data.category}
                        </p>
                        <p className="text-sm sm:text-lg">
                              <span className="font-bold text-red-500">
                                    Tags: &nbsp;
                              </span>
                             {data.tags}
                        </p>
                     </div>
                     <div>
                        <Button 
                        theme="error"
                        className="flex gap-2 Py-1 sm:py-3.5 px:2 sm:px-6"
                        >
                              <Icon>play_circle</Icon>
                              play Now
                        </Button>
                     </div>
                  </div>
                  </>
            );
            return cap;
      }
      const data =[
            {
                  image : "sanddust2.jpg",
                  caption : <Caption 
                  data={{
                        title : "Jai Shree Ram",
                        rating : 3,
                        duration : "02:20:15",
                        staring : "Hritik Roushan",
                        category : "Comedy,darama,action",
                        tags : "Comedy,darama,action",
                  }}
                  />
            },
            {
                  image : "movie-abc.png",
                  caption : <Caption 
                  data={{
                        title : "Hanuman",
                        rating : 2,
                        duration : "02:20:15",
                        staring : "Hritik Roushan",
                        category : "Comedy,darama,action",
                        tags : "Comedy,darama,action",
                  }}
                  />
            },
            {
                  image : "movie-xyz.png",
                  caption : <Caption 
                  data={{
                        title : "Jai Shree Krishna",
                        rating : 3,
                        duration : "02:20:15",
                        staring : "Hritik Roushan",
                        category : "Comedy,darama,action",
                        tags : "Comedy,darama,action",
                  }}
                  />
            }
      ]
      const design =(
            <>
               <div className="hidden sm:block">
               <Carousel
                data={data}
                height={600}counting={false}
                />
               </div>
               <div className="sm:hidden block">
               <Carousel
                data={data}
                height={200}counting={false}
                />
               </div>
            </>
      );
      return design;
}
export default Header;