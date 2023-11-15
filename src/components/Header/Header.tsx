import './Header.scss';
import logo from '../../assets/img/logo.png';

const Header = () => {
    return (
        <div id="header">

            <a href="/">
                <img src={logo} alt="carbon footprint"/>
            </a>

        </div>
    );
};

export default Header;
