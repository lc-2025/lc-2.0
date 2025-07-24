import { clientCached } from '../sanity/client';
import CustomError from '@/components/Layout/CustomError';
import { ERROR } from '@/utilities/constants';
import type { TUseFetch } from '@/types/hooks/Fetch';

/**
 * @description Data fetching hook
 * @author Luca Cattide
 * @date 22/07/2025
 * @param {string} query
 * @returns {*}  {Promise<TUseFetch>}
 */
const useFetch = async (query: string): Promise<TUseFetch> => {
  const { FETCH } = ERROR;
  const { TITLE, MESSAGE } = FETCH;
  const data = await clientCached(query);

  return {
    data,
    error:
      !data || data.length === 0 ? (
        <CustomError title={TITLE} message={MESSAGE} />
      ) : null,
  };
};

export default useFetch;
