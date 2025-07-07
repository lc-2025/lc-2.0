// Project
type TPorfolio = {
  project: TProject;
};

type TProject = {
  name: string;
  cover: TProjectCover;
  images: Array<string>;
  caseStudy: TProjectCaseStudy;
  technologies: Array<string>;
};

type TProjectCover = {
  light: string;
  dark: string;
}

type TProjectCaseStudy = {
  title: string;
  description: string;
};

export type { TPorfolio };
