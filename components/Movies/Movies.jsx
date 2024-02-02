"use client";
import { 
  Dialog, 
  FormDesign, 
  Input,
  Select 
} from "../../Tailwind";

const Movies = () => {

const data = [
  {
    label : "Comedy",
    value : "comedy"
  },
  {
    label : "Drama",
    value : "drama"
  },
  {
    label : "Action",
    value : "action"
  },
]

const fileObject = {
  thumbnail : "",
  movie : ""
}

const fields =[
  "title",
  "desc",
  "staring",
  "thumbnail",
  "movie",
  "category",
  "tags"
]

const onSubmit = (values) =>{
  console.log(values);
}

const handleUpload =  (e) =>{
  const input = e.target;
  const file = input.files[0];
  const key = input.name;
  fileObject[key] = file;
  console.log(fileObject);
}

  const MoviesForm = () => {
    const form = (
      <>
      <FormDesign 
      className="text-left" 
      onSubmit={onSubmit}
      fields={fields} 
      >
         <div className="flex gap-4 flex-col py-4">
         <Input 
        name="title" 
        className="bg-gray-100 p-3 rounded-sm" 
        placeholder="Title"
        />
        <Input 
        name="desc" 
        className="bg-gray-100 p-3 rounded-sm" 
        placeholder="Description"
        textarea 
        />
        <Input 
        name="staring" 
        className="bg-gray-100 p-3 rounded-sm" 
        placeholder="Starting"
        />
        <Input 
        name="duration" 
        className="bg-gray-100 p-3 rounded-sm" 
        placeholder="Duration"
        />
        <div className="flex flex-col">
           <label className="font-bold text-sm md-1 text-left">Thumbnail</label> 
             <Input 
             name="thumbnail" 
             className="bg-gray-100 p-3 rounded-sm" 
             type="file" 
             accept="image/*" 
             onChange={handleUpload}
             />
        </div>
        <div className="flex flex-col">
           <label className="font-bold text-sm md-1 text-left">Video file</label> 
             <Input 
             name="movie" 
             className="bg-gray-100 p-3 rounded-sm" 
             type="file" 
             accept=".mp4"
             onChange={handleUpload} 
             />
        </div>
        <Select 
        name="category"
        data={data}
        className="bg-gray-100 p-3 rounded-sm" 
        />
        <Input 
        name="tags" 
        className="bg-gray-100 p-3 rounded-sm" 
        textarea 
        placeholder="Tags"
        />
         </div>
      </FormDesign>
      </>
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
