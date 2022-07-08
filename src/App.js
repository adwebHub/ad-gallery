import React from 'react';
import Title from './comps/Title';
import ImageGrid from './comps/ImageGrid';
import Footer from './comps/Footer';

function App() {
  

  return (
    <div className="App">
      <div style={{maxWidth: '960px',margin: '0 auto'}}>
      <Title/>    
      <ImageGrid/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
