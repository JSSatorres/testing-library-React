import React, { useState } from 'react';
import './user-form.css'

const UserForm = () => {
  const [formData, setFormData ] = useState({name:"",email:""});
  const [showDiv, setShowDiv ] = useState(false);


  function handleInputChange(e) {
    e.preventDefault()
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  function handleSubmit(event) {
    alert('Nombre: ' + formData.name + '\nCorreo electrónico: ' + formData.email +'\n');
    event.preventDefault();
  }
  return (
    <>
      <button onClick={()=> setShowDiv(!showDiv)}>ver div</button>
      {showDiv && <div> holi</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Nombre:
          </label>
          <input type="text" name="name" id='name' value={formData.name} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="email" >
            Correo electrónico:
          </label>
          <input type="email" name="email" id='email' value={formData.email} onChange={handleInputChange} />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

export default UserForm
