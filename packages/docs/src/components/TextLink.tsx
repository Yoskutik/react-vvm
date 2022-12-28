import { FC } from 'react';
import { Link } from '@mui/material';

type Props = {
  id?: string;
  href?: string;
  text?: string;
};

export const TextLink: FC<Props> = ({ text = 'Example', href, id }) => (
  <>
    {' '}
    <Link
      href={href ?? `#/examples?heading=${id}`}
      {...(href?.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
    >
      {text}
    </Link>
  </>
);
