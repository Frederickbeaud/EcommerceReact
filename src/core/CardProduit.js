import React from "react";
import '../App.css'
const CardProduit = ({produit,key,addToCard}) => {
    const add = ()=>{
        addToCard(produit)
    }
  return (
    <div>
    
        <div className="product-card" key={key}>
          <div className="product-image">
            <img src="Beautifulheadphone.png" alt="Product" />
          </div>
          <div className="product-details">
            <h2 className="product-title">{produit.désignation}</h2>
            <h4 className="product-price">${produit.prix}</h4>
            <div className="btnc">
            <button className="add-to-cart-btn" onClick={add}>Add to Cart</button>
            <button className="view-btn">View</button>
            </div>
           
          </div>
        </div>
      
    </div>
  );
};

export default CardProduit;
