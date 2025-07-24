import {articleType} from './documents/articleType'
import {metadataType} from './documents/metadataType'
import {pageType} from './documents/pageType'
import {pictureType} from './documents/pictureType'
import {projectType} from './documents/projectType'
import {listType} from './documents/listType'
import {technologyType} from './documents/technologyType'
import {title} from './objects/title'
import {icon} from './objects/icon'
import {seo} from './objects/seo'

export const schemaTypes = [
  metadataType,
  pageType,
  pictureType,
  articleType,
  listType,
  projectType,
  technologyType,
  title,
  icon,
  seo,
]
