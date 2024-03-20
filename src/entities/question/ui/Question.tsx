function CollapsibleComponent({ title, answer }) {
  return (
    <details>
      <summary>{title}</summary>
      <p>{answer}</p>
    </details>
  );
}

export default CollapsibleComponent;
