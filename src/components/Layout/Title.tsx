import { TTitle } from '@/types/components/Title';

/**
 * @description Title component
 * SEO-friendly
 * @author Luca Cattide
 * @date 04/07/2025
 * @returns {*}  {React.ReactNode}
 */
const Title = ({ keyword, content }: TTitle): React.ReactNode => {
  return (
    // Title Start
    <h1 className="title hidden">
      <mark>
        <strong>{keyword}</strong>
      </mark>{' '}
      {content}
    </h1>
    // Title End
  );
};

export default Title;
