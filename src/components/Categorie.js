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
  useEffect(() => {
    fetch("https://localhost:7235/api/Categories")
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
}

export default Categorie;
