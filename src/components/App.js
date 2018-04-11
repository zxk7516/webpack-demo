import React, { Component } from 'react';
import CardList from './CardList';
import Scroll from './Scroll';
//import {robots} from '../models/robot';
import SearchBox from './SearchBox';
class App extends Component {
    constructor(){
        super();
        this.state = {robots:[],searchfield:'l'};
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( res => {return res.json();})
        .then( users => {
            console.log(users);
            this.setState ( {robots:users});
        });
    }

    render() {
        const onSearchChange =  (e) =>{
            const filterRobots = robots.filter((robot)=>{
                return robot.name.toLowerCase().includes(e.target.value.toLowerCase());
            });
            console.log({searchfield:e.target.value,robots: filterRobots});
            this.setState({searchfield:e.target.value,robots: filterRobots});
        }
        if(this.state.robots.length){
            return (
                <div className="pa3 tc">
                    <h1>RobotFriends</h1>
                    <SearchBox searchChange={onSearchChange} searchfield={this.state.searchfield} />
                    <Scroll>
                        <CardList robots={this.state.robots} />
                    </Scroll>
                </div>
            );
        }else{
            return  <h1>loading... </h1>
        }


    }
}
export default App;