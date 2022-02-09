import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class Navbar extends Component {
    render() {
        return (
            <nav className="navbar bg-dark">
                <h1>
                    <i className={this.props.icon}></i>{this.props.title}
                </h1>
            </nav>
        )
    }
}

export default Navbar
