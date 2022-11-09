//import NavBar from "../navbar/NavBar";
import NavBar from "../navbar/NavBar";
import Sidebar from "../sidebar/Sidebar";
import "./dashboard.scss"
const Dashboard = () => {
    return ( 
        <section className="dashboard">
            <Sidebar />
            <div className="dashboardContainer">
                <NavBar />
            </div>
        </section>
     );
}
 
export default Dashboard;