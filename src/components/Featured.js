import React, { useEffect, useRef } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styledComponents from 'styled-components';
import { icons } from '../assets/icons';
import { useSelector } from 'react-redux';
const StyledProjectsGrid = styledComponents.ul`
  

  a {
    position: relative;
    z-index: 1;
  }
`;

const StyledProject = styledComponents.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: 768px) {
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;

      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
   
    display: inline-block;
    margin: 3px 3px 3px 0;
    font-family: Inconsolata,monospace;
    font-size: .75rem;
    font-weight: 700;
    padding: 2px 7px;
    border-radius: 3px;
    color: #007bff;
    border: 1px solid #007bff;
    background: 0 0;
  }

  .project-title {
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      color: var(--white);

      a {
        position: static;

        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }

  .project-description {
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: #fff;
    color: var(--light-slate);
    font-size: var(--fz-sm);
    border: 1px solid lightsteelblue;

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
    }

    strong {
      color: var(--white);
      font-weight: normal;
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;
    flex-direction: row;
    li {
      margin: 0 20px 5px 0;
  
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        margin: 0 10px 5px 0;
        color: var(--lightest-slate);
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);

    a {
      padding: 10px;

      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    .cta {
      margin: 10px;
    }
  }

  .project-image {
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    a {
      width: 100%;
      height: 100%;
      background-color: var(--green);
      border-radius: var(--border-radius);
      vertical-align: middle;

      &:hover,
      &:focus {
        background: transparent;
        outline: 0;

        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        background-color: var(--navy);
        mix-blend-mode: screen;
      }
    }

    .img {
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);

      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(50%);
      }
    }
  }
`;

const Featured = () => {
 

  const pined =useSelector(state=> state.pins)
  return (
    <section id="projects">
    <h2 className="numbered-heading" >
      Some Things I’ve Built
    </h2>

    <StyledProjectsGrid>
  
        {pined.map((node) => {
        

          return (
            <StyledProject >
              <div className="project-content">
                <div>
                
                <p className="project-overline">{node.language}</p>
                   
                  <h3 className="project-title">
                    {node.repo}
                  </h3>

                  <div
                    className="project-description"
                    
                    
                  >
                    <p>{node.description} </p>
                 </div>
                 {node.technologie !== undefined?  <ul className="project-tech-list ">
              {node.technologie.map((tech)=>{
                return (
                  
                  <li>{tech}</li>
                  )
                  
                }
                )}

                </ul>:null}
                   

                  <div className="project-links">
                    
                      <a href={node.link}>
                        
                        {icons[0].svg}
                      </a>
                      <a href={node.web?node.web:'#'}>
                        
                        {icons[6].svg}
                      </a>
             
                   
                  </div>
                </div>
              </div>

              <div className="project-image">
              <img aria-hidden="true" data-placeholder-image="" decoding="async" src="https://user-images.githubusercontent.com/79036942/141841833-e8845f3a-dc2e-49ea-b8e4-a417c2b92b60.gif" alt=""/>
              </div>
            </StyledProject>
          );
        })}
    </StyledProjectsGrid>
  </section>
  );
};

export default Featured;
