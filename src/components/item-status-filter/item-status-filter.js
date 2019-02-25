import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    render() {
        const {
            onFilterAllClick,
            onFilterActiveClick,
            onFilterDoneClick,
            classFilterAll,
            classFilterActive,
            classFilterDone
        } = this.props;

        return (
            <div className="btn-group">
                <button type="button"
                        onClick={onFilterAllClick}
                        className={classFilterAll}>All
                </button>
                <button type="button"
                        onClick={onFilterActiveClick}
                        className={classFilterActive}>Active
                </button>
                <button type="button"
                        value='done'
                        onClick={onFilterDoneClick}
                        className={classFilterDone}>Done
                </button>
            </div>
        );
    }
}




