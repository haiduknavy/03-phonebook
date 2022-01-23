import styled from "@emotion/styled";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 2px solid #000000;
  border-radius: 10px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  margin-right: 10px;
  text-align: start;
`;

// export const NameInput = styled.span`
//   margin-right: 10px;
// `;

export const AddButton = styled.button`
  padding: 3px;
  width: 150px;
  height: 30px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
`;
