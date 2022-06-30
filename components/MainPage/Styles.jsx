import styled from 'styled-components'

export const CustomLink = styled.a`
  text-decoration: ${(props) => (props.decoration ? props.decoration : 'none')};
  color: ${(props) => (props.color ? props.color : 'white')};
  font-size: ${(props) => (props.size ? props.size : '')};
  letter-spacing: ${(props) => (props.spacing ? props.spacing : '')};
  font-weight: ${(props) => (props.weight ? props.weight : '')};
  text-transform: uppercase;
  cursor: pointer;
  height: 400px
  line-height: 2.5rem;
`

export const CardsTitle = styled.h3`
  text-transform: uppercase;
  font-size: 2.5rem;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`
