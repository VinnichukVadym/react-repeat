import React from 'react';

import {Character} from "../rickAndMortyCharacter/character";
import './characters.css';

export const Characters = () => {

    let characters = [
        {
            id: 1,
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        },
        {
            id: 2,
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        },
        {
            id: 3,
            name: "Summer Smith",
            status: "Alive",
            species: "Human",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        },
        {
            id: 4,
            name: "Beth Smith",
            status: "Alive",
            species: "Human",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        },
        {
            id: 5,
            name: "Jerry Smith",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        },
        {
            id: 6,
            name: "Abadango Cluster Princess",
            status: "Alive",
            species: "Alien",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
        },
    ]

    return (
        <div>
            <h2 className={'title2'}> Rick And Morty Characters</h2>
            <div className={'wrap'}>
                {
                    characters.map(character =>
                        <Character key={character.id}
                                   id={character.id}
                                   name={character.name}
                                   gender={character.gender}
                                   image={character.image}
                                   status={character.status}
                                   species={character.species}

                        />)
                }
            </div>
        </div>
    );
};
