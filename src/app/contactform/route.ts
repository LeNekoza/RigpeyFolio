"use strict";
import { NextRequest, NextResponse } from "next/server";
import supabase from '../utils/supabase'
export async function POST(req:Request,res:NextResponse) {
    try{
    const reqObj:formtype = await req.json()
    const {fname, lname, email, message} = reqObj
    console.log(`New message from ${fname} ${lname}\nemail: ${email} \nMessage: ${message}`)
    type formtype = {
        fname: string,
        lname: string,
        email: string,
        message: string
    }
  const { data, error } = await supabase
            .from('rigform')
            .insert([
            { fname: fname, lname:lname, email:email, message:message },
            ])
            .select()
            return NextResponse.json({status: 'success'})
       
        }

    catch(err){
    console.log(err)
    return NextResponse.json({status: 'error'})
    }

}
