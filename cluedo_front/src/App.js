import Scene from "./templates/Scene"
import { getEnvestigations } from "./services/Envestigations";

function App() {

  getEnvestigations()

  return (
    <div className="App">
      <Scene />
    </div>
  );
}

export default App;