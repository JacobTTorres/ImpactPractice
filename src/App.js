import "./app.css";
import "./index.css";

import Header from "./components/header/Header";
import Separator from "./components/separator/Separator";
import Form from "./components/form/Form"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Separator />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
