import "./App.css";
import Profile from "./componets/Profile";

function App() {
  <div className="header">
    <h1>React-Card Project</h1>
  </div>;

  const profiles = [
    {
      name: "Jack Bauer",
      number: "+987 654 321",
      email: "jack@nowhere.com",
      image: "/img-1.jpg",
    },
    {
      name: "Chuck Norris",
      email: "gmail@chucknorris.com",
      image: "/img-2.jpg",
      number: "+918 372 574",
    },
  ];

  return (
    <div className="container">
      {profiles.map((profile, index) => (
        <Profile
          name={profile.name}
          number={profile.number}
          email={profile.email}
          image={profile.image}
        />
      ))}
    </div>
  );
}

export default App;
