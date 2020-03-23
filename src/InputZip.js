import React from 'react';

class InputZip extends React.Component {

    onBlurHandler = (e) => {
        const zip = Number(e.target.value);

        if (!isNaN(zip) && zip >= 501) {
            this.props.newZipCode(e.target.value);
        }
        else {
            e.target.value = "";
        }
    }

    render() {
        return (
            <div className="InputZip">
                <label htmlFor='InputZip'>Enter your location: </label>
                <input type="text"
                    id='InputZip'
                    name='InputZip'
                    size="10"
                    maxLength="5"
                    placeholder="Zip code"
                    onBlur={this.onBlurHandler}
                />
                <button onClick={this.onBlurHandler}>Show Weather</button>
            </div>
        );
    }
}

export default InputZip;