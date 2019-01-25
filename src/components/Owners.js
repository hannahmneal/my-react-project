import React, {Component} from 'react'

class Owners extends Component {
    render() {
        return (
            <section className="owners">
            {
                this.props.owners.map(responseOwner =>
                    <div key={responseOwner.id}>
                        {<br/>}
                        {responseOwner.name}
                        {<br/>}
                        {responseOwner.phoneNumber}
                        {<br/>}
                    </div>
                )
            }
            </section>
        )
    }
}

export default Owners