import React from "react";
import { AppBar, Toolbar , Container } from "@mui/material";
import { styled } from "@mui/system";

const HeaderWrapper = styled(AppBar)({
  background: "white",
  padding: "10px 0",
});

const Logo = styled("img")({
  height: "40px",
});

const Header = () => {
  return (
    <HeaderWrapper position="static">
      <Container>
        <Toolbar>
          <Logo
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
            alt="Airbnb Logo"
          />
        </Toolbar>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
