import styled from 'styled-components'

export const VideoDetailsViewContainer = styled.div`
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
