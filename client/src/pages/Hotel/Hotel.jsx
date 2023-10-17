export default function Hotel(props) {
  console.log(props);
  return (
    <div>
      <h1>Hotel</h1>
      {props.params.id}
    </div>
  );
}
