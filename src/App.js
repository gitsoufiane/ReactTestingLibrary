import { Application } from "./components/application/Application";
import { Skills } from "./components/skills/Skills";
import { Counter } from "./components/counter/Counter";
function App() {
  return (
    <div className="App">
      <Application />
      <Skills skills={["HTML", "CSS"]} />
      <Counter />
    </div>
  );
}

export default App;
