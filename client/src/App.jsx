import { Route } from "wouter";
import {
  Home,
  Room,
  Rooms,
  Booking,
  Bookings,
  Profile,
  Login,
  Register,
} from "./pages/allPages";
import Navbar from "./components/Navbar/Navbar";
import { Container } from "@mui/material";
import { useLocation } from "wouter";
import BackButton from "./components/BackButton";

const routes = [
  { path: "/", component: Home },
  { path: "/profile", component: Profile },
  { path: "/rooms", component: Rooms },
  { path: "/rooms/:id", component: Room },
  { path: "/bookings", component: Bookings },
  { path: "/bookings/:id", component: Booking },
  { path: "/bookings/:id", component: Booking },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

const excludeNavbar = ["/login", "/register"];

export default function App() {
  const [location, setLocation] = useLocation();
  return (
    <Container maxWidth="xl">
      {excludeNavbar.includes(location) ? (
        <BackButton link="/" text="Regresar" />
      ) : (
        <Navbar />
      )}

      <div>
        {routes.map(({ path, component }, pos) => {
          return <Route path={path} component={component} key={pos} />;
        })}
      </div>
    </Container>
  );
}
