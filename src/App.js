import './App.css';
import { getLang, getLangVarable } from './assets/js/ELanguage/ELanguage.js'
import Logo from './components/modules/Logo/Logo.jsx'
import Footer from './components/content/Footer/Footer';
import SocialMediaButton from './components/modules/SocialMediaButton/SocialMediaButton.jsx'

function App() {

  let eLang = getLang();
  return (
    <div className="App">
      <div className="App-Container">
        <div className="Picture">
          <div className="Logo-Container">
          <Logo size="100px"/>
          </div>
          <div className="Picture-Text">
          <h1>
            Name
          </h1>
            <p>{eLang.test}</p>
          </div>
        </div>
        <div className="App-Bottom-Container">
          <div className="Buttons-Container">
          <SocialMediaButton name="spotify" label="Spotify"/>
          <SocialMediaButton name="youtube" label="YouTube" />
          <SocialMediaButton name="soundcloud" label="SoundCloud"/>
          <SocialMediaButton name="apple" label="Apple Music"/>
          </div>
         <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
