import * as ReactGA from "react-ga";
import dotenv from "dotenv";

dotenv.config()

export const initGA = () => {
  if (process.env.NODE_ENV === "production") {
    if (process.env.REACT_APP_GA_CODE) {
      ReactGA.initialize(process.env.REACT_APP_GA_CODE);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }
};
