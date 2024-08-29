import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

interface HeaderProps {
  score: number;
}

const Header: React.FC<HeaderProps> = ({ score }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "3px solid hsl(217, 16%, 45%)",
        borderRadius: "15px",
        padding: isDesktop ? "18px 24px" : "12px 24px",
        maxWidth: isDesktop ? "700px" : "100%",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <Image
        src="/assets/logo-bonus.svg"
        alt="Rock Paper Scissors"
        width={isDesktop ? 162 : 83}
        height={isDesktop ? 130 : 80}
      />
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: isDesktop ? "16px 48px" : "10px 24px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="overline"
          sx={{
            color: "hsl(229, 64%, 46%)",
            fontWeight: 600,
            fontSize: isDesktop ? "16px" : "10px",
            letterSpacing: "1.5px",
          }}
        >
          SCORE
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: "hsl(229, 25%, 31%)",
            fontWeight: 700,
            lineHeight: 1,
            fontSize: isDesktop ? "64px" : "40px",
          }}
        >
          {score}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
