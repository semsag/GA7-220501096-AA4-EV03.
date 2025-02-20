import { useState } from 'react';
import './App.css';

function Conversor() {

    const [textoAVoz, setTextoAVoz] = useState('');
    const [vozAtexto, setVozATexto] = useState('');
  


    function cambiarTexto(evento) {
        setTextoAVoz(evento.target.value);
    }

    function convertirTextoAVoz() {
        const synth = window.speechSynthesis;
        const utterThis = new SpeechSynthesisUtterance(textoAVoz);
        synth.speak(utterThis);
    }

    function resultado(event) {
        setVozATexto(event.results[0][0].transcript);
    }

    function grabarVozATexto() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert('Tu navegador no soporta reconocimiento de voz.');
            return;
        }
        const recognition = new SpeechRecognition();
        recognition.lang = 'es-ES';
        recognition.start();
        recognition.onresult = resultado;
    }

    return (
            <>
            <h1>Conversor TTS Y STT</h1> 
             <br />
 
             <h3>Conversor de texto a voz</h3>
             <input type="text" id="textoAVoz" value={textoAVoz} onChange={cambiarTexto} placeholder="Texto a convertir" />
             <button onClick={convertirTextoAVoz}>Convertir</button>
 
             <h3>Conversor de voz a texto</h3>
             <button onClick={grabarVozATexto}>Grabar</button>
             {vozAtexto}
            </> 
         ) 
    }




export default Conversor;
