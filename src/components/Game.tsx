import React, { useState } from "react";
import { Button, Typography, Box, Paper, useMediaQuery } from "@mui/material";

type Choice = "rock" | "paper" | "scissors" | null;

const Game: React.FC = () => {
  const [playerChoice, setPlayerChoice] = useState<Choice>(null);
  const [computerChoice, setComputerChoice] = useState<Choice>(null);
  const [result, setResult] = useState<string | null>(null);

  const isMobile = useMediaQuery("(max-width:600px)");

  const choices: Choice[] = ["rock", "paper", "scissors"];

  const getComputerChoice = (): Choice => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const determineWinner = (player: Choice, computer: Choice): string => {
    if (player === computer) return "It's a tie!";
    if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      return "You win!";
    }
    return "Computer wins!";
  };

  const handleChoice = (choice: Choice) => {
    const computerChoice = getComputerChoice();
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    setResult(determineWinner(choice, computerChoice));
  };

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Rock Paper Scissors
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 4 }}>
        {choices.map((choice) => (
          <Button
            key={choice}
            onClick={() => handleChoice(choice)}
            sx={{ p: 0, minWidth: "auto" }}
          >
            <img
              src={`/${isMobile ? "mobile" : "desktop"}-${choice}.png`}
              alt={"image"}
              width={isMobile ? 80 : 120}
              height={isMobile ? 80 : 120}
            />
          </Button>
        ))}
      </Box>
      {playerChoice && computerChoice && (
        <Paper elevation={3} sx={{ p: 2, maxWidth: 300, mx: "auto" }}>
          <Typography variant="body1">Your choice: {playerChoice}</Typography>
          <Typography variant="body1">
            Computer's choice: {computerChoice}
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            {result}
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default Game;
