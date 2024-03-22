import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/avatar.jpg" />

        <Title title="Chetsada Srinarongsuk (Tar)">
          <h3>Position : Programmer</h3>
        </Title>

        <Title title="Contact">
     
          <p>current date: {moment().format("D MMM YYYY")}</p>
          <p>Date of Birth: {moment("2002/04/09").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66655531141
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'hide'}
          </button>
          <p>Email : s64122202038@ssru.ac.th</p>
          <p>www.Chetsada.com</p>
        </Title>
    
        <Title title="Education">
          <p>Bachelor of Science in Information Technology (IT)</p>
          <p>Suan Sunandha Rajabhat University</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>I came to practice programmers to learn many computer languages. Now I only have html,css and php little languages .</p>
        </Title>

        <Title title="Experience">
          <p>Have experience working and study php writing for a while. The latest mourn that has been completed by the project has made a metaverse About tourist attractions.</p>
        </Title>

        <Title title="Skills">
          <p>• Adobe Photoshop</p>
          <p>• Canva</p>
          <p>• Microsoft Office</p>
        </Title>
      </div>
    </main>
  )
}

export default App
