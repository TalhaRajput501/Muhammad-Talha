
// ProjectCard.tsx
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  gitHubLink: string;
  technology: string[];
  className: string;
  infoClassName: string;
  picClassName: string;
  mainTitle: string;

}


function ProjectCard({ title, description, image, link, gitHubLink, technology, className, infoClassName, mainTitle, picClassName }: ProjectCardProps) {

  return (
    <>


      <h1
        className=" text-3xl mx-1 text-center text-[#85856c] dark:text-[#e09f3e] mt-4  font-poppins   "
      >{mainTitle}</h1>

      <div className={` bg-[#b7b7a4ce] dark:bg-gray-800 rounded sm:rounded-xl shadow-xl border  hover:shadow-2xl transition-shadow duration-300 mb-5  ${className}  `}>


        {/* Project Information  */}
        <div className={`p-5 sm:w-[50%]   ${infoClassName} `}>

          <h2 className="sm:text-2xl text-xl font-extrabold sm:font-bold mb-2 text-[#4361ee] text-center sm:text-left  dark:text-[#4361ee]">{title}</h2>
          <p className="text-gray-800 text-justify sm:text-left dark:text-gray-200 mb-4 font-semibold ">{description}</p>

          <h1
            className=" mt-2 mx-1 font-bold text-[#4361ee] dark:text-[#e09f3e]"
          >Technologies Used:</h1>
          <div
            className="flex mb-3  flex-wrap "
          >
            {
              technology.map((item) => (
                <p
                  key={item}
                  className="bg-blue-500/70 text-[#f0efeb] text-center mx-1 rounded-2xl mt-2 px-2 font-semibold"
                >
                  {item}
                </p>
              ))
            }
          </div>



          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 font-medium bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300  mt-2 sm:mt-0 w-full mx-auto  sm:w-auto justify-center   "
          >
            View Project
            {/* new tab icon */}
            <svg
              className="ml-2" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="15" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
            </svg>
          </a>

          <a
            href={gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            className="inline-flex  items-center gap-2 px-4 py-2 rounded md:mx-2 font-medium  justify-center transition-colors duration-200 bg-gray-700 text-white sm:w-auto   hover:bg-gray-600 mt-2 md:mt-0 w-full    "
          >
            {/* github icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              className="w-4 h-4 fill-current"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>
            &lt;GitHub/&gt;
          </a>

        </div>



        {/* Project Picture  */}
        <div
          className={`sm:w-[50%] flex items-center justify-center  ${picClassName}`}
        >
          <img className=" sm:w-[90%]  h-auto rounded sm:rounded-lg  sm:border sm:dark:border-none  " src={image} alt={title} />
        </div>

      </div>
    </>

  );
}

export default ProjectCard