import React from 'react'
import './Widgets.css'
/* Icons */
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='widgets'>
        <div className="widgets__input">
          <SearchIcon className="widgets_searchIcon"/>
          <input placeholder="Search Twitter" type="text" />
        </div>
        <div className="widgets__widgetContainer">
          <h2>What's Happening</h2>

          <TwitterTweetEmbed tweetId={'1451241979728187392'} />
          <TwitterTimelineEmbed sourceType='profile' screenName='nft_reality' options={{height:400}} className='twitterEmbed' />

        </div>
    </div>
  )
}

export default Widgets