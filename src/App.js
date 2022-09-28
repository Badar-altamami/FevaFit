import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Survey from './Components/Survey/Survey';
import UseContent from './Content/UseContent';

function App() {
  const { eng } = UseContent();
  const [content, setContent] = useState(eng);

  return (
    <div className="App">
      <Header setContent={setContent} />
      <Home content={content} />
      <Survey content={content} />
    </div>
  );
}

export default App;
