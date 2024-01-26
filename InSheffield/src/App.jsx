import Map from './components/map'
import './App.css'



function App() {

  return (
    <>
        <div id="landing_page">
      <div id="page_title_container">
        <h1 id="page_title"> In Sheffield! </h1>
        </div>
<div id="intro_text_containter"><p id="intro_text" className="paragraph">An app to keep track of all my favourite places in Sheffield!</p></div>
<button>Map View</button>
<button>List View</button>
        </div>

        <div id="map_container">

      <Map />
        </div>
    </>
  )
}

export default App
