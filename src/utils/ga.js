import * as ReactGA from "react-ga";
import dotenv from "dotenv";

dotenv.config()

export const initGA = () => {
  console.log("initGA")
  console.log(process.env.NODE_ENV)
  console.log(process.env.REACT_APP_GA_CODE)
  if (process.env.NODE_ENV === "production") {
    if (process.env.REACT_APP_GA_CODE) {
      ReactGA.initialize(process.env.REACT_APP_GA_CODE);
    }
  }
};
