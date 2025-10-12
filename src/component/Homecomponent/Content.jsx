import { lazy, Suspense } from "react";
const Skill = lazy(() => import("./Skill.jsx"));
const Summarysection = lazy(() => import("./Summarysection.jsx"));
const Strengthcard = lazy(() => import("./Strengthcard.jsx"));
const FunctionaAreasCard = lazy(() =>
  import("./FunctionalAreasCard.jsx")
);
const ProjectsCard = lazy(() => import("./ProjectsCard.jsx"));

const Content = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="py-10 flex flex-col items-center justify-center">
            <div className="w-10 h-10 border-4 border-violet-400 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-violet-300 font-medium animate-pulse">
              Loading Skills...
            </p>
          </div>
        }
      >
        <Summarysection />
        <Skill />
        <div className="flex flex-col sm:justify-evenly sm:flex-row my-5">
          <Strengthcard />
          <FunctionaAreasCard />
          <ProjectsCard />
        </div>
      </Suspense>
    </div>
  );
};

export default Content;
