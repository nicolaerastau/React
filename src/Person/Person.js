import React from 'react';
import './Person.css';
import Popup from "reactjs-popup";
import Img from 'react-image';
import staff from './staff.png';


const person = (props) => {
   return(
    <div className='Person'>
      <p>{props.position}</p>
      <p>I am {props.name} and I am {props.age} years old.</p>
      <p>{props.children}</p>
      <p>{props.Staff}</p>

      <Popup trigger={<button className="button1"> About me </button>} modal>
  {close => (
    <div className="modal">
      {/*<a className="close" onClick={close}>
        &times;
      </a>*/}
      <div className="header">About me</div>
      <div className="content">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
        Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
        delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
        commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
        explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
      </div>
      <div className="actions">
        <Popup
          trigger={<button className="button2"> Hobbies </button>}
          position="top center"
          closeOnDocumentClick
        >
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni omnis delectus
            nemo, maxime molestiae dolorem numquam mollitia, voluptate ea, accusamus excepturi
            deleniti ratione sapiente! Laudantium, aperiam doloribus. Odit, aut.
          </span>
        </Popup>
        <button
          className="button3"
          onClick={() => {
            console.log('modal closed ')
            close()
          }}
        >
          close
        </button>
    </div>
    </div>
  )}
</Popup>

    </div>

  )
};



export default person;
