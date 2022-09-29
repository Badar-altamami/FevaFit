import { useState } from 'react';
import './App.css';
import Download from './Components/Download/Download';
import Feature from './Components/Feature/Feature';
import Home from './Components/Home/Home';
import Program from './Components/Program/Program';
import Survey from './Components/Survey/Survey';
import UseContent from './Content/UseContent';

function App() {
  const { eng } = UseContent();
  const [content, setContent] = useState(eng);

  return (
    <div className="App">
      <Home content={content} setContent={setContent} />
      <Survey content={content} />
      <Feature content={content} />
      <Program content={content} />
      <Download content={content} />
    </div>
  );
}

export default App;
