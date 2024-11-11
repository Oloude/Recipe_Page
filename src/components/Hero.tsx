import heroImg from '../assets/image-omelette.jpeg'


function Hero() {
  return (
    <div className='mb-7'>
        <img src={heroImg} alt="Simple Omelette Recipe " className='block mb-7 sm:rounded-lg'/>
        <h1 className='text-3xl font-Young_Serif font-bold text-stone900 mb-6 px-6 sm:px-0'>Simple Omelette Recipe </h1>
        <p className='text-sm text-stone800 px-6 sm:px-0'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
    </div>
  )
}

export default Hero