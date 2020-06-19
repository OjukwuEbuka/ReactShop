import React from 'react';
import {Link} from 'react-router-dom';
import data from '../services/data';


const ProductScreen = props => {
    const product = data.products.find(prod => prod.id === +props.match.params.id)
    return (
        <div className="productDiv">
            <div >
                <Link to="/">Back to result</Link>
            </div>
            <div className="details">
                <div className="details-image">
                    <img src={product.image} alt="product" />
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                            <h2>{product.name}</h2>
                        </li>
                        <li>
                            {product.rating} Starts ({product.numReviews} Reviews)
                        </li>
                        <li>
                            <b>${product.price}</b>
                        </li>
                        <li>
                            Description:
                            <div>
                                {product.description}
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>
                            Price: {product.price}
                        </li>
                        <li>
                            Status: {product.price}
                        </li>
                        <li>
                            Qty: <input type="number" id="num" />
                        </li>
                        <li>
                            <button className="btnCart">Add to Cart</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen;