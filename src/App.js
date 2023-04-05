import './index.css';
import { useEffect, useRef, useState } from 'react';
import Bullet from './components/Bullet';
import Card from './components/Card';
import Project from './components/Project';
import {FaBars, FaSyncAlt, FaAngellist, FaUserAstronaut, FaViber, FaRegFileAlt, FaGithub, FaCircle, FaRegCircle, FaAngleDoubleRight} from 'react-icons/fa';
import selfie from './selfie.jpg';
import resume from './resume.pdf';
import psdFile from './travelwebsite.zip';

function App() {

  // handle menu toggle
  const [showNav, setShowNav] = useState(false);
  const handleNavChange = () => {
    if (window.outerWidth < 768) {
      setShowNav(false)
    } else {
      setShowNav(true)
    }
  };
  window.addEventListener('resize', handleNavChange);
  useEffect(()=> {
    handleNavChange()
  }, []);


  // handle title change in header
  const [title, setTitle] = useState(['Front-end developer', 'Designer', 'Code monkey', 'Jiujitsu enthusiast', 'Ukulele player', 'Bachata dancer', 'Humanist', 'Green tech lover']);
  const [currentIndex, setCurrentIndex] = useState(0);
  const changeTitle = () => {
    setCurrentIndex((currentIndex + 1) % title.length);
  };


  // handle mobile page scroll X
  const target = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const element = target.current;
    setScrollPosition(element.scrollLeft);
  };


  // My skills so far
  const techStack = ['HTML', 'CSS', 'SCSS', 'Bootstrap', 'Tailwind', 'Styled-components', 'JavaScript', 'React', 'NextJs', 'GatsbyJS', 'Git', 'Figma', 'Adobe creative suite'];

  return (
    <div className="bg-ccYellow text-ccDark font-sans-roboto overflow-hidden">
      <header className='h-16 flex items-center border-ccDark border-b'>
        <div onClick={()=> setShowNav(!showNav)} className="h-full flex justify-center items-center w-16 text-2xl border-ccDark border-r cursor-pointer hover:bg-ccDark hover:text-ccYellow md:hidden">
          <FaBars />
        </div>
        <div className="flex pl-4 gap-2 md:pl-2 md:gap-3">
          <img src={selfie} className="h-12 w-12 object-contain rounded-full" alt="Bryan Fink" />
          <div className="flex-1 flex-col items-center">
            <h5 className="text-xl font-bold">Bryan Fink</h5>
            <div className="flex items-center gap-2">
              <FaSyncAlt className="cursor-pointer" onClick={changeTitle}/> 
              <p>{title[currentIndex]}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-screen overflow-y-hidden">
        <nav className={`h-screen w-16 flex-none pt-8 align-center border-r border-ccDark bg-ccYellow ${showNav ? "visible" : "hidden"}`}>
          <ul className="flex flex-col gap-10">
            <li className="flex flex-col mx-auto">
              <a href="#home">
                <button onClick={() => setShowNav(false)}>
                  <FaAngellist size="1.75rem" className="mx-auto"/>
                  <p className="text-sm text-center">Home</p>
                </button>
              </a>
            </li>
            <li className="flex flex-col mx-auto">
              <a href="#about">
                <button onClick={() => setShowNav(false)}>
                  <FaUserAstronaut size="1.75rem" className="mx-auto"/>
                  <p className="text-sm text-center">About</p>
                </button>
              </a>
            </li>
            <li className="flex flex-col mx-auto">
              <a href="#contact">
                <button onClick={() => setShowNav(false)}>
                  <FaViber size="1.75rem" className="mx-auto"/>
                  <p className="text-sm text-center">Contact</p>
                </button>
              </a>
            </li>
            <li className="flex flex-col mx-auto">
              <a href={resume} target="_blank" rel="noopener noreferrer">
                <button>
                  <FaRegFileAlt size="1.75rem" className="mx-auto"/>
                  <p className="text-sm text-center">Resume</p>
                </button>
              </a>
            </li>
            <li className="flex flex-col mx-auto">
              <a href="https://github.com/BryanMF87" target="_blank" rel="noopener noreferrer">
                <button>
                  <FaGithub size="1.75rem" className="mx-auto"/>
                  <p className="text-sm text-center">Github</p>
                </button>
              </a>
            </li>
          </ul>
        </nav>

        <main className="h-screen flex flex-col overflow-x-auto overflow-y-hidden">
          <div className="w-screen flex flex-row gap-2 py-4 mx-auto justify-center md:hidden">
              <div className="flex gap-1">
                {scrollPosition > window.innerWidth ? (
                  <>
                    <FaRegCircle />
                    <FaCircle />
                  </>
                ) : (
                  <>
                    <FaCircle />
                    <FaRegCircle />
                  </>
                )}
              </div>
          </div>
          {/* outer container */}
          <div ref={target} onScroll={handleScroll} className="h-screen w-screen flex overflow-y-hidden snap-x md:w-full md:h-full">
            {/* about column */}
            <div id="home" className="flex-shrink-0 flex-col h-screen w-screen px-4 pb-24 overflow-y-scroll scrollbar-hide snap-start md:w-3/5 md:px-6 md:flex-shrink-1 lg:w-2/3">
              <section className="py-48 my-auto mr-auto">
                <div className='w-min'>
                  <h1 className="text-9xl font-bold tracking-tight">Hello World</h1>
                  <h3 className="text-3xl text-right tracking-tight max-w-xs ml-auto">I'll help you create awesome online content</h3>
                </div>
              </section>
              <section id="about" className="flex flex-col gap-4 mb-48">
                <h2 className="text-6xl font-bold tracking-tighter mb-8">Websites, Apps, Designs, & custom code</h2>
                <p className="text-lg"><span className="text-xl font-bold">Hi there! I'm Bryan Fink,</span> a front-end web developer, graphic designer, and sales person who dreams of building online content for people / companies that can change the world.</p>
                <p className="text-lg"><span className="font-bold">Currently I am searching for a wonderful company who shares this desire from which I can work with and learn from.</span></p>
                <p className="text-lg">Outside of the office I enjoy nature hikes, martial arts, dancing, and action movies.</p>
              </section>
              <section className="flex flex-col mb-48">
                <h2 className="text-6xl font-bold tracking-tighter mb-8">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
                      <Bullet key={index} skill={tech}/>
                    ))}
                </div>
              </section>
              <section className="flex flex-col mb-48">
                <h2 className="text-6xl font-bold tracking-tighter mb-8">Relevant Work History</h2>
                <div className='flex flex-col gap-6'>
                  <Card
                    date={'January 2021 - September 2021'}
                    company={'Square, inc'}
                    role={'Business development rep'}
                    disc={[
                      'Fortune 500 tech company environment', 
                      'top performing sales person',
                      'Worked 100% remotely',
                      'Quickly learned a new tech skillset',
                      'Gained insight into tech world operations'
                    ]}
                  />
                  <Card
                    date={'April 2014 - June 2020'}
                    company={'Bluegrass Book Buyers'}
                    role={'Web developer'}
                    disc={[
                      'Start-up company environment',
                      'Multitasked several roles at once',
                      'Worked 100% remotely',
                      'Created / maintained online website and training content',
                      'Used Sketch, Wix, HTML, CSS, JavaScript'
                    ]}
                  />
                  <Card
                    date={'Nov 2013 - April 2014'}
                    company={'TMX Financial'}
                    role={'Graphic designer'}
                    disc={[
                      'Mid level company environment',
                      'Collaborated with web designer and senior design team to build out web layouts and graphics',
                      'Worked 100% on site',
                      'Used Adobe creative suite'
                    ]}
                  />
                  <Card
                    date={'March 2010 - May 2011'}
                    company={'Freelance'}
                    role={'Web developer'}
                    disc={[
                      'Created static brochure websites for local mom & pop businesses',
                      'Worked with business owners to identify goals and project objectives',
                      'Used Adobe creative suite, Dreamweaver, HTML, CSS, PHP'
                    ]}
                  />
                </div>
              </section>
              <section className="flex flex-col mb-48">
                <h2 className="text-6xl font-bold tracking-tighter mb-8">Education</h2>
                <div className='flex flex-col gap-6'>
                  <Card
                    date={'January 2022 - present'}
                    company={'Self-study'}
                    role={'Modern web development'}
                    disc={[
                      'Used online study programs like The Odin Project and Codecademy',
                      'Focused on modern frontend technology and practices',
                      'Learned HTML5, CSS3, JavaScript ES6, ReactJS, among others'
                    ]}
                  />
                  <Card
                    date={'May 2008 - May 2011'}
                    company={'Murray State University'}
                    role={'Graphic design & web dev'}
                    disc={[
                      'Earned a BA in graphic design',
                      'Emphasized on web development',
                      'Worked primarily with HTML, CSS, PHP, Dreamweaver, and Adobe creative suite'
                    ]}
                  />
                </div>
              </section>
              <section id="contact" className="flex flex-col">
                <h2 className="text-6xl font-bold tracking-tighter mb-8">Good News Everyone!</h2>
                <p className="text-lg"><span className="font-bold">I am currently looking for new projects and companies to work with.</span> If you or someone you know wants to build their ideas or business through a website, app, etc. then please let me know by reaching out through the channels below.</p>
                <ul className="flex flex-col gap-1 mt-4">
                  <li>
                    <a href="mailto:bmfink87@gmail.com">
                      <button className="flex gap-2 items-center font-bold text-lg">
                        <FaAngleDoubleRight/> Send me an email
                      </button>
                    </a>
                  </li>
                  <li>
                    <a href={resume} target="_blank" rel="noopener noreferrer">
                      <button className="flex gap-2 items-center font-bold text-lg">
                        <FaAngleDoubleRight/> Review my resume
                      </button>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/bfink777" target="_blank" rel="noopener noreferrer">
                      <button className="flex gap-2 items-center font-bold text-lg">
                        <FaAngleDoubleRight/> Find me on LinkedIn
                      </button>
                    </a>
                  </li>
                </ul>
              </section>
            </div>

            <aside className="flex-none flex-col h-screen w-screen px-4 pb-12 overflow-y-scroll overflow-x-hidden scrollbar-hide snap-start md:w-2/5 md:border-l md:border-ccDark md:px-6 md:flex-shrink-1 lg:w-1/3">
              <h3 className="w-fit bg-ccDark text-white text-2xl py-1.5 px-4 mt-12 mb-32 rounded-full">Featured Projects</h3>
              <Project
                id={'01'}
                name={'Scumm Bar Brawl'}
                description={'This homage to the Great Monkey Island web game series recreates the insult sword battling mini-game. Since building games require far more logical thinking than standard websites, this was a great chance to challenge my JavaScript programming skills while learning more advanced React hooks, promises, and SCSS.'}
                techStack={['HTML', 'SCSS', 'JavaScript', 'React']}
                liveLink={'https://bryanfink.dev/scumm-bar-brawl/'}
                codeLink={'https://github.com/BryanMF87/scumm-bar-brawl'}
              >
              </Project>
              <Project
                id={'02'}
                name={'Travel website'}
                description={'I took a layered PSD mockup and built a fully responsive website with an extendable information accordion and an infinite card carousel component. The goal was to pick a complex website mock up to recreate so I could challenge my coding skills and for extra fun, make it mobile friendly. During this project I learned static site generation from Gatsby Js and styled components.'}
                techStack={['HTML', 'Styled components', 'JavaScript', 'React', 'Gatsby']}
                liveLink={'https://travel-website-bryan.netlify.app/'}
                codeLink={'https://github.com/BryanMF87/travel-website'}
                fileLink={psdFile}
              />
              <Project
                id={'03'}
                name={'Time tracker app'}
                description={'I needed a way to track my billable hours for future projects, so I built a simple time tracker that records overall project time as well as breaks the project down by actionable item. It features mobile-first responsive design, local storage information saving, and a night-mode for after hour coding use.'}
                techStack={['HTML', 'CSS', 'JavaScript']}
                liveLink={'https://bryanmf87.github.io/time-keeper'}
                codeLink={'https://github.com/BryanMF87/time-keeper'}
              />
              <Project
                id={'04'}
                name={'Ecommerce website'}
                description={`This project mimics an actual ecommerce site for a dessert business. I made sure that while the website can't take actual payment info, it can save the user's choice data using local storage. The goal was to build something that handles more complex state management through React, and utilize common React hooks & router`}
                techStack={['HTML', 'CSS', 'JavaScript', 'React']}
                liveLink={'https://bryanmf87.github.io/ecommerce-website'}
                codeLink={'https://github.com/BryanMF87/ecommerce-website'}
              />
              <Project
                id={'05'}
                name={'World flag flashcards'}
                description={'I took a layered PSD mockup and built a fully responsive website with an extendable information accordion and an infinite card carousel component. The goal was to pick a complex website mock up to recreate so I could challenge my coding skills and for extra fun, make it mobile friendly. During this project I learned static site generation from Gatsby Js and styled components.'}
                techStack={['HTML', 'Styled components', 'JavaScript', 'React', 'Gatsby']}
                liveLink={'https://bryanmf87.github.io/world-flag-flashcards'}
                codeLink={'https://github.com/BryanMF87/world-flag-flashcards'}
              />
            </aside>
          </div>
        </main>
      </div>
      

    </div>
  );
}

export default App;
