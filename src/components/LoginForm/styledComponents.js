import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
const FromContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 350px;
`
const LoginLogo = styled.img`
  width: 180px;
  align-self: center;
  margin-bottom: 15px;
`

const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`

const LoginButton = styled.button`
  width: 100%;
  background-color: #4f46e5;
  border: none;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 15px;
  height: 30px;
  color: #ffffff;
  margin-top: 20px;
`

const SubmitError = styled.p`
  font-family: 'Roboto';
  color: #ff0b37;
  font-size: 12px;
`

const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  color: #475569;
  font-weight: 500;
`

const UserInput = styled.input`
  font-family: 'Roboto';
  font-size: 15px;
  color: #475569;
  font-weight: 500;
  padding: 8px;
  outline: none;
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  margin-top: 5px;
`

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 12px;
  align-items: center;
`

const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`

const ShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: #1e293b;
`