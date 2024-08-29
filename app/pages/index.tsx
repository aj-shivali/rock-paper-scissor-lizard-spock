import { Button } from "@mui/material";

type Choice = "rock" | "paper" | "scissors" | "lizard" | "spock";

function GameComponent({
  choice,
  handleChoice,
}: {
  choice: Choice;
  handleChoice: (choice: Choice) => void;
}) {
  // ... other code ...

  return (
    // ... other JSX ...
    <Button
      variant="contained"
      onClick={() => handleChoice(choice)}
      sx={{
        position: "relative",
        overflow: "visible",
        transition: "all 0.3s ease-in-out",
        "&::after": {
          content: '""',
          position: "absolute",
          top: "-10px",
          left: "-10px",
          right: "-10px",
          bottom: "-10px",
          background: "rgba(255, 255, 255, 0.2)", // Increased opacity for more visible whitish tint
          borderRadius: "8px",
          opacity: 0,
          transition: "opacity 0.3s ease-in-out",
          zIndex: -1,
        },
        "&:hover": {
          transform: "scale(1.05)",
          "&::after": {
            opacity: 1,
          },
        },
      }}
    >
      {choice}
    </Button>
    // ... other JSX ...
  );
}
