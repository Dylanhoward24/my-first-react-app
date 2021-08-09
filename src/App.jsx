// kind of like require() in node
import logo from './logo.svg';

// instead of <link rel="stylesheet" href ="./App.css"/>
// we can "import" our CSS files
import './App.css';

// import CohortGreeting so we can render it
// similar to:
// const CohortGreeting = require('./CohortGreeting);
// in node
import CohortGreeting from './components/CohortGreeting/CohortGreeting';

import ButtonClicker from './components/ButtonClicker/ButtonClicker';

function App() {
  
  // we can put HTML in our JavaScript
  // we call this "JSX" === 'Javascript Extended'
  //
  // this gets "compiled" into regular JavaScript
  let div = <div>Hello world!</div>;

  // let cohortName = 'Mersenne';
  
  return (
    /* JSX Code
       Almost the same as HTML, but....
       - We say "className" instead of "class"
       - We say "htmlFor" instead of "for"
    */
    <div className="App">
      {17 / 3} is an irrational number

      {/* Render our CohortGreeing component */}
      <CohortGreeting />

      {/* Render our ButtonClicker component */}
      <ButtonClicker />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <label htmlFor="someInput">Look at me ma, I'm a real label!</label>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* do another greeting for fun */}
      <CohortGreeting />
    </div>
  );
}

// looks like modules.export in node
export default App;
