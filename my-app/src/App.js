import './App.css';
import {useEffect, useRef} from 'react';


function App() {

    const cardcontainerRef = useRef();
    const challenges = [
        {
            title: 'Bedank een parkeerwacht voor zijn toevoeging aan de maatschappij.',
            points: 5
        },
        {
            title: 'Bestel gerecht 88 bij de Chinees en eet het op.',
            points: 2
        },
        {
            title: '¥ Blaas een ballon op totdat hij knapt.',
            points: 1
        },
        {
            title: 'Pionier een keuken.',
            points: 2
        },
        {
            title: 'Doe een Big Mac in één keer in je mond en eet hem op.',
            points: 5
        },
        {
            title: 'Doe een goede daad.',
            points: 4
        },
        {
            title: '¥ Draai achter elkaar 88 rondjes in positieve richting.',
            points: 3
        },
        {
            title: 'Drink een glas melk uit een koe.',
            points: 1
        },
        {
            title: 'Prijs drinken aan.',
            points: 1
        },
        {
            title: 'Bel 06-???? ???? voor een sportieve opdracht (de staf wordt gebeld).',
            points: 1
        },
        {
            title: 'Eet een Bosche bol in Den Bosch.',
            points: 1
        }
    ];

    useEffect(() => {
        console.log(cardcontainerRef);
        cardcontainerRef.current.elements = challenges;
    });

  return (
    <div className="App">
      <cards-container ref={cardcontainerRef}></cards-container>
    </div>
  );
}

export default App;
