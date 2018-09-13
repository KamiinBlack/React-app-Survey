import React, { Component } from 'react';
import {Poll} from './Poll';

import {ActionProvider} from './ActionProvider'


export class PollList extends Component {
   
    render() {
        return (
            <header>
                <h1 className="menu-survey-look">Survey List</h1>
                <br/>
                <ul> 
                {this.props.polls.map(poll=>(
                        <li key={poll.id}>
                            <Poll key={poll.id} pollQuestion={poll.question} pollAnswers={poll.votes} />

                        </li>))}
                                         
                                         
                </ul>   
            </header>
        );
    };
}

