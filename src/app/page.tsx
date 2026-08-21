'use client';
import { Heart } from 'lucide-react';
import { Coffee } from 'lucide-react';
import { Navbar, Banner, Skills, Projects } from '../../components'
import AboutMe from '../../components/AboutMe';
import Contact from '../../components/Contact'


function App() {

  return (
    <>
      <div
        // className='bg-[#efe1bd] dark:bg-gray-900 dark:text-white text-gray-900 min-h-screen'
        className=' mx-auto  '
      >
   
        {/* Hero section  */}
        <Banner />

        {/* About me  */}
        <AboutMe />

        {/* My skills  */}
        <Skills /> 

        <Projects /> 

        {/* Contact me  */}
        <Contact />

        {/* Footer */}
        <footer className="border-t border-border bg-background-secondary py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text-muted">
              © 2026 Talha. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-text-muted">
              Built with <Heart className="w-4 h-4 text-danger fill-danger" /> and lots of <Coffee className="w-4 h-4 text-[#d4a373]" />
            </div>
          </div>
        </footer>

      </div>



    </>
  )
}

export default App
