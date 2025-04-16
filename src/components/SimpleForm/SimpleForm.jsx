import React from 'react';

const SimpleForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter your name' name='name'/>
                <input type="email" placeholder='Enter Email' name='email'/>
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;