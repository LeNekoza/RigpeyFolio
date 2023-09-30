"use client"
import Footer from "../components/footer";
import Nav from "../components/nav";

export default function Contact(){
    return(
        <div>
            <Nav/>
            <div className="flex justify-center mt-20">
            <Form/>
            </div>
            <Footer/>
        </div>
    )
}



const Form=()=>{
    const handleButton = async()=>{
        const fname = document.querySelector('input[name="fname"]') as HTMLInputElement
        const lname = document.querySelector('input[name="lname"]') as HTMLInputElement
        const email = document.querySelector('input[name="email"]') as HTMLInputElement
        const message = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement
        const data = {
            fname:fname.value,
            lname:lname.value,
            email:email.value,
            message:message.value
        }
        
        if(fname.value.match(/^[a-zA-Z]+$/) && lname.value.match(/^[a-zA-Z]+$/) && message.value.match(/^[a-zA-Z0-9]+$/)){

            if(email.value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)){
                const postData = await fetch('/contactform',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(data)
                })
                postData.json().then((res)=>{
                    if(res.status === 'success'){
                        location.href = '/successform'
                    }else{
                        location.href = '/failedform'
                    }
                })
            }
            else{
                email.classList.add('border-2','border-red-500')
                alert('Please enter a valid email')
            }
    }
    else{
        alert('Please fill all the fields')
    }

    }
    return(
        <div>
            <div className="text-black font-bold grid gap-2">
                <input name='fname' required  placeholder="First Name" maxLength={30} className=" w-[25em] focus:outline-none p-2 placeholder:italic placeholder:text-center rounded-lg"/>
                <input name='lname' required  placeholder="Second Name" maxLength={30} className=" w-[25em] focus:outline-none p-2 placeholder:italic placeholder:text-center rounded-lg"/>
                <input name='email' required placeholder="Email" maxLength={30} className=" w-[25em] focus:outline-none p-2 placeholder:italic placeholder:text-center rounded-lg"/>
                <textarea name="message"  id="message" required cols={30} rows={10} placeholder="Message" className=" w-[25em] focus:outline-none p-2 placeholder:italic placeholder:text-center rounded-lg"/>
                <button onClick={handleButton} className="bg-red-500 hover:bg-red-400 ease-linear duration-150 text-black p-2 rounded-full">Submit</button>
            </div>
        </div>
    )
}

