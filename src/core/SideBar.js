import { useMatch, useResolvedPath, Link } from "react-router-dom";
import "../App.css";


const SideBar = () => {
    return (
        <div>
             <aside>
                
                <nav>
                    <ul>
                        <li><CustomLink to="/" >Home</CustomLink></li>
                        <li><CustomLink to="/produitsadmin" >Produits</CustomLink></li>
                        <li><CustomLink to="/categorie" >Categorie</CustomLink></li>
                        
                    </ul> 
                </nav>
                <div>
                    
                    <button>Login</button>
                </div>
            </aside> 
        </div>
    );
}

export default SideBar;
const CustomLink = ({to,children,...props}) => {
    const resolvedPath = useResolvedPath(to);
    const isActive =  useMatch({path:resolvedPath.pathname,end:true})
    return (
        <div>
            <Link to={to} className={isActive? "selected" : ""}>{children}</Link>
        </div>
    )
}