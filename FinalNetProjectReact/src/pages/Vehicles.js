import classes from "./Page.module.css";
import { useRef } from "react";
import "react-phone-number-input/style.css";
import { useState, useEffect } from "react";
import arrow from "./../images/arrow.png";
import trash from "./../images/trashIcon.png";
import { Link } from 'react-router-dom';

function Vehicles() {
  const [valueNum, setValue] = useState();

  const brandRef = useRef();
  const vinRef = useRef();
  const colorRef = useRef();
  const yearRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredBrand = brandRef.current.value;
    const enteredVin = vinRef.current.value;
    const enteredColor = colorRef.current.value;
    const enteredYear = yearRef.current.value;

    const formData = {
      brand: enteredBrand,
      vin: enteredVin,
      color: enteredColor,
      year: enteredYear,
      owner_id: "acfbbfc9-66bd-4555-9417-9bd5efa25aa4",
      claims: []
    };

    console.log(formData);
    fetch("http://localhost:5161/api/vehicles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((data) => {
        console.log("New Vehicle Added");
      })
      .then(() => getAllEntries());
  }

  const [personData, setPersonData] = useState();

  useEffect(() => {
    getAllEntries();
  }, []);

  function getAllEntries() {
    fetch("http://localhost:5161/api/vehicles/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((actualData) => {
        setPersonData(() => {
          return actualData;
        });
      });
  }

  function deleteEntry(person){

    fetch("http://localhost:8080/api/person", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(person),
    })
      .then((data) => {
        console.log("New Person Added");
        // window.location.assign("http://localhost:3000/Login#s=1");
      })
      .then(() => getAllEntries());
  }





  return (
    <div className={classes.row} id="Set">
      <div className={classes.column}>
        <div className={classes.formContainer}>
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor="brand">Brand</label>
              <input
                type="text"
                required
                id="brand"
                ref={brandRef}
                maxLength="25"
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="vin">Vin</label>
              <input
                type="text"
                required
                id="vin"
                ref={vinRef}
                maxLength="25"
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="color">Color</label>
              <input
                type="text"
                required
                id="color"
                ref={colorRef}
                maxLength="25"
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="year">Year</label>
              <input
                type="text"
                required
                id="year"
                ref={yearRef}
                maxLength="25"
              />
            </div>

            <div className={classes.actions}>
              <button>Add Vehicle</button>
            </div>
          </form>
        </div>
      </div>

      <div className={classes.column}></div>

      <div className={classes.arrow}>
        <img src={arrow} />
      </div>

      <div className={classes.column}>
        <div className={classes.formContainerResults}>
          {personData &&
            personData.map((person) => (
              <div className={classes.datarow}>
                <div className={classes.datainnerow}>
                  <div className={classes.datainnercolumn}>
                    Brand: <b>{person.brand}</b>{" "}
                  </div>
                  <div className={classes.datainnercolumn}>
                    Vin: <b>{person.vin}</b>
                  </div>
                </div>

                <div className={classes.datainnerow}>
                  <div className={classes.datainnercolumn}>
                   Color: <b>{person.color}</b>
                  </div>
                  <div className={classes.datainnercolumn}>
                    Year: <b>{person.year}</b>
                  </div>
                </div>
                <div className={classes.trash}>
                  <button onClick={()=> deleteEntry(person)}>
                    <img src={trash} />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      
      <div className={classes.buttonCont}>
      <div className={classes.winClwrap}>
        <Link to="/claims" className={classes.winClbtn} type="button" value="Button" style={{textDecoration: "none", color: "black",height: "100px"}}>Claims</Link></div>     
      </div>

    </div>
  );
}
export default Vehicles;
