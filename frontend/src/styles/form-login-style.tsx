import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: left;
  width: 100%;
  background-color: #f4f4f4;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  
  &:focus {
    border-color: #ff712f;
    outline: none;
  }

  &::placeholder {
    color: #888;
  }
`;

export const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #f4f4f4;
`;

export const Icon = styled.i`
  margin: 0 0 10px -30px;
  cursor: pointer;
  font-size: 18px;
  color: #888;
  background-color: #f4f4f4;

  &:hover {
    color: #ff712f;
  }
`;

export const SubmitButton = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  color: white;
  background-color: #ff712f;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #ff712f;
  }
`;