import styled from 'styled-components'

export const Title = styled.h1`
  margin: 0;
  font-family: adineuePRO;
  font-weight: 700;
  line-height: 38px;
  font-size: ${(props) => (props.size ? props.size : '42px')};
  letter-spacing: 1.9px;
  color: ${(props) => (props.color ? props.color : 'black')};
  text-transform: ${(props) => (props.transform ? props.transform : '')};
`
