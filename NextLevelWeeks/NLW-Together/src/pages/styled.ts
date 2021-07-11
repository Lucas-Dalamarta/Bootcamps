import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 7;

    background: #835AFD;
    color: #FFF;

    display: flex; 
    flex-direction: column;
    justify-content: center;

    padding: 120px 80px;

    img {
      max-width: 320px;
    }

    strong {
      font: 700 36px 'Poppins', sans-serif;
      line-height: 42px;
      margin-top: 16px;
    }

    p {
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
      color: #f8f8f8;
    }
  }
  
  main {
    flex: 8;

    padding: 0 32px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  > img { 
    align-self: center;
  }

  h2 {
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    margin: 64px 0 24px 0;
  }

  form {
    input {
      height: 50px;
      border-radius: 8px;
      padding: 0 16px;
      background: #FFF;
      border: 1px solid #a8a8b3;
    }

    button {
      margin-top: 16px;
    }

    button, input {
      width: 100%;
    }
  }

  p {
    font-size: 14px;
    color: #737380;
    margin-top: 16px;

    a {
      color: #e559f9;
    }
  }
`

export const CreateRoom = styled.button`
  margin-top: 64px;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: #ea4335;
  color: #FFF;

  display: flex;
  justify-content: center; 
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter .2s ease;

  img {
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(0.9);
  }
`

export const Separator = styled.div`
  font-size: 14px;
  color: #a8a8b3;

  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-right: 16px;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-left: 16px;
  }  
`

export const PageRoom = styled.div`
  header {
    padding: 24px;
    border-bottom: 1px solid #e2e2e2;
  }

  .content {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      max-height: 45px;
    }

    > div {
      display: flex;
      gap: 16px;

      button {
        height: 40px;
      }

    }
  }

  main {
    max-width: 800px;
    margin: 0 auto;

    .room-title {
      margin: 32px 0 24px;
      display: flex;
      align-items: center;

      h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        color: #29292E;
      }
      
      span {
        margin-left: 16px;
        background: #E559F9;
        border-radius: 9999px;
        padding: 8px 16px;
        color: #FFF;
        font-weight: 500;
        font-size: 14px;
      }
    }

    form {
      textarea {
        width: 100%;
        border: 0;
        padding: 16px;
        border-radius: 8px;
        background: #FEFEFE;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        resize: vertical;
        min-height: 130px;
      }

      .form-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;


        .user-info {
          display: flex;
          align-items: center;

          img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }

          span {
            margin-left: 8px;
            color: #29292E;
            font-weight: 500;
            font-size: 14px;
          }
        }

        > span {
          font-size: 14px;
          color: 737380;
          font-weight: 500;

          button {
            background: transparent;
            border: 0;
            color: #835AFD;
            text-decoration: underline;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
          }
        }
      }
    }

    .question-list {
      margin-top: 32px;
    }

    .loading-questions {
      margin-top: 32px;
    }
  }
`