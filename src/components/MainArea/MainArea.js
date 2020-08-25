import React from 'react';
import classes from './MainArea.module.scss';
import Slider from '../Ui/Slider/Slider';

const MainArea = (props) => {
  const sliderContents = props.contents.slice(0, 5).map(news => ({
    bg: news.urlToImage,
    src: news.url,
    texts: {
      title: news.title,
      desc: news.description
    }
  }));

  return (
    <div className={classes.MainArea}>
      <div className={classes.Slider}>
        <Slider contents={sliderContents} />
      </div>
    </div>
  );
}

export default MainArea;
