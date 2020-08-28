/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import classes from './MainArea.module.scss';
import Slider from '../Ui/Slider/Slider';

const MainArea = (props) => {
  let sliderContents;
  if (props.contents) { 
    sliderContents = props.contents.slice(0, 5).map(news => ({
      bg: news.urlToImage,
      src: news.url,
      texts: {
        title: news.title,
        desc: news.description
      }
    }));
  }

  return (
    <div className={classes.MainArea}>
      { props.contents ?
        (
          <React.Fragment>
            <div className={classes.Slider}>
              <Slider contents={sliderContents} linkOpen={props.sliderLinkClicked} />
            </div>
            <div className={classes.NewsContents}>
              {props.contents.map((news, i) => (
                <div key={i} className={classes.News}>
                  <div className={classes.BG} style={{backgroundImage: `url(${news.urlToImage})`}}></div>

                  <div className={classes.Texts}>
                    <h3 className={classes.Title}>{news.title}</h3>
                    <p className={classes.Details}>{news.description}</p>
                    <a href={news.url} target="_blank" className={classes.Link}>Read More</a>
                  </div>
                </div>
              ))}
            </div>
          </React.Fragment>
        )
        : <div style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <CircularProgress color="inherit" />
        </div>
      }
    </div>
  );
}

export default MainArea;
