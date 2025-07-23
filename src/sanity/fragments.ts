// Query Fragments
const fragmentQueryPage = `*[_type == 'page' && name ==`;
const fragmentProjectionPagePrefix = `headline, tagline`;
const fragmentProjectionPage = `${fragmentProjectionPagePrefix},
  pictures->{ imageLight, imageDark, alt },
  articles[]->{ _id, contents, animationSpeed, animationDelay }`;
const fragmentProjectionPageStructural = `{
  ${fragmentProjectionPagePrefix}, lastUpdate,
  articles[]->{ _id, contents, animationSpeed, animationDelay }
}`;

export {
  fragmentQueryPage,
  fragmentProjectionPagePrefix,
  fragmentProjectionPage,
  fragmentProjectionPageStructural,
};
