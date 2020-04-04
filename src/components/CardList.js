import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const Cards = robots.map(({ id, name }) => {
        return <Card key={id} name={name} id={id}></Card>;
    });
    console.log(Cards);
    return <>{Cards}</>;
};

export default CardList;
