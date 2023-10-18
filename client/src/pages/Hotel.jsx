import { useParams } from "wouter";

export default function Hotel() {
  const { id } = useParams();
  return (
    <div>
      <h1>Hotel</h1>
      {id}
    </div>
  );
}
