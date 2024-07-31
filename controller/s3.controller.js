import AWS from "../module/aws.module";
const s3 = new AWS.S3();
const options = {
      Bucket : "stream-stored-apps",
      
}

export const fetch = async (request) => {
      try{
            // options.Delimiter = "/";
            options.Prefix = "demo";
      const objects = await s3.listObjects(options).promise();
      return{
            data : {
                  message : "Success !",
                  data : objects.Contents
            },
            status : 200
      }
      }
      catch(error){
            return {
                  data :{
                        message :  "failed !",
                        error  : error
                  } ,
                  status : 424
            }

      }
      /*return {
            data: "Get Requested",
            status: 200,
          };*/
}; 

export const fetchById = async (request, params) => {
      const {keys} = params;
      const path = keys.join("/");
      options.Key = path
      try {
            await s3.headObject(options).promise();
            options.Expires = 60
            const url = s3.getSignedUrl('getObject',options);
            return {
                  
                  data : {
                        message : "success !",
                        data : url
                  },
                  status : 200
                  
            }
      } catch (error) {
            return {
                  
                  data : {
                        message : "Failed !",
                        error : error
                  },
                  status : 404
                  
            }
            
      }
      
//   return {
//     data: path,
//     status: 200,
//   };
};

export const create = async (request) => {
      return {
            data : "post Requested",
            status : 200
          }
};
export const trash = (request, params) => {
  return {
    data: params,
    status: 200,
  };
};

export const update = async (request, params) => {
  const data = await request.json();
  return {
    data: {
      data,
      params,
    },
    status: 200,
  }
};
