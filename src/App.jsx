import {Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './components/home'
import About from './components/about'
import Navbar  from './components/navbar'
import OrderSummary from './components/OrderSummary'
import NoMatch from './components/NoMatch'
import Product from './components/Product'
import FeaturedProducts from './components/FeaturedProducts'
import NewProducts from './components/NewProducts'
import User from './components/User'
import UserDetails from './components/UserDetails'
function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="ordersummary" element={<OrderSummary/>}/>
      <Route path="*" element={<NoMatch/>}></Route>
      <Route path="products" element={<Product/>}>
        <Route index element={<FeaturedProducts/>}></Route>
        <Route path="featured" element={<FeaturedProducts/>}></Route>
        <Route path="new" element={<NewProducts/>}></Route>
      </Route>
      <Route path="users" element={<User />} >
       <Route path=":id" element={<UserDetails/>} />
      </Route>
    </Routes>
    
    </>
  )
}

export default App
