import {
  fragmentQueryPage,
  fragmentProjectionPagePrefix,
  fragmentProjectionPage,
  fragmentProjectionPageStructural,
} from './fragments';
import { ROUTE, LINKS_STRUCTURAL } from '@/utilities/constants';

const { HOME, ABOUT, PORTFOLIO, CONTACTS } = ROUTE;
const { PRIVACY, COOKIES } = LINKS_STRUCTURAL;
// Queries
const queryHome = `${fragmentQueryPage} '${HOME.LABEL}']{
  metadata,
  articles[]->{ contents, animationDelay }
}`;
const queryIntro = `${fragmentQueryPage} '${HOME.SUB.INTRO.LABEL}']{
  ${fragmentProjectionPage},
  lists[]-> { contents, animationDelay }
}`;
const queryAbout = `${fragmentQueryPage} '${ABOUT.LABEL}']{
  ${fragmentProjectionPage}
}`;
const queryPortfolio = `${fragmentQueryPage} '${PORTFOLIO.LABEL}']{
  ${fragmentProjectionPagePrefix},
  projects[]->{ _id, name, cover, images, caseStudy,
    technologies[]-> { name }
  }
}`;
const queryContacts = `${fragmentQueryPage} '${CONTACTS.LABEL}']{
  ${fragmentProjectionPagePrefix},
  pictures->{ imageLight, imageDark, alt },
  articles[]->{ _id, contents, animationSpeed, animationDelay }
}`;
const queryPrivacy = `${fragmentQueryPage} '${PRIVACY.LABEL}']${fragmentProjectionPageStructural}`;
const queryCookies = `${fragmentQueryPage} '${COOKIES.LABEL}']${fragmentProjectionPageStructural}`;

export {
  queryHome,
  queryIntro,
  queryAbout,
  queryPortfolio,
  queryContacts,
  queryPrivacy,
  queryCookies,
};
