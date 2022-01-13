import styled, { css } from 'styled-components';

export const MessageStyles = styled.div`
  border: 1px solid #ffffff2d;
  border-radius: 4px;
  padding: 18px;
  box-sizing: border-box;
  margin: 5px 0;
`;

type ContextMenuProps = {
  top: number;
  left: number;
};

export const ContextMenu = styled.div<ContextMenuProps>`
  border-radius: 4px;
  box-sizing: border-box;
  position: absolute;
  width: 200px;
  background-color: #383838;
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.1);
  ${({ top, left }) => css`
    top: ${top}px;
    left: ${left}px;
  `}
  ul {
    list-style-type: none;
    box-sizing: border-box;
    margin: 0;
    padding: 10px;
  }
  ul li {
    padding: 18px 12px;
    border-radius: 4px;
  }

  ul li:hover {
    cursor: pointer;
    background-color: #4b4b4b;
  }
`;
