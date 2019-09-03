import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';
import pokeApi from '../api/pokeapi';

class PokemonModal extends React.Component {

    state = {
        id: 0,
        name: '',
        imageUrl: '',
        abilities: [],
        types: [],
        height: 0
    };
    
    componentDidMount() {
        console.log(this.props);
        (async () => {let response = await pokeApi.get('/api/v2/pokemon/' + this.props.match.params.id + '/');
            console.log(response);
            this.setState({
                id: this.props.match.params.id ,
                name: response.data.name,
                imageUrl: response.data.sprites['front_default'],
                abilities: response.data.abilities,
                types: response.data.types,
                height: response.data.height
            });
        })();
    }

    renderTypes = () => {
        return this.state.types.map(type => {
            return (
                <input type="text" value={type.type.name}></input>
            );
        })
    }

    renderAbilities = () => {
        return this.state.abilities.map(ability => {
            return (
                <input type="text" value={ability.ability.name}></input>
            );
        })
    }

    render() {
        if(!this.state.id) return <div>Loading!</div>
        return ( 
            <div onClick={() => history.push('/')} className="ui dimmer modals visible active">
                <div onClick={e => e.stopPropagation()} className="ui standard modal visible active">
                    <div className="ui segment">
                        <form className="ui form">
                            <h2 className="ui divided center aligned header">{this.state.name.toUpperCase()}</h2>
                            <div className="ui two column grid">
                                <div className="column"> 
                                    <div className="field">
                                        <label>Name</label>
                                        <input type="text" name="Name" value={this.state.name.toLocaleUpperCase()}></input>
                                    </div>
                                    <div className="field">
                                        <label>Height</label>
                                        <input type="text" name="Name" value={this.state.height}></input>
                                    </div>
                                    <div className="field">
                                        <label>Types</label>
                                        {this.renderTypes()}
                                    </div>
                                    <div className="field">
                                        <label>Abilities</label>
                                        {this.renderAbilities()}
                                    </div>

                                </div>
                                <div className="column">
                                    <img className="ui centered medium image" src={this.state.imageUrl} />
                                </div>
                            </div>                      
                        </form>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default PokemonModal;
