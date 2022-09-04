import './App.css';
import './scss/_app.scss';
import UserDetail from './components/user-detail'
import UserAll from './components/user-all'



function App() {
  
  return (
    <div className="App">
        <UserAll/>
      <UserDetail/>
   
    </div>
  );
}

export default App;
