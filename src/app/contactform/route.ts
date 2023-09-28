"use strict";

import { NextRequest, NextResponse } from "next/server";
export async function POST(req:Request,res:NextResponse) {
    try{
    const data = await req.json()
    const {fname, lname, email, message} = data
    console.log(`New message from ${fname} ${lname}\nemail: ${email} \nMessage: ${message}`)
   
    
    return NextResponse.json({status: 'success'})
}
catch(err){
    console.log(err)
    return NextResponse.json({status: 'error'})
}
}
