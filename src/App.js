import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About'
import Contact from './Pages/Contact'
import { useState } from 'react';
/*

Inspiration: 
https://www.advancedrecoverysystems.com/

home, about us, contact us / get started, careers


home background image change on scroll
https://www.youtube.com/watch?v=mSiJSEH1Ry0

placed clear orlando dianetics counseling at
6770 Lake Ellenor Dr Unit B, Orlando, FL 32809
and put the point on other side of moltov building
then it dissapeared
class was services, medical, psychotheripy

*/

function App() {
  const [page, setPage] = useState("home")
  function DisplayPage(){
    if(page == "home")
      return <Home
        setPage={setPage}
      ></Home>
    else if( page == "about")
      return <About></About>
    else if( page == "contact")
      return <Contact></Contact>
  }
  return (
    <div className="App">
              <div className="topbartopbar">
            <div>
                Confidential Help | Proven Technology
            </div>
            <div>
                Call or Text 24/7 : (407) 216 - 7445 
            </div>
        </div>
        <div className='topBar'>
            <div className="logosection">
                <div className="logo"></div>
                <div className="logotext">
                    <div className='logoText1'>
                        Clear Orlando
                    </div>
                    <div className='logoText2'>
                        Dianetic Counseling
                    </div>
                </div>
                
            </div>
            <nav>
                <ul>
                    <li onClick={()=>setPage("home")}>Home</li>
                    <li onClick={()=>setPage("about")}>About</li>
                    <li onClick={()=>setPage("contact")}>Contact</li>                    
                </ul>
            </nav>
        </div>
        {DisplayPage()}
        <div className='footer'>
            <div className="logosection">
                <div className="logo"></div>
                <div className="logotext">
                    <div className='logoText1'>
                        Clear Orlando
                    </div>
                    <div className='logoText2'>
                        Dianetic Counseling
                    </div>
                </div>
                
            </div>
            <div className="footerRight">                
                <nav>
                    <ul>
                      <li onClick={()=>setPage("home")}>Home</li>
                      <li onClick={()=>setPage("about")}>About</li>
                      <li onClick={()=>setPage("contact")}>Contact</li>                       
                    </ul>
                </nav>                
                <div className='footerTextLarge'>
                    Have Questions? Call or text at # (407) 216 - 7445  or reach us by email at info@ClearOrlando.com
                </div>
                <div className='copyrightNotice'>
                    *Clear Orlando does not claim ownership of any copyrighted content on our page.
                    All content is linked only for reference.
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
