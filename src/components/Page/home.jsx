
import BuildItem from "../Template/buildItem";
import Hero from "../Template/hero";
import Project from "../Template/project";
import Tentangku from "../Template/tentangku";
import Image from "../elements/gambar";
import "animate.css"

function Home() {
  

  return (
    <div className="w-screen" style={{overflowX:'hidden'}}>
      <Hero/>
      <div className="" >
      <Image
          className='mt-32 lg:mt-44 w-full mx-auto opacity-30 lg:mx-0 lg:w-8/12'
          gambar='Tentangku.png'
        />
      <Tentangku/>
      </div>
      <BuildItem/>
      <Project/>
    </div>
  )
}
export default Home