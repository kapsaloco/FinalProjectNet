import classes from "./Page.module.css";
import { useRef } from "react";
import "react-phone-number-input/style.css";
import { useState, useEffect } from "react";
import arrow from "./../images/arrow.png";
import trash from "./../images/trashIcon.png";
import { Link } from 'react-router-dom';

function Claims() {
  const [valueNum, setValue] = useState();

  const descrRef = useRef();
  const statusRef = useRef();
  const dateRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredDescr = descrRef.current.value;
    const enteredStatus = statusRef.current.value;
    const enteredDate = dateRef.current.value;
    const dateformat = new Date(enteredDate).toISOString();
    const formData = {
      description: enteredDescr,
      status: enteredStatus,
      date: dateformat,
      vehicle_id: "4fbdba24-5976-49cc-b9fc-69cead47f8ca"
      
    };

    console.log(formData);
    fetch("http://localhost:5161/api/claims", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((data) => {
        console.log("New Claim Added");
      })
      .then(() => getAllEntries());
  }

  const [personData, setPersonData] = useState();

  useEffect(() => {
    getAllEntries();
  }, []);

  function getAllEntries() {
    fetch("http://localhost:5161/api/claims/", {
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
              <label htmlFor="descr">Description</label>
              <input
                type="text"
                required
                id="descr"
                ref={descrRef}
                maxLength="25"
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="status">Status</label>
              <input
                type="text"
                required
                id="status"
                ref={statusRef}
                maxLength="25"
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="date">Date</label>
              <input
                type="date"
                required
                id="date"
                ref={dateRef}
                maxLength="25"
              />
            </div>
            <div className={classes.actions}>
              <button>Add Claim</button>
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
                    Description: <b>{person.description}</b>{" "}
                  </div>
                  <div className={classes.datainnercolumn}>
                    Status: <b>{person.status}</b>
                  </div>
                </div>

                <div className={classes.datainnerow}>
                  <div className={classes.datainnercolumn}>
                    Date: <b>{person.date}</b>
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
        <Link to="/" className={classes.winClbtn} type="button" value="Button" style={{textDecoration: "none", color: "black",height: "100px"}}>Home</Link></div>     
      </div>

    </div>
  );
}
export default Claims;
