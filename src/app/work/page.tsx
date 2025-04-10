import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function Page() {
  const PROJECTS = [
    {
      name: 'MooTube (YouTube Clone)',
      description: 'Fully functional, mobile friendly YouTube clone. Upload a video and try out the AI-generated tools for titles, descriptions, and thumbnails! Stack: Next, React, TypeScript, Tailwind, Postgres, OpenAI, Upstash Redis, Drizzle, tRPC.',
      liveLink: 'https://moo-tube.vercel.app',
      previewImage: '/project5.jpg',
      repoUrl: 'https://github.com/mflojo/moo-tube',
    },
    {
      name: 'Pom Pilot (To-Do List)',
      description: 'A web-based to-do list in the shape of a palm pilot. Built with JavaScript and packaged with Node.js webpack.',
      liveLink: 'https://mflojo.github.io/pom-pilot/',
      previewImage: '/project1.png',
      repoUrl: 'https://github.com/mflojo/pom-pilot',
    },
    {
      name: 'Tic Tac Toe',
      description: '2-player browser game of tic-tac-tie, connect 3 to win! Built with JavaScript.',
      liveLink: 'https://mflojo.github.io/tic-tac-toe/',
      previewImage: '/project2.png',
      repoUrl: 'https://github.com/mflojo/tic-tac-toe',
    },
    {
      name: 'Calculator',
      description: 'Web calculator to do basic functions, can even use decimals! Built with JavaScript',
      liveLink: 'https://mflojo.github.io/calculator/',
      previewImage: '/project3.png',
      repoUrl: 'https://github.com/mflojo/calculator',
    },
    {
      name: 'Admin Dashboard',
      description: 'Template for a dashboard UI.',
      liveLink: 'https://mflojo.github.io/admin-dashboard/',
      previewImage: '/project4.png',
      repoUrl: 'https://github.com/mflojo/admin-dashboard',
    },
  ]

  return (
    <>
      {PROJECTS.map((project, id) => {
        return (
          <div
            className="dark:bg-darkBg text-text dark:text-darkText border-b-4 border-r-4 border-b-black border-r-black bg-bg p-8 py-10 w600:px-[30px] w400:px-5"
            key={id}
          >
            <div className="mx-auto w-3/4 w800:w-full">
              <AspectRatio
                className="!-bottom-[2px] rounded-base border-2 border-black shadow-base"
                ratio={2 / 1}
              >
                <img
                  className="w-full rounded-base"
                  src={`${project.previewImage}`}
                  alt={project.name}
                />
              </AspectRatio>

              <div className="mt-6">
                <h2 className="text-3xl font-bold w700:text-2xl w450:text-xl">
                  {project.name}
                </h2>

                <p className="mt-5 text-lg w450:text-base text-gray-500">
                  {project.description}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-5 text-base w400:text-sm">
                  <a
                    className="border-border dark:border-darkBorder text-text shadow-light dark:shadow-dark cursor-pointer rounded-base border-2 bg-main px-4 py-2 text-center uppercase transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none"
                    href={project.liveLink}
                    target="_blank"
                  >
                    Live Demo
                  </a>
                  <a
                    className="border-border dark:border-darkBorder text-text shadow-light dark:shadow-dark cursor-pointer rounded-base border-2 bg-main px-4 py-2 text-center uppercase transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none"
                    href={project.repoUrl}
                    target="_blank"
                  >
                    Github Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
