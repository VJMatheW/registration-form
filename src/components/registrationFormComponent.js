import React, { useState } from "react";

const RegistrationForm = ()=>{

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [message, setMessage] = useState('')

    const onNameChanged = e => setName(e.target.value)
    const onEmailChanged = e => setEmail(e.target.value)
    const onMobileChanged = e => setMobile(e.target.value)
    const onCountryChanged = e => setCountry(e.target.value)
    const onCityChanged = e => setCity(e.target.value)
    const onStateChanged = e => setState(e.target.value)
    const onMessageChanged = e => setMessage(e.target.value)

    const onFormSubmit = (e)=>{
        e.preventDefault()
        if(name == '') return alert('name required')
        if(email == '') return alert('email required')

        let formData = { name, email, mobile, country, city, state, message }

        console.log(formData)
    }

    return(
        <>
        <h1>Registration Form</h1>
        <form onSubmit={onFormSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" onChange={onNameChanged} className="form-control" name="name" id="name" placeholder="Name" />
            </div>
            <div className="form-group">
                <label for="email">Email</label>
                <input type="email" onChange={onEmailChanged} className="form-control" name="email" id="email" placeholder="Email" />
            </div>
            <div className="form-group">
                <label for="mobile">Mobile number</label>
                <input type="number" onChange={onMobileChanged} className="form-control" name="mobile" id="mobile" placeholder="Mobile number" />
            </div>
            <div className="form-group">
                <label for="country">Country</label>
                <input type="text" onChange={onCountryChanged} className="form-control" name="country" id="country" placeholder="Country" />
            </div>
            <div className="form-group">
                <label for="city">City</label>
                <input type="text" onChange={onCityChanged} className="form-control" name="city" id="city" placeholder="City" />
            </div>
            <div className="form-group">
                <label for="state">State</label>
                <input type="text" onChange={onStateChanged} className="form-control" name="state" id="state" placeholder="State" />
            </div>
            <div className="form-group">
                <label for="message">Message</label>
                <input type="text" onChange={onMessageChanged} className="form-control" name="message" id="message" placeholder="Message" />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </>
    );
}

export default RegistrationForm