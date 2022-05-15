import styled from 'styled-components'

export const Container55 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};

  @media (min-width: 992px) {
    flex: 0 0 55%;
    max-width: 55%;
  }
`
