import './App.css';
import FieldList from './Components/FieldList/FieldsList';
import CodeTemplate from './Components/CodeTemplate/CodeTemplate';
import ShadowTemplate from './Components/ShadowTemplate/ShadowTemplate';
import FieldState from './Context/FieldState';

function App() {
  return (
    <FieldState>
      <div className="App">
        <h1 className="App-heading">Box Shadow Generator</h1>
        <div className="container">
          <div className="mt-3 col-1">
            <FieldList></FieldList>
          </div>
          <div className="mt-3 col-2">
            <ShadowTemplate></ShadowTemplate>
            <CodeTemplate></CodeTemplate>
          </div>
        </div>
      </div>
    </FieldState>
  );
}

export default App;
