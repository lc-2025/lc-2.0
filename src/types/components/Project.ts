// Project
type TPorfolio = {
  project: TProject;
};

type TProject = {
  name: string;
  cover: string;
  images: Array<string>;
  caseStudy: TProjectCaseStudy;
  technologies: Array<string>;
};

type TProjectCaseStudy = {
  title: string;
  description: string;
};

export type { TPorfolio };
