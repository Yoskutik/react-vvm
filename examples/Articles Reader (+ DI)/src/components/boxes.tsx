import { CSSProperties, FC, ReactNode } from 'react';

type FlexBoxProps = {
  style?: CSSProperties;
  cls?: string;
  wrap?: boolean;
  justify?: 'space-between' | 'center' | 'right' | 'space-around',
  align?: 'start' | 'center',
  onFocus?: () => void;
  onBlur?: () => void;
  children: ReactNode;
};

const Box: FC<FlexBoxProps & { type: 'v' | 'h' }> = ({
  children, style, cls = '', wrap, type, justify, onFocus, onBlur, align,
}) => (
  <div
    style={style}
    className={`${cls} flex-box ${type} ${wrap ? 'wrap' : ''} ${justify ? `justify-${justify}` : ''} ${align ? `align-${align}` : ''}`}
    onFocus={onFocus}
    onBlur={onBlur}
  >
    {children}
  </div>
);

export const HBox: FC<FlexBoxProps> = props => <Box type="h" {...props}/>;

export const VBox: FC<FlexBoxProps> = props => <Box type="v" {...props}/>;
