import React from 'react';
import classes from  './App.module.scss';

import Header from './components/Header/Header';

const App = props => {
  
  return (
    <div className={classes.App}>
      <Header />
      <main className={classes.AppBody}>
        <div className=""></div>
      </main>
    </div>
  );
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
