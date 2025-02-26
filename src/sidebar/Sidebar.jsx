import './sidebar.css'
import Category from './category/Category.jsx'
import Price from './price/Price.jsx'
import Color from './color/Color.jsx'
const Sidebar = ({handleChange}) => {
  return (
    <section className="sidebar">
        <div className="logo-container">
            <h1><i>Shoeify</i><br/>🛒</h1>
        </div>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Color handleChange={handleChange}/>
    </section>
  )
}

export default Sidebar