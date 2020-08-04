import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/18581577?s=460&u=0ee5799c21942c400900a00deeefef5bf0c64848&v=4"
                alt="Henrique Gundes" />
            <div>
                <strong>Henrique Gundes</strong>
                <span>Lorem ipsum</span>
            </div>
        </header>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque non arcu sed arcu scelerisque iaculis. 
            Nulla rhoncus, enim ac scelerisque rutrum, nulla eros 
            rutrum felis, non rhoncus lectus dolor et lorem. 
            Fusce maximus neque nec accumsan dictum.
            <br></br>
            Curabitur non velit at metus molestie pretium. 
            Vestibulum eget rutrum nibh. Sed sit amet egestas augue, non scelerisque est. 
            Nunc congue eleifend justo id pretium. Nullam sed dolor elementum orci placerat mollis sit amet ut elit. 
            Donec consectetur mollis tincidunt. Sed eu sem nec diam convallis lobortis eu id mauris. 
            Nullam et pulvinar ligula. Vivamus sit amet leo vel neque euismod ornare non nec lorem. 
            Donec nisl erat, posuere rhoncus eros quis, scelerisque vestibulum urna.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 100,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;