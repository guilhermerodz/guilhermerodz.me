import styled from 'styled-components';

export default styled.span.attrs(props => ({
  className: 'small',
  role: 'img',
  'aria-label': props.label || 'Emoji qualquer',
}))`
  margin-left: ${props => (props.heading ? '0.5rem' : 0)};
`;
