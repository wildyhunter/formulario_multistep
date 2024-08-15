import React from 'react';

function UserForm({ data, updateFieldHandler }) {
    return (
        <div>
            <div className="form-control">
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Seu nome"
                    required
                    value={data.name || ''}
                    onChange={(e) => {
                        updateFieldHandler('name', e.target.value);
                    }}
                />
            </div>
            <div className="form-control">
                <label htmlFor="name">Email:</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Digite seu email"
                    required
                    value={data.email || ''}
                    onChange={(e) => {
                        updateFieldHandler('email', e.target.value);
                    }}
                />
            </div>
        </div>
    );
}

export default UserForm;
