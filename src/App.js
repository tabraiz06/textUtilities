
import './App.css';
import { useState } from 'react';
import Navbar from './Navbar';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';

import Alert from './Components/Alert';
import {
  BrowserRouter ,
 
  Routes,
  Route,
  
  
} from "react-router-dom";






function App() {
  const [alert, setalert] = useState(null);
  const showAlert=function(message,type){
     setalert({
      message: message,
      type:type
     })
     setTimeout(() => {
      setalert(null)
     }, 2000);
  }
  
  const [mode, setkMode] = useState("light");

  const toggleMode=()=>{
    if(mode==='light'){
     setkMode('dark')
     
    
    document.body.style.backgroundColor='#042745ff'
    showAlert ("dark mode is enabled","success");
    }
    else{
     setkMode('light')
     document.body.style.backgroundColor='white'
     showAlert('light mode is enabled',"success")
    
    }
  }
  console.log(mode)
  return (
   <>


<Navbar mode={mode} togglemode={toggleMode}/>
<Alert alert={alert}/>

<Routes>
  <Route path='/' element={<Home showAlert={showAlert} mode={mode} heading='Please Enter your text to get your result'/>}></Route>
  <Route path='/about' element={<About mode={mode}/>}/>
  <Route path='/contact' element={<Contact mode={mode}/>}/>
</Routes>



       
          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
    

          
         
       
        
    
   </>
  );
}

export default App;
