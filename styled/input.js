import Styled from 'styled-components';
import { space, width } from 'styled-system';

const Input = Styled.input`
  ${space};
  ${width};
  border-radius: 3px;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  padding-left: 10px;
  display: inline-block;
  border: 1px solid gray;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  overflow: visible;
  height: calc(1.8125rem + 2px);
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.25rem;
`;

Input.defaultProps = {
  px: 1,
  py: 2,
  width: 1,
};

export default Input;
