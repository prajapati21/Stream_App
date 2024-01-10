import { Slider } from "../../../Tailwind";
const LatestMovies = () =>{
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
                  thumbnail : "movie-xy.png",
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
                  thumbnail : "movie-xy.png",
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
                  thumbnail : "movie-xy.png",
                  title : "Jai Shree Ram",
                  duration : "02:05:40"  
            }
      ]
      const design = (
            <>
              <h1 className="text-3xl mb- text-white">
                  Latest Movies
                  </h1>
                  <Slider data={data} />
            </>
      );
      return design;
}
export default LatestMovies