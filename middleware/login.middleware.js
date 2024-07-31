const loginMiddleware = (request) =>{
  return new Promise((resolve,reject)=>{
      const {value} = request.cookies.get("token")
      if (value === "12345") 
      {
           return resolve ("Success !"); 
      }
     else{
      return reject("Token Not Verified !")
     }
  })
}
export default loginMiddleware;