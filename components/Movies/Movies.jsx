"use client";
import { 
  Dialog, 
  FormDesign, 
} from "../../Tailwind";
import useS3 from "../../hooks/use.s3";

const Movies = () => {

  const options = [
    {
      label : "Drama",
      value : "drama"
    },
    {
      label : "Action",
      value : "action"
    },
    {
      label : "Comedy",
      value : "comedy"
    },
    
  ]

  const fields =[
    {
      component : "input",
      props : {
        name : "title",
        placeholder : "Title",
        className: "bg-gray-100 rounded-sm border-0 p-3 w-full",
        width : "full"
      }
    },
    {
      component : "input",
      props : {
        name : "desc",
        placeholder : "Video Description",
        textarea : true,
        className: "bg-gray-100 rounded-sm border-0 p-3",
        width : "full"
      }
    },
    {
      component : "input",
      props : {
        name : "duration",
        placeholder : "Video duration",
        className : "col-span-2 bg-gray-100 rounded-sm border-0 p-3"
      }
    },
    {
      component : "input",
      props : {
        name : "staring",
        placeholder : "Actors Name",
        className : "col-span-2 bg-gray-100 rounded-sm border-0 p-3"
      }
    },
    {
      component : "upload",
      props : {
        name : "thumbnail",
        className : "bg-gray-100 rounded-sm border-0 p-3",
        label : "Thumbnail",
        accept : "image/*",
      }
    },
    {
      component : "upload",
      props : {
        name : "video",
        className : "bg-gray-100 rounded-sm border-0 p-3",
        label : "Video Files",
        accept : ".mp4"
      }
    },
    {
      component : "select",
      props : {
        name : "category",
        className : "bg-gray-100 rounded-sm border-0 p-3",
        data : options,
        width : "full"
      }
    },
    {
      component : "input",
      props : {
        name : "tags",
        placeholder : "Keywords",
        textarea : true,
        className: "bg-gray-100 rounded-sm border-0 p-3",
        width : "full"
      }
    }
    
  ]

  const onSubmit = async (values) => {
    const fileProps = [
      {
        name : "thumbnail",
        key : "demo/thumb.png"
      },
      {
        name : "video",
        key : "demo/video.mp4"
      }
    ];
    for(let data of fileProps)
    {
      const upload = useS3(values[data.name],data.key);
      const uploading = await upload();
        uploading.on('httpUploadProgress',(e)=>{
          let loaded = e.loaded;
          let total = e.total;
        let perc = Math.floor((loaded*100)/total);
        console.log(perc+"%");
        });
        try {
          const file = await uploading.promise();
          console.log(file);
        }
        catch(error)
        {
          console.log(error);
        }
    }
  }
 

  const MoviesForm = () => {
    const form = (
      <>
      <h1 className="text-2xl font-bold text-left mb-3">
        New Video
        </h1>
      <FormDesign 
      onSubmit={onSubmit}
       fields={fields}
       grid={2}
        />
      </>
    );
    return form;
  };

  const design = (
    <Dialog>
      <MoviesForm />
    </Dialog>
  );
  return design;
};

export default Movies;

