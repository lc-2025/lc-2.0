import { clientCached } from './client';
import CustomError from '@/components/Layout/CustomError';
import { ERROR } from '@/utilities/constants';
import type { SanityDocument } from 'next-sanity';

// Services
/**
 * @description Data fetching service
 * @author Luca Cattide
 * @date 22/07/2025
 * @param {string} query
 * @returns {*}  {(Promise<React.ReactNode | SanityDocument[]>)}
 */
const fetchData = async (
  query: string,
): Promise<React.ReactNode | SanityDocument[]> => {
  const { FETCH } = ERROR;
  const { TITLE, MESSAGE } = FETCH;
  const data = await clientCached(query);

  return !data || data.length === 0 ? (
    <CustomError title={TITLE} message={MESSAGE} />
  ) : (
    data
  );
};

export { fetchData };
