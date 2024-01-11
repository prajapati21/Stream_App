import { Slider } from "../../../Tailwind";
const UpcomingMovies = () =>{
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
              <div>
              <h1 className="text-3xl mb-4 text-white">
                  Upcoming Movies
                  </h1>
                  <Slider data={data} />
              </div>
            </>
      );
      return design;
}
export default UpcomingMovies;