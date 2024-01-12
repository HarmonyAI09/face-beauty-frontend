import "./Product.css"
const Product = (props) => {
    return (
        <div className="product">
            <div className="product-container">
                <img className="product-image" src={"./images/product/" + "1" + ".jpg"}></img>
                <div className="product-name">{props.name}Personalized consultation</div>
                <div className="product-price">{props.price}$100</div>
            </div>
        </div>
    );
}

export default Product;