import Image from 'next/image'
import Nav from './components/nav'
import Footer from './components/footer'
export default function Home() {
  return (
   <div className='flex flex-col items-center'>
   <Nav />
   <HomeWindow/>
   <MoreDetails/>
   <Footer/>
   </div>
  )
}




const HomeWindow = () =>
(
  <div className='w-full flex flex-col items-center gap-5 homewindiv'>
<div className='flex justify-center items-center w-5/6 h-[15em] bg-gradient-to-b from-red-500 to-blue-500 rounded-full mt-5 shadow-xl shadow-blue-500'>
  <h1 className='font-bold text-[2em] select-none tracking-widest md:tracking-[0.5em] text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]'>Rigpey Moktan</h1>
  <a href='https://www.instagram.com/theonlyrigpey/' className='w-10 h-10 rounded-full m-2 flex items-center justify-center hover:-translate-y-[0.3em] hover:drop-shadow-[0_5px_10px_rgba(255,150,255,1)] ease-linear duration-150'>
   
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
</svg>
  </a>
</div>

  <div className='p-10 lg:px-[20em]'>
  <div className='w-20 h-20 italic border-dashed border-white border-2  rounded-full m-2 flex items-center text-white justify-center text-[3em] p-10 font-thin lg:scale-[1.5] select-none'>
    &ldquo;∑&rdquo;
  </div>
  <p className='lg:text-[1.5em] italic select-none mt-5'>
    Hey there! I&apos;m Rigpey Moktan, a lens enthusiast hailing from the picturesque town of Gangtok, Sikkim. Through my camera, I capture the vibrant stories of life, the raw beauty of nature, and the unscripted moments that make our world unique.
  </p>
  </div>
  <hr className='bg-white h-[0.2em] w-5/6'></hr>
</div>
)

const MoreDetails = () =>
(
 <div className='mt-4 p-10'>
    <h1 className='text-xl p-5 text-center italic font-bold text-yellow-500'>ESCAPE TO REALITY FROM DELUSIONAL REALITY</h1>
    <p className='font-normal text-lg'>
    In a world of fake filters and picture-perfect profiles, it&apos;s time to ditch the illusion and start snapping real-life moments.

We&apos;re all guilty of curating our lives on social media, making it look like we&apos;re living the dream 24/7. But let&apos;s be real - nobody&apos;s life is that flawless! The true beauty lies in the everyday messiness.

Photography? It&apos;s your ticket to capturing that reality. It&apos;s not about creating a fake world; it&apos;s about cherishing the genuine one. Grab your camera and freeze time - catch that early morning spider web with dewdrops, a kid&apos;s contagious laughter, or that crumpled love note under your bed.

While everyone&apos;s busy escaping into the virtual fantasy, you can escape to reality with your lens. Embrace the ordinary, celebrate the imperfect, and let your photos remind us that life&apos;s real magic lies in the unfiltered moments.
    </p>
  </div>
)