import classes from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={classes.outsideContainer}>
      <div className={classes.innerContainer}>
        <h1>Person Maker Pro Max</h1>
        <p>The best Person Maker in the World</p>
      </div>
      <div className={classes.buttonContainer}>
      <Link to="/api" style={{backgroundColor: "white", fontSize: "60px", textDecoration: "none", borderRadius: "4px", color: "black"}}>Try it now!</Link>
      </div>
    </div>
  );
}
export default Home;
