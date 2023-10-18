import { Stack } from "@mui/material";
import BottombarButton from "./BottombarButton";
import {
  AirlineSeatIndividualSuite,
  AirportShuttle,
  AutoAwesome,
  Flight,
  TimeToLeave,
} from "@mui/icons-material";

const buttons = [
  {
    text: "Habitaciones",
    link: "/hotels",
    icon: <AirlineSeatIndividualSuite />,
  },
  { text: "Vuelos", link: "", icon: <Flight /> },
  { text: "Renta de carros", link: "", icon: <TimeToLeave /> },
  { text: "Atracciones", link: "", icon: <AutoAwesome /> },
  { text: "Taxi a aeropuerto", link: "", icon: <AirportShuttle /> },
];

export default function Bottombar({ direction }) {
  return (
    <Stack spacing={2} direction="row" justifyContent={direction}>
      {buttons.map(({ text, link, icon }, pos) => {
        return (
          <BottombarButton icon={icon} link={link} text={text} key={pos} />
        );
      })}
    </Stack>
  );
}
