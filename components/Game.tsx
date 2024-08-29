import React, { useState, useMemo, useEffect, useCallback } from "react";
import { Container, Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Header from "./Header";
import GameArea from "./GameArea";
import RulesButton from "./RulesButton";
import RulesModal from "./RulesModal";
import PlayResult from "./PlayResult";

// Update the Choice type to include only the original three options
type Choice = "rock" | "paper" | "scissors" | "lizard" | "spock";
type Result = "win" | "lose" | "draw";

const choices: Choice[] = ["rock", "paper", "scissors", "lizard", "spock"];

const Game: React.FC = () => {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [score, setScore] = useState(0);
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);
  const [lastComputerChoice, setLastComputerChoice] = useState<Choice | null>(
    null
  );
  const [isComputerChoosing, setIsComputerChoosing] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const getChoiceStyles = useMemo(
    () => (choice: Choice) => ({
      borderRadius: "50%",
      backgroundColor: `hsl(${
        choice === "rock"
          ? "349, 71%, 52%"
          : choice === "paper"
          ? "230, 89%, 62%"
          : choice === "scissors"
          ? "39, 89%, 49%"
          : choice === "lizard"
          ? "261, 73%, 60%"
          : "189, 59%, 53%"
      })`,
      boxShadow: `0 5px 0 hsl(${
        choice === "rock"
          ? "349, 70%, 56%"
          : choice === "paper"
          ? "230, 89%, 65%"
          : choice === "scissors"
          ? "28, 75%, 45%"
          : choice === "lizard"
          ? "261, 72%, 63%"
          : "189, 58%, 57%"
      })`,
      border: "none",
      outline: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "scale(1.05)",
      },
    }),
    []
  );

  const determineWinner = (player: Choice, computer: Choice): Result => {
    if (player === computer) return "draw";
    const winConditions: Record<Choice, Choice[]> = {
      scissors: ["paper", "lizard"],
      paper: ["rock", "spock"],
      rock: ["lizard", "scissors"],
      lizard: ["spock", "paper"],
      spock: ["scissors", "rock"],
    };
    return winConditions[player].includes(computer) ? "win" : "lose";
  };

  useEffect(() => {
    if (playerChoice && computerChoice) {
      const gameResult = determineWinner(playerChoice, computerChoice);
      setResult(gameResult);
      if (gameResult === "win") {
        setScore((prevScore) => prevScore + 1);
      } else if (gameResult === "lose") {
        setScore((prevScore) => Math.max(0, prevScore - 1));
      }
    }
  }, [playerChoice, computerChoice]);

  const handleRulesClick = () => {
    setIsRulesModalOpen(true);
  };

  const handleCloseRulesModal = () => {
    setIsRulesModalOpen(false);
  };

  // Update the getComputerChoice function to use the new Choice type
  const getComputerChoice = useCallback((): Choice => {
    let availableChoices = choices.filter(
      (choice) => choice !== lastComputerChoice
    );
    if (availableChoices.length === 0) {
      availableChoices = choices;
    }
    const randomIndex = Math.floor(Math.random() * availableChoices.length);
    return availableChoices[randomIndex];
  }, [lastComputerChoice]);

  const handleChoiceClick = (choice: Choice) => {
    setPlayerChoice(choice);
    setIsComputerChoosing(true);

    setTimeout(() => {
      const newComputerChoice = getComputerChoice();
      setComputerChoice(newComputerChoice);
      setLastComputerChoice(newComputerChoice);
      setIsComputerChoosing(false);
    }, 2000);
  };

  const handlePlayAgain = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: isDesktop ? "48px 32px" : "32px 32px 0",
        maxWidth: isDesktop ? "1366px" : "100%",
        margin: "0 auto",
        position: "relative", // Add this line
      }}
    >
      <Header score={score} />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: isDesktop ? 4 : 2,
        }}
      >
        {playerChoice === null ? (
          <GameArea
            choices={choices}
            onChoiceClick={handleChoiceClick}
            getChoiceStyles={getChoiceStyles}
            isDesktop={isDesktop}
          />
        ) : (
          <PlayResult
            playerChoice={playerChoice}
            computerChoice={computerChoice}
            result={result}
            getChoiceStyles={getChoiceStyles}
            onPlayAgain={handlePlayAgain}
            isDesktop={isDesktop}
            isComputerChoosing={isComputerChoosing}
          />
        )}
      </Box>
      <RulesButton onClick={handleRulesClick} />
      <RulesModal open={isRulesModalOpen} onClose={handleCloseRulesModal} />
    </Container>
  );
};

export default Game;
