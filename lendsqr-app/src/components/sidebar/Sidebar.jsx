import Logo from "../../logo/Logo";
import LogoSmall from "../../logo/LogoSmall";
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import PersonIcon from '@mui/icons-material/Person';
// import CreditScoreIcon from '@mui/icons-material/CreditScore';
// import HandshakeIcon from '@mui/icons-material/Handshake';
// import SavingsIcon from '@mui/icons-material/Savings';
// import CleanHandsIcon from '@mui/icons-material/CleanHands';
// import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
// import PersonRemoveAlt1Icon from '@mui/icons-material/PersonRemoveAlt1';
import "./sidebar.scss"
import OrganizationIcon from "../Icon/OrganizaionIcon";
import DashboardIcon from "../Icon/DashboardIcon";
import UsersIcon from "../Icon/UsersIcon";
import GaurantorIcon from "../Icon/GaurantorIcon";
 import ArrowDownIcon from "../Icon/ArrowDownIcon";
import LoanIcon from "../Icon/LoanIcon";
import ModelIcon from "../Icon/ModelIcon";
import SavingsIcon from "../Icon/SavingsIcon";
import LoanRequestIcon from "../Icon/LoanRequestIcon";
import WhitelistIcon from "../Icon/WhitelistIcon";
import KarmaIcon from "../Icon/KarmaIcon";
import ProductIcon from "../Icon/ProductIcon";
import FeesIcon from "../Icon/FeesIcon";
import TransactionIcon from "../Icon/TransactionIcon";
import ServiceIcon from "../Icon/ServiceIcon";
import ServiceAccount from "../Icon/ServiceAccount";
import SettlementIcon from "../Icon/SettlementIcon";
import ReportIcon from "../Icon/ReportIcon";
import Preference from "../Icon/Preference";
import PricingIcon from "../Icon/PricingIcon";
import AuditIcon from "../Icon/AuditIcon";


const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="top">
                <span className="logo-nav">
                    <LogoSmall />
                    <Logo />
                </span>
            </div>
            {/* <hr /> */}
            <div className="center">
                <ul>
                    <li className="list-one">
                        <OrganizationIcon  className="icon"/>
                        <span>Switch Organization</span>
                        <ArrowDownIcon className="icon" />
                    </li>
                    
                    
                    <li className="list-one">
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">CUSTOMERS</p>
                    <li className="list-users">
                        <UsersIcon className="icon" />
                        <span>Users</span>
                    </li>
                    <li>
                        <GaurantorIcon className="icon" />
                        <span>Gaurantors</span>
                    </li>
                    <li>
                        <LoanIcon className="icon" />
                        <span>Loans</span>
                    </li>
                    <li>
                        <ModelIcon className="icon" />
                        <span>Decision Model</span>
                    </li>
                    <li>
                        <SavingsIcon  className="icon" />
                        <span>Savings</span>
                    </li>
                    <li>
                        <LoanRequestIcon className="icon" />
                        <span>Loan Request</span>
                    </li>
                    <li>
                        <WhitelistIcon className="icon" />
                        <span>Whitelist</span>
                    </li>
                    <li>
                        <KarmaIcon className="icon" />
                        <span>Karma</span>
                    </li>
                    <p className="title">BUSINESES</p>
                    <li>
                        <OrganizationIcon className="icon" />
                        <span>Organization</span>
                    </li>
                    <li>
                        <LoanRequestIcon className="icon" />
                        <span>Loan Products</span>
                    </li>
                    <li>
                        <ProductIcon className="icon" />
                        <span>Saving Products</span>
                    </li>
                    <li>
                        <FeesIcon className="icon" />
                        <span>Fees and Charges</span>
                    </li>
                    <li>
                        <TransactionIcon className="icon" />
                        <span>Transactions</span>
                    </li>
                    <li>
                        <ServiceIcon className="icon" />
                        <span>Services</span>
                    </li>
                    <li>
                        <ServiceAccount className="icon" />
                        <span>Service Account</span>
                    </li>
                    <li>
                        <SettlementIcon className="icon" />
                        <span>Settlement</span>
                    </li>
                    <li>
                        <ReportIcon className="icon" />
                        <span>Reports</span>
                    </li>
                    <p className="title">SETTINGS</p>
                    <li>
                        <Preference classNameicon />
                        <span>Preferences</span>
                    </li>
                    <li>
                        <PricingIcon />
                        <span>Fees and Pricing</span>
                    </li>
                    <li>
                        <AuditIcon />
                        <span>Audit Logs</span>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Sidebar;