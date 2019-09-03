import React from 'react'
import SearchBar from './SearchBar';
import PokemonList from './PokemonList';
import pokeapi from '../api/pokeapi';
import Spinner from './Spinner';
import { Route, Switch, Router } from 'react-router-dom';
import history from '../history';
import PokemonModal from './PokemonModal';

class App extends React.Component {

    state = {
        term: '',
        pokemonArray: []
    }

    initialLoad = false;

    componentDidMount = () => {
        this.fillPokemonArray()
    };

    fillPokemonArray = async () => {
        let tempPokemonArray = [];
        for(let i = 1; i < 30; i++) {
            let response = await pokeapi.get('/api/v2/pokemon/' + i.toString() + '/');
            tempPokemonArray.push(response.data);
        }

        this.initialLoad = true;

        this.setState({
            pokemonArray: tempPokemonArray
        });

        
    }

    onSubmitText = async (searchTerm) => {
        this.setState({
            term: searchTerm
        })
        let response = await pokeapi.get('/api/v2/pokemon/' + searchTerm + '/');
        console.log(response); 
    }

    render () {
        if (this.initialLoad)  {
            return (
                <div>
                    <Router history={history}>
                        <SearchBar onSubmitText={this.onSubmitText}/>
                        <Switch>
                            <Route exact path="/" render={props => <PokemonList {...props} pokemonArray={this.state.pokemonArray} />}/>
                            <Route exact path="/pokemon/:id" component={PokemonModal}/>}/>
                        </Switch>
                    </Router>
                </div>
            );
            } else {
            return <Spinner />
        }
        
    }
}

export default App;