import React, {Component} from 'react';

import store from '../store'
class ReduxTest extends Component {
    render() {
        return (
            <div>
                <p>{store.getState()}</p>
                <div>
                    <button onClick={()=>store.despatch({type:'minus'})}>-</button>
                    <button onClick={()=>store.despatch({type:'add'})}>+</button>
                </div>
            </div>
        );
    }
}

export default ReduxTest;
