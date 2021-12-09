import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ""
    }

  };  

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(data => data.json())
    .then(users => this.setState({monsters: users}))
    .catch(console.log('error'))

  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  render() { 
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
       )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
        handleChange ={this.handleChange} 
        placeholder= "search monster"
        />
        <CardList monsters = {filteredMonsters}/> 
      </div>
    );
  }

}

export default App;
