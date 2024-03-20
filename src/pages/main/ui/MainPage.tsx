import styles from "./styles.module.css";
import { questions1, questions2, questions3 } from "@/shared/data/data";
import CollapsibleComponent from "@/entities/question/ui/Question";

const MainPage = () => {
  return (
    <main className={styles.main}>
      <h1>Вопросы к собеседованиям</h1>
      <section>
        <h2>Верстка</h2>
        <ul>
          {questions1.map((question) => {
            return (
              <li key={question.id}>
                <CollapsibleComponent
                  answer={question.answer}
                  title={question.title}
                />
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <h2>JavaScript</h2>
        <ul>
          {questions2.map((question) => {
            return (
              <li key={question.id}>
                <CollapsibleComponent
                  answer={question.answer}
                  title={question.title}
                />
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <h2>React</h2>
        <ul>
          {questions3.map((question) => {
            return (
              <li key={question.id}>
                <CollapsibleComponent
                  answer={question.answer}
                  title={question.title}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default MainPage;
