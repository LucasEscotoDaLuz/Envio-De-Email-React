import {useState} from 'react';
import './App.css';
import emailjs from '@emailjs/browser';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

function sendEmail(e) {
  e.preventDefault();

  if(name === '' || email === '' || message === '') {
    alert("Preencha todos os campos.");
    return;
  }
  const templateParams = {
    from_name: name,
    message: message,
    email:email
  }
  emailjs.send("service_871d002", "template_5tsthn4", templateParams, "3tqYhmrIcXaKSVg4-")
  .then((response) => {
    console.log("Email enviado", response.status, response.text)
    setName('')
    setEmail('')
    setMessage('')
    alert("Mensagem enviada.")

  }, (err) => {
    console.log("ERRO: ", err)
  })
}

  return (
    <div className="container">
      <div class="cols cols0">
      <span class="topline">Me envie uma mensagem</span>     
     </div>   
      <form className="form" onSubmit={sendEmail}>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="" />
      </form>
      </div>

    
  );
}

export default App;
