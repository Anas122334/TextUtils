import React, { useState } from 'react'
import Header from './components/Header/header';  
import Form from "./components/Form/form"
import Alert from './components/Alert/Alert';

const App = () => {
 
  const [mode, setMode]=useState('light')
  const [alert, setAlert]=useState(null)
  const showAlert=(message , type)=>{
   setAlert({
     msg:message,
     type:type
   })
   setTimeout(()=>{
    setAlert(null)
   }, 1500)
  }
  const toggleMode =()=>{
    if (mode === 'light') {
      setMode ('dark');
      document.body.style.backgroundColor ="black"
      showAlert("Dark Mode has been enable", "success")
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor ="white"
      showAlert("Light Mode has been enable", "success")

    }
  }
  return (
   <>
   <Header title="Logo" home="Home" about="About Us" contact="Contact Us" btn="Search" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert} />
   <Form mode={mode} showAlert={showAlert} />
   
   </>
  )
}

export default App