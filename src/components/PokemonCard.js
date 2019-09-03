import React from 'react';
import { Link } from 'react-router-dom'

class PokemonCard extends React.Component {

    render () {
        return (
            <Link to={`/pokemon/${this.props.id}`} className="card">
              <div className="image">
                <img src={this.props.imageURL}  alt={this.props.alt}/>
              </div>
              <div className="content">
                <a className="header">{this.props.name.toUpperCase()}</a>
              </div>
            </Link>
        );
    }
}

export default PokemonCard;