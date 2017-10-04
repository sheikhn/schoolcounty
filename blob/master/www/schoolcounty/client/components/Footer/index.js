
import React, { Component } from 'react'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/filters'
import classnames from 'classnames'
import style from './style.css'
import Footerlinks from './Footerlinks/index'

const FILTER_TITLES = {
    [SHOW_ALL]: 'All',
    [SHOW_ACTIVE]: 'Active',
    [SHOW_COMPLETED]: 'Completed'
}

class Footer extends Component {
    renderTodoCount() {
        const { activeCount } = this.props
        const itemWord = activeCount === 1 ? 'item' : 'items'

        return (
            <span className={style.count}>
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
        )
    }

    renderFilterLink(filter) {
        const title = FILTER_TITLES[filter]
        const { filter: selectedFilter, onShow } = this.props

        return (
            <a className={classnames({ [style.selected]: filter === selectedFilter })}
               style={{ cursor: 'pointer' }}
               onClick={() => onShow(filter)}>
                {title}
            </a>
        )
    }

    renderClearButton() {
        const { completedCount, onClearCompleted } = this.props
        if (completedCount > 0) {
            return (
                <button className={style.clearCompleted} onClick={onClearCompleted} >
                  Clear completed
                </button>
            )
        }
    }

    render() {
        return (
            <div>

                <Footerlinks/>


            </div>
        )
    }
}

export default Footer
