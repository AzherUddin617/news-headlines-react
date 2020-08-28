import React, { Component } from 'react';
import classes from './Slider.module.scss';

class Slider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // contents: props.contents,
      textContents: {
        title: 'News',
        desc: '',
        src: ''
      },
      activeContent: 0,
      bgContainerTransX: 0,
      containerWidth: 0,
      textContentsClasses: [classes.TextContents]
    }

    this.bgContainerRef = React.createRef();
    this.sliderRef = React.createRef();
    this.sliding = false;
    this.timeOut = null;
    this.timeOutPause = false;
  }

  componentDidMount() {
    this.resetContainer();
    this.resetTexts();
    this.sliderTimeOut();
    window.addEventListener('resize', this.windowResize);
  }

  componentWillUnmount() {
    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
    if (this.bgContainerRef && this.bgContainerRef.current)
          this.bgContainerRef.current.removeEventListener('transitionend', this.transionEnd);
    window.removeEventListener('resize', this.windowResize);
  }

  mouseEnterHandler = () => {
    this.timeOutPause = true;
  }

  mouseExitHandler = () => {
    this.timeOutPause = false;
    this.sliderTimeOut();
  }

  sliderTimeOut = () => {
    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }

    const timeOutHandler = () => {
      this.timeOut = null;
      if (!this.sliding && !this.timeOutPause)
        this.bgChangeNext();
    }

    this.timeOut = setTimeout(timeOutHandler, 3000);
  }

  windowResize = () => {
    this.resetContainer();
  }

  resetContainer = () => {
    if (this.sliderRef) {
      const width = this.sliderRef.current.getBoundingClientRect().width * this.props.contents.length;
      
      this.setState({ containerWidth: width });
    }
  }

  resetTexts = () => {
    const textClasses = [classes.TextContents, classes.Show];
    const textC = {...this.state.textContents};

    textC.title = this.props.contents[this.state.activeContent].texts.title;
    textC.desc = this.props.contents[this.state.activeContent].texts.desc;
    textC.src = this.props.contents[this.state.activeContent].src;

    this.setState({textContents: textC, textContentsClasses: textClasses});
  }

  containerTransition = () => {
    if (!this.sliding) {
      this.transionEnd = () => {
        this.sliding = false;
        if (this.bgContainerRef && this.bgContainerRef.current)
          this.bgContainerRef.current.removeEventListener('transitionend', this.transionEnd);
        this.resetTexts();
        this.sliderTimeOut();
      };
      if (this.bgContainerRef && this.bgContainerRef.current)
        this.bgContainerRef.current.addEventListener('transitionend', this.transionEnd);
      this.sliding = true;
    }
  }

  trimTextToTitle = (text) => {
    const strArray = text.split(' ');
    const title = <h1 className={classes.Title}>{strArray.map((s, i) => {
      if (s.startsWith('+')) {
        return <span key={s+'-'+i}>{s.split('+').join(' ')} </span>
      }
      return s + ' ';
    })}</h1>;
    return title;
  }

  bgChangeNext = () => {
    const length = this.props.contents.length;
    let nextIndex = this.state.activeContent + 1;
    if (nextIndex >= length) nextIndex = 0;

    // this.sliderTimeOut();
    const textClasses = [classes.TextContents, classes.Hide];
    this.containerTransition();

    this.setState({ activeContent: nextIndex, textContentsClasses: textClasses });
    // this.resetContainer();
  }
  bgChangePrev = () => {
    const length = this.props.contents.length;
    let nextIndex = this.state.activeContent - 1;
    if (nextIndex < 0) nextIndex = length-1;

    // this.sliderTimeOut();
    const textClasses = [classes.TextContents, classes.Hide];
    this.containerTransition();

    this.setState({ activeContent: nextIndex, textContentsClasses: textClasses });
    // this.resetContainer();
  }

  render() {
    // console.log(this.state);

    const bgContainerTransX = (this.state.containerWidth / this.props.contents.length) * -this.state.activeContent;

    let bgs = <div className={classes.BG}></div>;

    bgs = this.props.contents.map((content, i) => (
      <div
        key={i}
        className={classes.BG}
        style={{backgroundImage: `url(${content.bg})`}}
      ></div>
    ));

    return (
      <div className={classes.Slider} ref={this.sliderRef}>
        <div className={classes.SliderContents}>

          <div 
            className={classes.BGContainer} 
            ref={this.bgContainerRef}
            style={{transform: `translateX(${bgContainerTransX}px)`, width: `${this.state.containerWidth}px`}}
          >
            {bgs}
          </div>

          <div className={`container ${this.state.textContentsClasses.join(' ')}`}>
            <div 
              className={classes.Texts} 
              onClick={() => this.props.linkOpen(this.state.textContents.src)}
              onMouseEnter={this.mouseEnterHandler} 
              onMouseLeave={this.mouseExitHandler}
            >
              {this.trimTextToTitle(this.state.textContents.title)}
            </div>
          </div>

          <div className={classes.ChangeButtons}>
            <div className={classes.Left} onClick={this.bgChangePrev}>
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className={classes.Right} onClick={this.bgChangeNext}>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Slider;
