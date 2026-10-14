'use client'

import { useState, type FormEvent } from 'react'
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Loader2,
  TimerIcon,
} from 'lucide-react'
import emailjs from '@emailjs/browser'
import Link from 'next/link'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendMail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget

    try {
      const result = await emailjs.sendForm(
        'service_sx3my8a',
        'template_3rtm5xr',
        form,
        'T6SGFppNEeOOoRaOU'
      )

      if (result.text !== 'OK') {
        alert('There might be an error in sending mail, you can call me directly.')
        setLoading(false)
        return
      }

      setSuccess(true)
      form.reset()
      setTimeout(() => setSuccess(false), 5000)
    } catch (error) {
      alert('Failed to send message. Please check your connection or try calling me.')
    } finally {
      setLoading(false)
    }
  }

  const inputClassName =
    'w-full rounded-xl border border-white/10 bg-white/[00.03] px-4 py-3.5 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-gray-500 focus:border-purple-500 focus:bg-purple-950/10 focus:ring-2 focus:ring-purple-500/20'

  return (
    <section
      id="contact"
      className="w-full mx-auto px-4 sm:px-6 py-16 sm:py-24 relative border-t border-border/50"
    >
      {/* Section Header */}
      <div className="text-center mx-auto mb-10 sm:mb-16 max-w-4xl">
        <div className="text-primary text-sm font-bold uppercase mb-2">
          Get In Touch
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
          Let's Build{' '}
          <span className="text-transparent bg-clip-text bg-primary">
            Something Amazing
          </span>
        </h2>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-2 px-2">
          Got a project idea, collaboration, or just want to say hi👋? I’d love
          to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">

        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="rounded-2xl border border-white/10 bg-surface p-5 sm:p-6 shadow-2xl backdrop-blur-md relative overflow-hidden">

            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-3xl pointer-events-none" />

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Let&apos;s Connect
            </h3>

            <p className="text-gray-400 text-sm mb-6 sm:mb-8">
              Reach out through any platform below or drop a direct message.
            </p>

            <div className="space-y-3 sm:space-y-4.5">

              {/* mail */}
              <Link
                href="mailto:muhammadtalha.dev4197@gmail.com"
                className="group flex items-center gap-3 sm:gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-3 sm:px-4 py-3.5 text-gray-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-500/40 hover:bg-purple-950/20 hover:text-white"
              >
                <div className="shrink-0 p-2 rounded-lg bg-purple-950/40 text-purple-400 border border-purple-500/20 group-hover:border-purple-500/50 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>

                <div className="overflow-hidden min-w-0">
                  <div className="text-xs text-gray-500 font-medium">
                    Email Me
                  </div>

                  <span className="block truncate font-semibold text-sm">
                    muhammadtalha.dev4197@gmail.com
                  </span>
                </div>
              </Link>

              {/* call */}
              <Link
                href="tel:+923191748730"
                className="group flex items-center gap-3 sm:gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-3 sm:px-4 py-3.5 text-gray-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-500/40 hover:bg-purple-950/20 hover:text-white"
              >
                <div className="shrink-0 p-2 rounded-lg bg-purple-950/40 text-purple-400 border border-purple-500/20 group-hover:border-purple-500/50 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <div className="text-xs text-gray-500 font-medium">
                    Call Me
                  </div>

                  <span className="block font-semibold text-sm truncate">
                    +92 319 1748730
                  </span>
                </div>
              </Link>

              {/* github */}
              <Link
                href="https://github.com/TalhaRajput501"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 sm:gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-3 sm:px-4 py-3.5 text-gray-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-500/40 hover:bg-purple-950/20 hover:text-white"
              >
                <div className="shrink-0 p-2 rounded-lg bg-purple-950/40 text-purple-400 border border-purple-500/20 group-hover:border-purple-500/50 transition-colors">
                  <Github className="h-5 w-5" />
                </div>

                <div className="overflow-hidden min-w-0">
                  <div className="text-xs text-gray-500 font-medium">
                    GitHub Profile
                  </div>

                  <span className="block truncate font-semibold text-sm">
                    github.com/TalhaRajput501
                  </span>
                </div>
              </Link>

              {/* linkedin */}
              <Link
                href="https://www.linkedin.com/in/m-talha-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 sm:gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-3 sm:px-4 py-3.5 text-gray-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-500/40 hover:bg-purple-950/20 hover:text-white"
              >
                <div className="shrink-0 p-2 rounded-lg bg-purple-950/40 text-purple-400 border border-purple-500/20 group-hover:border-purple-500/50 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </div>

                <div className="overflow-hidden min-w-0">
                  <div className="text-xs text-gray-500 font-medium">
                    Expected Response Time
                  </div>

                  <span className="block truncate font-semibold text-sm">
                    linkedin.com/in/m-talha-dev
                  </span>
                </div>
              </Link>

              {/* response */}
              <Link
                href="/#"
                // target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 sm:gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-3 sm:px-4 py-3.5 text-gray-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-500/40 hover:bg-purple-950/20 hover:text-white"
              >
                <div className="shrink-0 p-2 rounded-lg bg-purple-950/40 text-purple-400 border border-purple-500/20 group-hover:border-purple-500/50 transition-colors">
                  <TimerIcon className="h-5 w-5" />
                </div>

                <div className="overflow-hidden min-w-0">
                  <div className="text-xs text-gray-500 font-medium">
                    Expected Response Time
                  </div>

                  <span className="block truncate font-semibold text-sm">
                    Within 24 hours
                  </span>
                </div>
              </Link>

            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <form
            method="POST"
            onSubmit={sendMail}
            id="form"
            className="rounded-2xl border border-white/10 bg-surface p-5 sm:p-6 shadow-2xl backdrop-blur-md flex flex-col gap-5 sm:gap-6 relative"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Send a Message
              </h3>

              <p className="text-gray-400 text-sm">
                Fill out the form below and I'll get back to you promptly.
              </p>
            </div>

            <div className="space-y-4">

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. John Doe"
                  className={inputClassName}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Your Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. john@example.com"
                  className={inputClassName}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Your Message
                </label>

                <textarea
                  rows={5}
                  name="message"
                  required
                  placeholder="Tell me about your project or inquiry..."
                  className={`${inputClassName} resize-none`}
                />
              </div>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-bold text-white rounded-xl bg-primary hover:bg-primary-hover transition-all duration-200 disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending Message...
                </>
              ) : success ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  Message Sent Successfully!
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}