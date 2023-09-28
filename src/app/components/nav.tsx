export default function Nav(){
    return(
    <div className='px-5 pt-3 w-full h-auto lg:tracking-widest tracking-tight md:tracking-wide'>
    <nav className='flex border-[0.15em] h-[4em] border-red-500 rounded-full bg-stone-900  shadow-xl  shadow-red-500/50 items-center overflow-hidden '>
      <a id='title' className='font-bold text-black px-5 h-full flex items-center select-none bg-red-500 hover:bg-red-400 ease-linear duration-150' href="/">
        Welcome
      </a>
      <div className='w-full flex flex-row-reverse px-5'>
      <ul className='flex gap-5 font-bold'>
        <li className='hover:scale-[1.15] duration-200 ease-linear'>
          <a href="/contact">Contact</a>
        </li>
        <li className='hover:scale-[1.15] duration-200 ease-linear'>
          <a href="/gallery">Gallery</a>
        </li>
      </ul>
      </div>
    </nav>
    </div>
    )
}

