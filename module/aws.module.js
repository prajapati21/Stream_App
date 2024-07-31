import AWS from "aws-sdk";

const Config = new AWS.Config();
Config.update({
      region : 'ap_south-1',
      accessKeyId : process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey : process.env.AWS_SECRET_ACCESS_KEY
});

export default AWS;