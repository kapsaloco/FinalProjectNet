import classes from "./About.module.css";
function About() {
  return (
    <div className={classes.bigContainer}>
      <div className={classes.formContainer}>
        <p className={classes.par}> This app was developed by Fernando Giron and George Kapsalakos for study purposes. 
        All Rights Reserved. <a href="https://github.com/kapsaloco/FinalProjectJava" target="_blank">Github</a></p>
        
      </div>
    </div>
  );
}

export default About;
