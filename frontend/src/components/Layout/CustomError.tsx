import { TError } from '@/types/components/Error';

/**
 * @description Error component
 * @author Luca Cattide
 * @date 22/07/2025
 * @param {TError} { title, message }
 * @returns {*}  {React.ReactNode}
 */
const CustomError = ({ title, message }: TError): React.ReactNode => {
  return (
    // Error Start
    <section className="error bg-primary flex-1">
      <h6 className="error__title hidden">Error</h6>
      <article className="error__body">
        <h1 className="body__title">{title}</h1>
        <p className="body__message">{message}</p>
      </article>
    </section>
    // Error End
  );
};

export default CustomError;
