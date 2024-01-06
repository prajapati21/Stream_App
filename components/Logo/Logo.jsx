import { Icon } from "../../Tailwind";

const Logo = () =>{
      const design = (
            <>
               <div className="flex items-centre gap-3">
                  <Icon className="text-white">play_circle</Icon>
                  <h1
                  className="text-2xl font-bold text-red-500"  // image tag using to create image logo
                  >Stream Just</h1>
               </div>
            </>
      )
      return design;
}
export default Logo;