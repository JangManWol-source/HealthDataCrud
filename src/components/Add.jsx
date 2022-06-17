import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const Add = () => {

    const [fullName, setFullName] = useState('')
    const [temperature, setTemperature] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState('')

    const onSubmitHandler = (event) => {
        event.preventDefault()

        const data = {
            full_name: fullName,
            temperature: temperature,
            email: email,
            phone_number: phone
        }
        axios.post("https://mern-health-data.herokuapp.com/health/add", data)
            .then(res => window.location = "/")
            .catch(err => console.log("Error :" + err))
    }


    return (
        <div className='w-100 p-2 d-flex justify-content-center flex-column align-items-center'>
            <h2>Add Health Record</h2>
            <form className='w-75' onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label for="inputName">Fullname</label>
                    <input value={fullName} onChange={(e) => {setFullName(e.target.value)}} type="text" className="form-control" id="inputName" aria-describedby="emailHelp" placeholder="Enter username" />
                </div>
                
                <div className="form-group">
                    <label for="inputTemp">Temperature</label>
                    <input value={temperature} onChange={(e) => {setTemperature(e.target.value)}} type="number" className="form-control" id="inputTemp" aria-describedby="emailHelp" placeholder="Enter temperature" />
                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input value={email} onChange={(e) => {setEmail(e.target.value)}}  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div className="form-group">
                    <label for="phoneNumberInput">Phone</label>
                    <input value={phone} onChange={(e) => {
                        setPhone(e.target.value)
                    }} type="tel" className="form-control" id="phoneNumberInput" placeholder="Enter phone number" />
                </div>
                <div>
                <button type="submit" class="mt-2 btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Add