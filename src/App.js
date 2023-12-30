import './App.css';
import HomeSoultree from './components/content/HomeSoultree/HomeSoultree';
import Navigation from './components/ui/Navigation/Navigation';


function App() {
  return (
    <div className="App dFlex">
      <main>
        <header className="Header">
          <Navigation />
        </header>
        <HomeSoultree/>
      </main>
    </div>
  );
}

export default App;
