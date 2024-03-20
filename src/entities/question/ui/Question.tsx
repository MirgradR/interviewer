interface Props {
  title: string;
  answer: string;
}

function CollapsibleComponent({ title, answer }: Props) {
  return (
    <details>
      <summary>{title}</summary>
      <p>{answer}</p>
    </details>
  );
}

export default CollapsibleComponent;
