import { useMatch, useResolvedPath, Link } from "react-router-dom";
import "../App.css";

const NavBar = ({panier,connected}) => {
  const isNew = panier.length >0 ? true : false
    return (
        <div>
            <header>
                <h1>LOGO<span>.</span></h1>  
                {
                    connected ?
                <nav>
                    <ul>
                        <li><CustomLink to="/" >Home</CustomLink></li>
                        <li><CustomLink to="/produits" >Produits</CustomLink></li>
                        <li><CustomLink to="/about" >About</CustomLink></li>
                        <li><CustomLink to="/contact">Contact</CustomLink></li>
                    </ul> 
                </nav>
                :<></>
                }
                
                <div>
                   {connected ? (<div><button><Link to="/panier"><i className='bx bx-cart'></i></Link> {isNew ? <span></span>:<></>} </button>
                    <button>Login</button></div>):<></>
                   }
                </div>
            </header>  
        </div>
    );
}

export default NavBar;



const CustomLink = ({to,children,...props}) => {
    const resolvedPath = useResolvedPath(to);
    const isActive =  useMatch({path:resolvedPath.pathname,end:true})
    return (
        <div>
            <Link to={to} className={isActive? "selected" : ""}>{children}</Link>
        </div>
    )
}
