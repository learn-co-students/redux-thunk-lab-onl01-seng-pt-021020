// write your CatList component here
import React, { Component } from 'react'

class CatList extends Component{

    render() {
        return(
            <div>
                {this.props.catPics.map(cat=>{
                    return (
                        <img src={cat.url} alt={cat.url} key={cat.id}/> 
                    )
                })}
            </div>
        ) 
    }
}


// const CatList = (props) => props.map(url=><img src={url} alt={url}/>)

// console.log(this.props.images);

export default CatList;