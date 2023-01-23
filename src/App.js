import logo from './logo.svg';
import './App.css';
import Abstract from './components/Abstract/Abstract'
import FormationList from './components/Formation/FormationList';
import ExperienceList from './components/Experience/ExperienceList';
import PersonalInformation from './components/PersonalInformation/PersonalInformation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <PersonalInformation/>
      <Abstract/>
      <FormationList/>
      <ExperienceList/>
    
    </div>
  );
}

export default App;
