import './App.css';
import { getLang } from './assets/js/ELanguage/ELanguage.js'
import Logo from './components/modules/Logo/Logo.jsx'
import Footer from './components/modules/Footer/Footer';
import SocialMediaButton from './components/modules/SocialMediaButton/SocialMediaButton.jsx'

function App() {

  let eLang = getLang();
  return (
    <div className="App">
      <div className="App-Container">
        <div className="Picture">
          <div className="Main-Content">
            <div className="Logo-Container">
              <Logo size="100px"/>
            </div>
            <div className="Picture-Text">
              <h1>
                Steve
              </h1>
                <p>{eLang.short_description}</p>
                <p>{eLang.short_description2}</p>
            </div>
          </div>
        </div>
        <div className="App-Bottom-Container">
          <div className="Buttons-Container">
          <SocialMediaButton name="spotify" label="Spotify" url="https://open.spotify.com/artist/0nOUPd2MN0692uJr6pb45k?si=zRuI9IQpRg2I0rNpDZbp7Q" tagret="_blank"/>
          <SocialMediaButton name="youtube" label="YouTube" url="https://m.youtube.com/@emptysoulofficial?persist_app=1&app=m" tagret="_blank"/>
          <SocialMediaButton name="soundcloud" label="SoundCloud" url="https://on.soundcloud.com/?link=https%3A//soundcloud.com/empty-soul-official%3Futm_source%3Ddirect%26utm_content%3Ddownload_button_header%26utm_medium%3Dmobi%26utm_campaign%3Dno_campaign&apn=com.soundcloud.android&ibi=com.soundcloud.TouchApp&isi=336353151&efr=1&utm_source=direct&utm_content=download_button_header&utm_medium=mobi&utm_campaign=no_campaign&mt=8&at=direct&pt=mobi&ct=no_campaign" tagret="_blank"/>
          <SocialMediaButton name="apple" label="Apple Music" url="https://music.apple.com/de/artist/empty-soul/1655943782" tagret="_blank" />
          </div>
         <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
