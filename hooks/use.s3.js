import AWS from "aws-sdk";
import { optimizeFonts } from "../next.config";
const s3 = new AWS.S3({
      region : 'ap_south-1',
      accessKeyId : process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
      secretAccessKey : process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY
});
const Bucket = "stream-stored-apps";
const useS3 = (file,key=file.name) =>{
      const upload = async () => {
            const option = {
                  Bucket,
                  Body : file,
                  Key : key
            }
            return s3.upload(option);
      }
      return upload;
}

export default useS3;