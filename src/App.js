import "./App.css";

import Pilots from "./components/Pilots";
import Spaceships from "./components/Spaceships";

const App = () => {
  return (
    <div class="flex flex-col md:flex-row p-12 h-screen bg-purple-50 divide-x">
      <Pilots />
      <Spaceships />
    </div>
  );
};

export default App;
