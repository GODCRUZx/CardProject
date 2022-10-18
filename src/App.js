import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>React-Card Project</h1>
      </div>

      <section className="card-1">
        <div>
          <h1>Jack Bauer</h1>
          <img src="" alt="" />
          <div>
            <p className="numb">+987 654 321</p>
            <p className="email">jack@nowhere.com</p>
          </div>
        </div>
      </section>

      <section className="card-2">
        <div>
          <h1>Chuck Norris</h1>
          <img src="" alt="" />
          <div>
            <p className="numb">+918 372 574</p>
            <p className="email">gmail@chucknorris.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
