import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header>
                <div className="container-fluid">
                    <h3>Todo List<br/><small>Your activities today</small>
                    </h3>
                </div>
            </header>
        )
    }
}

export default Header
