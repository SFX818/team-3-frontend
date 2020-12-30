import React from 'react'
import { Link } from "react-router-dom";

const Product = (props) => {
    return (
        <div className ="container">
            <div>Picture</div>
            <div>Name of Product: {props.name}</div>
            <div className="description">Description: {props.description}</div>
            <div>Price: {props.price}</div>
            <Link to={"/purchase"}>Buy Now</Link>
            <div>User Selling: {props.seller}</div>
        </div>
    )
}
export default Product