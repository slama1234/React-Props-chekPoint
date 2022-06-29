import logo from './logo.svg';
import './App.css';
import Profile from './Components/Profile'
import myimg from './profile.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Profile name="Mustapha Slama"  profission="Web Developer Student">
        <img src={logo} alt="Profile image" width={200} height={200} />
        </Profile>
      </header>
    </div>
  );
}

export default App;
