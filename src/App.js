import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImg from './profile.jpg'
import Profile from './Components/Profile';

function App() {


      const Listprof = [
    {
      fullName: 'Mustapha Slama',
      bio: "im just trying something new here so don't be judgemenatl !",
      profession:"gangster",
      },
      
];
const displayName=(name)=>{
  alert(`the profile name is ${name}`)
}
return (
  <>
  <Profile Listprof={Listprof} displayName={displayName}>
     {myImg}
  </Profile>
  </>
);
  
}

export default App;