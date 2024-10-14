import { Text } from "@strano-ui/typography";
import { Button } from "@strano-ui/components";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Text color="#00ccff" className="text-red-500" fontSize={10}>
          Hi
          <Button variant="secondary" size="lg" className="text-red-400">
            Click ME
          </Button>
        </Text>
      </header>
    </div>
  );
}

export default App;
