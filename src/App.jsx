import Nav from './navigation/Nav.jsx';
import Products from './products/Products.jsx';
import Recommended from './recommended/Recommended.jsx';
import {useState} from 'react';
// import Category from './sidebar/category/Category.jsx';
import Sidebar from './sidebar/Sidebar.jsx'
import Card from './components/Card.jsx'

//Database
import products from './db/data';
import './index.css';
function App() {
  const [selectedCategory,setSelectedCategory] = useState(null);

  //-----------input Filter--------//
  const [query,setQuery] = useState("");

  const handleInputChange = e=>{
    setQuery(e.target.value);
  }

  const filteredItems = products.filter((product)=>(
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!==-1
  )
  )

  //--------Radio Filter----------//
  const handleChange = e =>{
    setSelectedCategory(e.target.value);
  }

  //-------Buttons filter---------//
  const handleClick = e=>{
    setSelectedCategory(e.target.value);
  }

  function filteredData(products,selected,query){
    let filteredProducts = products; 
    //Filtering Inputs Items 
    if(query){
      filteredProducts = filteredItems
    }

    //Selected Filter
    if(selected){
      filteredProducts = filteredProducts.filter(({category,color,company,newPrice,title})=>
      category===selected||
      color===selected||
      company===selected||
      newPrice===selected||
      title===selected
      )
    }

    return filteredProducts.map(({img,title,star,reviews,newPrice,prevPrice})=>
    <Card 
    key={Math.random()}
    img={img}
    title={title}
    star={star}
    reviews={reviews}
    newPrice={newPrice}
    prevPrice={prevPrice}
    />
    )
  } 

  const result = filteredData(products,selectedCategory,query)
  return (
    <>
    <Sidebar handleChange={handleChange}/>
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result}/>
    </> 
  )
}

export default App
