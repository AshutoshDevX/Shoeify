
import { IoBagHandleSharp } from "react-icons/io5";
const Card = ({img,title,star,reviews,newPrice,prevPrice}) => {
  return (
    <section className="card">
            <div className="product-img">
            <img src={img} alt={title} className="card-img"/>
            </div>
            <div className="card-details">
                <h3 className="card-title">{title}</h3>
                <section className="card-reviews">
                {star} {star} {star} {star}
                <span className="total-reviews">{reviews}</span>
                </section>
                <section className="card-price">
                    <div className="price">
                        <del>{prevPrice}</del>{newPrice}
                    </div>
                    <div className="bag">
                        <IoBagHandleSharp className="bag-icon"/>
                    </div>
                </section>
            </div>
        </section>
  )
}

export default Card