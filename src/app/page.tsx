import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiMysql,
  SiLinux,
  SiCplusplus,
  SiPostgresql,
  SiDrizzle,
  SiTypescript,
} from '@icons-pack/react-simple-icons'

export default function Home() {
  const links: { icon: IconType; href: string; label: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:m.eric.flojo@gmail.com',
      label: 'Gmail',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/mflojo',
      label: 'GitHub',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/matthew-flojo/',
      label: 'LinkedIn',
    },
  ]

  const skills: { icon: IconType; label: string }[] = [
    { icon: SiJavascript, label: 'JavaScript' },
    { icon: SiCplusplus, label: 'C++' },
    { icon: SiReact, label: 'React' },
    { icon: SiNodedotjs, label: 'Node.js' },
    { icon: SiTailwindcss, label: 'Tailwind' },
    // { icon: SiGit, label: 'Git' },
    { icon: SiPostgresql, label: 'PostgreSQL' },
    // { icon: SiLinux, label: 'Linux' },
    { icon: SiDrizzle, label: 'Drizzle' },
    { icon: SiTypescript, label: 'TypeScript' },
  ]

  return (
    <div className="w600:p-[30px] w600:text-lg w400:p-5 w400:text-base p-10 text-xl leading-[1.7]">
      {/* Profile Picture and Name Side by Side */}
      <div className="flex items-center justify-start">
        <img
          src="/profile1.jpg"
          alt="profile picture 1"
          className="w-64 h-64 rounded-full object-cover border-4 border-black shadow-lg !important"
        />
        <div className="ml-6 text-right">
          <h3 className="text-3xl font-bold text-gray-500"> Hello! My name is</h3>
          <h1 className="text-7xl font-bold">Matthew Flojo</h1>
          {/* <p className="text-gray-500">{`I'm a developer based in Surrey, B.C., Canada.`}</p> */}
        </div>
      </div>

      <br />

      <p className="text-gray-500">
        {`I'm a full-stack developer based in Surrey, BC, Canada who loves creating web apps! Check out my latest work in the projects tab. I'm a recent graduate from Langara College and I'm currently working as an AI Data Annotator with DataForce.`}
      </p>

      {/* Links Section */}
      <div className="mt-10 flex flex-col w-1/2">
        <h2 className="text-3xl font-semibold">Links</h2>
        <div className="mr-auto mt-5 flex w-full flex-wrap items-center gap-10">
          {links.map((link, id) => (
            <a target="_blank" key={id} href={link.href} className="text-lg flex-col flex items-center ease-out transition-transform duration-300 hover:scale-125">
              <link.icon title="" className="w-8 h-8" />
              <span className="text-sm mt-2">{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-10 flex flex-col w-full max-w-4xl">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <div className="mt-5 flex flex-wrap gap-10 gap-y-6">
          {skills.map((skill, id) => (
            <div key={id} className="flex flex-col items-center transition-transform ease-out duration-300 hover:scale-125">
              <skill.icon className="w-8 h-8" />
              <span className="text-sm">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
