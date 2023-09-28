"use strict";

import { NextRequest, NextResponse } from "next/server";
export async function POST(req:Request,res:NextResponse) {
    try{
    const data = await req.formData()
    const json = {
        fname: data.get('fname'),
        lname: data.get('lname'),
        email: data.get('email'),
        message: data.get('message')
    }
    console.log(`New message from ${json.fname} ${json.lname}\nemail: ${json.email} \nMessage: ${json.message}`)
    return NextResponse.redirect('localhost:3000/successform')
}
catch(err){
    console.log(err)
    return NextResponse.redirect('localhost:3000/failedform')
}
}
