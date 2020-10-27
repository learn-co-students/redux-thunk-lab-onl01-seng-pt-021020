import React, {Component} from 'react'

export default class CatList extends Component {


  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.catPics.map((pic)=>{
        return(  
          <li key={pic.id}>
            <img src={pic.url} alt={pic.source_url} width={160} length={160} />
           </li>
        )
        })}
      </div>
    )
  }
}