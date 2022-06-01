import Head from "next/head";
import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Head>
        <title>Tushar Kumar Singh | About</title>
        <meta name="description" content="Tushar Kumar Singh" />
        <link rel="icon" href="/favicon_tushar.ico" />
      </Head>

      <main className="lg:mx-56 mx-8 flex flex-col h-screen justify-between">
        <div>
          <Navbar />
          <div className="text-gray-600 dark:text-gray-400">
            <div className="mt-2 border-b-2">
              <h1 className="text-6xl font-bold pb-6 text-gray-900 dark:text-gray-200">
                About 🙋‍♂️
              </h1>
            </div>
            <div className="flex md:flex-row flex-col py-10 justify-around items-start">
              <div className="w-full border-2 p-4 shadow-md rounded-md border-50">
                <Image
                  src="/dp-bg-1.png"
                  height="300"
                  width="300"
                  alt="about-dp"
                />
                <h2>
                  <span className="text-lg font-bold text-gray-900 dark:text-gray-200">
                    Tushar Kumar Singh
                  </span>
                </h2>
                <h2>
                  <span className="text-md text-gray-900 dark:text-gray-200">
                    Competitive Programmer | Frontend developer
                  </span>
                </h2>
                <h2>
                  <span className="text-md text-gray-900 dark:text-gray-200">
                   Noida, India
                  </span>
                </h2>
                <h2>
                  <span className="text-md text-gray-900 dark:text-gray-200">
                    tusharsingh20dec@gmail.com
                  </span>
                </h2>
              </div>
              <div className="md:pl-16 md:pt-0 pl-0 pt-8 pr-4 md:pr-16">
                <h2 className="text-3xl font-bold pb-4 text-gray-900 dark:text-gray-200">
                  {" "}
                  Hi 👋 I&apos;m Tushar Kumar Singh
                </h2>
                <p className="text-lg pb-4">
                  I am a passionate engineer; here with an aim to create
                  positive impact - with the power of code. Programming in
                  simple terms actually boils down to one purpose - `Problem
                  Solving`. Thus, I don&apos;t prefer confining myself to a
                  particular language or framework; and instead being extremely
                  dynamic to learn and build whatever problem demands. 💻 I love to explore new tech and build cool stuff with it. 📰 Reading & writing tech blogs whenever I find a not so common solution to a problem that I personally faced.
                </p>
                <p className="text-lg pb-4">
                  I am currently a 3rd Year Undergrad at Shri Mata Vaishno Devi University Katra pursuing a Bachelor of Technology majoring in Computer Science and Engineering. Have been Mentored & Oriented 100+ juniors about introduction to C++, STL, DSA and CP Concepts.
                </p>
                <p className="text-lg pb-4">
                  Presently, I am aligned to Web Technologies and Tooling and
                  play with Frontend everyday. I have learned various Computer Science fundamentals and practical interpersonal skills like teamwork, networking, and leadership. I am a passionate Competitive Programmer and am highly interested in Algorithmic Problem Solving with a firm grasp in Data Structures and Algorithms. .
                </p>
                <p className="text-lg pb-4">
                  Apart from Computer Science I love to play Badminton, ✍️ write and recite poetries and a threatre artist. i am also elected as a HAC member of Basohli Boys Hostel among 500+ students and organise and cordinate various cultural events under this such as Navratre, Janmashtami, Dj night (Titiksha-the annual techical fest of SMVDU Katra).
                </p>
                <p className="text-lg pb-4">
                  Feel free to check out my{" "}
                  <a className="underline"
                    href="https://drive.google.com/file/d/1dZIrfGMt4XVrQ2dPqmIenHlcefga-AYi/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>{" "}
                  and{" "}
                  <Link href="/projects">
                    <a className="underline">Projects</a>
                  </Link>{" "}
                  .
                </p>
                <p className="text-lg pb-4">
                  Want to dicuss 💬 about Competitive programming, Tech & Data structures & algorithms? You can always
                  reach out to me on:
                </p>
                <ul className="text-xl pb-4">
                  <li className="my-2">
                    Mail:{" "}
                    <a
                      href="mailto:tusharsingh20dec@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      tusharsingh20dec@gmail.com
                    </a>
                  </li>
                  <li className="my-2">
                    Github:{" "}
                    <a
                      href="https://github.com/crimemaster007"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      @crimemaster007
                    </a>
                  </li>
                  <li className="my-2">
                    Twitter:{" "}
                    <a
                      href="https://twitter.com/_prachand_"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      @_prachand_
                    </a>
                  </li>

                  <li className="my-2">
                    Linkedin:{" "}
                    <a
                      href="https://www.linkedin.com/in/tushar9211/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      in/in/tushar9211
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
