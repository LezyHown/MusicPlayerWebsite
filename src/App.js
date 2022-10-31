import './App.css';

import Header from './components/header/header';
import Main from './components/main/main';

function App(props) {
  return (
      <div className="App">
          <Header/>
          <Main Data={props.stateApp}/>
      </div>
  );
}

export default App;
