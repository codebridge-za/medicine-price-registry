import React from 'react';

import global from '../../../styles.module.css';

const GeneralInfo = (props) => {
  return (
    <div className={global.container}>
      {props.copy.details.map(copy => {
        return (
          <div key={copy.heading}>
            <h3>{ copy.heading }</h3>
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
        );
      })}
    </div>
  ); 
}

export default GeneralInfo;
