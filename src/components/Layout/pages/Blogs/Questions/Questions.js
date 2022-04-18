import React, { useEffect, useState } from "react";
import styles from "./Questions.module.css";
import Question from "./Question/Question";

const Questions = () => {
   const [questions, setQuestions] = useState([]);

   //Getting questions data from questions data json
   useEffect(() => {
      fetch("questions-data.json")
         .then((response) => response.json())
         .then((data) => setQuestions(data));
   }, []);

   return (
      <div className={styles.questionsSection}>
         <h2>React Interview Questions</h2>
         <div className={styles.questionsContainer}>
            {questions.map((question) => (
               <Question
                  key={question.id}
                  question={question.question}
                  answer={question.answer}
               />
            ))}
         </div>
      </div>
   );
};

export default Questions;
