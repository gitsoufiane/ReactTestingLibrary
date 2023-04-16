import "./App.css";
import { AppProviders } from "./providers/AppProviders";
import { SundaesOnDemand } from "./components/SundaesOnDemand/SundaesOnDemand";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <SundaesOnDemand />
      </div>
    </AppProviders>
  );
}

export default App;
