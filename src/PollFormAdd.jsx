import React, {Component} from 'react';
import {ActionContext} from './ActionProvider'


export class PollFormAdd extends Component {


    render() {
        return (
            <ActionContext.Consumer>
                {
                    (actions) => (
                        <header>
                            <h1>Add Poll</h1>
                            <form action="post" onSubmit={(e) => e.preventDefault() || actions.addPoll(e)}>
                                <input type="text" name="PollName" placeholder="Poll Name "/><br/>
                                <input type="text" name="PollAns1" placeholder="Poll answer"/><br/>
                                <input type="text" name="PollAns2" placeholder="Poll answer"/><br/>
                                <input type="submit" value="Submit"/>
                            </form>

                        </header>
                    )

                }
                </ActionContext.Consumer>
        );
    };
}



