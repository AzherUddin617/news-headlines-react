import React from 'react';
import classes from './Categories.module.scss';

const Categories = (props) => {
  return (
    <div className={classes.Categories}>
      <ul className={classes.List}>
        {props.items.map((item, i) => (
          <li key={i} className={classes.Item}>
            <a href="#" className={classes.Link}>{item.value}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
