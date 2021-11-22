import React from 'react'
import styledComponents from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const Bio = () => {
    const StyledAboutSection = styledComponents.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
    const StyledText = styledComponents.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styledComponents.div`
position: relative;
max-width: 300px;

@media (max-width: 768px) {
  margin: 50px auto 0;
  width: 70%;
}

.wrapper {
  display: block;
  position: relative;
  width: 100%;
  border-radius: var(--border-radius);
  background-color: var(--green);

  &:hover,
  &:focus {
    background: transparent;
    outline: 0;

    &:after {
      top: 15px;
      left: 15px;
    }

    .img {
      filter: none;
      mix-blend-mode: normal;
    }
  }

  .img {
    position: relative;
    border-radius: var(--border-radius);
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1);
    transition: var(--transition);
  }

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    transition: var(--transition);
  }

  &:before {
    top: 0;
    left: 0;
    background-color: var(--navy);
    mix-blend-mode: screen;
  }

  &:after {
    border: 2px solid var(--green);
    top: 20px;
    left: 20px;
    z-index: -1;
  }
}
`;
  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React','redux', 'Ruby', 'Ruby on Rails', 'python' , 'PostgreSQL','SQLite','Heroku','WebSocket','redis','activeRecord','ExpressJs','NodeJs','Test-Driven Development'];

    return (
        <StyledAboutSection id="about">
      <h2 className="numbered-heading">About Me</h2>
      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Mohamed Aziz Laouiti and I enjoy creating things on the internet. 
              Software engineering allows me to create meaning in people's lives at a broad scale 
              Through intense practice and self motivation. 
              I am excited about the field of software engineering, and would welcome the opportunity 
              to bring my engineering skills, creativity, and experience to your growing team.
            </p>

         

            <p>
              I also recently graduated{' '}
              <a href="https://flatironschool.com/">
                Flatiron School
              </a>{' '}
           
            </p>

            <p>Here are a few technologies I’ve been working with :</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>
    
    
        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="https://user-images.githubusercontent.com/79036942/142129514-ce562c02-bca1-4e2a-b19c-266942493c8d.png"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
        </div>
    </StyledAboutSection>

    )
}

export default Bio
