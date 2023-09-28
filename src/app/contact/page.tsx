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
    const handleButton = ()=>{
        const fname = document.querySelector('input[name="fname"]') as HTMLInputElement
        const lname = document.querySelector('input[name="lname"]') as HTMLInputElement
        const email = document.querySelector('input[name="email"]') as HTMLInputElement
        const message = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement
        fname.value = ''
        lname.value = ''
        email.value = ''
        message.value = ''
        const card = document.createElement('div')
        card.className = 'fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-90 flex justify-center items-center'
        const cardContainer = document.createElement('div')
        cardContainer.className = 'w-full h-full flex justify-center items-center'
        const cardElement = document.createElement('div')
        cardElement.className = 'max-h-full max-w-full p-10 bg-black rounded-lg'
        cardElement.innerHTML = 'Sending...'
        cardContainer.appendChild(cardElement)
        card.appendChild(cardContainer)
        document.body.appendChild(card)
        setTimeout(()=>{
            card.remove()
        },2000)


    }
    return(
        <div>
            <form action={'/contactform'} method="POST" className="text-black font-bold grid gap-2">
                <input type="text" name='fname'  placeholder="First Name" maxLength={30} className=" w-[25em] focus:outline-none p-2 placeholder:italic placeholder:text-center rounded-lg"/>
                <input type="text" name='lname'  placeholder="Second Name" maxLength={30} className=" w-[25em] focus:outline-none p-2 placeholder:italic placeholder:text-center rounded-lg"/>
                <input type="email" name='email'  placeholder="Email" maxLength={30} className=" w-[25em] focus:outline-none p-2 placeholder:italic placeholder:text-center rounded-lg"/>
                <textarea name="message"  id="message" cols={30} rows={10} placeholder="Message" className=" w-[25em] focus:outline-none p-2 placeholder:italic placeholder:text-center rounded-lg"/>
                <button type="submit" onClick={handleButton} className="bg-red-500 hover:bg-red-400 ease-linear duration-150 text-black p-2 rounded-full">Submit</button>
            </form>
        </div>
    )
}

