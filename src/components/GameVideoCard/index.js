import ThemeAbdViThemeAndVideoContextdeoContext from '../../contexts/ThemeAndVideoContexts'

import {
  ItemLink,
  GamingListItem,
  GamingThumbnailImage,
  GamingContentSection,
  GamingTitle,
  GamingViewsAndDate,
} from './styledComponents'

const GameVideoCard => props => {
  const {videoDetails } = props 
  const {id , title , thumbnailUrl , viewCount} = videoDetails

  return(
      <ThemeAndVideoContext>
          {value => {
              const {isDarkTheme}  = value
              const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

              return(
                  <ItemLink to={`/videos/${id}`} className='link'>
                      <GamingListItem>
                          <GamingThumbnailImage src={thumbnailUrl} alt='video thumbnail'/>
                          <GamingContentSection>
                              <GamingTitle color={textColor}>{title}</GamingTitle>
                              <GamingViewsAndDate color={textColor}>
                                  {viewCount} Watching Worldwide
                              </GamingViewsAndDate>
                          </GamingContentSection>
                      </GamingListItem>
                  </ItemLink>
              )
          }}
      </ThemeAndVideoContext>
  )
}

export default GameVideoCard