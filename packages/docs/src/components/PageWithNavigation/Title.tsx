import { FC, ReactNode, useLayoutEffect, useRef } from 'react';
import { Box, keyframes, styled, SxProps, Typography } from '@mui/material';
import { childView } from '@yoskutik/react-vvm';
import { PageWithNavigationViewModel } from './PageWithNavigationViewModel';

type TitleProps = {
  variant: 'h3' | 'h4' | 'h5' | 'h6';
  text?: string;
  children?: ReactNode;
  id: string;
  sx?: SxProps;
};

const animation = keyframes`
  0% { background-color: rgba(240, 247, 255, 0); }
  30% { background-color: rgba(240, 247, 255, 1); }
  70% { background-color: rgba(240, 247, 255, 1); }
  100% { background-color: rgba(240, 247, 255, 0); }
`;

const AnimatedBox = styled(Box)`
  border-radius: 0.4rem;

  &.animated {
    animation: ${animation} 0.5s ease-in-out infinite;
  }
`;

export const Title: FC<TitleProps> = childView<PageWithNavigationViewModel>()(({
  text, variant, id, sx, viewModel, children,
}) => {
  const ref = useRef<HTMLDivElement>();

  useLayoutEffect(() => {
    viewModel.addHeader(id, ref.current);

    const observer = new IntersectionObserver(entries => {
      viewModel.toggleHeaderVisibility(id, entries[0].intersectionRatio > 0);
    }, { rootMargin: '-64px 0px 0px 0px' });

    const el = ref.current;
    observer.observe(el);
    return () => observer.unobserve(el);
  }, [id, viewModel]);

  return (
    <Box sx={{ pt: 1, ...sx }}>
      <AnimatedBox sx={{ padding: '4px 8px', ml: -1 }} ref={ref}>
        <Typography component={variant} variant={variant}>
          {text ?? children}
        </Typography>
      </AnimatedBox>
    </Box>
  );
});
