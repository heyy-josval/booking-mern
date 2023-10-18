import { Button } from "@mui/material";
import { useLocation } from "wouter";

export default function NavbarButton({ icon, link, text }) {
  const [location, setLocation] = useLocation();
  return (
    <Button
      size="medium"
      variant={location == link ? "contained" : "outlined"}
      startIcon={icon}
      onClick={() => {
        setLocation(link);
      }}
    >
      {text}
    </Button>
  );
}
