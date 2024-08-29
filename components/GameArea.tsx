import React from "react";
import { Box } from "@mui/material";
import ChoiceButton from "./ChoiceButton";

type Choice = "rock" | "paper" | "scissors" | "lizard" | "spock";

interface GameAreaProps {
  choices: Choice[];
  onChoiceClick: (choice: Choice) => void;
  getChoiceStyles: (choice: Choice) => React.CSSProperties;
  isDesktop: boolean;
}

const GameArea: React.FC<GameAreaProps> = ({
  choices,
  onChoiceClick,
  getChoiceStyles,
  isDesktop,
}) => {
  const containerSize = isDesktop ? 500 : 300;
  const buttonSize = isDesktop ? 150 : 100;

  const buttonPositions = [
    { top: 0, left: "50%", transform: "translateX(-50%)" },
    { top: "23%", right: 0 },
    { bottom: "8%", right: "10%" },
    { bottom: "8%", left: "10%" },
    { top: "23%", left: 0 },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        width: containerSize,
        height: containerSize,
        margin: "0 auto",
        backgroundImage: "url('/assets/bg-pentagon.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "80%",
      }}
    >
      {choices.map((choice, index) => (
        <Box
          key={choice}
          sx={{
            position: "absolute",
            ...buttonPositions[index],
            width: buttonSize,
            height: buttonSize,
          }}
        >
          <ChoiceButton
            choice={choice}
            onClick={() => onChoiceClick(choice)}
            isDesktop={isDesktop}
            getChoiceStyles={getChoiceStyles}
          />
        </Box>
      ))}
    </Box>
  );
};

export default GameArea;
