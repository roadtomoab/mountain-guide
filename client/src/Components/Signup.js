import { useState } from 'react';

function Signup () {

    const [ formData, setFormData ] = useState({
        email: "",
        username: "",
        password: ""
    });

    return (

        <div className="signup">
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="e-mail"
                value={formData.email}
                onChange={handleChange}
                />
                <input 
                type="text"
                placeholder="username"
                value={formData.username}
                onChange={handleChange}
                />
                <input
                type="text"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            <p>Already have an account?</p>
            <p>Click here to LogIn</p>
        </div>

    )
}

export default Signup;