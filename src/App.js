import "./App.css";
import { useState } from "react";

import { getSpaceships } from "./fauna/queries";

function App() {
  const [spaceships, setSpaceships] = useState([]);

  return (
    <div className="App">
      <button
        onClick={async () => {
          const { data } = await getSpaceships();
          setSpaceships(data);
        }}
      >
        Click for Spaceships
      </button>
      {spaceships.map((s, i) => {
        return <div key={i}>{s.data.name}</div>;
      })}
    </div>
  );
}

export default App;
