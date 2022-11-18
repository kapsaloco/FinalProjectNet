import classes from "./Home.module.css";
import { Link } from "react-router-dom";
import HomeHeading from "./../images/HomeHeading.png"

function Home() {
  return (
    <div className={classes.outsideContainer}>
      <div className={classes.innerContainer}>
        <img src={HomeHeading} alt="PLease Hire Us" />
      </div>
      <div className={classes.buttonContainer}>
      <Link to="/owners" style={{backgroundColor: "white", fontSize: "60px", textDecoration: "none", borderRadius: "4px", color: "black"}}>Try it now!</Link>
      </div>
    </div>
  );
}
export default Home;
