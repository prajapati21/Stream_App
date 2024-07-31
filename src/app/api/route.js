import { NextResponse } from "next/server"

export const GET = (request) =>{
      return NextResponse.json({
            message : process.env.API_KEY
      },{status : 200})
}

export const POST = (request) => {  //arrow function
      return NextResponse.json({
            message : "Post Requested"
      },{status : 200})
}

export function DELETE (request ) {    //function
      return NextResponse.json({
            message : "Delete Requested"
      },{status : 200})
}

export const PUT = (request) =>{
      return NextResponse.json({
            message : "Put Requested"
      },{status : 200})
}