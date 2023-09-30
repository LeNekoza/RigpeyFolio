"use client"
import Footer from "../components/footer";
import Nav from "../components/nav";
import supabase from "../utils/supabase";
import { useState } from "react";
export default function RigSec(){
    type Msg = {
        id: string,
        fname: string,
        lname: string,
        email: string,
        message: string,
    }
    const [msg, setMsg] = useState<Msg[]>([])
    const fetchMsg = async () => {
        const {data, error} = await supabase
        .from('rigform')
        .select('*')
        if(error) return console.log(error)
        setMsg(data||[])
    }
    fetchMsg()

    const handleDelete = async (id: string) => {
        const { error } = await supabase
  .from('rigform')
  .delete()
  .eq('id', id)
    if(error) return console.log(error)
    }

    return(
        <div>
            <Nav/>
            <h1 className="text-[2.5em] font-extrabold text-center my-10 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500 select-none">LOGS</h1>
            <div className="w-full h-[0.2em] bg-gradient-to-r from-red-500 to-yellow-500"></div>
            <div className="p-5 font-bold ">Total Messages: {msg.length}</div>
            <div className="flex justify-center">
                <ul>
                    {
                        msg.map((msg, index) => (
                            <li key={index} className="my-5">
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold">{`${index + 1}.  `} {msg.fname} {msg.lname}</span>
                                    <span className="text-lg">{`Email: ${msg.email}`}</span>
                                    <span className="text-lg">{`Message: ${msg.message}`}</span>
                                </div>
                                <button className="bg-red-500 px-5 font-bold" onClick={()=>{handleDelete(msg.id)}}>
                                    Delete
                                </button>
                                <div className="w-full h-[2px] bg-gradient-to-r from-red-500 to-yellow-500 mb-20"></div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <Footer/>
        </div>
    )
}