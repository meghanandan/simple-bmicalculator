import React, { useState } from 'react'

const BmiCalculator = () => {

    const [getWeight, setGetWeight] = useState('')
    const [getHeight, setGetHeight] = useState('')
    const [getBmi, setGetBmi] = useState('')
    const [message, setMessage] = useState('')
    const [show, setShow] = useState(false)

    const calculateBmi = (e) => {
        e.preventDefault()

        let bmi = (getWeight / ((getHeight * getHeight) / 10000)).toFixed(2)

        setGetBmi(bmi)

        if(bmi < 16){
            setMessage('Severe Thinness')
        }else if(bmi >= 16 && bmi < 17){
            setMessage('Moderate Thinness')
        }else if(bmi >= 17 && bmi < 18.5){
            setMessage('Mild Thinness')
        }else if(bmi >= 18.5 && bmi < 25){
            setMessage('Normal')
        }else if(bmi >= 25 && bmi < 30){
            setMessage('Overweight')
        }else if(bmi >= 30 && bmi < 35){
            setMessage('Obese Class I')
        }else if(bmi >= 35 && bmi < 40){
            setMessage('Obese Class II')
        }else{
            setMessage('Obese Class III')
        }

        setShow(true)
    }
    
    const resetBtn = () => {
        //window.location.reload()
        setShow(false)
        setGetWeight('')
        setGetHeight('')
        setGetBmi('')
    }

    return(
        <React.Fragment>
            <div className='container'>
                <div className='content'>
                    <h1>BMI Calculator</h1>
                    <form onSubmit={calculateBmi} className='form-inline'>
                        <div className='form-group'>
                            <label>Weight (in kg)</label>
                            <input type="text" value={getWeight} onChange={(e) => setGetWeight(e.target.value)} placeholder='Enter Weight' required />
                        </div>
                        <div className='form-group'>
                            <label>Height (in cm)</label>
                            <input type="text" value={getHeight} onChange={(e) => setGetHeight(e.target.value)} placeholder='Enter Height' required />
                        </div>
                        <div className='btn-group'>
                            <button type='submit' className='btn btn-primary' >Calculate</button>
                            <button type='button' onClick={resetBtn} className='btn btn-secondary' >Reset</button>
                        </div>
                    </form>
                </div>
                    {
                        show ?
                            <div className='showMessage'>
                                Your BMI is: {getBmi} and you are {message}!
                            </div>
                        : ""
                    }
            </div>
        </React.Fragment>
    )

}

export default BmiCalculator