import styled from 'styled-components'
export const Wrapper = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;


  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1280px;
  }
`

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Container
