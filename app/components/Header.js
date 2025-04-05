export default function Header(props) {
  return (
    <header
      style={{
        padding: "20px",
        backgroundColor: props.backgroundColor,
        color: "#fff",
      }}
    >
      <h1> {props.title} </h1>
    </header>
  );
}
