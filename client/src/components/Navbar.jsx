import { Button, Stack } from "@mui/material";
import {
  AirlineSeatIndividualSuite,
  Flight,
  TimeToLeave,
  AutoAwesome,
  AirportShuttle,
} from "@mui/icons-material";

export default function Navbar() {
  return (
    <div style={{ width: "100%" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <h2 style={{ letterSpacing: "2px" }}>RESERVAS JOSVAL</h2>
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
          Estancias
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
