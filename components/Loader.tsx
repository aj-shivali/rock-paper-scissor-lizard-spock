import React from "react";
import { Box } from "@mui/material";

const Loader: React.FC = () => {
  return (
    <Box
      sx={{
        width: "40px",
        aspectRatio: "1",
        color: "hsl(217, 16%, 45%)", // Updated color to match the game's color palette
        position: "relative",
        background: "radial-gradient(10px, currentColor 94%, #0000)",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: `
            radial-gradient(9px at bottom right, #0000 94%, currentColor) top left,
            radial-gradient(9px at bottom left, #0000 94%, currentColor) top right,
            radial-gradient(9px at top right, #0000 94%, currentColor) bottom left,
            radial-gradient(9px at top left, #0000 94%, currentColor) bottom right
          `,
          backgroundSize: "20px 20px",
          backgroundRepeat: "no-repeat",
          animation: "l18 1.5s infinite cubic-bezier(0.3, 1, 0, 1)",
        },
        "@keyframes l18": {
          "33%": { inset: "-10px", transform: "rotate(0deg)" },
          "66%": { inset: "-10px", transform: "rotate(90deg)" },
          "100%": { inset: "0", transform: "rotate(90deg)" },
        },
      }}
    />
  );
};

export default Loader;
