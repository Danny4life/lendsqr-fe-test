import ArrowIcon from "../Icon/ArrowiIcon";
import NotificationIcon from "../Icon/NotificationIcon";
import SearchIcon from "../Icon/SearchIcon";
import "./navbar.scss"
const NavBar = () => {
    return ( 
        <nav className="navbar">
            <div className="wrapper">
                <div className="search">
                    <form>
                        <input type="text" placeholder="Search for anything" />
                        <button type="submit"> <SearchIcon /></button>
                       
                        
                    </form>
                   
                   
                    
                </div>
                
                <div className="items">
                    <div className="item">
                        <span className="icon-doc">Docs</span>
                       
                    </div> 
                    <div className="item">
                        <NotificationIcon className="icon" />
                    </div> 
                    <div className="item">
                       <img src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                       alt=""
                       className="avatar" />
                    </div>
                    <div className="item">
                        <span className="icon name">Adedeji</span>
                    </div>
                    <div className="item">
                       <ArrowIcon className="icon arrow" />
                    </div>  
                </div>
                
            </div>
        </nav>
     );
}
 
export default NavBar;