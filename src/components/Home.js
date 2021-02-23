import React, { Component } from 'react';
import forecast from '../utils/api';
import Header from './Header';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messageOne: '',
            messageTwo: '',
        }
    }

    handleInputChange = (e) => {
        const value = e.target.value;
        this.setState(()=> ({
            input: value,
        }))
    }

    handleSearch = async (e) => {
        e.preventDefault();

        try {
            const {place, forecastData} = await forecast(this.state.input);

            this.setState(() => ({
                input: '',
                messageOne: place,
                messageTwo: forecastData
            }))

        } catch (error) {
            this.setState(() => ({
                messageOne: error,
                messageTwo: ''
            }))
        }
    }

    render() {
        const { input, messageOne, messageTwo } = this.state;
        return (
            <div className='main-content'>
                <Header title='Weather App' />
                <input value={input} onChange={this.handleInputChange}/>
                <button onClick={this.handleSearch} >Search</button>
                {messageOne && <p>{messageOne}</p>}
                {messageTwo && <p>{messageTwo}</p>}
            </div>
        )
    }
}

export default Home;