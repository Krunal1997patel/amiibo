import React from 'react'
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {

    const [DarkMode, setUseDarkMode] = useDarkMode(false)

    const toggleDarkMode = e =>{
        e.preventDefault()
        setUseDarkMode(!DarkMode);
    }

    return(
    
       <nav className='navbar'>
           <div className='navbar-center'>

           <img className='logo' src={ require('../image/amiibo.png') } alt='logo'/>

           {
            DarkMode === true ?
            (<button onClick={toggleDarkMode} className={DarkMode ? 'dark-button dark-mode' : 'dark-button' } >Light Mode</button>)
            :
            (<button onClick={toggleDarkMode} className={DarkMode ? 'dark-button dark-mode' : 'dark-button' } >Dark Mode</button>)   
           }
           
           </div>
       </nav>
        
    )
}

export default Navbar