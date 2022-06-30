import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  position: ${(props) => (props.position ? props.position : '')};
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  align-items: ${(props) => (props.align ? props.align : 'center')};
  margin-top: ${(props) => (props.mt ? props.mt : '')};
  margin-bottom: ${(props) => (props.mb ? props.mb : '')};

  // xs
  @media (min-width: 576px) {
    max-width: 540px;
  }

  // sm
  @media (min-width: 768px) {
    max-width: 720px;
    flex-direction: row;
    //align-items: center;
    padding-right: 10px;
    padding-left: 10px;
  }

  // md
  @media (min-width: 992px) {
    max-width: 960px;
    padding-right: 10px;
    padding-left: 10px;
  }

  // lg
  @media (min-width: 1200px) {
    max-width: 1280px;
    padding-right: 10px;
    padding-left: 10px;
  }
`
