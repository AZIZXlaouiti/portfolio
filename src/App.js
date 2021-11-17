import './App.scss';
import { icons } from './assets/icons';
import Bio from './components/Bio';
const two = <h1 className="h1">Hi, my name is </h1> ;
const three = <h2 className="big-heading">Mohamed Aziz Laouiti.</h2>;
const four = <h3 className="big-heading"></h3>;
const five = (
  <>
  
    <p>

      I’m a Full-Stack software engineer specializing in
      designing and building secure REST APIs.
      Well versed in several programming languages such
      as javascript , ruby and python, 
      with a constant drive for self-development, and learning
      new technologies and languages
    
      .
    </p>
  </>
);
const six = (
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
const one = <></>
{/* <img src="https://user-images.githubusercontent.com/79036942/142129514-ce562c02-bca1-4e2a-b19c-266942493c8d.png"/> */}
const items = [one, two, three, four, five, six];

function App() {
  return (

    <>
        <div className="main">
          {items.map((item, i) => (
            <div key={i}>{item}</div>
            ))}
        </div>
        <Bio/>
        <div className="container">
          <ul className="ul">
            <li><a>{icons[0].svg}</a></li>
            <li><a>{icons[1].svg}</a></li>
            <li><a>{icons[3].svg}</a></li>
            <li><a>{icons[2].svg}</a></li>
            <li><a>{icons[5].svg}</a></li>
            
          </ul>
        </div>
    </>
     
     
  );
}

export default App;
