import './index.css';
import { useEffect, useRef, useState } from 'react';
import Bullet from './components/Bullet';
import Card from './components/Card';
import Project from './components/Project';
import {FaBars, FaAngellist, FaUserAstronaut, FaViber, FaGithub, FaAngleDoubleRight} from 'react-icons/fa';
import {BiGlassesAlt} from 'react-icons/bi';
import {MdPersonPin} from 'react-icons/md';
import {TbArrowCurveRight} from 'react-icons/tb';
import {BsPersonWorkspace} from 'react-icons/bs';
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


  // handle vertical 'about me' section scroll
  const aboutColRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const handleYScroll = (target) => {
    if(mainRef.current.offsetLeft > 0) {
      handleXScroll(aboutColRef.current)
    }
    aboutColRef.current.scrollTo({ 
      top: target.offsetTop,
      behavior: 'smooth'
    })
  };

  
  // handle horizontal scroll between about and work columns
  const mainRef = useRef(null);
  const workColRef = useRef(null);
  const handleXScroll = (target) => {
    mainRef.current.scrollTo({
      left: target.offsetLeft,
      behavior: 'smooth'
    })
  };


  // My skills so far
  const techStack = ['HTML', 'CSS', 'SCSS', 'Bootstrap', 'Tailwind', 'Styled-components', 'JavaScript', 'React', 'NextJs', 'GatsbyJS', 'Git', 'Figma', 'Adobe creative suite'];

  return (
    <div className="h-screen w-screen bg-ccYellow text-ccDark font-sans-roboto overflow-hidden">
      <header className='h-16 flex items-center border-ccDark border-b'>
        <div onClick={()=> setShowNav(!showNav)} className="h-full flex justify-center items-center w-16 text-2xl border-ccDark border-r cursor-pointer hover:bg-ccDark hover:text-ccYellow md:hidden">
          <FaBars />
        </div>
        <div className="flex pl-4 gap-2 md:pl-2 md:gap-3">
          <img src={selfie} className="h-12 w-12 object-contain rounded-full" alt="Bryan Fink" />
          <div className="flex-1 flex-col items-center">
            <h5 className="text-xl font-bold">Bryan Fink</h5>
            <div className="flex items-center gap-1">
              <MdPersonPin size={'1.25rem'} className="cursor-pointer" onClick={changeTitle}/> 
              <p>{title[currentIndex]}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="w-full flex">
        <nav className={`h-screen w-16 flex-none pt-8 align-center border-r border-ccDark bg-ccYellow ${showNav ? "visible" : "hidden"}`}>
          <ul className="flex flex-col gap-10">
            <li className="flex flex-col mx-auto">
                <button onClick={()=> handleYScroll(homeRef.current)} className="hover:opacity-50">
                  <FaAngellist size="1.75rem" className="mx-auto"/>
                  <p className="text-xs text-center mt-1 font-semibold">Home</p>
                </button>
            </li>
            <li className="flex flex-col mx-auto">
                <button onClick={()=> handleYScroll(aboutRef.current)} className="hover:opacity-50">
                  <FaUserAstronaut size="1.75rem" className="mx-auto"/>
                  <p className="text-xs text-center mt-1 font-semibold">About</p>
                </button>
            </li>
            <li className="flex flex-col mx-auto">
                <button onClick={()=> handleYScroll(contactRef.current)} className="hover:opacity-50">
                  <FaViber size="1.75rem" className="mx-auto"/>
                  <p className="text-xs text-center mt-1 font-semibold">Contact</p>
                </button>
            </li>
            <li className="flex flex-col mx-auto md:hidden">
                <button onClick={()=> handleXScroll(workColRef.current)} className="hover:opacity-50">
                  <BsPersonWorkspace size="1.75rem" className="mx-auto"/>
                  <p className="text-xs text-center mt-1 font-semibold">Work</p>
                </button>
            </li>
            <li className="flex flex-col mx-auto">
              <a href={resume} target="_blank" rel="noopener noreferrer">
                <button className="hover:opacity-50">
                  <BiGlassesAlt size="1.75rem" className="mx-auto"/>
                  <p className="text-xs text-center mt-1 font-semibold">Resume</p>
                </button>
              </a>
            </li>
            <li className="flex flex-col mx-auto">
              <a href="https://github.com/BryanMF87" target="_blank" rel="noopener noreferrer">
                <button className="hover:opacity-50">
                  <FaGithub size="1.75rem" className="mx-auto"/>
                  <p className="text-xs text-center mt-1 font-semibold">Github</p>
                </button>
              </a>
            </li>
          </ul>
        </nav>

        <main ref={mainRef} className="w-full flex flex-row overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory">
            {/* about column */}
            <div ref={aboutColRef} className="shrink-0 flex-col h-screen w-screen px-4 pb-24 overflow-y-scroll scroll-smooth scrollbar-hide snap-center relative sm:px-12 md:px-6 md:w-3/5 md:flex-shrink-1 lg:px-10">
              <button onClick={() => handleXScroll(workColRef.current)} className="absolute flex gap-1 top-6 right-4 md:hidden transition duration-300 ease-in-out transform hover:translate-x-3">
                 <p className="font-delicious text-2xl rotate-12">My Work</p>
                 <TbArrowCurveRight className="text-2xl rotate-90 mt-5"/>
              </button>
              <section ref={homeRef} className="h-full py-32 my-auto mr-auto sm:h-auto md:pt-20">
                <div className='w-min mx-auto'>
                  <h1 className="text-8xl font-bold tracking-tight leading-none xs:text-9xl smer:text-10xl sm:text-11xl md:text-9xl lg:text-10xl xl:text-11xl">Hello World</h1>
                  <h3 className="text-3xl text-right tracking-tight max-w-xs ml-auto">I'll help you create awesome online content</h3>
                </div>
              </section>
              <section ref={aboutRef} className="flex flex-col gap-4 mb-48">
                <h2 className="text-6xl font-bold tracking-tighter mb-8">Websites, Apps, Designs, & custom code</h2>
                  <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 md:flex md:flex-col lg:grid lg:grid-cols-2">
                    <p className="text-lg md:text-base"><span className="text-xl font-bold md:text-lg">Hi there! I'm Bryan Fink,</span> a front-end web developer with a graphic design and sales bcakground. I dream of building online content for people / companies that can change the world.</p>
                    <p className="text-lg md:text-base"><span className="text-xl font-bold md:text-lg">Currently I am searching for a wonderful company to work with and learn from.</span> Outside of the office I enjoy nature hikes, martial arts, dancing, memes, and action movies.</p>
                  </div>
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
                <div className='flex flex-col gap-6 sm:grid sm:grid-cols-2 md:flex md:flex-col lg:grid lg:grid-cols-2'>
                  <Card
                    date={'January 2021 - September 2021'}
                    company={'Square, inc'}
                    role={'Business development rep'}
                    disc={[
                      'Fortune 500 tech company environment',
                      'Worked with clients to uncover a business plan for their goals and challenges',
                      'Top 1% of all business development reps',
                      'Worked 100% remotely',
                      'Quickly learned and applied a new tech skillset',
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
                      'Collaborated with web developer and senior design team to build web layouts and graphics',
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
                <div className='flex flex-col gap-6 sm:grid sm:grid-cols-2 md:flex md:flex-col lg:grid lg:grid-cols-2'>
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
                    role={'Graphic design & web development'}
                    disc={[
                      'Earned a BA in graphic design',
                      'Emphasized on web development',
                      'Worked primarily with HTML, CSS, PHP, Dreamweaver, and Adobe creative suite'
                    ]}
                  />
                </div>
              </section>
              <section ref={contactRef} className="flex flex-col mb-36">
                <h2 className="text-6xl font-bold tracking-tighter mb-8">Good News Everyone!</h2>
                <p className="text-lg md:text-base"><span className="font-bold">I am currently looking for new projects and companies to work with.</span> If you or someone you know wants to build their ideas or business through a website, app, etc. then please let me know by reaching out through the channels below.</p>
                <ul className="flex flex-col gap-1 mt-4">
                  <li>
                    <a href="mailto:bmfink87@gmail.com">
                      <button className="flex gap-2 items-center font-bold text-lg transition duration-300 ease-in-out transform hover:translate-x-3">
                        <FaAngleDoubleRight/> Send me an email
                      </button>
                    </a>
                  </li>
                  <li>
                    <a href={resume} target="_blank" rel="noopener noreferrer">
                      <button className="flex gap-2 items-center font-bold text-lg transition duration-300 ease-in-out transform hover:translate-x-3">
                        <FaAngleDoubleRight/> Review my resume
                      </button>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/bfink777" target="_blank" rel="noopener noreferrer">
                      <button className="flex gap-2 items-center font-bold text-lg transition duration-300 ease-in-out transform hover:translate-x-3">
                        <FaAngleDoubleRight/> Find me on LinkedIn
                      </button>
                    </a>
                  </li>
                </ul>
              </section>
            </div>

            {/* My work column */}
            <aside ref={workColRef} className="flex-none flex-col h-screen w-screen pt-20 px-4 pb-12 overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-hide snap-center relative sm:px-6 md:w-2/5 md:border-l md:border-ccDark md:pt-10 lg:px-10">
              <button onClick={() => handleXScroll(aboutColRef.current)} className="absolute flex gap-1 top-6 left-4 md:hidden transition duration-300 ease-in-out transform hover:translate-x-3">
                <TbArrowCurveRight className="text-2xl -rotate-90 mt-2"/>
                <p className="font-delicious text-2xl -rotate-12">About Me</p>
              </button>
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
                description={'I took a layered PSD mockup and built a fully responsive website with an extendable information accordion and a repeating card carousel component. The goal was to pick a complex website mock up to recreate so I could challenge my coding skills, and to make a desktop layout mobile friendly. During this project I learned static site generation from Gatsby Js and styled components.'}
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
                description={`While watching the 2022 world cup I realized I didn't recognize a lot of international flags, so I created a world flag flashcard app with multiple choice options and score tracking. Its a simple app but fun app, created with HTML, CSS, vanilla JS, and a third party API from www.CountryFlagsAPI.com.`}
                techStack={['HTML', 'CSS', 'JavaScript', 'API']}
                liveLink={'https://bryanmf87.github.io/world-flag-flashcards'}
                codeLink={'https://github.com/BryanMF87/world-flag-flashcards'}
              />
            </aside>
        </main>
      </div>
      

    </div>
  );
}

export default App;
