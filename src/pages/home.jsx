import Hero from '../component/hero'
import Navbar from '../header/navbar'
export default function Home() {
  

  return (
    <div className="bg-white">
        <Navbar/>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <Hero/>
      </div>
    </div>
  )
}
