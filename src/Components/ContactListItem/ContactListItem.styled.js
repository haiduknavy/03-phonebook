import styled from "@emotion/styled";

export const ListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
  display: flex;
`;
export const DelBtn = styled.button`
  margin-left: 20px;
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 10px;
  :hover,
  :focus {
    background-color: red;
    cursor: pointer;
  }
`;
