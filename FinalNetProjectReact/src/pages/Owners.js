import classes from "./Page.module.css";
import { useRef } from "react";
import "react-phone-number-input/style.css";
import { useState, useEffect } from "react";
import arrow from "./../images/arrow.png";
import trash from "./../images/trashIcon.png";
import { Link } from 'react-router-dom';

function Owners() {
  const [valueNum, setValue] = useState();

  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const driversRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredFirstName = firstnameRef.current.value;
    const enteredLastName = lastnameRef.current.value;
    const enteredDriversLicense = driversRef.current.value;

    const formData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      driverLicense: enteredDriversLicense,
      vehicles: []
    };

    console.log(formData);
    fetch("http://localhost:5161/api/owners", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((data) => {
        console.log("New Owner Added");
      })
      .then(() => getAllEntries());
  }

  const [personData, setPersonData] = useState();

  useEffect(() => {
    getAllEntries();
  }, []);

  function getAllEntries() {
    fetch("http://localhost:5161/api/owners/", {
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
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                required
                id="firstname"
                ref={firstnameRef}
                maxLength="25"
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                required
                id="lastname"
                ref={lastnameRef}
                maxLength="25"
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="address">Driver's License</label>
              <input
                type="text"
                required
                id="lastname"
                ref={driversRef}
                maxLength="25"
              />
            </div>
            <div className={classes.actions}>
              <button>Add Owner</button>
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
                    First Name: <b>{person.firstName}</b>{" "}
                  </div>
                  <div className={classes.datainnercolumn}>
                    Last Name: <b>{person.lastName}</b>
                  </div>
                </div>

                <div className={classes.datainnerow}>
                  <div className={classes.datainnercolumn}>
                    Driver's License: <b>{person.driverLicense}</b>
                  </div>
                  {/* <div className={classes.datainnercolumn}>
                    E-mail: <b>{person.email}</b>
                  </div> */}
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
        <Link to="/vehicles" className={classes.winClbtn} type="button" value="Button" style={{textDecoration: "none", color: "black",height: "100px"}}>Vehicles </Link></div>     
      </div>

    </div>
  );
}
export default Owners;
