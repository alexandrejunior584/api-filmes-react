import styled from "styled-components";

export const Div = styled.div`
  margin: 4rem auto;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 3rem;

  img{
    width: 100%;
    border-radius: 4px;
  }

  span{
    font-weight: bold;
    font-size: 130%;
    text-align: center;
    color: #fff;
  }

  p{
    margin: 2rem 0;
    color: #fff;
  }

  a{
    color: #eee;
    width: 100%;
  }

  button{
    padding: 1em 3em;
    border-radius: 4em;
    cursor: pointer;
    background-color: #6c5ce7;
    color: #fff;
  }

  button:hover{
    opacity: 0.9;
    transition: 0.3s;
  }

  @media(max-width: 800px) {
    display: block;
    margin: 0 auto;

    img{
      width: 100%;
      margin-bottom: 2rem;
    }

    span{
      margin: 2rem 0;
    }
  }
`