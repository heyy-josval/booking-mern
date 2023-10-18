import { Stack } from "@mui/material";
import React from "react";
import { Link } from "wouter";
import TopbarButton from "./TopbarButton";
import CornerButton from "./CornerButton";

export default function Topbar({
  handleFirstButton,
  handleSecondButton,
  firstTextRight,
  secondTextRight,
  logo,
  linkLogo,
}) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Link
        href={linkLogo ?? "/"}
        style={{
          textDecoration: "none",
          color: "#90caf9",
        }}
      >
        {logo}
      </Link>
      <Stack direction="row" spacing={2}>
        <TopbarButton
          handleButton={handleSecondButton}
          text={secondTextRight}
        />
        <TopbarButton handleButton={handleFirstButton} text={firstTextRight} />
        <CornerButton link="/profile" />
      </Stack>
    </Stack>
  );
}
