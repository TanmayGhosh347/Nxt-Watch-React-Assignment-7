import styled from 'styled-components'

export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`
export const NoVideosImage = styled.img`
  width: 200px;
  @media screen (min-width: 768px) {
    width: 450px;
  }
`
export const NoVideosNote = styled.p`
  color: ${props => props.noteColor};
  font-family: 'Roboto';
  font-size: 18px;
`
export const NoVideosHeading = styled.h1`
  color: ${props => props.headingColor};
  font-family: 'Roboto';
  font-size: 25px;
`

export const VideoCardList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media screen (min-width: 768px) {
    margin-left: 20px;
  }
`

export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 3px;
  color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: 'Roboto';
  font-size: 15px;
`
