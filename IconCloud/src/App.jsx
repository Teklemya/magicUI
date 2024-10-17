import './App.css'
import { Button } from './components/ui/button'
import HyperText from './components/ui/hyper-text'
import IconCloud from './components/ui/icon-cloud'

function App() {
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
    "postman",
    "redis",
    "postgresql",
    "mysql",
    "mariadb",
    "vercel",
    "MongoDB",
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-red-500">
        Hello world!
      </h1>
      <div className='mt-10 px-20'>
        <Button>ShadCn</Button>
      </div>
      <HyperText
      className="text-4xl font-bold text-black dark:text-white"
      text="Isaac"
    />

    <IconCloud iconSlugs={slugs}/>

      
    </div>
  )
}

export default App
