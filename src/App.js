import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <ContactForm></ContactForm>
        <About />
      </main>
      <footer>

      </footer>
        
    </div>
  );
}

export default App;
