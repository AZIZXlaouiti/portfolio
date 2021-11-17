import './App.scss';
import { icons } from './assets/icons';
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
  <div className="a">
  <a
    className="email-link"
    href="https://github.com/AZIZXlaouiti"
    target="_blank"
    rel="noreferrer">
    Check out my work!
  </a>
</div>
);
const items = [one, two, three, four, five];

function App() {
  return (

    <>
        <div className="main">
          {items.map((item, i) => (
            <div key={i}>{item}</div>
            ))}
        </div>
        <div className="container">
          <ul>
            <li><a>{icons[0].svg}</a></li>
            <li><a>{icons[1].svg}</a></li>
            <li><a>{icons[2].svg}</a></li>
            <li><a>{icons[3].svg}</a></li>

          </ul>
        </div>
    </>
     
     
  );
}

export default App;
