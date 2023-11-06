import image from './planner.jpg';
import imageTwo from './project.jpg'
import './App.css';
import { Planner } from './Planner';

function App() {
  return (
    <div className="App">
      <div className="container" >
     <img className="container" src={image} width="250px"alt="plannner"/>
     </div>

     <div className="container">
<h1>MY PLANNER</h1>
</div>
<Planner/>
<div className='container'>
     <img src={imageTwo} width="250px" alt="project"/>
     </div>
    </div>
  );
}

export default App;
