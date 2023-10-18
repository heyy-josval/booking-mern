import Person2Icon from "@mui/icons-material/Person2";
import { IconButton } from "@mui/material";
import { useLocation } from "wouter";

export default function CornerButton({ link }) {
  const [location, setLocation] = useLocation();
  return (
    <IconButton
      size="medium"
      color="primary"
      disabled={location == link ? true : false}
      onClick={() => {
        setLocation(link);
      }}
    >
      <Person2Icon fontSize="medium" />
    </IconButton>
  );
}
