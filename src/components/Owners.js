import React, {Component} from 'react'

class Owners extends Component {
    render() {
        return (
            <section className="owner">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id}>
                        {<br/>}
                        {owner.name}
                        {<br/>}
                        {owner.phoneNumber}
                        {<br/>}
                    </div>
                )
            }
            </section>
        )
    }
}

export default Owners