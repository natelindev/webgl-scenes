import { Link, Route, Switch, useLocation } from "wouter";
import RabbitYear from "./scenes/RabbitYear";
import { styled } from "@linaria/react";

import { ThemeProvider } from "./components/ThemeProvider";
import { css, cx } from "@linaria/core";
import DragonYear from "./scenes/DargonYear";

const Content = styled.div`
  width: 100%;
  height: calc(100% - 3.5rem);
  display: flex;
`;

const Navbar = styled.div`
  width: 100%;
  height: 3.5rem;
  color: #fff;
  border-bottom: 1px solid hsl(40 3.7% 15.9%);
  align-items: center;
  background-color: #000;
  display: flex;
`;

const Title = styled.h1`
  color: white;
  font-size: 1.25rem;
  margin-left: 1rem;
`;

const sceneLink = css`
  display: block;
  padding: 0.5rem 1rem;
  color: #fff;
  text-decoration: none;

  &:hover {
    background: hsl(40 3.7% 15.9%);
  }

  padding-left: 0.5rem;
  padding-right: 0.5rem;
  /* margin-bottom: 1rem; */
  justify-content: center;
  text-align: center;

  border-bottom: 1px solid hsl(40 3.7% 15.9%);
`;

const activeLink = css`
  background: hsl(40 3.7% 12.9%);
`;

const Sidebar = styled.div`
  width: 200px;
  background: #000;
  border-right: 1px solid hsl(40 3.7% 15.9%);
  display: flex;
  flex-direction: column;
`;

const NavIcon = styled.img`
  margin-left: 1rem;
  width: 3.5rem;
`;

const NavBrand = css`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
`;

function App() {
  const [currentLocation] = useLocation();
  console.log(currentLocation);
  return (
    <ThemeProvider>
      <Navbar className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Link className={NavBrand} to="/">
          <NavIcon src="/logo.png" alt="logo" />
          <Title>Nathaniel's WebGL Scenes</Title>
        </Link>
      </Navbar>

      <Switch>
        <Content>
          <Sidebar>
            <Link
              className={cx(
                sceneLink,
                currentLocation === "/rabbit-year" && activeLink
              )}
              to="/rabbit-year"
            >
              Rabbit Year
            </Link>
            <Link
              className={cx(
                sceneLink,
                currentLocation === "/dragon-year" && activeLink
              )}
              to="/dragon-year"
            >
              Dragon Year
            </Link>
          </Sidebar>
          <Route path="/rabbit-year" component={RabbitYear} />
          <Route path="/dragon-year" component={DragonYear} />
        </Content>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
