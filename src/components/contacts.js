import React from 'react'

const Contacts = ({contacts}) => {
    return (
        <div>
            <center><h1>Quotes</h1></center>
            {contacts.map((contact) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{contact.name}</h5>
                        <p class="card-text">{contact.catchPhrase}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Contacts