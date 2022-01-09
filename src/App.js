import "./app.css";
import "./index.css";

import Header from "./components/header/Header";
import Separator from "./components/separator/Separator";
import Form from "./components/form/Form"

function App() {
  return (
    <div className="App">
      <Header />
      <Separator />
      <Form />
    </div>
  );
}

export default App;
