import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";

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
    background: '#fff',
    borderRadius: '0.5rem',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    padding: '1.5rem 1.5rem 0 1.5rem',
    marginBottom: '2rem',
  },
  questionTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textTransform: "capitalize",
    paddingBottom: 10,
  },
  questionText: {
    padding: '1rem 0 1.5rem 0',
    borderTop: '1px solid rgba(0, 0, 0, 0.2)',
  },
  questionBtn: {
    fontSize: 20,
    background: "transparent",
    borderColor: "transparent",
  },
});

const Questions = () => {
  const classes = useStyles();

  return (
    <div>
      {/* header */}
      <h3 className={classes.root}>Genral Questions</h3>

      {/* Questions */}
      <article className={classes.question}>
        <div className={classes.questionTitle}>
          <p>This is my first question</p>
          {/* Question title */}
          <div className={classes.questionBtn}>
            <span>
              <FaRegPlusSquare />
            </span>
            <span>
              <FaRegMinusSquare />
            </span>
          </div>
        </div>
        <div className={classes.questionText}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            quisquam dolore! Pariatur obcaecati quibusdam doloremque expedita.
            Amet quasi veritatis neque provident molestias, aliquam vel saepe
            cupiditate voluptas nihil dignissimos ipsum hic dolorum
            necessitatibus et! Repellat ut sapiente blanditiis excepturi totam.
          </p>
        </div>
      </article>
    </div>
  );
};

export default Questions;
