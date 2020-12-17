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
    // 'Bestel gerecht 88 bij de Chinees en eet het op.',
    //     '¥ Blaas een ballon op totdat hij knapt.',
    //     'Pionier een keuken.',
    //     'Doe een Big Mac in één keer in je mond en eet hem op.',
    //     'Doe een goede daad.',
    //     '¥ Draai achter elkaar 88 rondjes in positieve richting.',
    //     'Drink een glas melk uit een koe.',
    //     'Bel 06-???? ???? voor een sportieve opdracht (de staf wordt gebeld).',
    //     'Drink uit een prijs.',
    //     'Prijs drinken aan.',
    //     'Eet een Bosche bol in Den Bosch.',
    //     'Eet een hele citroen op (zonder schil) of eet een hele citroenschil.',
    //     '¥ Eet X rauwe eieren (X is het aantal personen in je team).',
    //     'Eet zo veel mogelijk Ferrero Rochers in één minuut (het wereldrecord staat op 8).',
    //     'Fotografeer een vlieg.',
    //     'Ga in een rondje staan en geef zo een bitchslap door.',
    //     'Ga in een waterfiets.',
    //     'Bel 06-???? ???? voor een grote opdracht.',
    //     'Ga naar de AH XL.',
    //     'Ga naar de lijnmarkt.',
    //     'Ga naar de Remiafabriek.',
    //     'Ga naar de Smickel',
    //     'Ga naar Lutjebroek.',
    //     'Ga onder de boom in de hortus van het Stedelijk in Haarlem zitten.',
    //     'Ga op de foto met iemand in klederdracht.',
    //     '€ Geef de organisatie een taart.',
    //     'Glijd met z\'n allen van een trapleuning.',
    //     'Bel de grootste priemfactor in het getal 617043367.',
    //     'Haal 4 plakjes worst bij de slager.',
    //     'Haal een te-laatbriefje op een middelbare school.',
    //     'Help een marktkoopman.',
    // 'Kijk een gegeven paard in de mond.',
    // 'Klim allemaal in een boom.',
    // 'Knip een kapper.',
    // 'Knip een lintje door.',
    // 'Lak je nagels groen (kan ook groepskleur zijn).',
    // 'Lak je nagels in de introkleur waar je de meeste affectie mee hebt en verzin een goede reden waarom deze kleur beter is dan groen (kan ook de groepskleur).',
    // 'Bel 06-???? ???? voor een gewaagde opdracht.',
    // 'Laat een tekst achter in een grasveld of op een zandvlakte.',
    // 'Leg een hinkelpad aan op straat.',
    // 'Loop met gevaar voor eigen leven onder de dom door.',
    // 'Loop vanaf de voorkant van een rijdende trein naar de achterkant.',
    // 'Luid een klok.',
    // 'Maak een foto van een vliegtuig.',
    // 'Maak een fotoserie van je teamleden.',
    // '€ Maak een madeliefjesketting.',
    // 'Maak een mummie.',
    // 'Maak een piramide.',
    // 'Bel 06-???? ???? voor een geniale opdracht.',
    // 'Maak een praatje met een bejaarde over een onverwacht onderwerp.',
    // 'Maak een schuimfontein.',
    // 'Maak een sculptuur van een koeienvlaai.',
    // 'Maak een stoepkrijttekening midden in de stad.',
    // 'Mail de groepsvoorzitter.',
    // 'Neem de roltrap in tegengestelde richting.',
    // 'Onderneem een Scoutingactie.',
    // 'Ontmoet een burgemeester (minister van volksgezondheid, welzijn en sport mag ook).',
    // 'Ontmoet een celebrity.',
    // 'Passeer minstens X treinen en zwaai (X = aantal leden groepje + 1).',
    // 'Bel 06-???? ???? voor een ultieme opdracht.',
    // 'Plak een Scoutingsticker zo hoog mogelijk.',
    // 'Schilder.',
    // 'Schrijf de groepsnaam in het zand.',
    // '€ Schrijf een gedicht over muizen.',
    // 'Regel een wc-verfrisser.',
    // 'Stempel het kaartje van een conducteur.',
    // 'Vermom je.',
    // 'Vertel een bakker de waarheid.',
    // '€ Verzamel 10 handtekeningen.',
    // '€ Verzamel 10 verschillende bloemen.',
    // 'Bel 06-???? ???? voor een grensverleggende opdracht.',
    // 'Verzamel zo veel mogelijk scouts.',
    // 'Vier een bruiloft.',
    // 'Vind oranje veters.',
    // 'Voer de geitjes.',
    // '€ Vraag het visitekaartje van een slager.',
    // 'Zet een kleine en een lange voorbijganger naast elkaar.',
    // '€ Zet iets blijvends op scoutpedia of de activiteitenbank van Scouting.',
    // 'Zit in een buggy.',
    // 'Zoek groente bij de vishandel.',
    // 'Zwem.',
    // 'Bel 06-???? ???? voor een uitdagende opdracht.',
    // 'Lach een boom 3 minuten lang uit.',
    // 'Maak het daarna weer goed met de boom die je net hebt uitgelachen.',
    // 'Fotografeer een mug of vlieg',
    // 'Kus een kikker.',
    // 'Geef een groepsknuffel met 15 personen.',

    useEffect(() => {
        console.log(cardcontainerRef);
        cardcontainerRef.current.elements = challenges;
    });

    return (
        < div
    className = "App" >
        < cards - container
    ref = {cardcontainerRef} > < /cards-container>
        < /div>
)
    ;
}

export default App;
