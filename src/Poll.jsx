import React, { Component } from 'react';
import up from './up.png'
import down from './down.png'
import {ActionContext} from './ActionProvider'






export const Poll = (props) => (
    <ActionContext.Consumer>
        {(actions) => (<header>
                
                <form>
                <h1>{props.pollQuestion}</h1>
                <hr></hr>
                    {
                        props.pollAnswers.map(answer =>
                                           <p key={answer.id}>
                                               <label> {answer.name} ,Vote number : {answer.score}</label>
                                               <button type='button' onClick={()=>actions.voteFor(answer.id,answer.pollId)}>
                                                   <img className = "up-down"  src={up} alt="up"/>
                                                </button>
                                               <button type='button' onClick={()=>actions.voteAgainst(answer.id,answer.pollId)}>
                                                    <img className = "up-down"  src={down} alt="down"/>
                                                </button>
                                                <button type='button' onClick={()=>actions.removePoll(answer.pollId)}> </button>

                                           </p>
                                          )
                    }

                </form>
               
            </header>)}</ActionContext.Consumer>
            
        );
    

