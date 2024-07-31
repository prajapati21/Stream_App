import { NextResponse } from "next/server"
import { 
      fetchById,
 } from "../../../../../controller/s3.controller"

export const GET =  async (request, {params})=>{
     const response = await fetchById(request,params);
     const {data,status} = response;
      return NextResponse.json({data},{status})
}





/*export const DELETE = (request,{params}) =>{
      const response =  trash(request,params);
      const {data,status} = response;
      return NextResponse.json({data},{status})
}
export const PUT = async (request,{params}) =>{
      const response = await update(request,params);
      const {data,status} = response;
      return NextResponse.json({data},{status})
}*/