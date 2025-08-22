import React, { type FormEvent } from 'react'
import emailjs from "@emailjs/browser";


function Contact() {

  // Send email 
  const sendMail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let form = e.currentTarget

    const result = await emailjs.sendForm(
      "service_sx3my8a",
      "template_3rtm5xr",
      form,
      'T6SGFppNEeOOoRaOU'
    )

    if (result.text !== 'OK') {
      alert("There might be an error in sending mail you can call me ")
      return
    }

    alert('Email received i will be response you as soon as i can ')
    form.reset()
  }


  return (
    <div
      className='min-h- '
      id='contact'
    >


      <h1
        className='text-6xl text-center pt-3 font-permanent-marker text-[#cb997e] dark:text-white '
      >
        Contact Me
      </h1>

      <p className="text-gray-900 sm:text-xl text-lg mx-2 mt-3 font-semibold text-center dark:text-gray-300 mb-8">
        Got a project idea, collaboration, or just want to say hi👋?
        I’d love to hear from you.
      </p>

      <section className="flex flex-col sm:flex-row w-full pb-9 ">

        {/* Contact Info  */}
        <div className="sm:w-[45%] w-full   flex flex-col items-center  sm:pl-9 py-6 ">
          <h1 className="text-4xl  font-akaya-kanadaka font-extrabold text-[#cb997e] dark:text-[#e09f3e] mb-6">
            Let's Connect
          </h1>

          <div className="border w-[85%] p-6 rounded-xl dark:bg-gray-800  bg-[#cecebaab]   space-y-4">

            {/* Email */}
            <div className="flex items-center space-x-3">
              <svg
                className="h-4 w-6 text-[#cb997e] dark:text-[#e09f3e]"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16"><path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path><path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path></svg>
              <a
                className="hover:underline break-all"
              >
                muhammadtalha.dev4197@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3">
              <svg
                className="h-6 w-6 text-[#cb997e] dark:text-[#e09f3e]"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.0225 4 14 8.98132m0 0 3.03.00002M14 8.98132V5.99998m4.2327 8.51492-1.1431-1.1439c-1.143-1.1439-1.9758-.3696-2.8382.4565-.3159.3161-.7443.4936-1.1911.4936-.4467 0-.8751-.1775-1.191-.4936L9.998 11.9549c-.65643-.6564-.92477-1.4591 0-2.38383.8488-.86837 1.6837-1.61177.4926-2.8037L9.2995 5.57544c-.90492-.90556-1.99137-.383-2.61843.23625-3.13257 3.1118-1.72021 6.77001 1.41066 9.90141s6.78747 4.5465 9.90477 1.4254c.1744-.1461.551-.565.6473-.7712.0962-.2062.1461-.4311.1461-.6587 0-.2277-.0499-.4525-.1461-.6588-.0963-.2062-.2366-.3888-.4111-.5349Z" />
              </svg>

              <a className="hover:underline">
                +92 311 4340221
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#cb997e] dark:text-[#e09f3e]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.4c-1 0-1.8-.8-1.8-1.8S5.5 4 6.5 4s1.8.8 1.8 1.8S7.5 7.6 6.5 7.6zM20 19h-3v-5c0-1.1 0-2.5-1.5-2.5s-1.7 1.2-1.7 2.4V19h-3v-10h2.9v1.4h.1c.4-.7 1.4-1.5 2.9-1.5 3.1 0 3.6 2 3.6 4.7V19z" />
              </svg>
              <a
                href="https://www.linkedin.com/in/m-talha-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/m-talha-dev/
              </a>
            </div>

            {/* GitHub */}
            <div className="flex items-center space-x-3">
              <svg
                className="h-6 w-7 text-[#cb997e] dark:text-[#e09f3e]"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd" />
              </svg>

              <a
                href="https://github.com/TalhaRajput501"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline break-all"
              >
                github.com/TalhaRajput501
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form   */}
        <form
          method='POST'
          onSubmit={sendMail}
          id='form'
          className="sm:w-[50%] w-[85%] mx-auto border flex flex-col  rounded-2xl dark:bg-gray-800  bg-[#cecebaab]    items-center justify-center">
          <h1 className='text-4xl font-extrabold text-[#cb997e] font-akaya-kanadaka dark:text-[#e09f3e] leading-14' >Send Mail</h1>

          {/* Name */}
          <input type="text" name='name' required placeholder='Enter your name' className='border px-2 font-semibold   dark:border-white rounded-lg focus:border-blue-500 my-2 sm:w-[70%] w-[90%] py-1 outline-none text-lg' />

          {/* Email */}
          <input type="email" name='email' required placeholder='Enter your e-mail' className='border px-2 font-semibold   dark:border-white rounded-lg focus:border-blue-500 my-2 sm:w-[70%] w-[90%] py-1 outline-none text-lg' />

          {/* Message */}
          <textarea rows={5} name='message' required placeholder='Enter your message' className='border  px-2 font-semibold  resize-none dark:border-white rounded-lg focus:border-blue-500 my-2 sm:w-[70%] w-[90%] py-1 outline-none text-lg' />
          <button type='submit' className="px-6 py-3 my-2 bg-blue-600 text-bold text-white rounded-lg hover:bg-blue-700">Send Message</button>
        </form>


      </section>



    </div>
  )
}

export default Contact
