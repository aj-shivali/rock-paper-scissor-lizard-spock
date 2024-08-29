import React from "react";
import { Modal, Box, IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
interface RulesModalProps {
  open: boolean;
  onClose: () => void;
}

const RulesModal: React.FC<RulesModalProps> = ({ open, onClose }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="rules-modal"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: isDesktop ? "32px" : "24px",
          position: "relative",
          width: isDesktop ? "auto" : "100%",
          height: isDesktop ? "auto" : "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: isDesktop ? "flex-start" : "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: isDesktop ? "space-between" : "center",
            alignItems: "center",
            width: "100%",
            marginBottom: isDesktop ? "32px" : "0",
          }}
        >
          <h2 style={{ color: "hsl(229, 25%, 31%)", margin: 0 }}>RULES</h2>
          {isDesktop && (
            <IconButton onClick={onClose} sx={{ padding: 0 }}>
              <CloseIcon />
            </IconButton>
          )}
        </Box>
        <Image
          src="/assets/image-rules-bonus.svg"
          alt="Game Rules"
          width={isDesktop ? 340 : 300}
          height={isDesktop ? 330 : 291}
        />
        {!isDesktop && (
          <IconButton onClick={onClose} sx={{ marginTop: "24px", padding: 0 }}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>
    </Modal>
  );
};

export default RulesModal;
