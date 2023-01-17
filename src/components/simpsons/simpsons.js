import React from 'react';

import {Simpson} from "../simpson/simpson";
import './simpsons.css';

export const Simpsons = () => {

    const simpsons = [
        {
            id: 1,
            name: 'Homer Simpson',
            age: 39,
            gender: 'male',
            img: 'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png',
            description: 'Homer Jay Simpson (born May 12, 1956) is a man from Springfield. He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be 239 pounds)[41], lazy, and often ignorant to the world around him. Although he has many flaws, he has shown to have great caring, love, and even bravery to those he cares about and, sometimes, even others he doesn\'t.'
        },
        {
            id: 2,
            name: 'Marge Simpson',
            age: 36,
            gender: 'female',
            img: 'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png',
            description: 'Marjorie Jacqueline "Marge" Simpson  is the homemaker and matriarch of the Simpson family. She is also one of the five main characters in The Simpsons TV series. She and her husband Homer have three children: Bart, Lisa, and Maggie. Marge is the moralistic force in her family and often provides a grounding voice in the midst of her family\'s antics by trying to maintain order in the Simpson household. Aside from her duties at home, Marge has flirted briefly with a number of careers ranging from a police officer to an anti-violence activist.'
        },
        {
            id: 3,
            name: 'Bart Simpson',
            age: 10,
            gender: 'male',
            img: 'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png',
            description: 'Bartholomew JoJo "Bart" Simpson (born February 23 or April 1, 1980) is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons. He is the only son of Homer and Marge Simpson, and the older brother of Lisa and Maggie. He also has been nicknamed "Cosmo", after discovering a comet in "Bart\'s Comet". Bart has also been on the cover on numerous comics, such as "Critical Hit", "Simpsons Treasure Trove #11", and "Winter Wingding". Bart also has a 100-issue comic series entitled the Simpson Comics Presents Bart Simpson. Bart is loosely based on Matt Groening and his older brother, Mark Groening.'
        },
        {
            id: 4,
            name: 'Lisa Simpson',
            age: 8,
            gender: 'female',
            img: 'https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png',
            description: 'Lisa Marie Simpson (born May 9, 1983)[9] is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series. In "Homer and Lisa Exchange Cross Words" she is also known as Lisa Bouvier. She was named after a train called Lil\' Lisa on her parents\' 1st anniversary. She is a charismatic 8-year-old girl, who exceeds the standard achievement of the intelligence level of children her age. Not to everyone\'s surprise, she is also the moral center of her family. In her upbringing, Lisa lacks parental involvement of Homer and Marge, which leads to hobbies such as playing saxophone and guitar, riding and caring for horses, and interest in advanced studies. In school, Lisa\'s popularity is affected by those who view her as a geeky overachiever, which leaves her with only a few friends. She focuses on her goals and strives to reach her potential, and at the age of eight, she is already a member of Mensa with an IQ of 159. Her lack of parental involvement also leads to her lashing out at those who she deems lower than her or even above her. She has extreme jealousy from time to time and will do whatever it takes to reclaim her title as the smartest; but only if she deems it necessary. Otherwise, she\'s the intelligent one who usually thinks things through.'
        },
        {
            id: 5,
            name: 'Maggie Simpson',
            age: 1,
            gender: 'female',
            img: 'https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png',
            description: 'Margaret Evelyn Lenny  "Maggie" Simpson (born January 14, 1988) is the 1-year-old daughter and youngest child of Marge and Homer Simpson, the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons. She is often seen sucking on her pacifier, and when she walks, she trips over her clothing and falls on her face. Because she rarely ever talks, Maggie is the least seen and heard in the Simpson family. Maggie is at the very young, infant age of 1.'
        }
    ]


    return (
        <div>
            <h1 className={'title'}> Simpsons Family</h1>
            {simpsons.map(simpson => <Simpson key={simpson.id}
                                              name={simpson.name}
                                              age={simpson.age}
                                              description={simpson.description}
                                              img={simpson.img}
                                              gender={simpson.gender}
            />)}
        </div>
    );
};
