import React from 'react';

import global from '../../../styles.module.css';
import classes from './GeneralInfo.module.css';

const GeneralInfo = (props) => {
  return (
    <div className={global.container}>
      {props.copy.details.map(copy => {
        return (
          <div className={classes.vessel} key={copy.heading}>
            <h3 className={classes.heading}>{ copy.heading }</h3>
            <div className={classes.content}>
            <p>{ copy.firstParagraph }</p>
            
            { copy.lists.map(list => {
              return (
                <ul key={list.list}>
                  <li>{ list.list }</li>
                </ul>
              );
            }) }
            {copy.additionalInfo && 
              copy.additionalInfo.map(info => {
              return (
                <p key={info.info}>
                  { info.info }
                  {info.link && <a href="https://search.opengazettes.org.za/text/25860?page=31">{ info.link }</a>}
                </p>
              );
            }) }
            </div>
          </div>
        );
      })}
    </div>
  ); 
}

export default GeneralInfo;
