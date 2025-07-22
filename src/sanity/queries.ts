const queryHome = `*[_type == 'page' && name == 'home']{
  metadata,
  articles[]->{ contents, animationSpeed, animationDelay }
}`;

export { queryHome };
