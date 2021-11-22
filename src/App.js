import { useEffect } from 'react';
import './App.scss';
import { icons } from './assets/icons';
import Bio from './components/Bio';
import Featured from './components/Featured';
import { getCurrentPins } from './reducers/display';
import { useDispatch } from 'react-redux';
import resume from "./assets/resume.pdf"
const one = <h1 className="h1">Hi, my name is </h1> ;
const two = <h2 className="big-heading">Mohamed Aziz Laouiti.</h2>;
const four = <h3 className="big-heading"></h3>;
const five = (
  
    <p>

      I’m a Full-Stack software engineer specializing in
      designing and building secure REST APIs.
      Well versed in several programming languages such
      as javascript , ruby and python, 
      with a constant drive for self-development, and learning
      new technologies and languages.
    </p>
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
const three =<h3 className="big-heading">"react js enthusiast | rubyist | Software Engineering Student @ Flatiron School"</h3>;

{/* <img src="https://user-images.githubusercontent.com/79036942/142129514-ce562c02-bca1-4e2a-b19c-266942493c8d.png"/> */}
const items = [one, two, three, four, five, six];
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getCurrentPins())
  },[])
  return (

    <>
        <div className="main">
          {items.map((item, i) => (
            <div key={i}>{item}</div>
            ))}
        </div>
        <Bio/>
        <Featured/>
        <div className="container">
          <ul className="ul">
            <li><a href='https://github.com/AZIZXlaouiti'>{icons[0].svg}github</a></li>
            <li><a href='https://www.linkedin.com/in/mohamed-aziz-laouiti/'>{icons[1].svg}linkedin</a></li>
            <li><a href='mailto:azizrocke@gmail.com'>{icons[3].svg}email</a></li>
            <li><a href='https://mohamed-aziz-laouiti.medium.com/'>{icons[2].svg}blog</a></li>
            <li>
            <a href={resume} target="_blank" rel="noopener noreferrer">
      {icons[5].svg}Resume
    </a>
    </li>
          </ul>
        </div>
    </>
     
     
  );
}

export default App;
