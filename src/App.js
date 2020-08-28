import React, { Component } from 'react';
import classes from  './App.module.scss';

import Header from './components/Header/Header';
import Categories from './components/LeftBar/Categories';
import MainArea from './components/MainArea/MainArea';

class App extends Component {

  state = {
    contents: null,
    categories: [
      { value: 'Headlines', query: 'top-headlines' },
      { value: 'Technologies', query: 'tech' },
      { value: 'Covid-19', query: 'covid19' },
      { value: 'Sports', query: 'sports' },
      { value: 'Entertaintment', query: 'entertaintment' },
      { value: 'Education', query: 'education' },
      { value: 'Health', query: 'health' },
    ],
    currentCategory: 'Headlines'
  }

  componentDidMount() {
    this.getNewsData('top-headlines');
  }

  sliderLinkClicked = (src) => {
    const win = window.open(src, '_blank');
    if (win)
      win.focus();
  }

  categoriesClicked = (data) => {
    if (data.value === this.state.currentCategory)
      return;
    
    this.setState({contents: null, currentCategory: data.value});
    if (data.query === 'top-headlines')
      this.getNewsData('top-headlines');
    else
      this.getNewsData('everything', data.query);
  }

  getNewsData = (type, query) => {
    const dataId = query ? query : type;
    let newsdata = JSON.parse(localStorage.getItem(dataId));

    if (newsdata) {
      const hrLess = (Date.parse(new Date()) - newsdata.timeAdded) < (70 * 60 * 1000);
      console.log(dataId, 'Time passed:', ((Date.parse(new Date()) - newsdata.timeAdded) / 1000))
      if (hrLess) {
        console.log('onlocal');
        this.setState({contents: newsdata.articles});
        return;
      }
    }

    console.log('Not onlocal');
    const url = `http://newsapi.org/v2/${type}?` +
        (type === 'everything' ? `q=${query}&` : 'country=us&') +
        'apiKey=ed80bd1114d94f07ada4a6b5a9bfb7af';

    const req = new Request(url);
    fetch(req).then((response) => {
      response.json().then(data => {

        if (data.articles) {
          newsdata = {
            articles: data.articles,
            timeAdded: Date.parse(new Date())
          };
        }
        
        if (newsdata) {
          window.localStorage.setItem(dataId, JSON.stringify(newsdata));
  
          this.setState({contents: newsdata.articles});
        }
      });
    }).catch(error => {
      if (newsdata) {
        this.setState({contents: newsdata.articles});
      }
    });
  }
  
  render () {
    return (
      <div className={classes.App}>
        <Header />
        <main className={classes.AppBody}>
          <div className={[classes.GridItem, classes.Left].join(' ')}>
              <h2 className={classes.Title}>Categories</h2>
            {/* <div className={classes.Fixed}>
            </div> */}
          </div>
          <div className={[classes.GridItem, classes.Center].join(' ')}>
            <h2 className={classes.Title}>Todays {this.state.currentCategory}</h2>
          </div>
          <div className={[classes.GridItem, classes.Right].join(' ')}>
            <h2 className={classes.Title}>Other Sources</h2>
          </div>

          <div className={[classes.GridItem, classes.Left].join(' ')}>
              <Categories items={this.state.categories} 
                clicked={this.categoriesClicked} 
                activeValue={this.state.currentCategory} 
              />
            {/* <div className={classes.Fixed}>
            </div> */}
          </div>
          <div className={[classes.GridItem, classes.Center].join(' ')}>
            <MainArea contents={this.state.contents} sliderLinkClicked={this.sliderLinkClicked} />
          </div>
          <div className={[classes.GridItem, classes.Right].join(' ')}></div>
        </main>
      </div>
    );
  }
}

export default App;