import React from 'react';

const CatList = (props) => {
    const catPics = props.catPics.map((cat, idx) => {
        return(
            <div key={idx}>
                <img src={cat.url} alt={cat.id}></img>
            </div>
        )
    })

    return(
        <div className='cat-list'>
            {catPics}
        </div>
    )
}

export default CatList;