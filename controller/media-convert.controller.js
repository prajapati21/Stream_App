import AWS from "aws-sdk";
const media = new AWS.MediaConvert({
  region : "ap-south-1",
  endpoint : ""
})
export const fetch = async (request, params) => {
  return {
    data : {
      message : "Media Get Requested !"
    },
    status: 200,
  };
};

export const create = async (request) => {
      return {
            data : {
                  message : "Media post Requested !"
                },
            status : 200
          }
};

