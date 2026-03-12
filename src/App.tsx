
import { Navbar, Banner, Skills, Projects } from './components'
import Contact from './components/Contact'


function App() {

  return (
    <>
      <div
        // className='bg-[#efe1bd] dark:bg-gray-900 dark:text-white text-gray-900 min-h-screen'
        className='bg-[#f0efeb] dark:bg-gray-900 dark:text-white text-gray-900 min-h-screen'
      >
        {/* Navigation bar */}
        <Navbar />

        {/* Hero section  */}
        <Banner />
        <hr />
        {/* My skills  */}
        <Skills />
        <hr />

        <Projects />
        <hr />

        {/* Contact me  */}
        <div className="relative before:opacity-20 before:content-[''] before:absolute before:w-full before:h-full before:bg-cover before:bg-center before:bg-[url('public/test.mp4')]">  
          <Contact />
        </div>

      </div>



    </>
  )
}

export default App
