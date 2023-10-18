import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation } from "wouter";

export default function BackButton({ text, link }) {
  const [location, setLocation] = useLocation();
  return (
    <Button
      variant="contained"
      startIcon={<ArrowBackIcon />}
      onClick={() => {
        setLocation(link);
      }}
      style={{ marginTop: "1.5rem" }}
    >
      {text}
    </Button>
  );
}
