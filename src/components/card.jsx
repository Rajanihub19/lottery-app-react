import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useForm } from "react-hook-form";

// import TextField from "@mui/material/TextField";
const Game = () => {
  const [drop, setDrop] = useState("Easy");
  const [inputValue, setInputValue] = useState("");
  const [state, setState] = useState(10);
  const [chance, setChance] = useState(3);

  const Data = [];
  let i;
  for (i = 1; i <= chance; i++) {
    Data.push(<i class="bi bi-triangle-fill text-danger "></i>);
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleConvert = () => {
    const random1 = parseInt(Math.random() * state);
    console.log("RANDOM---", random1);
    if (random1 === inputValue) {
      // console.log("RANDOM---", random1);
      alert("You won");
    } else if (chance === 1) {
      setChance(3);
    } else {
      alert("You lose");
      // setChance(chance - 1);
      setChance((pre) => pre - 1);
    }
  };
  return (
    <div style={{ width: "50%" }}>
      <div class="card text-center bg-warning">
        <div className="d-flex justify-content-between py-3 px-2 ">
          <div>{Data.map((triangle) => triangle)}</div>
          <div class="card-header  bg-warning">LOTTERY GAME</div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {drop}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <button
                  onClick={() => {
                    setDrop("Easy");
                    setState(10);
                  }}
                >
                  <Dropdown.Item href="#/action-1">Easy</Dropdown.Item>
                </button>
                <button
                  onClick={() => {
                    setDrop("Hard");
                    setState(100);
                  }}
                >
                  <Dropdown.Item href="#/action-2">Hard</Dropdown.Item>
                </button>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">Try your luck!!!</h5>
          <div class="form-group">
            <label for="usr">Enter number</label>

            <input
              type="number"
              class="form-control"
              id="usr"
              value={inputValue}
              onChange={handleChange}
              placeholder={`1-${state}`}
            />
          </div>

          <button
            className="bg-danger px-5 py-2 my-4"
            onClick={() => {
              handleConvert();
            }}
          >
            play
          </button>
        </div>
        <div class="card-footer text-muted">Have a nice game!!!!</div>
      </div>
    </div>
  );
};
export default Game;
