import About from './components/About'
import Home from './components/Home'
import Item from './components/Item'
import Item2 from './components/Item2'
import Item3 from './components/Item3'
import Navbar from './components/Navbar'
import Topcollection from './components/Topcollection'
import Topmenu from './components/Topmenu'
import Footer from './components/footer'


function Cardview() {
  return (
   <>
   <div>
<Navbar/>
<Home/>
<About/>
<Topcollection/>
<Topmenu/>
<Item/>
<Item2/>
<Item3/>
<Footer/>
</div>
</>
  
  )
}

export default Cardview
