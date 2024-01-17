
import Clients from "./components/Clients";
import Error from "./components/Error";
import Home from "./components/Home";
import Panier from "./components/Panier";
import Produits from "./components/Produits";
import About from "./core/About";

import NavBar from "./core/NavBar";
import { Routes, Route } from "react-router-dom";
import Footer from './core/Footer';
import { useState } from "react";
import "./App.css";
import SideBar from "./core/SideBar";
import ProduitAdmin from "./components/ProduitAdmin";
import Categorie from "./components/Categorie";


function App() {
  const [panier,setPanier]= useState([])
  const [connected,setConnected]=useState(false)
  const addToCard = (produit)=>{ 
    const element = panier.find((e)=>e.id === produit.id)
    if(element == null){
      setPanier([...panier,produit]);
    }
    
  
   }
   
  return (
    <div>
      <NavBar panier={panier} connected={connected} />

      <div className="content">

      
      {
         connected ? <></> : <SideBar/>
      }
        <div>

       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produits" element={<Produits addToCard={addToCard}/>} />
          {/* Nous imbriquons nos composants dans survey */}
          <Route path="/clients" element={<Clients />} />
          <Route path="/produitsadmin" element={<ProduitAdmin />} />
          <Route path="/categorie" element={<Categorie />} />
          <Route path="/about" element={<About />} />
          <Route path="/panier" element={<Panier panier={panier} />} />
          <Route path="*" element={<Error />} />
        </Routes>
        </div>
        </div>
        <Footer />
    </div>
  );
}

export default App;
