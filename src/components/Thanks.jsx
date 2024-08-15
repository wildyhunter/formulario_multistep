import React from 'react';
import './Thanks.css';
import {
    BsFillEmojiHeartEyesFill,
    BsEmojiSmileFill,
    BsEmojiNeutralFill,
    BsEmojiFrownFill,
} from 'react-icons/bs';

const emojiData = {
    unsatisfied: <BsEmojiFrownFill />,
    neutral: <BsEmojiNeutralFill />,
    satisfied: <BsEmojiSmileFill />,
    very_satisfied: <BsFillEmojiHeartEyesFill />,
};

function Thanks({ data }) {
    return (
        <div className="thanks-container">
            <h2>Falta pouco...</h2>
            <p>
                Dua opnião é muito importante, em breve você receberá um cupom
                de 10% de deconto para sua próxima compra.
            </p>
            <p>Para concluir sua avaliação clique no botão de Enviar abaixo.</p>
            <h3>Aqui está o resumo de sua avaliação {data.name}:</h3>
            <p className="review-data">
                <span>Satisfação com o produto:</span>
                {emojiData[data.review]}
            </p>
            <p className="review-data">
                <span>Comentário:</span>
                {data.comment}
            </p>
        </div>
    );
}

export default Thanks;
