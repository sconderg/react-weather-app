import React from 'react';
import './form.style.css';

function error() {
    return (
        <div className="alert alert-danger mx-5" role="alert">
            Please fill the above inputs
        </div>
    );
}

const form = props => {
    return (
        <div className="container">
            {props.error ? error() : null}
            <form onSubmit={props.loadWeather}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input type="text" className="form-control" placeholder="City" name="city" autoComplete="off"/>
                    </div>
                    <div className="col-md-3">
                    <input type="text" className="form-control" placeholder="Country" name="country" autoComplete="off"/>
                    </div>
                    <div className="col-md-3 mt-md-0 text-md-left">
                        <button className="btn btn-danger">Get Weather</button>
                    </div>
                </div>
            </form>
        </div>
    );
}


export default form;