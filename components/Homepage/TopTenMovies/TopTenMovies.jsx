import { Slider } from "../../../Tailwind";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const TopTenMovies = () =>{
      const {AnimationReducer} = useSelector(response=>response);
      const {image} = AnimationReducer;
      
      const data = [
            {
                  thumbnail : "sanddust2.jpg",
                  title : "Jai Shree Ram",
                  duration : "02:05:40"
            },
            {
                  thumbnail : "movie-abc.png",
                  title : "Jai Shree Ram",
                  duration : "02:05:40"
            },
            {
                  thumbnail : "movie-xyz.png",
                  title : "Jai Shree Ram",
                  duration : "02:05:40"  
            },
            {
                  thumbnail : "sanddust2.jpg",
                  title : "Jai Shree Ram",
                  duration : "02:05:40"
            },
            {
                  thumbnail : "movie-abc.png",
                  title : "Jai Shree Ram",
                  duration : "02:05:40"
            },
            {
                  thumbnail : "movie-xyz.png",
                  title : "Jai Shree Ram",
                  duration : "02:05:40"  
            },
            {
                  thumbnail : "sanddust2.jpg",
                  title : "Jai Shree Ram",
                  duration : "02:05:40"
            },
            {
                  thumbnail : "movie-abc.png",
                  title : "Jai Shree Ram",
                  duration : "02:05:40"
            },
            {
                  thumbnail : "movie-xyz.png",
                  title : "Jai Shree Ram",
                  duration : "02:05:40"  
            }
      ]
      const design = (
            <>
                <div style={{
                  transition : "0.5s",
                  height : 600,
                  background : `url(${image ? image : "sanddust2.jpg"})`,
                  backgroundSize : "cover"
                }}>
                        <div className="h-full p-8 overflow-hidden" style={{
                              background : "linear-gradient(to right,rgba(0,0,0,0.9),transparent)"
                        }}>
                              <h1 className="text-white mb-4 text-3xl"> 
                                    Top 10 Movies
                                    </h1>
                                    <div 
                                    className="relative"
                                    style={{
                                          width : 330,
                                          height : 516
                                    }}>
                                         < Slider 
                                          data={data}
                                          vertical={true}
                                         />
                                    </div>
                        </div>
                </div>
            </>
      );
      return design;
}
export default TopTenMovies;
