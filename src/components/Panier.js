import React, { useState } from 'react';

const Panier = ({panier}) => {
   let isvid = panier.length>0 ?true:false
   
   const [total,setTotal] = useState([])
   panier.forEach(element => {
    let obj  = {des:element.désignation, pu:element.prix,qte:1,pt:element.prix}
    

   });
   
   
   
   const addtotal = (p,qte)=>{
    let obj = {des:p.désignation, pu:p.prix,qte:qte,pt:(p.prix*qte)}
    setTotal([...total,obj])
   }
    return (
        <div >
           {isvid ?(<div className='containerpanier'>
            <div className='produit'>
            <h1>Votre Panier</h1>
            {panier.map((p,index)=>
            
               <PanierCard p={p} key={index} addtotal={addtotal}/> 
            )}
            </div>
            <div className='total'>
                <h2>Total</h2>
                {total.map((p,index)=>
            
            <li key={index}>{p.des} {p.pu} * {p.qte} = {p.pt} </li>
         )}
            
            </div>
           </div>):
        (<div className='centervd'>
            <p>Aucun produit dans votre panier</p>
        </div>)
           }</div>
    );
}

export default Panier;



const PanierCard = ({p,addtotal}) => {
    const [qte,setQte]=useState(1)
    const minus = (p)=>{
       if(qte>1){
        setQte(qte-1)
        addtotal(p,qte)
       }
       
    }
    const plus = (p)=>{
        
        setQte(qte+1)
        addtotal(p,qte)
    }
    return (
        <div className='paniercard'>
            
                <div className='image'><img src='Beautifulheadphone.png' alt={p.désignation}></img></div>
                <div className='cotenu'>
                    <h1>{p.désignation}</h1>
                    <p>TND {p.prix}</p>
                </div>
                <div className='button'>
                    <div>
                    <button onClick={()=>minus(p)}>-</button>
                    <p>{qte}</p>
                    <button onClick={()=>plus(p)}>+</button>
                    </div>
                    
                    
                </div>
    
        </div>
    );
}


