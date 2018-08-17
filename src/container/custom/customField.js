import React, { Component } from 'react'
import './customField.css'

class CustomField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ' ',
            email: '',
            phone: '',
            fields: [
                { type: 'text', name: 'name' },
                { type: 'email', name: 'email' },
                { type: 'number', name: 'phone' }
            ]
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            'name': this.state.name,
            'email': this.state.email,
            'phone': this.state.phone,
        })
    }
    render() {
        const renderFields = this.state.fields.map((field, index) => {
            return (
                <input
                    key={index}
                    type={field.type}
                    name={field.name}
                    placeholder={field.name}
                    className="custom-field-input"
                    value={(field.name === 'name')? this.state.name: (field.name === 'email') ? this.state.email : (field.name === 'phone') ?this.state.phone : 'sdf' }
                    onChange={this.handleChange}
                />
            )
        })
        return (
            <div style={{ margin: 5, backgroundColor: '#fff', padding: 20}}>
                <h2>CustomField Component</h2>
                <form>
                    {renderFields}
                    <button type="submit" onClick={this.handleSubmit}>Send</button>
                </form>
            </div>
        )
    }
}
export default CustomField;