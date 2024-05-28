import Image from "next/image";
import Container from "./container";
import Footer from "./footer"
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
      <div className="absolute left-0 top-0 h-full w-1/2 overflow-hidden">
      <div className="w-64 h-64 absolute left-0 -top-2 rounded-ee-full bg-gradient-to-r from-[#fee6b7] via-[#fff2da] to-[#fef9ec]"></div>
      </div>
        <div className="flex items-center w-full lg:w-1/2 relative top-56">
          <div className="max-w-2xl mb-8 ml-12">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Free Landing 
              <Typewriter
  options={{
    strings: ['Page', 'Template'],
    autoStart: true,
    loop: true,
  }}
/>
              for startups
            </h1>
            <h1>
         
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Nextly is a free landing page & marketing website
              template for startups and indie projects. Its built with
              Next.js & TailwindCSS. And its completely open-source.
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center relative top-32">
        <div
          className="h-[105%] w-[90%] rounded-t-full rounded-bl-full rounded-br-[145rem] bg-primary
        bg-[url('https://images.unsplash.com/photo-1536147210925-5cb7a7a4f9fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80')]"
        ></div>
      </div>
      </Container>
      <Footer />
    </>
  
  );
}

export default Hero;