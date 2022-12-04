import "./App.css";
import User from "./User";

function App() {
  return (
    <div className="App">
      <User data={{ name: "Muhammad Nabeel", age: "26" }} city="Karachi" country='Pakistan' />
    </div>
  );
}

export default App;
