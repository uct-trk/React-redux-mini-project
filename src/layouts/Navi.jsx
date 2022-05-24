import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  let history = useHistory();

  function handleSignedOut() {
    setIsAuthenticated(false);
    history.push("/");
  }
  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <>
      <Menu inverted fixed="top" size="large">
        <Container>
          <Menu.Item as={NavLink} to={"/"} name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            {cartItems.length > 0 && <CartSummary />}

            {isAuthenticated ? (
              <SignedIn signedOut={handleSignedOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </>
  );
}
