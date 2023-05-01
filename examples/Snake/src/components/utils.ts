export const getSize = () => (
  +(new URLSearchParams(location.search).get('size') || '50')
);
