import React from 'react';
import classes from './Categories.module.scss';

const Categories = (props) => {
  return (
    <div className={classes.Categories}>
      <ul className={classes.List}>
        {props.items.map((item, i) => (
          <li key={i} className={classes.Item} onClick={() => props.clicked(item)}>
            <p 
              className={`${classes.Link} ${item.value === props.activeValue ? classes.Active : ''}`}
            >
              {item.value}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
