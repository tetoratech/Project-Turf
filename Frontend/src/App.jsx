// import { useState } from 'react'
// import './App.css'
// import React,{useEffect} from 'react'
// import axios from 'axios'
// import RoutesComponent from './routes'


// function App() {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     axios.get('http://localhost:5000/api')
//       .then(response => setData(response.data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <>
      
//       <div>
//       <RoutesComponent />
//     </div>
     
      
//     </>
//   )
// }

// export default App
import React from 'react';
import RoutesComponent from './routes'; // Ensure this path is correct
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <div>
      <RoutesComponent />
    </div>
  );
};

export default App;
