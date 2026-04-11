
import { useEffect, useState } from 'react'
import { ProjectCard } from "./index"

function Projects() {

  const [path, setPath] = useState<string>('/lightInventory.webp')

  useEffect(() => {
    const html = document.documentElement;
    const updatePath = () => {

      if (html.classList.contains("dark")) {
        setPath('/inventory1.webp')

      } else {
        setPath('/lightInventory.webp')

      }
    }

    updatePath()

    const observer = new MutationObserver(updatePath)
    observer.observe(html, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()

  }, [])

  return (
    <div
      className="min-h-screen "
      id="projects"
    >
      <h1
        className='text-6xl text-center pt-5 font-permanent-marker text-[#cb997e] dark:text-white '
      >
        Projects
      </h1>

      <div
        className="flex mt-5 flex-col md:max-lg:px-3"
      >


        {/* Inventory  management system */}
        <ProjectCard
          mainTitle='One System, Full Control'
          infoClassName="sm:order-1 order-2 "
          picClassName="sm:order-2 order-1"
          className="w-[80%] mx-auto flex sm:flex-row flex-col md:max-lg:w-[90%]"
          technology={['React', 'Node Js', 'Express', 'Mongodb', 'Redux', 'Tailwind', 'Bcrypt', 'Recharts', 'Jwt',]}
          title="Inventory Management System with POS"
          description="I built a MERN stack inventory and billing system that includes features like user roles, inventory tracking, automated sales billing, and an admin dashboard for monitoring stock and performance. It supports multi-user access with role-based permissions, making business management streamlined and efficient."
          image={path}
          gitHubLink='https://www.github.com/TalhaRajput501/stock-management-system'
          // link="https://www.github.com/TalhaRajput501/stock-management-system"
          link='https://inventoryflow.azurewebsites.net/'
        />

        {/* Ecommerce System */}
        <ProjectCard
          mainTitle='Complete your personality'
          infoClassName="sm:order-2 order-2 "
          picClassName="sm:order-1 order-1"
          className="w-[80%] mx-auto flex sm:flex-row flex-col md:max-lg:w-[90%]"
          technology={['Next Js', 'Node Js', 'Typescript', 'App Router', 'Mongodb', 'Tailwind', 'Bcrypt', 'Jwt',]}
          title="Complete your style with an online store."
          description="A simple Next.js store for buying clothes, watches, and shoes with basic features like user accounts, product listings, order management, and a simple dashboard to check orders and sales. It lets multiple users shop and make purchases, making it a straightforward way to sell items online."
          image='/ecom.png'
          gitHubLink='https://www.github.com/TalhaRajput501/completeMe'
          // link="https://www.github.com/TalhaRajput501/stock-management-system"
          link='https://complete-me-beta.vercel.app/'
        />


        {/* Blog website */}

        <ProjectCard
          mainTitle='Express Freely, Read Globally'
          infoClassName="sm:order-2 order-2"
          picClassName="sm:order-1 order-1"
          className="w-[80%] mx-auto flex sm:flex-row flex-col md:max-lg:w-[90%]"
          technology={['React', 'Express', 'App Write']}
          title="Full-Stack Blog Platform (Appwrite, React, Express, User Auth, Image Uploads)"
          description="I built a full-stack blog platform where users can create, edit, and delete posts with rich text and images. It includes secure authentication, image uploads, and a modern responsive UI."
          image="/blog.webp"
          gitHubLink='https://www.github.com/TalhaRajput501/BlogWise'
          link="https://wiseblogs.vercel.app"

        />

        {/* Agency IT HUB */}
        <ProjectCard
          mainTitle='Tech Solutions Under One Roof'
          infoClassName="sm:order-1 order-2"
          picClassName="sm:order-2 "
          className="w-[80%] mx-auto flex sm:flex-row flex-col md:max-lg:w-[90%]"
          technology={['Pug', 'CSS', 'JavaScript', 'Node Js', 'Express', 'Mongodb', 'Email Js']}
          title="Full-Stack Agency Website (Pug Templates, Email Orders, MongoDB Feedback)"
          description="A learning project where users can place service orders through an email form and submit feedback stored in MongoDB. Includes dynamic pages built with Pug templates and a simple admin view for managing submissions."
          image="/agency.webp"
          gitHubLink='https://www.github.com/TalhaRajput501/ITHub'
          link="https://www.github.com/TalhaRajput501/ITHub"

        />


        {/* Weather app  */}
        <ProjectCard
          mainTitle='Real-Time Weather at Your Fingertips'
          infoClassName="sm:order-2 order-1"
          picClassName="sm:order-1 "
          className="w-[80%] mx-auto flex sm:flex-row flex-col md:max-lg:w-[90%]"
          technology={['HTML', 'CSS', 'JavaScript']}
          title="Weather Tracker"
          description="This was my very first project a simple weather tracker that fetches live data from an API. Even though the idea is basic, building it gave me the confidence that I can turn ideas into working apps and improve as I go. I also put effort into making the UI clean and visually pleasant."
          image="/weather.webp"
          gitHubLink='https://www.github.com/TalhaRajput501/check-weather'
          link="https://weather-of-town.vercel.app/"

        />


      </div>


    </div>
  )
}

export default Projects
