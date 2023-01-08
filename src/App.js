// import "./styles.css";
import HigherOrder from "./components/HigherOrder";
import HOC from "./components/HOC";

const NewComp = HigherOrder(HOC);

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* <HOC /> */}
      <NewComp />
    </div>
  );
}
