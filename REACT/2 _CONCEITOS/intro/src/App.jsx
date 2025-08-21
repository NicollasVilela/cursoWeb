import "./App.css";
import Events from "./components/Events";
// 2- importando componente
import FirstComponent from './components/FirstComponent';
import MyComponent from "./components/MyComponent";
import TemplateExpression from "./components/TemplateExpression";

function App() {
  return <>
    <h1>Fundamentos de React</h1>
    <FirstComponent />
    <TemplateExpression />
    <MyComponent />
    <Events />
  </>;
}

export default App;
