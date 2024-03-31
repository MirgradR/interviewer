import styles from "./styles.module.css";
import {
  browserQuestions,
  htmlcssQuestions,
  javascriptQuestions,
  reactQuestions,
} from "@/shared/data/data";
import CollapsibleComponent from "@/entities/question/ui/Question";
import { useState } from "react";

const MainPage = () => {
  const [type, setType] = useState("css");
  return (
    <main className={styles.main}>
      <h1>Вопросы к собеседованиям</h1>

      <div>
        <button onClick={() => setType("css")}>Верстка</button>
        <button onClick={() => setType("js")}>JavaScript</button>
        <button onClick={() => setType("browser")}>Browser, API, DOM</button>
        <button onClick={() => setType("react")}>React</button>
      </div>

      {type === "css" ? (
        <section>
          <h2>Верстка</h2>
          <ul>
            {htmlcssQuestions.map((question, index) => {
              return (
                <li key={question.id}>
                  <CollapsibleComponent
                    answer={question.answer}
                    title={question.title}
                    id={index}
                  />
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
      {type === "js" ? (
        <section>
          <h2>JavaScript</h2>
          <ul>
            {javascriptQuestions.map((question, index) => {
              return (
                <li key={question.id}>
                  <CollapsibleComponent
                    answer={question.answer}
                    title={question.title}
                    id={index}
                  />
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      {type === "browser" ? (
        <section>
          <h2>Browser, API, DOM</h2>
          <ul>
            {browserQuestions.map((question, index) => {
              return (
                <li key={question.id}>
                  <CollapsibleComponent
                    answer={question.answer}
                    title={question.title}
                    id={index}
                  />
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      {type === "react" ? (
        <section>
          <h2>React</h2>
          <ul>
            {reactQuestions.map((question, index) => {
              return (
                <li key={question.id}>
                  <CollapsibleComponent
                    answer={question.answer}
                    title={question.title}
                    id={index}
                  />
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </main>
  );
};

export default MainPage;
