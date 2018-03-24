import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchCousinesAction } from '../restaurant/cousine-actions'
import { fetchStoresByCousineAction, fetchStoresAction } from '../restaurant/stores-actions'

class SkipHeader extends Component {

    constructor(props) {
        super(props)

        console.log(this.props.match)
        this.renderCousineItem = this.renderCousineItem.bind(this)

        this.state = {
            cousineId: 0
        }
    }

    componentDidMount() {
        this.props.fetchCousinesAction()
    }

    selectCousine(cousineId) {
        this.setState({ cousineId })

        if (cousineId) {
            this.props.fetchStoresByCousineAction(cousineId)

        } else {
            this.props.fetchStoresAction()
        }
    }

    renderCousineItem(cousine) {
        return (
            <li key={cousine.id}>
                <Link to={`/cousine/${cousine.id}`} onClick={() => this.selectCousine(cousine.id)}>{cousine.name}</Link>
            </li>
        )
    }

    render() {
        return (
            <nav id="skip-navbar">
                <h1 className="ta-center">Skip</h1>

                {this.props.customer && (
                    <ul id="skip-navbar--menu">
                        <li>
                            <Link to="/products" onClick={() => this.selectCousine(0)}>All</Link>
                        </li>

                        {_.map(this.props.cousines, this.renderCousineItem)}
                    </ul>
                )}
            </nav>
        )
    }
}

function mapStateToProps({ cousines, customer }) {
    return { cousines, customer }
}

export default connect(mapStateToProps, { fetchCousinesAction, fetchStoresByCousineAction, fetchStoresAction })(SkipHeader)