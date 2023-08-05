import "./style.css"
import { NavLink } from "react-router-dom";





export function MenuDesplegable(){


    return(
        <div>
            <header className="navBar">
		        <div className="container">
		            <div className="btn-menu">
			            <label for="btn-menu">☰</label>
		            </div>
		        </div>
	        </header>
            <input type="checkbox" id="btn-menu"/>
            <div className="container-menu">
	            <div className="cont-menu">
		            <nav>
						<NavLink to="/pages/new">NEW</NavLink>
						<NavLink to="/pages/prenda-exterior">PRENDA EXTERIOR</NavLink>
						<NavLink to="/pages/vestidos">VESTIDOS</NavLink>
						<NavLink to="/pages/camisas-tops">CAMISAS | TOPS</NavLink>
						<NavLink to="/pages/punto">PUNTO</NavLink>
						<NavLink to="/pages/buzos">BUZOS</NavLink>
						<NavLink to="/pages/pantalones">PANTALONES</NavLink>
						<NavLink to="/pages/faldas-shorts">FALDAS | SHORTS</NavLink>
						<NavLink to="/pages/accesorios">ACCESORIOS</NavLink>
		            </nav>
                    <div className="btn-x">
		            <label for="btn-menu" className="btn-x">🗙</label>
                    </div>
	            </div>
            </div>
        </div>
    )
}