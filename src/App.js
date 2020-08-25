import React, { Component } from 'react';
import classes from  './App.module.scss';

import Header from './components/Header/Header';
import Categories from './components/LeftBar/Categories';
import MainArea from './components/MainArea/MainArea';

class App extends Component {

  state = {
    headlines: [
      {
        "source": {
          "id": null,
          "name": "CBS Sports"
        },
        "author": "Sam Quinn",
        "title": "Lakers vs. Blazers score: Live NBA playoff updates as L.A. honors Kobe Bryant with Black Mamba uniforms - CBSSports.com",
        "description": "Damian Lillard's Blazers have dropped the past two games after winning the series opener",
        "url": "https://www.cbssports.com/nba/news/lakers-vs-blazers-score-live-nba-playoff-updates-as-l-a-honors-kobe-bryant-with-black-mamba-uniforms/live/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2020/08/25/1b335178-eb69-4a77-aa12-75e245755937/thumbnail/1200x675/1a13b2050208353c407536c065de6b86/untitled-design-2020-08-24t204434-635.jpg",
        "publishedAt": "2020-08-25T02:41:00Z",
        "content": "After weeks of upset speculation, it turns out, the Portland Trail Blazers are exactly what the Los Angeles Lakers needed. Their struggling offense is on fire through two quarters in Game 2, as the L… [+695 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CNBC"
        },
        "author": "Evelyn Cheng",
        "title": "U.S. and China hold phone call on phase one trade agreement - CNBC",
        "description": "The trade negotiators' discussion came after a planned six-month review of the deal set for Aug. 15 was delayed to an unspecified date.",
        "url": "https://www.cnbc.com/2020/08/25/us-and-china-hold-phone-call-on-phase-one-trade-agreement.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/106551562-1590482232911gettyimages-1194585923.jpeg?v=1598320196",
        "publishedAt": "2020-08-25T01:58:00Z",
        "content": "U.S. and Chinese trade negotiators held a phone call Tuesday morning Beijing time about implementing the phase one agreement between the two countries.\r\nThe call came after a planned six-month review… [+2113 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "RNC 2020: Trump warns Republican convention of ‘rigged election’ - BBC News",
        "description": "He opens the Republican conference with disputed claims mail-in ballots could lead to voter fraud.",
        "url": "https://www.bbc.com/news/election-us-2020-53898142",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/17925/production/_114094569_gettyimages-1228187639.jpg",
        "publishedAt": "2020-08-25T01:57:59Z",
        "content": "Image copyrightGetty Images\r\nUS President Donald Trump has warned his fellow Republicans their opponents may \"steal\" November's election, as his party anointed him as their candidate.\r\n\"They're using… [+3938 chars]"
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": null,
        "title": "The Legend Of Luka Doncic Grows: Game 4 Mavericks vs Clippers 2020 NBA Playoffs - BBALLBREAKDOWN",
        "description": null,
        "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9MVhIQmlPTi1Oc1nSAQA?oc=5",
        "urlToImage": null,
        "publishedAt": "2020-08-25T00:50:49Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "Slate Magazine"
        },
        "author": "Jordan Weissmann",
        "title": "We Now Know How Much Trump’s Postmaster General Slowed Down the Mail - Slate",
        "description": "The problems were less severe than they first appeared. But there are other reasons to keep the heat on Louis DeJoy.",
        "url": "https://slate.com/business/2020/08/mail-slowdown-dejoy-usps-numbers.html",
        "urlToImage": "https://compote.slate.com/images/b62e03bb-2f86-45bc-baea-7fdf7aa3db7c.jpeg?width=780&height=520&rect=5466x3644&offset=1x0",
        "publishedAt": "2020-08-25T00:47:00Z",
        "content": "Postmaster Louis DeJoy, looking unhappy.Pool/Getty Images\r\nThe House Oversight Committee got its chance to grill Postmaster General Louis DeJoy on Monday about his decisions that have bogged down mai… [+4587 chars]"
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": null,
        "title": "New Nintendo Switch Coming in 2021 According to Report - IGN Daily Fix - IGN",
        "description": null,
        "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9WDdYV05aSUJGR1HSAQA?oc=5",
        "urlToImage": null,
        "publishedAt": "2020-08-25T00:39:56Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "The Mercury News"
        },
        "author": "Associated Press",
        "title": "California wildfires: Prepare to be away from home for days - The Mercury News",
        "description": "SAN FRANCISCO (AP) — California fire officials are cautiously optimistic after dodging a major lightning storm, but they are pleading with residents to stay out of evacuation zones and prepar…",
        "url": "https://www.mercurynews.com/california-wildfires-prepare-to-be-away-from-home-for-days",
        "urlToImage": "https://www.mercurynews.com/wp-content/uploads/2020/08/California_Wildfires_67626-1-1.jpg?w=1024&h=681",
        "publishedAt": "2020-08-25T00:10:00Z",
        "content": "By JANIE HAR\r\nSAN FRANCISCO (AP) — California fire officials are cautiously optimistic after dodging a major lightning storm, but they are pleading with residents to stay out of evacuation zones and … [+5638 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Sports Illustrated"
        },
        "author": "Albert Breer",
        "title": "Tom Brady Is Already Making his Younger Buccaneers Teammates More Confident - Sports Illustrated",
        "description": "As Albert Breer's camp trip winds down, he empties the notebook with observations from Bucs, Eagles and Giants camp. Plus, rules for scouts during the pandemic, the Packers speak out and more.",
        "url": "https://www.si.com/nfl/2020/08/24/tom-brady-buccaneers-teammates-earl-thomas-daniel-jones",
        "urlToImage": "https://www.si.com/.image/t_share/MTc0OTIwMDMwODY4MjE5MTA1/tom-brady-earl-thomas-daniel-jones-maqb.jpg",
        "publishedAt": "2020-08-24T23:52:00Z",
        "content": "FLORIDA— Yup, that’s right. A lot of Florida today, from Tampa to Fort Lauderdale. I’m wrapping up my camp trip, so let’s dive in …\r\nKim Klement-USA TODAY Sports (Brady); Evan Habeeb-USA TODAY Sports… [+7626 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Investor's Business Daily"
        },
        "author": "Investor's Business Daily",
        "title": "Dow Jones Futures: Coronavirus Vaccine News Fuels Stock Market Rally; 3 New Dow 30 Stocks - Investor's Business Daily",
        "description": "Dow Jones futures rose late Monday after coronavirus vaccine news fueled a stock market rally. Three new Dow Jones Industrial Average stocks were announced.",
        "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-trump-coronavirus-vaccine-news-stock-market-rally-alibaba-amazon-break-out/",
        "urlToImage": "https://www.investors.com/wp-content/uploads/2020/06/Stock-coronavirus-18-adobe-1.jpg",
        "publishedAt": "2020-08-24T23:42:00Z",
        "content": "Dow Jones futures were in focus late Monday, along with S&amp;P 500 futures and Nasdaq 100 futures, after Monday's coronavirus news-driven stock market rally. Dow Jones stock Apple and Tesla set more… [+9285 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "MacRumors"
        },
        "author": "Juli Clover",
        "title": "Judge in Apple v. Epic Case 'Inclined' to Side With Apple on Fortnite and Epic on Unreal Engine - MacRumors",
        "description": "Apple last week sent a letter to Epic Games letting the company know that if it does not comply with the App Store rules and remove direct payment...",
        "url": "https://www.macrumors.com/2020/08/24/apple-epic-court-battle-august-28-removal/",
        "urlToImage": "https://images.macrumors.com/article-new/2020/08/fortnite-apple-logo-2.jpg",
        "publishedAt": "2020-08-24T23:32:00Z",
        "content": "Apple last week sent a letter to Epic Games letting the company know that if it does not comply with the App Store rules and remove direct payment options from Fortnite, that all of Epic's developer … [+4712 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Amanda Jackson and Rebekah Riess, CNN",
        "title": "A woman linked to the Coronavirus outbreak at a wedding reception in Maine has died - CNN",
        "description": "One of the dozens of individuals who tested positive for Covid-19 after a wedding reception in Maine has died, according to hospital officials.",
        "url": "https://www.cnn.com/2020/08/24/us/maine-wedding-covid-outbreak-death-trnd/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/200817213020-big-moose-inn-super-tease.jpg",
        "publishedAt": "2020-08-24T23:24:00Z",
        "content": "(CNN)One of the dozens of individuals who tested positive for Covid-19 after a wedding reception in Maine has died, according to hospital officials.\r\nThe woman, who wasn't named, is linked to a Coron… [+3649 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Salon"
        },
        "author": "Joseph Hudak",
        "title": "Justin Townes Earle, Americana singer-songwriter, dead at 38 - Salon",
        "description": "Nashville native, known for his mix of old-timey roots music and modern folk-rock, was the son of Steve Earle",
        "url": "https://www.salon.com/2020/08/24/justin-townes-earle-americana-singer-songwriter-dead-at-38_partner/",
        "urlToImage": "https://media.salon.com/2020/08/justin-townes-earle-082420.jpg",
        "publishedAt": "2020-08-24T23:19:00Z",
        "content": "Justin Townes Earle, the singer-songwriter known for his mix of old-timey roots music and modern-day Americana, has died at age 38. A rep for Earle's label New West Records confirmed the musician's d… [+4017 chars]"
      },
      {
        "source": {
          "id": "the-washington-post",
          "name": "The Washington Post"
        },
        "author": "Susan Svrluga, Sarah Pulliam Bailey, Michelle Boorstein",
        "title": "Jerry Falwell Jr. agrees to resign from Liberty University - The Washington Post",
        "description": "A series of personal scandals came to an abrupt head Monday.",
        "url": "https://www.washingtonpost.com/education/2020/08/24/jerry-falwell-jr-agrees-resign-liberty-university/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3DPLXRG6JAI6VNHREW3WFTN36Q.jpg&w=1440",
        "publishedAt": "2020-08-24T21:05:00Z",
        "content": "Falwell had been placed on paid leave Aug. 7 after he posted a provocative picture of himself and his wifes assistant on social media. Both had their zippers partially down and Falwell was holding a … [+2281 chars]"
      }
    ],
    categories: [
      { value: 'Technologies', query: 'tech' },
      { value: 'Covid-19', query: 'covid19' },
      { value: 'Sports', query: 'sports' },
      { value: 'Entertaintment', query: 'entertaintment' },
      { value: 'Education', query: 'education' },
    ]
  }
  
  render () {
    return (
      <div className={classes.App}>
        <Header />
        <main className={classes.AppBody}>
          <div className={[classes.GridItem, classes.Left].join(' ')}>
            <h2 className={classes.Title}>Categories</h2>
          </div>
          <div className={[classes.GridItem, classes.Center].join(' ')}>
            <h2 className={classes.Title}>Todays Headlines</h2>
          </div>
          <div className={[classes.GridItem, classes.Right].join(' ')}>
            <h2 className={classes.Title}>Other Sources</h2>
          </div>

          <div className={[classes.GridItem, classes.Left].join(' ')}>
            <Categories items={this.state.categories} />
          </div>
          <div className={[classes.GridItem, classes.Center].join(' ')}>
            <MainArea contents={this.state.headlines} />
          </div>
          <div className={[classes.GridItem, classes.Right].join(' ')}></div>
        </main>
      </div>
    );
  }
}

export default App;

// var url = 'http://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           'apiKey=ed80bd1114d94f07ada4a6b5a9bfb7af';

//     var url2 = 'https://newsapi.org/v2/everything?' + 
//           'q=tech&' + 
//           'apiKey=ed80bd1114d94f07ada4a6b5a9bfb7af';

//     var req = new Request(url2);
//     fetch(req)
//         .then(function(response) {
//             response.json().then(data => {

//               console.log(data.articles.map(a => a.content));
//             })
//         })
