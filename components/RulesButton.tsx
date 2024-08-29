import React from "react";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface RulesButtonProps {
  onClick: () => void;
}

const RulesButton: React.FC<RulesButtonProps> = ({ onClick }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: isDesktop ? "32px" : "56px",
        ...(isDesktop
          ? {
              right: "32px",
            }
          : {
              left: "50%",
              transform: "translateX(-50%)",
            }),
      }}
    >
      <Button
        variant="outlined"
        onClick={onClick}
        sx={{
          color: "white",
          borderColor: "hsl(217, 16%, 45%)",
          borderRadius: "8px",
          padding: "10px 36px",
          fontSize: "16px",
          letterSpacing: "2.5px",
          textTransform: "uppercase",
          transition: "all 0.3s ease",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "-2px",
            left: "-2px",
            right: "-2px",
            bottom: "-2px",
            background: "white",
            opacity: 0,
            transition: "opacity 0.3s ease",
          },
          "&:hover": {
            borderColor: "white",
            "&::before": {
              opacity: 1,
            },
            "& .buttonText": {
              color: "hsl(229, 25%, 31%)",
              position: "relative",
              zIndex: 1,
            },
          },
        }}
      >
        <span className="buttonText">Rules</span>
      </Button>
    </Box>
  );
};

export default RulesButton;
