import { useState } from 'react';

function Signup () {

    const [ formData, setFormData ] = useState({
        username: "",
        password: "",
        email: ""
    });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      function handleSubmit(e) {
        e.preventDefault();
    
        const userCreds = { ...formData };
    
        fetch("/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userCreds),
        })
          .then((r) => r.json())
          .then((user) => {
            console.log(user);
            setFormData({
              username: "",
              password: "",
              email: ""
            });
          });
      }

    return (

        <div className="signup">
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="e-mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
                <input 
                type="text"
                placeholder="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                />
                <input
                type="password"
                placeholder="password"
                name="password"
                autoComplete="on"
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