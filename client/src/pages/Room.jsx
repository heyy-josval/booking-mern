export default function Hotel({ params: { id } }) {
  // Muestra en la consola los parametros del wouter
  // console.log(params);
  return (
    <div>
      <h1>Room</h1>
      {id}
    </div>
  );
}
