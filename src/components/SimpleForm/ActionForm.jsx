import React from 'react';

const ActionForm = () => {
    const handleSubmit = (FormData) =>{
        console.log(FormData.get('name'));
        console.log(FormData.get('email'));
        
    }
    return (
        <div>
            <form action={handleSubmit}>
                <input type="text" name='name' placeholder='Nmae' />
                <br />
                <input type="email" name='email' placeholder='Email' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ActionForm;