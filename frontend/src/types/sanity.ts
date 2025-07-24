// Sanity
type TID = {
  _id: string;
};
type TMetadata = {
  title: string;
  description: string;
};
type TPicture = {
  imageLight: string;
  imageDark: string;
  alt: string;
};
type TArticle = TID & {
  contents: Array<string>;
  animationSpeed: number;
  animationDelay: number;
};
type TTechnology = {
  name: string;
};
type TProject = TID &
  TTechnology & {
    cover: string;
    images: Array<string>;
    caseStudy: TMetadata;
    technologies: Array<TTechnology>;
  };
type TPage = {
  headline: string;
  tagline: string;
  pictures: TPicture;
  articles: Array<TArticle>;
  lastUpdate?: string;
  metadata?: TMetadata;
  lists?: Array<TArticle>;
  projects?: Array<TProject>;
};

export type { TPage };
