import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Layout from "./layouts/main";
import Project from "./pages/Project";
import Projects from "./pages/Projects";
import theme from "./theme";

function LayoutRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        <Layout>
          {children}
        </Layout>
      }
    />
  );
}

export default function App() {
  return (
    <ChakraProvider theme={theme}>

      <Router>
        <div>
          <Switch>
            <LayoutRoute exact path="/about">
              <About />
            </LayoutRoute>
            <LayoutRoute exact path="/projects">
              <Projects />
            </LayoutRoute>
            <LayoutRoute exact path="/project/:name">
              <Project />
            </LayoutRoute>
            <LayoutRoute exact path="/">
              <Home />
            </LayoutRoute>
          </Switch>
        </div>
      </Router>
    </ChakraProvider>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
