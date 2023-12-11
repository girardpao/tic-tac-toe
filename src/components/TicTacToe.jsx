import style from "./TicTacToe.module.css";
import Circle from "../assets/circle.png";
import Cross from "../assets/cross.png";
import { useState } from "react";

let move = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  // let titleRef = useRef(null);

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src="${Cross}">`;
      move[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src="${Circle}">`;
      move[num] = "o";
      setCount(++count);
    }
    winCheck();
  };

  const winCheck = () => {
    if (move[0] === move[1] && move[1] === move[2] && move[2] !== "") {
      win(move[2]);
    } else if (move[3] === move[4] && move[4] === move[5] && move[5] !== "") {
      win(move[5]);
    } else if (move[6] === move[7] && move[7] === move[8] && move[8] !== "") {
      win(move[8]);
    } else if (move[0] === move[3] && move[3] === move[6] && move[6] !== "") {
      win(move[6]);
    } else if (move[1] === move[4] && move[4] === move[7] && move[7] !== "") {
      win(move[7]);
    } else if (move[2] === move[5] && move[5] === move[8] && move[8] !== "") {
      win(move[8]);
    } else if (move[0] === move[4] && move[4] === move[8] && move[8] !== "") {
      win(move[8]);
    }

    // else if (move[0] === move[1] && move[1] === move[2] && move[2] !== "") {
    //   win(move[2]);
    // }
    else if (move[2] === move[4] && move[4] === move[6] && move[6] !== "") {
      win(move[6]);
    }
  };

  const win = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations: <img src=${Cross}>`;
    } else {
      titleRef.current.innerHTML = `Congratulations: <img src=${Circle}>`;
    }
  };

  return (
    <div className={style.container}>
      <h1 className={style.title} /*ref={titleRef}*/>Tic Tac Toe</h1>
      <div className={style.board}>
        <div className={style.row1}>
          <div
            className={style.box}
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            className={style.box}
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            className={style.box}
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div className={style.row2}>
          <div
            className={style.box}
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            className={style.box}
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            className={style.box}
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className={style.row3}>
          <div
            className={style.box}
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            className={style.box}
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            className={style.box}
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <button className={style.reset}>Reset</button>
    </div>
  );
};

export default TicTacToe;
