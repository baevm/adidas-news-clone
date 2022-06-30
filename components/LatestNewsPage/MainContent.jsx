import { Grid } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { VscClose } from 'react-icons/vsc'
import styled from 'styled-components'
import { Container } from '../Layout/Container'
import { Title } from '../Layout/Title'
import MenuAccordion from './MenuAccordion'
import { useStateWithDep } from '../../hooks/useStateWithDeps'
import { getLatestNewsPage } from '../../lib/graphcms'

const Container25 = styled.div`
  margin-top: 3rem;

  @media (min-width: 992px) {
    display: block !important;
  }

  @media (min-width: 320px) {
    flex: 0 0 100%;
    width: 100%;
    max-width: 100%;
  }

  @media (min-width: 768px) {
    flex: 0 0 25%;
    max-width: 25%;
  }

  @media (min-width: 992px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`

const Container75 = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    flex: 0 0 75%;
    max-width: 75%;
  }
`

const FilterWrapper = styled.div`
  border: 1px solid #ededed;
  margin-right: 2rem;
  padding: ${(props) => (props.p ? props.p : '')};
  display: ${(props) => (props.display ? props.display : '')};
  justify-content: ${(props) => (props.justify ? props.justify : '')};
  align-items: ${(props) => (props.align ? props.align : '')};
`

const Text = styled.h4`
  margin: 0;
  text-transform: uppercase;
  font-family: adineuePRO;
  letter-spacing: 1.5px;
  font-size: ${(props) => (props.size ? props.size : '18px')};
  line-height: 1.5;
`

const TagWrapper = styled.div`
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.7px;
  border: 1px solid #ededed;
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  align-items: center;
`

const ClearButton = styled.button`
  border: 0;
  background-color: white;
  font-size: 12px;
  text-decoration: underline;
  letter-spacing: 1px;
  cursor: pointer;
`

const DateText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: #c2c0c0;
  letter-spacing: 0.5px;
`

const CustomLink = styled.a`
  color: black;
  font-size: ${(props) => (props.size ? props.size : '18px')};
  text-transform: ${(props) => (props.transform ? props.transform : '')};
  letter-spacing: ${(props) => (props.spacing ? props.spacing : '')};
  text-decoration: ${(props) => (props.decoration ? props.decoration : 'none')};
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`

const PaginationBox = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CustomSelect = styled.select`
  margin: 0 0.5rem;
  padding: 1rem;
  color: black;
  border: 1px solid lightgray;
  font-weight: bold;

  option {
    padding: 1rem;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    font-size: 16px;
  }
`

const CustomOption = styled.option`
  padding: 1rem;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  font-size: 16px;
`

const MainContent = ({ newsPages, pagesCount }) => {
  const [pages, setPages] = useStateWithDep(newsPages)
  const pagesLength = Math.ceil(pagesCount.count / 12)

  const handleNext = async (e) => {
    const data = await getLatestNewsPage(Number(e.target.value))
    setPages(data.newsPages)
  }

  const renderPagesCount = () => {
    const items = []

    for (let i = 0; i < pagesLength; i += 1) {
      items.push(
        <CustomOption key={i} value={i * 12} onChange={(e) => handleNext(e.currentTarget.value)}>
          {i + 1}
        </CustomOption>
      )
    }

    return <CustomSelect onChange={handleNext}>{items}</CustomSelect>
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pages])

  return (
    <>
      <Container direction='column' align='flex-start'>
        <Title transform='uppercase'>news</Title>
      </Container>

      <Container align='flex-start' direction='column' mb='5rem'>
        <Container25>
          <FilterWrapper p='1rem'>
            <Text>Refine</Text>
          </FilterWrapper>

          <FilterWrapper display='flex' justify='space-between' align='center' p='1rem'>
            <TagWrapper>
              <VscClose fontSize='24px' />

              <span>yeezy</span>
            </TagWrapper>
            <ClearButton>Clear All</ClearButton>
          </FilterWrapper>

          <FilterWrapper>
            <MenuAccordion />
          </FilterWrapper>
        </Container25>

        <Container75>
          <Grid justify='start'>
            {pages.map((item) => (
              <Grid.Col span={12} key={item.id} xs={6} sm={6} md={6} lg={4} xl={4}>
                <Link href={`/yeezy/${item.slug}`} passHref>
                  <a>
                    <Image src={item.mainPhoto.url} width={300} height={200} objectFit='cover' style={{ cursor: 'pointer' }} quality={90} layout='responsive' />
                  </a>
                </Link>
                <DateText>{item.date}</DateText>
                <Link href={`/yeezy/${item.slug}`} passHref>
                  <CustomLink>{item.title}</CustomLink>
                </Link>
              </Grid.Col>
            ))}
          </Grid>
          <PaginationBox>
            <div></div>
            <div>
              Page
              {renderPagesCount()}
              of {pagesLength}
            </div>
            <Link href='/' passHref>
              <CustomLink size='12px' transform='uppercase' spacing='1px' decoration='underline'>
                Next
              </CustomLink>
            </Link>
          </PaginationBox>
        </Container75>
      </Container>
    </>
  )
}

export default MainContent
