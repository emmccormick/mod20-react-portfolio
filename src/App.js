import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Portfolio from './components/Projects'
import Resume from './components/Resume';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <header>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      </header>
      <main>
        
        {!contactSelected ? (
          <>
          <About></About>
          <Portfolio></Portfolio>
          <Resume></Resume>
          
      
          </>
        ) : (
          <ContactForm></ContactForm>
          
          
        )}
        
        
      </main>
      <footer>
          <p>Find me on:
              <a href="https://github.com/emmccormick" target="_blank">GitHub</a>
              <a href="https://www.linkedin.com/in/emily-mccormick-069466108/" target="_blank">LinkedIn</a>
              <a href="https://www.instagram.com/em__mccormick/" target="_blank">Instagram</a>
          </p>

      </footer>
        
    </div>
  );
}

export default App;
