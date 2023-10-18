import { Button, Stack } from "@mui/material";
import {
  AirlineSeatIndividualSuite,
  Flight,
  TimeToLeave,
  AutoAwesome,
  AirportShuttle,
} from "@mui/icons-material";
import { Link } from "wouter";

export default function Navbar() {
  return (
    <div style={{ width: "100%" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "#90caf9",
          }}
        >
          <h2 style={{ letterSpacing: "2px", cursor: "pointer" }}>
            RESERVAS JOSVAL
          </h2>
        </Link>
        <Stack direction="row" spacing={2}>
          <Button size="large" variant="contained">
            Register
          </Button>
          <Button size="large" variant="contained">
            Login
          </Button>
        </Stack>
      </Stack>
      <Stack spacing={2} direction="row" justifyContent="start">
        <Button
          size="medium"
          variant="outlined"
          startIcon={<AirlineSeatIndividualSuite />}
        >
          <Link
            href="/hotels"
            style={{ textDecoration: "none", color: "#90caf9" }}
          >
            Estancias
          </Link>
        </Button>
        <Button size="medium" variant="outlined" startIcon={<Flight />}>
          Vuelos
        </Button>
        <Button size="medium" variant="outlined" startIcon={<TimeToLeave />}>
          Rentas de carros
        </Button>
        <Button size="medium" variant="outlined" startIcon={<AutoAwesome />}>
          Atracciones
        </Button>
        <Button size="medium" variant="outlined" startIcon={<AirportShuttle />}>
          Atracciones
        </Button>
      </Stack>
    </div>
  );
}
