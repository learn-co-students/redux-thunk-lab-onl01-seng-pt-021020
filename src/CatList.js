import React from 'react';

class CatList extends React.Component{

    renderCatPics = () => this.props.catPics.map(pic => <img key={pic.id} src={pic.url} alt={pic.source_url}></img>)

    render() {
        return (
            <div>
                {this.renderCatPics()}
            </div>
        )
    }
}

export default CatList