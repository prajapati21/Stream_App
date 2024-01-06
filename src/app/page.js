"use client";
import { Carousel } from "../../Tailwind";
const Page = () =>{
  const data = [
    {
      image : "a.jpg"
    },
    {
      image : "b.jpg"
    },
    {
      image : "c.jpg"
    }
  ]
  const design = (
    <>
      <div className="hidden sm:block">
      <Carousel data={data} />
      </div>
      <div className="sm:hidden block">
      <Carousel data={data} height={250} />
      </div>
    </>
  );
  return design;
}
export default Page;