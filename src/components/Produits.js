import React, { useState, useEffect } from "react";
import CardProduit from "../core/CardProduit";

const Produits = ({addToCard}) => {
  const [mot, setMot] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7235/api/Produits")
      .then((response) => response.json())
      .then((data) => {setData(data);
      

      })
      .catch((error) => console.error("Erreur :", error));
  }, []);
  const motChange = (e) => {
    setMot(e.target.value);
    //data.filter(e=>e.nom == mot)
    console.log(mot);
  };

  return (
    <div>
      <div className="containerp">
        <div className="head">
          <input
            type="text"
            name="text"
            autoComplete="off"
            value={mot}
            placeholder="search ..."
            onChange={motChange}
          />
          <div>
          <i className='bx bx-grid-alt' ></i>
          <i className='bx bx-align-justify'></i>
          </div>
          
        </div>
        <div className="containerProduit" >
          
            {data.map((p,index)=>
                <CardProduit produit={p} key={index} addToCard={addToCard}/>
            )}
        </div>
      </div>
    </div>
  );
};

export default Produits;
