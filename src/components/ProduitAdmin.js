import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "../App.css";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables.js";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import Categorie from "./Categorie";
const ProduitAdmin = () => {
  const [data, setData] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    fetch("https://localhost:7235/api/Produits")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
        $(function () {
          $("#example").DataTable();
        });
      })
      .catch((error) => console.error("Erreur :", error));
  }, [refreshKey]);
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
              <th>Quantité</th>
              <th>Catégorie</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element, index) => {
              return (
                <tr key={element.id}>
                  <td>{element.id}</td>
                  <td>{element.désignation}</td>

                  <td>{element.prix}</td>
                  <td>{element.quantite}</td>
                  <td>{element.categorieId}</td>
                  <td>
                    <i className="bx bx-edit-alt"></i> <i className="bx bx-show"></i>{" "}
                    <i className="bx bx-x"></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Ajouter setRefreshKey={setRefreshKey} refreshKey={refreshKey} />
      </div>
    </div>
  );
};

export default ProduitAdmin;

const Ajouter = ({setRefreshKey,refreshKey}) => {
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState("");
  const [CategorieId, setCategorieId] = useState("");
  const [photo, setPhoto] = useState("");

  const [quantite, setQuantite] = useState("");
  const handSubmit = (event) => {
    event.preventDefault();
    let produit = {
      Désignation: nom,
      Prix: prix,
      Photo: photo,
      Quantité: quantite,
      CategorieId: CategorieId,
    };
    console.log(produit);
    setNom("")
    setPhoto("")
    setCategorieId("")
    setPrix("")
    setQuantite("")
    fetch("https://localhost:7235/api/Produits", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produit),
    })
      .then((response) => {
        setRefreshKey(refreshKey+1)
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
        <input type="text" onChange={(e) => setNom(e.target.value)} placeholder="Désignation"/>
        <input type="text" onChange={(e) => setPrix(e.target.value)} placeholder="Prix" />
        <input type="text" onChange={(e) => setCategorieId(e.target.value)} placeholder="CategorieID"/>
        <input type="text" onChange={(e) => setPhoto(e.target.value)} placeholder="Url image" />
        
        <input type="text" onChange={(e) => setQuantite(e.target.value)} placeholder="Quantité" />
        <button>Submit</button>
      </form>
    </div>
  );
};
