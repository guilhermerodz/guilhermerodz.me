import { useMediaQuery } from 'react-responsive';

import { Media } from '~/styles/constants';

export default function useResponsive() {
  const lessThanExtraSmall = useMediaQuery({
    query: `(max-width: ${Media.xs}px)`,
  });
  const greaterThanExtraSmall = useMediaQuery({
    query: `(min-width: ${Media.xs + 1}px)`,
  });
  const lessThanSmall = useMediaQuery({
    query: `(max-width: ${Media.sm}px)`,
  });
  const greaterThanSmall = useMediaQuery({
    query: `(min-width: ${Media.sm + 1}px)`,
  });
  const lessThanMedium = useMediaQuery({
    query: `(max-width: ${Media.md}px)`,
  });
  const greaterThanMedium = useMediaQuery({
    query: `(min-width: ${Media.md + 1}px)`,
  });
  const lessThanLarge = useMediaQuery({
    query: `(max-width: ${Media.lg}px)`,
  });
  const greaterThanLarge = useMediaQuery({
    query: `(min-width: ${Media.lg + 1}px)`,
  });

  return {
    lessThanExtraSmall,
    greaterThanExtraSmall,
    lessThanSmall,
    greaterThanSmall,
    lessThanMedium,
    greaterThanMedium,
    lessThanLarge,
    greaterThanLarge,
  };
}
