import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css';

function TeacherItem(){
    return(
<article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/17969153?s=400&u=0163c9dad9fa6caafe7085e9b43b8b0cfb1d804c&v=4" alt="Ana Clara"/>
                        <div>
                            <strong>Ana Clara</strong>
                            <span>Química</span>
                        </div>
                    </header>
                    <p>
                       Entusiasta das melhores tecnologias de química avançada.
                        <br/><br/>
                       Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões. 
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="WhatsApp"/>
                            Entrar em contato
                        </button>
                    </footer>
 </article>
    );

}

export default TeacherItem;


