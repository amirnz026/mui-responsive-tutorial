"use client";
import { theme } from "@/app/theme/theme";
import { Button, useMediaQuery } from "@mui/material";

export default function Buttons() {
  const isAboveMedium = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div>
      <Button>Button 1</Button>
      <Button sx={{ color: { mobile: "white", tablet: "orange" } }}>
        Button 2
      </Button>
      <Button
        sx={(theme) => ({
          fontSize: "1rem",
          [theme.breakpoints.up("mobile")]: {
            fontSize: "1.5rem",
          },
          [theme.breakpoints.up("tablet")]: {
            fontSize: "2rem",
          },
        })}
      >
        Button 3
      </Button>
      <Button>
        {isAboveMedium ? (
          <span>bigger than md</span>
        ) : (
          <span>smaller than md</span>
        )}
      </Button>
    </div>
  );
}
