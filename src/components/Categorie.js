import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

import "../App.css";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables.js"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';

const Categorie = () => {
    const [data, setData] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    fetch("https://localhost:7235/api/Categories")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
        $(function(){$('#example').DataTable();});
      })
      .catch((error) => console.error("Erreur :", error));
  }, [setRefreshKey]);
    return (
        <div>
             <div className="produitM">
        <h2 className="text-center">Liste des  catégories</h2>
      <table className="table" id="example" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Désignation</th>
            
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
                     
                      <td><i className='bx bx-edit-alt'></i> <i className='bx bx-show'></i> <i className='bx bx-x'></i></td>
                    </tr>
                  );
            })
          }
        </tbody>
      </table>
      <Ajouter setRefreshKey={setRefreshKey} refreshKey={refreshKey} />
        </div>
      
        </div>
    );
}

export default Categorie;
const Ajouter = ({setRefreshKey,refreshKey}) => {
  const [nom, setNom] = useState("");
  

  
  const handSubmit = (event) => {
    event.preventDefault();
    let categorie = {
      Désignation: nom,
     
    };
    console.log(categorie);
    
    
    fetch("https://localhost:7235/api/Categories", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categorie),
    })
      .then((response) => {
        setRefreshKey(refreshKey+1)
        setNom("")
        response.json();
      })
      .then((data) => {
       
        console.log(data);
      })
      .catch((error) => console.error("Erreur :", error));
  };
  return (
    <div>
      <h2 className="text-white">Formulaire</h2>
      <form onSubmit={ handSubmit}>
        <input type="text" onChange={(e) => setNom(e.target.value)}  placeholder="Désignation"/>    
    
        <button>Submit</button>
      </form>
    </div>
  );
};
