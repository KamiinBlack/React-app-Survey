import React, { Component } from 'react';
import './App.css';
import {PollList} from './PollList'
import {ActionContext} from './ActionProvider';
import {PollFormAdd} from "./PollFormAdd";
import {MainPage} from "./MainPage";





class App extends Component {

    state = {
        polls: []
    }


actions = {
    voteFor : (id, pollId) => {
        fetch(`https://skygate.io/api/polls/${pollId}/votes/${id}`, {
            method: 'POST',
            //headers: {'Content-Type':'application/x-www-form-urlencoded'},

        })
            .then( this.actions.update)
            .catch(error => console.log('Request failed', error));

    },
    voteAgainst : (id, pollId) => {
        fetch(`https://cors-anywhere.herokuapp.com/https://skygate.io/api/polls/${pollId}/votes/${id}`, {
            method: 'DELETE',

          })

            .then( this.actions.update)
            .catch(error => console.log('Request failed', error));

    },

    addPoll : (e) => {
        //[...e.target.elements].forEach(e => console.log(e.value));
        const listOfSub = [...e.target.elements];
        console.log(listOfSub);

        fetch('https://skygate.io/api/poll' , {
            method: 'post',
            body: JSON.stringify({
                question: listOfSub[0].value,
                votes: [{name : listOfSub[1].value}, {name :listOfSub[2].value}]
            }),
        })


            .then( this.actions.update)
            .catch(error => console.log('Request failed', error));

    },

    removePoll : (pollId) => {
        fetch(`https://cors-anywhere.herokuapp.com/https://skygate.io/api/polls/${pollId}` , {
            method: 'DELETE',

        })


            .then( this.actions.update)
            .catch(error => console.log('Request failed', error));

    },


    update: () => {
        fetch('https://skygate.io/api/polls', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }

        })
            .then(data => data.json())
            .then(polls => this.setState({ polls }))
            .catch(error => console.log('Request failed', error));

    }


}

componentDidMount(){
    this.actions.update()
}


render() {
        console.log('renderujee');
    return (

        <ActionContext.Provider value={this.actions}>
            <link href="https://fonts.googleapis.com/css?family=Pacifico|Quicksand:700" rel="stylesheet"/>
            <MainPage/>
            <PollList polls={this.state.polls}/>
            <PollFormAdd/>
        </ActionContext.Provider>



    );
}
}

export default App;
