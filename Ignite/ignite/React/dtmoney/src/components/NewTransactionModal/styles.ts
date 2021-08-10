import { darken, transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #D7D7D7;
    background: var(--input-background);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }

    &:last-child {
      margin-top: 10rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    
    background: var(--green);
    color: #FFF;
    
    border-radius: 0.25rem;
    border: 0;

    font-size: 1rem;
    font-weight: 600;
    
    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;  
`

type TransactionTypeButtonProps = { 
  isActive: boolean 
  activeColor: 'green' | 'red'
}

const transactionTypeButtonColors = {
  green: '#33CC95',
  red: '#E52E4D'
}

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;

  font-size: 1rem;
  font-weight: 400;
  
  border-radius: 0.25rem;
  
  background: ${({ isActive, activeColor }) => isActive 
    ? transparentize(0.9, transactionTypeButtonColors[activeColor]) 
    : 'transparent'
  };

  border: 1px solid ${({ isActive, activeColor }) => isActive 
    ? transparentize(0.4, transactionTypeButtonColors[activeColor]) 
    : 'transparent'
  };

  transition: border-color 0.2s;

  &:hover {
    border-color: ${({ isActive, activeColor }) => darken(0.1, isActive 
      ? transactionTypeButtonColors[activeColor] 
      : '#D7D7D7'
    )};
  }

  img {
    width: 24px;
    height: 24px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`