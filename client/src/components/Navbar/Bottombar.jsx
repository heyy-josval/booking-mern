import { Stack } from "@mui/material";
import BottombarButton from "./BottombarButton";
import { Bookmark, Hotel, Bed } from "@mui/icons-material";

const buttons = [
  { text: "Hoteles", link: "/hotels", icon: <Bed /> },
  {
    text: "Habitaciones",
    link: "/rooms",
    icon: <Hotel />,
  },
  { text: "Reservas", link: "/bookings", icon: <Bookmark /> },
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
