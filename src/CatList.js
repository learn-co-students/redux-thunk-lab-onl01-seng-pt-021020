import React, { Component } from 'react';

export default class CatList extends Component {

  render() {
    return (
      <div>
        {this.props.catPics.map((pic)=>{
        return(
          <li style={{listStyleType: 'none', padding: '5px'}} key={pic.id}>
            <img src={pic.url} alt={pic.source_url} width={160} length={160} />
           </li>
        )
        })}
      </div>
    )
  }
}