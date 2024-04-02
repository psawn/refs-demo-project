import { useState } from "react";
import { NewProject } from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { ProjectsSidebar } from "./components/ProjectsSideBar";
import { SelectedProject } from "./components/SelectedProject";

export type ProjectData = {
  title: string;
  description: string;
  dueDate: string;
};

export type Project = ProjectData & {
  id: number;
};

type ProjectsStateType = {
  selectedProjectId: number | undefined | null;
  project: Array<Project>;
};

function App() {
  const [projectsState, setProjectsState] = useState<ProjectsStateType>({
    // currentAction: '',
    selectedProjectId: undefined,
    project: [],
  });

  const selectedProject = projectsState.project.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = selectedProject ? (
    <SelectedProject project={selectedProject} />
  ) : null;

  function handleStartAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handleSelectProject(id: number) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  }

  function handleAddProject(projectData: ProjectData) {
    setProjectsState((prevState) => {
      const newProject: Project = {
        ...projectData,
        id: prevState.project.length + 1, // Math.random()
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        project: [...prevState.project, newProject],
      };
    });
  }

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {
    //
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        projects={projectsState.project}
      />
      {content}
    </main>
  );
}

export default App;
