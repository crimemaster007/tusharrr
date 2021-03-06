import React from "react";
import Link from "next/link";
import {
  MdiTwitter,
  MdiEmail,
  MdiGithub,
  MdiLinkedin,
} from "../../assets/Socials";
const Footer = () => {
  return (
    <footer className="p-10 flex justify-center items-center">
      <div className="flex flex-col items-center">
        <ul className="flex text-3xl">
          <li className="m-2">
            <a
              className="hover:text-blue-900"
              href="https://twitter.com/_prachand_"
              target="_blank"
              rel="noreferrer"
            >
              <MdiTwitter />
            </a>
          </li>
          <li className="m-2">
            <a
              className="hover:text-blue-900"
              href="https://github.com/crimemaster007"
              target="_blank"
              rel="noreferrer"
            >
              <MdiGithub />
            </a>
          </li>
          <li className="m-2">
            <a
              className="hover:text-blue-900"
              href="https://www.linkedin.com/in/tushar9211/"
              target="_blank"
              rel="noreferrer"
            >
              <MdiLinkedin />
            </a>
          </li>
          <li className="m-2">
            <a
              className="hover:text-blue-900"
              href="mailto:tusharsingh20dec@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <MdiEmail />
            </a>
          </li>
        </ul>
        <div className="text-gray-600 dark:text-gray-400 flex flex-wrap">
          <div>Copyright © 2022 </div>
          <div>
            •{" "}
            <Link href="/">
              <a>Tushar 👨‍💻</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
