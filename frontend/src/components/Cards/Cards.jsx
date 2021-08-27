import React from 'react'
import Covid from '../../bg-images/COVID-Testing.jpg'
import Ambulance from '../../bg-images/ambulance.jpg'
import Equipment from '../../bg-images/equipment.jpg'
import './Cards.css'

const Card = () => {
    return <figcaption>
        <section className="card">
            <img src={Equipment} alt="Equipment" />
            <div className="text">
                <h1>World Class Facilties</h1>
                <div className="underline"></div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda sequi pariatur ut temporibus accusamus libero magnam excepturi animi culpa corporis aliquam expedita nostrum fugit, amet aspernatur, tempora, illo ad explicabo quo rerum provident. Nesciunt commodi perferendis beatae fugiat quod magnam, autem quia consequatur quae reiciendis a nemo pariatur culpa voluptatibus odit doloribus eligendi aspernatur saepe asperiores? Ipsa quod blanditiis consequatur assumenda cumque impedit recusandae, natus neque distinctio soluta, unde quia officia consectetur sapiente harum totam. Saepe corporis dolores, quo, incidunt adipisci nam placeat aliquid qui cum perferendis omnis ea ratione, rerum unde? Voluptas soluta nostrum asperiores libero, ullam optio minus.</p>
            </div>
        </section>
        <section className="card second">
            <img src={Covid} alt="Covid testing" />
            <div className="text">
                <h1>COVID testing made easy</h1>
                <div className="underline"></div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda sequi pariatur ut temporibus accusamus libero magnam excepturi animi culpa corporis aliquam expedita nostrum fugit, amet aspernatur, tempora, illo ad explicabo quo rerum provident. Nesciunt commodi perferendis beatae fugiat quod magnam, autem quia consequatur quae reiciendis a nemo pariatur culpa voluptatibus odit doloribus eligendi aspernatur saepe asperiores? Ipsa quod blanditiis consequatur assumenda cumque impedit recusandae, natus neque distinctio soluta, unde quia officia consectetur sapiente harum totam. Saepe corporis dolores, quo, incidunt adipisci nam placeat aliquid qui cum perferendis omnis ea ratione, rerum unde? Voluptas soluta nostrum asperiores libero, ullam optio minus.</p>
            </div>
        </section>
        <section className="card">
            <img src={Ambulance} alt="Ambulance" />
            <div className="text">
                <h1>Best Ambulance service in the country</h1>
                <div className="underline"></div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda sequi pariatur ut temporibus accusamus libero magnam excepturi animi culpa corporis aliquam expedita nostrum fugit, amet aspernatur, tempora, illo ad explicabo quo rerum provident. Nesciunt commodi perferendis beatae fugiat quod magnam, autem quia consequatur quae reiciendis a nemo pariatur culpa voluptatibus odit doloribus eligendi aspernatur saepe asperiores? Ipsa quod blanditiis consequatur assumenda cumque impedit recusandae, natus neque distinctio soluta, unde quia officia consectetur sapiente harum totam. Saepe corporis dolores, quo, incidunt adipisci nam placeat aliquid qui cum perferendis omnis ea ratione, rerum unde? Voluptas soluta nostrum asperiores libero, ullam optio minus.</p>
            </div>
        </section>
    </figcaption>
}

export default Card
