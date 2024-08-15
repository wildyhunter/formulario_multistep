import './App.css';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import UserForm from './components/UserForm';
import ReviewForm from './components/ReviewForm';
import Thanks from './components/Thanks';
import { useState } from 'react';

import { useForm } from './hooks/useForm';
import { Steps } from './components/Steps';

const formTemplate = {
    name: '',
    email: '',
    review: '',
    comment: '',
};

function App() {
    const [data, setData] = useState(formTemplate);

    const updateFieldHandler = (key, value) => {
        setData((prev) => {
            return { ...prev, [key]: value };
        });
    };

    const forComponents = [
        <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
        <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
        <Thanks data={data} />,
    ];

    const {
        currentStep,
        currentComponent,
        changeStep,
        isLastStep,
        isFirstStep,
    } = useForm(forComponents);

    return (
        <div className="app">
            <div className="header">
                <h2>Deixe sua avalização</h2>
                <p>
                    Ficamos felizes com a sua compra, ulitilize o formulario
                    para abaixo para avaliar nosso produto.
                </p>
            </div>
            <div className="form-container">
                <Steps currentStep={currentStep} />
                <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
                    <div className="inputs-container">{currentComponent}</div>
                    <div className="actions">
                        {!isFirstStep ? (
                            <button
                                type="button"
                                onClick={() => changeStep(currentStep - 1)}
                            >
                                <GrFormPrevious />
                                <span>Voltar</span>
                            </button>
                        ) : null}
                        {!isLastStep ? (
                            <button type="submit">
                                Avançar
                                <GrFormNext />
                            </button>
                        ) : (
                            <button type="button">
                                Enviar
                                <FiSend />
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
