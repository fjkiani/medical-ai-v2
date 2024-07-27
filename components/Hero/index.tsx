"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          email: email,
          message: "Learn more about the AI-powered X-ray analysis platform",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. We will get back to you as soon as possible.");
          setEmail("");
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-wrap lg:flex-nowrap lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="w-full lg:w-1/2">
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Revolutionize X-Ray Diagnostics with{" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  AI
                </span>
              </h1>
              <p>
                Fast track the diagnosis of suspected pneumonia patients in just
                30 seconds utilizing AI-powered X-ray analysis platform
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Learn more"}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="w-full mt-10 md:mt-0 md:w-1/2">
              <div className="relative 2xl:-mr-7.5">
                <div className="relative aspect-[700/444] w-full">
                  <video
                    className="shadow-solid-l w-full h-auto"
                    src="/images/hero/medical-ai.mp4"
                    controls
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
