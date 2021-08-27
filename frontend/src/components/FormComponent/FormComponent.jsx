import React, { useState } from 'react'
import { initialGeneralData, initialCondition } from '../../initialStateValues'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import './FormComponent.css'

//URL for send post request
const postURL = 'http://localhost:6969/add-response'

const FormComponent = () => {
    /* STATE VALUES */

    //state value for personal details
    const [generalData, setGeneralData] = useState(initialGeneralData)

    //state value for medical conditions
    const [conditions, setConditions] = useState(initialCondition)


    /* HANDLE CONTROLLED INPUTS */

    //handles change in general and personal sections
    const changeGeneralData = e => {
        const { name, value } = e.target
        setGeneralData(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    //handles changes in checkboxes in conditions section
    const changeCheckbox = e => {
        const { name } = e.target
        let value = conditions[name]
        // console.log(value);
        setConditions(prev => {
            return {
                ...prev,
                [name]: !value
            }
        })
    }


    /* FORM SUBMISSION */

    //Submission of form
    const handleSubmit = () => {
        const newInput = {
            ...generalData,
            conditions
        }
        Axios.post(postURL, newInput)
        alert("Survey submitted")
        setGeneralData(initialGeneralData)
        setConditions(initialCondition)
    }

    //render
    return <main>
        <h1>Take a Quick Medical Survey</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque quo eveniet illo minus excepturi provident rerum dolore assumenda iusto vitae nam exercitationem cum, labore beatae officiis qui quas! Harum officiis ullam hic fugiat, corporis odio fuga dicta reiciendis quas aspernatur!</p>
        <div className="form-container">
            <h3 className="form-heading">Enter your details</h3>
            <section className="personal">
                <section className="labels">
                    <li><label>Full name:</label></li>
                    <li><label>Age:</label></li>
                    <li><label>Phone No:</label></li>
                    <li><label>Email Address:</label></li>
                </section>
                <section className="inputs">
                    <li><input type="text" name="name" value={generalData.name} onChange={changeGeneralData} /></li>
                    <li><input type="number" name="age" value={generalData.age} onChange={changeGeneralData} className="age" /></li>
                    <li><input type="text" name="phone" value={generalData.phone} onChange={changeGeneralData} /></li>
                    <li><input type="email" name="email" value={generalData.email} onChange={changeGeneralData} /></li>
                </section>
            </section>
            <section className="conditions">
                <h3>Check the conditions that apply to your family</h3>
                <li><input type="checkbox" name="Asthma" onChange={changeCheckbox} /><label>Asthma</label></li>
                <li><input type="checkbox" name="Cancer" onChange={changeCheckbox} /><label>Cancer</label></li>
                <li><input type="checkbox" name="Cardiac_Diseases" onChange={changeCheckbox} /><label>Cardiac Diseases</label></li>
                <li><input type="checkbox" name="Diabetes" onChange={changeCheckbox} /><label>Diabetes</label></li>
                <li><input type="checkbox" name="Hypertension" onChange={changeCheckbox} /><label>Hypertension</label></li>
                <li><input type="checkbox" name="Psychiatric_Disorders" onChange={changeCheckbox} /><label>Psychiatric Disorders</label></li>
                <li><input type="checkbox" name="Epilepsy" onChange={changeCheckbox} /><label>Epilepsy</label></li>
            </section>
            <section className="general">
                <article className="medication">
                    <h3>Are you currently taking any medication?</h3>
                    <li><input type="radio" name="medication" value="Yes" onChange={changeGeneralData} /><label>Yes</label></li>
                    <li><input type="radio" name="medication" value="No" onChange={changeGeneralData} /><label>No</label></li>
                </article>

                <article className="allergy">
                    <h3>Do you have any allegries?</h3>
                    <li><input type="radio" name="allergy" value="Yes" onChange={changeGeneralData} /><label>Yes</label></li>
                    <li><input type="radio" name="allergy" value="No" onChange={changeGeneralData} /><label>No</label></li>
                    <li><input type="radio" name="allergy" value="Not Sure" onChange={changeGeneralData} /><label>Not sure</label></li>
                </article>

                <article className="tobacco">
                    <h3>Do you have any history of tobacco?</h3>
                    <li><input type="radio" name="tobacco" value="Yes" onChange={changeGeneralData} /><label>Yes</label></li>
                    <li><input type="radio" name="tobacco" value="No" onChange={changeGeneralData} /><label>No</label></li>
                </article>

                <article className="drugs">
                    <h3>Do you have any history of illegal drugs?</h3>
                    <li><input type="radio" name="drugs" value="Yes" onChange={changeGeneralData} /><label>Yes</label></li>
                    <li><input type="radio" name="drugs" value="No" onChange={changeGeneralData} /><label>No</label></li>
                </article>

                <article className="alcohol">
                    <h3>How frequent is your alcohol consumption?</h3>
                    <li><input type="radio" name="alcohol" value="Daily" onChange={changeGeneralData} /><label>Daily</label></li>
                    <li><input type="radio" name="alcohol" value="Weekly" onChange={changeGeneralData} /><label>Weekly</label></li>
                    <li><input type="radio" name="alcohol" value="Monthly" onChange={changeGeneralData} /><label>Monthly</label></li>
                    <li><input type="radio" name="alcohol" value="Ocassionally" onChange={changeGeneralData} /><label>Ocassionally</label></li>
                    <li><input type="radio" name="alcohol" value="Never" onChange={changeGeneralData} /><label>Never</label></li>
                </article>
            </section>
            <section className="gender">
                <label><h3>What is your gender?</h3></label>
                <input type="text" name="gender" onChange={changeGeneralData} value={generalData.gender} />
            </section>
            <Link to='/'><button onClick={handleSubmit} id="submit-btn">Submit Survey</button></Link>
        </div>
    </main>
}

export default FormComponent
