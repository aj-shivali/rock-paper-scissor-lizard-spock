import React from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";

interface ChoiceButtonProps {
  choice: "rock" | "paper" | "scissors" | "lizard" | "spock";
  onClick: () => void;
  isDesktop: boolean;
  getChoiceStyles: (
    choice: "rock" | "paper" | "scissors" | "lizard" | "spock"
  ) => object;
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({
  choice,
  onClick,
  isDesktop,
  getChoiceStyles,
}) => {
  const outerSize = isDesktop ? 150 : 100;
  const innerSize = outerSize * 0.75; // 75% of the outer size

  return (
    <Button
      onClick={onClick}
      sx={{
        ...getChoiceStyles(choice),
        width: outerSize,
        height: outerSize,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        borderRadius: "50%",
        boxShadow: (theme) => `
          0 5px 0 ${theme.palette.grey[700]},
          0 6px 10px rgba(0, 0, 0, 0.23)
        `,
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.1)",
          boxShadow: "none",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        },
      }}
    >
      <Box
        sx={{
          width: innerSize,
          height: innerSize,
          borderRadius: "50%",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "inset 0 6px 0 rgba(0, 0, 0, 0.15)",
        }}
      >
        <Image
          src={`/assets/icon-${choice}.svg`}
          alt={choice}
          width={innerSize * 0.5}
          height={innerSize * 0.5}
        />
      </Box>
    </Button>
  );
};

export default ChoiceButton;
