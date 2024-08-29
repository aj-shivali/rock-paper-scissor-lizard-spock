import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ChoiceButton from "./ChoiceButton";
import Loader from "./Loader";
import WinnerEffect from "./WinnerEffect";

type Choice = "rock" | "paper" | "scissors" | "lizard" | "spock";
type Result = "win" | "lose" | "draw" | null;

interface PlayResultProps {
  playerChoice: Choice;
  computerChoice: Choice | null;
  result: Result;
  getChoiceStyles: (choice: Choice) => React.CSSProperties;
  onPlayAgain: () => void;
  isDesktop: boolean;
  isComputerChoosing: boolean;
}

const PlayResult: React.FC<PlayResultProps> = ({
  playerChoice,
  computerChoice,
  result,
  getChoiceStyles,
  onPlayAgain,
  isDesktop,
  isComputerChoosing,
}) => {
  const getResultText = () => {
    switch (result) {
      case "win":
        return "YOU WIN";
      case "lose":
        return "YOU LOSE";
      case "draw":
        return "DRAW";
      default:
        return "";
    }
  };

  const ChoiceWithEffect = ({
    choice,
    isWinner,
  }: {
    choice: "rock" | "paper" | "scissors" | "lizard" | "spock";
    isWinner: boolean;
  }) => (
    <Box sx={{ position: "relative" }}>
      {isWinner && <WinnerEffect isDesktop={isDesktop} />}
      <ChoiceButton
        choice={choice}
        onClick={() => {}}
        isDesktop={isDesktop}
        getChoiceStyles={getChoiceStyles}
      />
    </Box>
  );

  if (isDesktop) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
          gap: "60px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "white", marginBottom: "20px" }}
          >
            YOU PICKED
          </Typography>
          <ChoiceWithEffect choice={playerChoice} isWinner={result === "win"} />
        </Box>
        {!isComputerChoosing && result && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "white", marginBottom: "20px" }}
            >
              {getResultText()}
            </Typography>
            <Button
              variant="contained"
              onClick={onPlayAgain}
              sx={{
                backgroundColor: "white",
                color: "hsl(229, 25%, 31%)",
                padding: "15px 60px",
                fontSize: "16px",
                letterSpacing: "2px",
                "&:hover": {
                  backgroundColor: "hsl(0, 0%, 90%)",
                },
              }}
            >
              PLAY AGAIN
            </Button>
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "white", marginBottom: "20px" }}
          >
            THE HOUSE PICKED
          </Typography>
          {isComputerChoosing ? (
            <Box
              sx={{
                width: 198,
                height: 198,
                borderRadius: "50%",
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Loader />
            </Box>
          ) : computerChoice ? (
            <ChoiceWithEffect
              choice={computerChoice}
              isWinner={result === "lose"}
            />
          ) : (
            <Box
              sx={{
                width: 198,
                height: 198,
                borderRadius: "50%",
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              }}
            />
          )}
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        flexGrow: 1,
        height: "100%",
        py: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          mt: 4, // Add top margin to move choices lower
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "330px",
            mb: 5, // Add bottom margin for spacing
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column-reverse",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <ChoiceWithEffect
              choice={playerChoice}
              isWinner={result === "win"}
            />
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontSize: "14px",
                letterSpacing: "2px",
                textAlign: "center",
              }}
            >
              YOU PICKED
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column-reverse",
              alignItems: "center",
              gap: "15px",
            }}
          >
            {isComputerChoosing ? (
              <Box
                sx={{
                  width: 130,
                  height: 130,
                  borderRadius: "50%",
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Loader />
              </Box>
            ) : computerChoice ? (
              <ChoiceWithEffect
                choice={computerChoice}
                isWinner={result === "lose"}
              />
            ) : (
              <Box
                sx={{
                  width: 130,
                  height: 130,
                  borderRadius: "50%",
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                }}
              />
            )}
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontSize: "14px",
                letterSpacing: "2px",
                textAlign: "center",
              }}
            >
              THE HOUSE PICKED
            </Typography>
          </Box>
        </Box>
        {!isComputerChoosing && result && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "white",
                marginBottom: "20px",
                fontSize: "40px",
                letterSpacing: "2px",
                textAlign: "center",
              }}
            >
              {getResultText()}
            </Typography>
            <Button
              variant="contained"
              onClick={onPlayAgain}
              sx={{
                backgroundColor: "white",
                color: "hsl(229, 25%, 31%)",
                padding: "12px 40px",
                fontSize: "14px",
                letterSpacing: "2px",
                "&:hover": {
                  backgroundColor: "hsl(0, 0%, 90%)",
                },
              }}
            >
              PLAY AGAIN
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PlayResult;
