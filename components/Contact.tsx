import { type FormEvent } from 'react'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import emailjs from '@emailjs/browser'

function Contact() {
  // Send email
  const sendMail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    const result = await emailjs.sendForm(
      'service_sx3my8a',
      'template_3rtm5xr',
      form,
      'T6SGFppNEeOOoRaOU'
    )

    if (result.text !== 'OK') {
      alert('There might be an error in sending mail you can call me ')
      return
    }

    alert('Email received i will be response you as soon as i can ')
    form.reset()
  }

  const inputClassName =
    'w-full rounded-lg border border-[#cb997e]/35 bg-white/80 px-3 py-2 text-base font-semibold text-gray-800 outline-none transition-colors duration-200 placeholder:text-gray-500 focus:border-[#4361ee] dark:border-gray-600 dark:bg-gray-900/50 dark:text-gray-100 dark:placeholder:text-gray-400 dark:focus:border-[#e09f3e]'

  return (
    <div className="min-h-screen px-3 sm:px-6" id="contact">
      <h1 className="text-6xl text-center pt-3 font-permanent-marker text-[#cb997e] dark:text-white">
        Contact Me
      </h1>

      <p className="text-gray-900 sm:text-xl text-lg mx-2 mt-3 font-semibold text-center dark:text-gray-300 mb-8">
        Got a project idea, collaboration, or just want to say hi👋? I’d love to hear
        from you.
      </p>

      <section className="mx-auto flex w-full max-w-6xl flex-col lg:flex-row gap-6 pb-10">
        {/* Contact Info */}
        <div className="w-[92%] mx-auto lg:w-[42%]">
          <div className="h-full rounded-2xl border border-[#cb997e]/35 bg-[#b7b7a4ce] p-6 shadow-md dark:border-[#e09f3e]/30 dark:bg-gray-800">
            <h1 className="text-4xl font-akaya-kanadaka font-extrabold text-[#cb997e] dark:text-[#e09f3e] mb-2">
              Let&apos;s Connect
            </h1>
            <p className="text-gray-700 dark:text-gray-300 font-medium mb-5">
              Reach out through any platform below.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:muhammadtalha.dev4197@gmail.com"
                className="group flex items-center gap-3 rounded-xl border border-transparent bg-white/60 px-4 py-3 text-gray-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4361ee]/30 hover:bg-white dark:bg-gray-900/35 dark:text-gray-200 dark:hover:border-[#e09f3e]/50 dark:hover:bg-[#3a3328] dark:hover:text-[#fff6e8]"
              >
                <Mail className="h-5 w-5 text-[#4361ee] dark:text-[#e09f3e]" />
                <span className="break-all font-semibold text-sm sm:text-base">
                  muhammadtalha.dev4197@gmail.com
                </span>
              </a>

              <a
                href="tel:+923191748730"
                className="group flex items-center gap-3 rounded-xl border border-transparent bg-white/60 px-4 py-3 text-gray-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4361ee]/30 hover:bg-white dark:bg-gray-900/35 dark:text-gray-200 dark:hover:border-[#e09f3e]/50 dark:hover:bg-[#3a3328] dark:hover:text-[#fff6e8]"
              >
                <Phone className="h-5 w-5 text-[#4361ee] dark:text-[#e09f3e]" />
                <span className="font-semibold text-sm sm:text-base">+92 319 1748730</span>
              </a>

              <a
                href="https://github.com/TalhaRajput501"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-transparent bg-white/60 px-4 py-3 text-gray-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4361ee]/30 hover:bg-white dark:bg-gray-900/35 dark:text-gray-200 dark:hover:border-[#e09f3e]/50 dark:hover:bg-[#3a3328] dark:hover:text-[#fff6e8]"
              >
                <Github className="h-5 w-5 text-[#4361ee] dark:text-[#e09f3e]" />
                <span className="break-all font-semibold text-sm sm:text-base">
                  github.com/TalhaRajput501
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/m-talha-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-transparent bg-white/60 px-4 py-3 text-gray-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4361ee]/30 hover:bg-white dark:bg-gray-900/35 dark:text-gray-200 dark:hover:border-[#e09f3e]/50 dark:hover:bg-[#3a3328] dark:hover:text-[#fff6e8]"
              >
                <Linkedin className="h-5 w-5 text-[#4361ee] dark:text-[#e09f3e]" />
                <span className="font-semibold text-sm sm:text-base">
                  linkedin.com/in/m-talha-dev/
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          method="POST"
          onSubmit={sendMail}
          id="form"
          className="w-[92%] mx-auto lg:w-[58%] border border-[#cb997e]/35 flex flex-col rounded-2xl dark:border-[#e09f3e]/30 dark:bg-gray-800 bg-[#b7b7a4ce] p-6 shadow-md"
        >
          <h1 className="text-4xl font-extrabold text-[#cb997e] font-akaya-kanadaka dark:text-[#e09f3e] mb-5">
            Send Mail
          </h1>

          <div className="space-y-3">
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className={inputClassName}
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Enter your e-mail"
              className={inputClassName}
            />

            <textarea
              rows={5}
              name="message"
              required
              placeholder="Enter your message"
              className={`${inputClassName} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="mt-5 w-full sm:w-fit px-6 py-3 font-bold text-white rounded-lg bg-[#4361ee] hover:bg-blue-700 dark:bg-[#e09f3e] dark:text-gray-900 dark:hover:bg-[#d6922a] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  )
}

export default Contact
