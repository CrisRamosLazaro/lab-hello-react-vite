import logo from '../assets/ironhack-logo-xs.png'
import menuIcon from '../assets/menu-top-xs.png'

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="nav-box">
                <img src={logo} alt="Ironhack Logo" />
            </div>

            <div className="nav-box">
                <img src={menuIcon} alt="Menu Icon" />
            </div>

        </div>
    )
}

export default Navbar