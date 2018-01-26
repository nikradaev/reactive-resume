class Header extends React.Component {
  render() {
    return (
      <div className="container">
          <p><center>U.S. Permanent Resident. Authorized to work for any employer</center></p>
      </div>
    )
  }
}

class Banner extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-xl-9">
              <h1>Nik Radaev</h1>
              <hr/>
              <p className="lead">
                Northern Colorado | Greater Denver Area<br/>
                Phone: <b>(970) 820-8234</b><br/>
                Email: <a href="mailto:nik.radaev@gmail.com"><b>nik.radaev@gmail.com</b></a>
              </p>
            </div>
          <div className="col-xl-3">
          <img className="img-thumbnail" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAIAAQDGAAAAAQAAAAAAAArfAAAAJGJkM2JjMGNjLTMzODEtNDFmYS1iMzM4LWM3NzU0ZjM5MDg4Yw.jpg" alt="Thumbnail image"/>
          </div>
        </div>
      <hr/>
      <p className="my-2"><center>
        LinkedIn: <a href="https://www.linkedin.com/in/nikradaev">www.linkedin.com/in/nikradaev</a> | Website: <a href="http://www.nikradaev.com">www.nikradaev.com</a> | GitHub: <a href="https://www.github.com/nikradaev">www.github.com/nikradaev</a>
        </center></p>
    </div>
</div>
    )
  }
}

class Objective extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Objective</h2>
        <hr/>
        <p>Committed, driven to excel, passionate software developer with analytical, problem solving skills crafting reusable and clean code in C++, C#, Java and Python within MVC frameworks working in a team. Strong design background with 10 years of experience creating aesthetic UI elements and user-centered UX solutions for desktop, web and mobile applications. Able to adapt to business needs leading projects to market execution.
        </p>
        <br/>
        <br/>
      </div>
    )
  }
}

class Education extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Education</h2>
        <hr/>
        <div className="row">
          <div className="col-xl-9">
            <h4><b><i>Bachelor of Computer Science</i>, Colorado State University</b> | Fort Collins, CO</h4>
          </div>
        <div className="col-xl-3">
          <h4>May 2018</h4>
        </div>
       </div>
       <p>Java, C, C++, C#, Python, SQL, JavaScript, TCP/IP, HTTP, JSON, HTML/CSS | Lunix, GitHub, Eclipse, Jupyter Notebook</p>
       <ul>
        <li><b>Coursework:</b> Database Systems, Web Design and Management, Algorithms and Data Structures, Artificial Intelligence, Machine Learning, Computer Networks and the Internet, Computer Security, Software Engineering</li>
        <li><b>Projects:</b> Raspberry PI Baby Monitor, Messaging Security with Pier-to-Pier Blockchain Encryption, Learning Neural Networks to Predict Probability of the Heart Disease with Real Scientific Data, Scrum-based Team Mobile Single Page Application</li>
        </ul>
       <div className="row">
        <div className="col-xl-9">
          <h4><b><i>Associate of Marketing</i>, Magnitogorsk State Technical University</b> | Russia</h4>
        </div>
        <div class="col-xl-3">
          <h4>May 2001</h4>
        </div>
       </div>
      <br/>
      <br/>
     </div>
    )
  }
}

class Experience extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Work Experience</h2>
      <hr/>
      <h4><b>TRC Companies, Inc.</b> | Fort Collins, CO</h4>
      <div class="row">
        <div class="col-xl-9">
          <h4><b><i>Software Developer Intern</i></b></h4>
        </div>
        <div class="col-xl-3">
          <h4>May 2017 — Aug 2017</h4>
        </div>
       </div>
        <p>Python, JavaScript, HTML/CSS, JSON, Ajax, HTTP REST APIs | Visual Studio, Django, PostgresSQL, Knockout.js, Gira, SourceTree, Postman, AWS, SnakeTail, Chrome Development Tools, GeoServer, ActiveMQ, Agile</p>
        <ul>
          <li><b>Collaborated in a team developing, debugging and fine-tuning GIS single-page web application IntegraLink™</b></li>
          <li>Improved GPS search with ability to read more human-entered data mapping complex regular expression matches into proper coordinates</li>
          <li>Implemented gathering tools usage information, saving it to the database and added analytics page on admin console to display the statistics</li>
          <li>Designed and tested messaging system and a new servers model for performance optimization with ability to implement on a higher traffic</li>
        </ul>
        <br/>
        <h4><b>Colorado State University</b> | Fort Collins, CO</h4>
      <div class="row">
        <div class="col-xl-9">
          <h4><b><i>IT Web Developer Lab Intern</i></b></h4>
        </div>
        <div class="col-xl-3">
          <h4>Apr 2016 — May 2017</h4>
        </div>
       </div>
        <p>HTML/CSS, PHP, JavaScript | DreamWeaver, WordPress, Google Analytics, Balsamiq, RaspBerry Pi Octoprint, 3DS Max</p>
        <ul>
          <li><b>Worked as an IT Support and Web Developer at the University's 3D Printing lab</b></li>
          <li>Presented flow diagram based on central database system and got approval for implementing</li>
          <li>Designed and integrated new lab portal with user registration forms, training scheduling calendar, 3D printer reservation and other interactive pages using cloud based platform Knack</li>
          <li>Sales increased by 400% via improving website usability, store items, and optimizing shopping experience</li>
          <li>Reduced data anomaly refining database fields, records, elements and performing back-ups</li>
          <li>Helped to make better business decisions by analyzing statistical data, launch SQL queries and generating reports</li>
          <li>Integrated web cameras to stream 3d printing sessions online and monitor lab’s activity</li>
          <li>Reached thousands of users via custom designed email newsletter campaigns</li>
        </ul>
    
      <br/>
        <h4><b>ECTACO, Inc.</b> | New York City, NY</h4>
      <div class="row">
        <div class="col-xl-9">
          <h4><b><i>Senior Graphic Web Designer</i></b></h4>
        </div>
        <div class="col-xl-3">
          <h4>Jun 2009 — Aug 2014</h4>
        </div>
       </div>
        <p>HTML/CSS | Adobe Suite: Photoshop, Illustrator, Fireworks, Premiere, Axure, Corel Draw</p>
        <ul>
          <li><b>Enthusiastically worked on UI/UX, web, mobile application, advertisement and hardware designs of the consumer electronics products that won CES 2012 Awards in Las Vegas</b></li>
          <li>Helped application developers to achieve goals by communicating through visual prototypes, wireframe layouts, workflow mock-ups and certain user interface elements</li>
          <li>Collaborated internationally with product engineers, software development team, designers, and product managers</li>
          <li>Designed banners, icons, buttons for company's websites, Android applications, social network ad campaigns</li>
          <li>Created websites and landing pages, instructions, reports, presentations and exhibition materials in a corporate style</li>
        </ul>
        <br/>
        <br/>
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div class="container-fluid">
          <p><center><br/><hr/>References and portolio available per request</center></p>
        </div>
     )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Objective />
        <Education />
        <Experience />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));