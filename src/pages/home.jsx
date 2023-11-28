
import BgGradient from '../component/bgGradient'
import Navbar from '../header.jsx/navbar'

export default function Home() {
  

  return (
    <div className="bg-white">
        <Navbar/>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <BgGradient>
            <BgGradient.Top/>

            <BgGradient.Botom/>
        </BgGradient>
        
       
      </div>
    </div>
  )
}
