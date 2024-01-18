import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import "../App.css";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables.js"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import Categorie from './Categorie';
const ProduitAdmin = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7235/api/Produits")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
        $(function(){$('#example').DataTable();});
      })
      .catch((error) => console.error("Erreur :", error));
  }, []);
  return (
    <div>
        <div className="produitM">
        <h2 className="text-center">Liste des Produits</h2>
      <table className="table" id="example" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Désignation</th>
            <th>Prix</th>
            <th>Catégorie</th>
            <th>Actions</th>
          </tr>
         
        </thead>
        <tbody>
        {
            data.map((element,index)=> {
                
                return (
                    <tr key={element.id}>
                      <td>{element.id}</td>
                      <td>{element.désignation}</td>
                      <td>{element.prix}</td>
                      <td>{element.categorieId}</td>
                      <td><i class='bx bx-edit-alt'></i> <i class='bx bx-show'></i> <i class='bx bx-x'></i></td>
                    </tr>
                  );
            })
          }
        </tbody>
      </table>
        </div>
      
    </div>
  );
};

export default ProduitAdmin;


const Ajouter = () => {
    const [nom,setNom]=useState("")
    const [prix,setPrix]=useState("")
    const [CategorieId,setCategorieId]=useState("")
    const [photo,setPhoto]=useState("")
    const [ligneFactureId,setligneFactureId]=useState("")
    const [quanite,setQuantite]=useState("")
   const handSubmit =() =>{
    
   }
    return (
        <div>
            <form onSubmit={()=>handSubmit()}>
                <input type="text"  onChange={(e)=>setNom(e.target.value)} />
                <input type="text" onChange={(e)=>setPrix(e.target.value)} />
                <input type="text" onChange={(e)=>setCategorieId(e.target.value)} />
                <input type="text" onChange={(e)=>setPhoto(e.target.value)} />
                <input type="text" onChange={(e)=>setligneFactureId(e.target.value)} />
                <input type="text" onChange={(e)=>setQuantite(e.target.value)} />
                <button>Submit</button>
            </form>
            
        </div>
    );
}


