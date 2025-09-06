import React from 'react'
import MainPageLayout from './components/MainPageLayout'
import ProjectCard from './components/ProjectCard'
import { projects } from './data/projects'

const App = () => {
  return (
    <MainPageLayout>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            cover={project.cover}
            tech={project.tech}
            link={project.github}
          />
        ))}
      </div>
    </MainPageLayout>
  )
}

export default App