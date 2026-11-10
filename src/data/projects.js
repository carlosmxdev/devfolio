import portfolioB from "../assets/images/projects/portfolio-b.webp";
import portfolioW from "../assets/images/projects/porfolio-w.webp";

import HtmlIcon from "../components/icons/HtmlIcon";
import TailwindIcon from "../components/icons/TailwindIcon";
import ReactIcon from "../components/icons/ReactIcon";

export const projects = [
  {
    id: 1,
    title: "Portfolio Personal",
    description: "Descripción del proyecto 1",
    category: "Frontend",
    technologies: [
      { Icon: TailwindIcon, technology: "Tailwind CSS" },
      { Icon: ReactIcon, technology: "React" },
      { Icon: HtmlIcon, technology: "HTML5" },
    ],
    images: [portfolioB, portfolioW],
    link: "https://devfolio-7cfsxut5v-carlosmxdev.vercel.app/",
  },
];
