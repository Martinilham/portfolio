
import Hero from "../Template/hero";
import Tentangku from "../Template/tentangku";
import Image from "../elements/image";

function Home() {
  

  return (
    <div className="container w-full mr-0 ml-0 m-auto relative" >
      <Hero/>
      <div>
      <Image
          className='mt-44 w-8/12 ml-16'
          gambar='Tentangku.png'
        />
      </div>
      <Tentangku/>
    </div>
  )
}
export default Home