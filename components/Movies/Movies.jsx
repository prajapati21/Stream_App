"use client";
import { Dialog, FormDesign, Input } from "../../Tailwind";

const Movies = () => {
  const MoviesForm = () => {
    const form = (
      <FormDesign>
         <div className="flex gap-4 flex-col py-4">
         <Input 
        name="title" 
        className="bg-gray-100 p-3 rounded-sm" 
        />
        <Input 
        name="desc" 
        className="bg-gray-100 p-3 rounded-sm" 
        textarea 
        />
        <Input 
        name="starring" 
        className="bg-gray-100 p-3 rounded-sm" 
        />
        <Input 
        name="duration" 
        className="bg-gray-100 p-3 rounded-sm" 
        />
        <Input 
        name="thumbnail" 
        className="bg-gray-100 p-3 rounded-sm" 
        type="file" 
        accept="image/*" 
        />
        <Input 
        name="movies" 
        type="file" 
        accept=".mp4" 
        />
        <Input 
        name="tags" 
        className="bg-gray-100 p-3 rounded-sm" 
        textarea 
        />
         </div>
      </FormDesign>
    );
    return form;
  };

  const design = (
    <Dialog title="Add A Movie">
      <MoviesForm />
    </Dialog>
  );
  return design;
};

export default Movies;
