import { Button } from "@mui/material";
export default function TopbarButton({ handleButton, text }) {
  return (
    <Button size="large" variant="contained" onClick={handleButton}>
      {text}
    </Button>
  );
}
