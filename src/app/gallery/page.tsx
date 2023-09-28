"use client";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Image from 'next/image'
export default function Gallery() {
    const imgPath = '/images/photo'
    const imgPList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    return (
        <div className='flex flex-col items-center'>
           <Nav />
           <GalleryWindow imgPList={imgPList} imgPath={imgPath}/>
           <Footer/>
        </div>
    )
}

type ImageProps = {
    imgPath: string
    imgPList: number[]
}
const GalleryWindow = ({imgPath,imgPList}:ImageProps) =>{
  
   const handleClick = (e:React.MouseEvent<HTMLImageElement>) =>{
   //view full screen
    const img = e.currentTarget
    const src = img.src
    const fullScreen = document.createElement('div')
    fullScreen.className = 'fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-90 flex justify-center items-center'
    const imgContainer = document.createElement('div')
    imgContainer.className = 'w-full h-full flex justify-center items-center'
    const imgElement = document.createElement('img')
    imgElement.src = src
    imgElement.className = 'max-h-full max-w-full p-10'
    imgContainer.appendChild(imgElement)
    fullScreen.appendChild(imgContainer)
    document.body.appendChild(fullScreen)
    fullScreen.addEventListener('click',()=>{
        fullScreen.remove()
    })
    


}
    return(
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-2 gap-x-1 px-2 mt-10 w-full h-[100em]" >
        {
            imgPList.map((num)=>(
                <div style={{width: '100%', height: '100%', position: 'relative'}} key={num+'div'}>
                <Image src={imgPath+num+'.jpg'} alt={`img${num}_rig`} layout="fill" objectFit="contain" key={num+'_rig'} loading="eager" onClick={handleClick}/>
            </div>
            ))
        }
    </div>
)}