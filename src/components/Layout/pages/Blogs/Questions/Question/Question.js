import React from "react";
import styles from "./Question.module.css";

const Question = ({ question, answer }) => {
   return (
      <div className={styles.questionContainer}>
         <div className={styles.question}>
            <h5>{question}</h5>
         </div>
         <div className={styles.answer}>
            <p>{answer}</p>
         </div>
      </div>
   );
};

export default Question;
