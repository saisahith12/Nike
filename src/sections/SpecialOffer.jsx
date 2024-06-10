import { offer } from "../assets/images"
import Button from "../components/Button" 
import { arrowRight } from '../assets/icons/index'

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
    <div className="flex-1">
      <img src={offer} width={773} height={687} className="object-contain w-full"/>
     </div>
     <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl capitalize  font-bold lg:max-w-lg">
                 
          <span className=" text-coral-red">Special 
          </span>
          <span className=" text-coral-red">  
          </span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footwear is desogned to elevate your experience.providing you with unmatche quality,innovation, and a touch of elegance.</p>
        <p className='mt-6 lg:max-w-lg info-text'>Our dedication to detail and excellence ensures your satisfaction</p>
        <div className='mt-11 flex flex-wrap gap-4'>
        <Button label="Shop now"
        iconURL={arrowRight}/>
        <Button
        label='Learn more'
        backgroundColor='bg-white'
        borderColor='border-slate-gray'
        textColor='text-slate-gray'
        />
        </div>
       </div>
    </section>  
  )
}

export default SpecialOffer