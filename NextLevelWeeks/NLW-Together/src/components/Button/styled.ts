import styled from 'styled-components'

type ButtonProps = {
  isOutlined?: boolean
}

export const Button = styled.button<ButtonProps>`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  padding: 0 32px;
  
  background: ${props => props.isOutlined ? '#FFF' : '#835AFD' };
  border: ${props => props.isOutlined ? '1px solid #835AFD' : '0' };
  color: ${props => props.isOutlined ? '#835AFD' : '#FFF' };

  display: flex;
  justify-content: center; 
  align-items: center;

  cursor: pointer;

  transition: filter .2s ease;

  img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }


`