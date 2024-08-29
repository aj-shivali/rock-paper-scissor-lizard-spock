import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
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
    background: "rgba(255, 255, 255, 0.5)",
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
}));

function ChoiceButton({
  choice,
  onClick,
}: {
  choice: string;
  onClick: (choice: string) => void;
}) {
  return (
    <StyledButton variant="contained" onClick={() => onClick(choice)}>
      {choice}
    </StyledButton>
  );
}

export default ChoiceButton;
