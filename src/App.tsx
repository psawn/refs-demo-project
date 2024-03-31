import { useState } from "react";
import { NewProject } from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { ProjectsSidebar } from "./components/ProjectsSideBar";

export type ProjectData = {
  title: string;
  description: string;
  dueDate: string;
};

type Project = ProjectData & {
  id: number;
};

type ProjectsStateType = {
  selectedProjectId: string | undefined | null;
  project: Array<Project>;
};

function App() {
  const [projectsState, setProjectsState] = useState<ProjectsStateType>({
    // currentAction: '',
    selectedProjectId: undefined,
    project: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
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
        project: [...prevState.project, newProject],
      };
    });
  }

  console.log(projectsState);

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {
    //
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
