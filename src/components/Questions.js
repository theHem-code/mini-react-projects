import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";
import "../Questions.css";
import questions from "../data/questions";

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    marginTop: 100,
    marginBottom: 100,
    textAlign: "-webkit-center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  question: {
    background: "#fff",
    borderRadius: "0.5rem",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    padding: "1.5rem 1.5rem 0 1.5rem",
    marginBottom: "2rem",
  },
  questionTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textTransform: "capitalize",
    paddingBottom: 10,
  },
  questionText: {
    padding: "1rem 0 1.5rem 0",
    borderTop: "1px solid rgba(0, 0, 0, 0.2)",
  },
  questionBtn: {
    fontSize: 20,
    background: "transparent",
    borderColor: "transparent",
  },
  hideText: {
    display: "none",
  },
});

const Questions = () => {
  const classes = useStyles();

  const [index, setIndex] = useState(0);
  const [isActive, setActive] = useState("false");

  const { title, text } = questions[index];

  const handleToggle = () => {
    setActive(!isActive);
  };


  return (
    <div>
      {/* header */}
      <h3 className={classes.root}>Genral Questions</h3>

      {/* Single Questions */}
      <article className="question">
        {/* Question title */}
        <div className="question-title">
          <p>{title}</p>
          <button
            type="button"
            className={`question-btn ${isActive ? "" : "show-text"}`}
            onClick={handleToggle}
          >
            <span>
              <FaRegPlusSquare className="plus-icon" />
            </span>
            <span>
              <FaRegMinusSquare className="minus-icon" />
            </span>
          </button>
        </div>
        <div className={isActive ? "question-text" : "show-text"}>
          <p>
            {text}
          </p>
        </div>
      </article>
    </div>
  );
};

export default Questions;
