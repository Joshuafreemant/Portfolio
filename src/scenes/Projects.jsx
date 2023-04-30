import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, tools, github, link, img }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7 font-semibold text-sm">
          {description}
        </p>

        <div className="bottom-2  flex flex-row mt-4 ">
          <a href={link} target="_blank" className="border rounded-md border-[#242321] mr-1 px-2 py-1">Preview</a>
          <a href={github} target="_blank" className="border rounded-md border-[#242321] mr-1 px-2 py-1">Github</a>
        </div>
        <div className="absolute z-10 bottom-2  flex flex-row ">
          {
            tools?.map((tool) => (
              <p className="border rounded-md border-[#242321] mr-1 text-xs font-semibold p-1">{tool}</p>
            ))
          }
        </div>
      </div>
      <img src={img} alt={img} />

    </motion.div>
  );
};

const Projects = () => {

  const toolQraimo = ["NextJs", "Stripe", "TailwindCSS", "SanityCMS", "RapidAPI", "GROQ"]
  const toolRoadlers = ["ReactJs", "Redux", "TailwindCSS", "JavaScript", "RestAPI"]
  const toolLax = ["ReactNative", "Redux", "NativeWind", "Firebase"]
  const toolUber = ["ReactNative", "Redux", "NativeWind", "Map"]
  const toolHey = ["ReactNative", "Redux", "NativeWind", "SanityCMS", "GROQ", "Map"]
  const toolBreedss = ["ReactJs", "Redux", "NativeWind", "NodeJs", "MongoDB"]
  const toolGym = ["ReactJs", "RapidApi", "YouTubeApi"]

  return (
    <section id="projects" className="pt-[400px] pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Here are some of my recent projects. These projects showcase my skills in software development, including proficiency in programming languages, frameworks, and tools.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-yellow
              max-w-[400px] max-h-[400px] text-2xl text-black font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            // title="qraimo" 
            title="project-1"
            link="https://sanityshop.vercel.app/"
            img="../assets/profile-image.jpg"

            github="https://github.com/Joshuafreemant/sanityshop"
            description="
            This E-Commerce App enables users to shop with ease, powered by Stripe for secure payments and SanityCMS for a customizable and reliable backend."
            tools={toolQraimo}
          />
          <Project
            title="Roadlers"
            link="https://roadlers.com/"
            img="../assets/profile-image.jpg"

            github="https://github.com/Joshuafreemant/Roadler_file"
            description="
           Roadlers offers a complete solution for booking rides, paying, and managing your wallet. It also allows you to register as a driver or service provider, with easy vehicle registration
            "
            tools={toolRoadlers}
          />

          {/* ROW 2 */}
          <Project
            // title="Lax Laundry"
            title="project-4"

            link=""
            img="../assets/profile-image.jpg"

            github=""
            description="Lax laundry app streamlines your laundry tasks by letting you easily schedule pick-ups, track orders, and make payments."
            tools={toolLax}
          />
          <Project
            title="Uber Clone"
            link=""
            img="../assets/profile-image.jpg"

            github=""
            description="
            This Uber clone mobile app offers a seamless ride-sharing experience, complete with real-time tracking, distance Matrix Calculation, etc, all designed to enhance user satisfaction.
            "
            tools={toolUber}

          />
          <Project
            title="Glovo Eat"
            link="http://exp.host/@joshuafreeman/Glovo-clone?release-channel=default"
            img="../assets/profile-image.jpg"

            github=""
            description="
            Hey Eat Mobile App, modeled after Deliveroo, offers an easy-to-use platform for ordering food from your favorite restaurants and having it delivered straight to your doorstep
            "
            tools={toolHey}

          />

          {/* ROW 3 */}
          <Project
            title="Breedss"
            link="https://breedss.onrender.com"
            img="../assets/profile-image.jpg"

            github="https://github.com/Joshuafreemant/breedss-frontend"
            description="
            Breedss is a social media pet sharing website that connects pet owners and enthusiasts worldwide, allowing them to share photos, stories, and advice about their furry friends, creating a vibrant community of pet lovers.
            "
            tools={toolBreedss}
          />
          <Project
            title="Project 7"
            link="https://gymfit.vercel.app/"
            img="../assets/profile-image.jpg"

            github="https://github.com/Joshuafreemant/gymfit"
            description="
            Our fitness app uses RapidAPI to access a wide range of exercise data and the YouTube API to find matching videos, providing users with personalized workout plans and resources.
            "
            tools={toolGym}
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
