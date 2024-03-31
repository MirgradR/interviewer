interface Props {
  title: string;
  answer: string;
  id: number;
}

function CollapsibleComponent({ title, answer, id }: Props) {
  return (
    <details>
      <summary>
        <span style={{ fontWeight: "bold", fontSize: "24px" }}>{id}</span> -{" "}
        {title}
      </summary>
      <p>{answer}</p>
    </details>
  );
}

export default CollapsibleComponent;
