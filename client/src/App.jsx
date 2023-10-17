import { Link, Route } from "wouter";
import { Home, Hotel, List } from "./pages/allPages";

export default function App() {
  return (
    <div>
      <Route path="/" component={Home} />
      <Route path="/hotels" component={List} />
      <Route path="/hotels/:id" component={Hotel} />
    </div>
  );
}
