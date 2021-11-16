import './App.css';
const one = <h1>Hi, my name is</h1>;
const two = <h2 className="big-heading">Mohamed Aziz Laouiti.</h2>;
const three = <h3 className="big-heading"></h3>;
const four = (
  <>
    <p>
      I’m a Full-Stack software engineer specializing in
      designing and building secure REST APIs.
      Well versed in several programming languages such
      as javascript , ruby and python, 
      with a constant drive for self-development, and learning
      new technologies and languages
      <a href="https://upstatement.com/" target="_blank" rel="noreferrer">
        Upstatement
      </a>
      .
    </p>
  </>
);
const five = (
  <a
    className="email-link"
    href="https://www.newline.co/courses/build-a-spotify-connected-app"
    target="_blank"
    rel="noreferrer">
    Check out my course!
  </a>
);
const items = [one, two, three, four, five];

function App() {
  return (
    <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
  );
}

export default App;
