import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSendContactMutation } from '../app/portfolioAPI'
import Success from './success'
import CurrencyInput from 'react-currency-input-field'
export default function Contact() {
    const [contactInfo, { isError, isSuccess, isLoading, error }] = useSendContactMutation()
    const [inputInfo, setinputInfo] = useState({})
    const [showAlert, setShowAlert] = useState(false)



    const inputDataHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setinputInfo((prvData) => ({ ...prvData, [name]: value }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const contactObject = {
            name: inputInfo.name,
            email: inputInfo.email,
            budget: inputInfo.budget,
            message: inputInfo.message,
            phone: inputInfo.phone,
        };
        contactInfo(contactObject).unwrap();


    };

    useEffect(() => {

        if (isSuccess) {
            setShowAlert(true)
            setinputInfo({})
        }


    }, [isSuccess])


    useEffect(() => {

        if (showAlert) {
            setTimeout(() => {
                setShowAlert(false)
            }, 5000)
        }


    }, [showAlert])



    let phoneInputErr = isError && error.data.replace(/[&\\#,+()$~%.'":*?<>{}]/g, '').includes('phone')
    let emailInputErr = isError && error.data.replace(/[&\\#,+()$~%.'":*?<>{}]/g, '').includes('email')
    let messageInputErr = isError && error.data.replace(/[&\\#,+()$~%.'":*?<>{}]/g, '').includes('message')
    let nameInputErr = isError && error.data.replace(/[&\\#,+()$~%.'":*?<>{}]/g, '').includes('name')
    let budgetInputErr = isError && error.data.replace(/[&\\#,+()$~%.'":*?<>{}]/g, '').includes('budget')




    return (
        <>
            <Success thankyou='thank you' message='message send successfuly' classes={showAlert ? 'show-alert' : ''} />

            <div id="section--6">
                <div className="container section">
                    <div className="s6headerTitle">
                        <h1>Let’s Make Something
                            Great Together</h1>
                    </div>
                    <div className="s6headerText">

                        contact me if you need a full-stack developer

                    </div>

                    <div id="section--7" className="formSection">
                        <form onSubmit={handleSubmit} className="section">
                            <div className="row">

                                <div className="col-sm-6">

                                    <input placeholder="name" style={{ backgroundColor: nameInputErr ? 'red' : '' }} type="text" name="name" id="name"
                                        onChange={inputDataHandler} value={inputInfo.name || ''} />
                                </div>
                                <div className="col-sm-6">
                                    <input placeholder="email" type="emai;" name="email"
                                        style={{ backgroundColor: emailInputErr ? 'red' : '' }}
                                        id="email" autoComplete="on"
                                        onChange={inputDataHandler} value={inputInfo.email || ''} />
                                </div>
                                <div className="col-sm-6">
                                    <input placeholder="phone: ex 07700100101" type="text"
                                        style={{ backgroundColor: phoneInputErr ? 'red' : '' }}
                                        onChange={inputDataHandler} value={inputInfo.phone || ''}
                                        name="phone" id="phone" />
                                </div>
                                <div className="col-sm-6">


                                    <CurrencyInput
                                        id="budget optional"
                                        name="budget"
                                        placeholder="Please enter a number OPTINAL"
                                        defaultValue={0}
                                        decimalsLimit={2}
                                        decimalSeparator='.'
                                        allowNegativeValue={false}
                                        prefix='IQD '
                                        onValueChange={(value, name) => {
                                            setinputInfo((prvData) => ({ ...prvData, [name]: value }))
                                        }}
                                        style={{ backgroundColor: budgetInputErr ? 'red' : '' }}
                                    />;


                                </div>

                                <div className="textArea">

                                    <textarea
                                        onChange={inputDataHandler} value={inputInfo.message || ''}
                                        style={{ backgroundColor: messageInputErr ? 'red' : '' }}
                                        name="message" id="" cols={30} rows={10} placeholder="message"></textarea>
                                    <p className='err'>{isError && error.data.replace(/[&\\#,+()$~%.'":*?<>{}]/g, '')}</p>
                                    <button style={{ width: '100%' }} >{isLoading ? 'sending...' : 'send'}</button>
                                </div>

                            </div>


                        </form>
                    </div>

                </div>
            </div >

        </>
    )
}
