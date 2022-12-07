import styled from "styled-components"

export const PageContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1200px) {
    width: 1170px;
  }
  @media (max-width: 992px) {
    width: 970px;
  }
  @media (max-width: 768px) {
    width: 750px;
  }
  @media (max-width: 420px) {
    width: 320px;
    margin-bottom: 40px;
  }
`
export const PageWrapper = styled.div`
  padding-top: 2rem;
  color: #7e7d7d;
`

export const MainTitle = styled.h1`
  color: black;
  margin-top: 2rem;
`

export const Opening = styled.h4``

export const OlTitle = styled.h5`
  color: #222;
  font-weight: 600;
`
