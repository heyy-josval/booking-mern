import { Link, Route } from "wouter";
import {
  Home,
  Hotel,
  Hotels,
  Booking,
  Bookings,
  Profile,
} from "./pages/allPages";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";

export default function App() {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <div className="content">
        <Route path="/" component={Home} />
        <Route path="/me" component={Profile} />
        <Route path="/hotels" component={Hotels} />
        <Route path="/hotels/:id" component={Hotel} />
        <Route path="/bookings" component={Bookings} />
        <Route path="/bookings/:id" component={Booking} />
      </div>
    </Container>
  );
}
