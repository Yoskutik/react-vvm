import { forwardRef, ReactNode, RefObject, useLayoutEffect, useRef } from 'react';
import { Box, keyframes, styled, SxProps, Typography } from '@mui/material';
import { childView } from '@yoskutik/react-vvm';
import { PageWithNavigationViewModel } from './PageWithNavigationViewModel';
import svg from './link.svg';
import { usePageBlockContext } from './PageBlockContext';

type Props = {
  variant: 'h3' | 'h4' | 'h5' | 'h6';
  text?: string;
  children?: ReactNode;
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
  position: relative;

  &.animated {
    animation: ${animation} 0.5s ease-in-out infinite;
  }
  
  img {
    transform: translateY(-50%);
    box-sizing: initial;
    padding-right: 2px;
    position: absolute;
    cursor: pointer;
    left: -18px;
    opacity: 0;
    top: 50%;
  }
  
  &:hover img {
    opacity: 0.6;
  }
`;

export const Title = childView<PageWithNavigationViewModel>()<Props, HTMLDivElement>(
  forwardRef(({ text, variant, sx, viewModel, children }, forwardedRef: RefObject<HTMLDivElement>) => {
    const { title } = usePageBlockContext();
    const hookRef = useRef<HTMLDivElement>();
    const idRef = useRef<string>();
    const ref = forwardedRef || hookRef;

    useLayoutEffect(() => {
      const parentTitles = [];

      let element = title;
      while (element?.ref.current) {
        parentTitles.unshift(element.ref.current.textContent);
        element = element.parent;
      }
      parentTitles.push(ref.current.textContent);

      idRef.current = parentTitles.join('.')
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^a-z-.]/g, '');

      viewModel.addHeader(idRef.current, +variant.slice(-1) - 3, ref.current);

      const observer = new IntersectionObserver(entries => {
        viewModel.toggleHeaderVisibility(idRef.current, entries[0].intersectionRatio > 0);
      }, { rootMargin: '-64px 0px 0px 0px' });

      const el = ref.current;
      observer.observe(el);
      return () => observer.unobserve(el);
    }, []);

    const onLinkClick = () => {
      const hash = location.hash.split('?')[0];
      location.hash = `${hash}?heading=${idRef.current}`;
      viewModel.scrollToHeading(idRef.current);
    };

    return (
      <AnimatedBox sx={{ padding: '4px 8px', ml: -1, ...sx }} ref={ref}>
        <img alt="" src={svg} width={18} height={18} onClick={onLinkClick} />
        <Typography component={variant} variant={variant}>
          {text ?? children}
        </Typography>
      </AnimatedBox>
    );
  }),
);
