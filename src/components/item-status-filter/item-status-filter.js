import React, {Component} from 'react';

import './item-status-filter.css';


export default class ItemStatusFilter extends Component {

    state = {
        filterState: 'all'
    };

    onClick = (e) => {
        const val = e.target.value;
        this.setState(({filterState}) => {
            return {
                filterState: val
            };
        });
    };

    render() {

        const {filterState} = this.state;

        const classAct = "btn btn-info";
        const classPass = "btn btn-outline-secondary";


        return (
            <div className="btn-group">
                <button type="button"
                        value='all'
                        onClick={this.onClick}
                        className={classAct}>All
                </button>
                <button type="button"
                        value='active'
                        onClick={this.onClick}
                        className={classPass}>Active
                </button>
                <button type="button"
                        value='done'
                        onClick={this.onClick}
                        className={classPass}>Done
                </button>
            </div>
        );
    }
}


