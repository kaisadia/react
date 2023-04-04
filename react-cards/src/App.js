import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {

  const data = [
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit"
    },
    {
      id: 2,
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#"
    },
    {
      id: 3,
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#"
    }
  ]
  
  return (
    <div>
      <Card data={data}></Card>
      
    </div>
  );
}

export default App;
