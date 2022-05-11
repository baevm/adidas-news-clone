import styled from 'styled-components'
export const Container45 = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  flex-wrap: ${(props) => (props.wrap ? props.wrap : '')};
 

  @media (min-width: 992px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`
