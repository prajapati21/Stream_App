import { Slider } from "../../../Tailwind";
const TopTenMovies = () =>{
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
                  height : 600,
                  background : `url(sanddust2.jpg)`,
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
