import styled from 'styled-components'

export const NameInputContainer = styled.div`
  & > label {
    text-align: center;
    display: block;
    margin-bottom: 0.25em;
    color: grey;
  }

  & > input {
    display: block;
    text-align: center;
    font-size: 1.2em;
    padding: 0.5em 0.75em;
    border: 1px solid #ccc;
    box-shadow: #32325d3f 0px 2px 5px -1px, #0000004c 0px 1px 3px -1px;
    outline: none;
    transform: translateY(-2em);

    transition-property: border, color, box-shadow, border-radius;
    transition: 0.1s all ease-in;
    &:focus {
      border-radius: 15px;
      transform: scale(1.05);
      border: 1px solid #F06C9B;
      color: #F06C9B;
      box-shadow: #F06C9B 0px 2px 5px -1px, #F06C9B 0px 1px 3px -1px;
    }

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`

export const MainContainer = styled.div`
  width: 1005; height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > * + * {
    margin-top: 0.75em;
  }

  & > a, button {
    text-decoration: none;
    color: white;
    background-color: #9d9d9d;
    font-size: 1.25em;
    padding: 0.75em 1em;
    transition-property: background-color, border-radius, transform;
    transition: 0.2s all ease-in-out;
    &:hover {
      background-color: #c7215b;
      border-radius: 0px 15px 15px 0px;
      transform: translateX(0.5em);
    }
  }
`