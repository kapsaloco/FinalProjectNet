import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo from "./../../images/FinalAppLogo.png"
//Main Header Navigation used in all of pages

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link to="/">
        <img className={classes.img} src={logo} alt="Logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/api" style={{textDecoration: "none"}}>API</Link>
          </li>
          <li>
            <Link to="/about" style={{textDecoration: "none"}}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
