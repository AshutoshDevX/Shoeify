import './price.css';
import Input from '../../components/Input.jsx'

const Price = ({handleChange}) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test2"/>
            <span className="checkmark"></span>All
        </label>

        <Input
        handleChange={handleChange}
        value={50}
        title="₹0-400"
        name="test2"
        />
        <Input
        handleChange={handleChange}
        value={100}
        title="₹400-800"
        name="test2"
        />
        <Input
        handleChange={handleChange}
        value={150}
        title="₹800-1200"
        name="test2"
        />
        <Input
        handleChange={handleChange}
        value={200}
        title="Over ₹1200"
        name="test2"
        />
    </div>
  )
}

export default Price;