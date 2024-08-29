import React from "react";
import { Box } from "@mui/material";

interface WinnerEffectProps {
  isDesktop: boolean;
}

const WinnerEffect: React.FC<WinnerEffectProps> = ({ isDesktop }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: isDesktop ? "300px" : "200px",
        height: isDesktop ? "300px" : "200px",
        zIndex: -1,
      }}
    >
      {[1, 2, 3].map((index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            animation: `ripple 1.5s linear infinite ${index * 0.5}s`,
            "@keyframes ripple": {
              "0%": {
                transform: "translate(-50%, -50%) scale(0.5)",
                opacity: 1,
              },
              "100%": {
                transform: "translate(-50%, -50%) scale(1.5)",
                opacity: 0,
              },
            },
          }}
        />
      ))}
    </Box>
  );
};

export default WinnerEffect;
