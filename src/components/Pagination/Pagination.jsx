import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import * as S from './styles.js';

export function Pagination({ prevUrl, nextUrl, setUrl }) {
  return (
    <>
      {nextUrl || prevUrl ? (
        <S.Pagination className="pagination">
          {prevUrl && (
            <button
              type="button"
              onClick={() => {
                setUrl(prevUrl);
              }}
            >
              <ChevronLeftIcon /> Prev
            </button>
          )}
          {nextUrl && (
            <button
              type="button"
              onClick={() => {
                setUrl(nextUrl);
              }}
            >
              Next <ChevronRightIcon />
            </button>
          )}
        </S.Pagination>
      ) : null}
    </>
  );
}
