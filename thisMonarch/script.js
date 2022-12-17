const titleArray = ['King', 'Emperor', 'Pharaoh', 'Duke', 'Grand Duke', 'Prince', 'Shah', 'Shahanshah', 
'Archduke', 'Lord Protector', 'Caliph', 'Negus', 'Negusa Nagast', 'Knyaz', 'Velikiy Knyaz', 'Kaiser',
'Tsar', 'High King'];

const rulerNameArray = ['Menelik', 'Yohannes', 'Tewodros', 'Mikael', 'Kwestantinos', 'Lebna Dengel', 
'Zera Yacob', 'Haile Selassie', 'Iyasu', 'Suleiman', 'Mehmed', 'Osman', 'Constantine', 'Michael', 
'Anastasius', 'Justinian', 'Valentinian', 'Basil', 'Heraclitus', 'Romanus', 'Vittorio', 
'Vittorio Emmanuele', 'Umberto', 'Claudius', 'Hadrian', 'Trajan', 'Aurelian', 'Phocas', 
'Harald', 'Edward', 'Alfred', 'Harold', 'Aethelred', 'Edmund', 'William', 'Robert', 'Henry', 
'Stephen', 'Eudes', 'Philippe', 'Louis', 'Charles', 'Napoleon', 'Carlos', 'Louis-Philippe', 
'Frederick', 'Frederick William', 'Ercole', 'Casimir', 'Augustus', 'John', 'Ramesses', 'Thutmose', 
'Ivan', 'Vasily', 'Vladimir', 'Uthman', 'Muawiya', 'Harun', 'Abbas', 'Jahangir', 'Akbar', 'Aurangzeb', 
'Suryavarman', 'Kangxi', 'Qianlong', 'Yongle', 'Jacques', 'Henri-Christophe', 'Ferdinand', 'Pedro', 
'Peter', 'Moctezuma', 'Musa', 'Antiochus', 'Alexander', 'Darius', 'Cyrus', 'Xerxes', 'Romulus', 
'Baldwin', 'Leopold', 'Muhammad', 'Ranjit Singh', 'Gundobad', 'Priam', 'Gustav', 'Gustav Adolph'];

const regnalNumArray = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 
'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII'];

const nicknameArray = ['Longsword', 'the Great', 'the Bald', 'the Fat', 'the Accursed', 'the German', 
'the Terrible', 'Cunctator', 'the Bewitched', 'the Fair', 'the Just', 'the Conqueror', 'Gothicus', 
'Africanus', 'Sarmaticus', 'Britannicus', 'Germanicus', 'Macedonicus', 'the Ill-raed', 'Ironside',
'Bulgar-Slayer', 'Restitutor Orbis', 'Augustulus', 'Monomachus', 'Asiaticus', 'the Lion of Punjab',
'Stupor Mundi', 'the Bold', 'the Desired', 'the Lion of the North', 'the Rightly-Guided'];

const polityArray = ['France', 'the French', 'Belgium', 'the Belgians', 'Spain', 'Castile', 'Leon', 
'Aragon', 'Granada', 'Valencia', 'Galicia', 'Portugal', 'the Ottoman Empire', 'Rome', 'the Arverni', 
'England', 'Scotland', 'Ireland', 'Francia', 'the Franks', 'Burgundy', 'Neustria', 'Austria', 
'the Holy Roman Empire', 'the Two Lands', 'Babylon', 'Ur', 'Ashur', 'Assyria', 'Persia', 'Macedonia', 
'Sparta', 'Mycenae', 'Troy', 'Russia', 'Rus', 'Poland', 'Saxony', 'Brandenburg-Prussia', 'Ethiopia', 
'China', 'the Khmer Empire', 'the Ilkhanate', 'the Golden Horde', 'Muscovy', 'the United Kingdom', 
'the United Kingdom of the Netherlands', 'Norway', 'Sweden', 'Egypt', 'the Dar al Islam', 
'Brazil', 'the Low Countries', 'Tuscany', 'Italy', 'the Commonwealth of Poland', 'Brunswick', 
'Piedmont-Sardinia', 'the Two Sicilies', 'Italy', 'Yugoslavia', 'Bohemia', 'Mali', 
'the Sokoto Caliphate'];

const era = ['BC', 'AD'];

//const reignLength = Math.floor(Math.random() * 100);

const titleSelector = () => {
    let diceRoll = Math.floor(Math.random() * titleArray.length);
    return titleArray[diceRoll];
};

const rulerNameSelector = () => {
    let diceRoll = Math.floor(Math.random() * rulerNameArray.length);
    return rulerNameArray[diceRoll];
};

const regnalNumSelector = () => {
    let hasRnDiceRoll = Math.floor(Math.random() * 2);
    //console.log(hasRnDiceRoll);
    if (hasRnDiceRoll === 0) {
        return '';
    } else if (hasRnDiceRoll === 1) {
        let diceRoll = Math.floor(Math.random() * 100);
        if (diceRoll < 30) {
            return regnalNumArray[0];
        } else if (diceRoll < 35) {
            return regnalNumArray[1];
        } else if (diceRoll < 50) {
            return regnalNumArray[2];
        } else if (diceRoll < 60) {
            return regnalNumArray[3];
        } else if (diceRoll < 65) {
            return regnalNumArray[4];
        } else if (diceRoll < 70) {
            return regnalNumArray[5];
        } else if (diceRoll < 75) {
            return regnalNumArray[6];
        } else if (diceRoll < 80) {
            return regnalNumArray[7];
        } else if (diceRoll < 83) {
            return regnalNumArray[8];
        } else if (diceRoll < 86) {
            return regnalNumArray[9];
        } else if (diceRoll < 88) {
            return regnalNumArray[10];
        } else if (diceRoll < 90) {
            return regnalNumArray[11];
        } else if (diceRoll < 92) {
            return regnalNumArray[12];
        } else if (diceRoll < 94) {
            return regnalNumArray[13];
        } else if (diceRoll < 96) {
            return regnalNumArray[14];
        } else if (diceRoll < 97) {
            return regnalNumArray[15];
        } else if (diceRoll < 98) {
            return regnalNumArray[16];
        } else if (diceRoll < 100) {
            return regnalNumArray[17];
    }
    };
};

const nicknameSelector = () => {
    let hasNnDiceRoll = Math.floor(Math.random() * 2);
    if (hasNnDiceRoll === 0) {
        return '';
    } else if (hasNnDiceRoll === 1) {
        let diceRoll = (Math.floor(Math.random() * nicknameArray.length))
        return nicknameArray[diceRoll];
    };
}

const politySelector = () => {
    let diceRoll = Math.floor(Math.random() * polityArray.length);
    return polityArray[diceRoll];
}

let selectedEra = '';

let reignStart = 0;

let reignLength = 0;

let reignEnd = 0;

const eraSelector = () => {
    let diceRoll = Math.floor(Math.random() *2);
    return selectedEra = era[diceRoll];
};

const reignStartGenerator = () => {
    if (selectedEra === 'BC') {
        return reignStart = Math.floor(Math.random() * 3000);
    } else if (selectedEra === 'AD') {
        return reignStart = Math.floor(Math.random() * 1900);
    }
};

const reignLengthGenerator = () => {
    reignLength = Math.floor(Math.random() * 10);
    let diceRoll = Math.floor(Math.random() * 20);
    if (diceRoll < 5) {
        return reignLength;
    } else if (diceRoll < 10) {
       return reignLength += 10;
    } else if (diceRoll < 15) {
        return reignLength += 20;
    } else if (diceRoll < 17) {
        return reignLength += 30;
    } else if (diceRoll < 18) {
        return reignLength += 40;
    } else if (diceRoll < 19) {
        return reignLength += 50;
    } else if (diceRoll < 20) {
        return reignLength += 60;
    }
};

const reignEndCalculator = () => {
    if (selectedEra === 'BC') {
        reignEnd = reignStart - reignLength;
        if (reignEnd > 0) {
            return `${reignEnd} BC`;
        } else if (reignEnd < 0) {
            reignStart = `${reignStart} BC`;
            return `${(reignEnd * 2) - reignEnd} AD`;
        };
    } else if (selectedEra === 'AD') {
        return reignEnd = `${reignStart + reignLength} AD`;
    }
};

const rulerFactory = (title, rulerName, regnalNum, nickname, polity, era, reignStart, reignLength, reignEnd) => {
    return {
        title,
        rulerName,
        regnalNum,
        nickname,
        era,
        reignStart,
        reignLength,
        reignEnd,
        polity,
        rulerSummary () {
            console.log(`${this.title} ${this.rulerName} ${this.regnalNum} ${this.nickname} did not rule ${this.polity} from ${this.reignStart} to ${this.reignEnd}`)
        }
    }
};

rulerFactory(
    titleSelector(), 
    rulerNameSelector(), 
    regnalNumSelector(), 
    nicknameSelector(),
    politySelector(), 
    eraSelector(), 
    reignStartGenerator(),
    reignLengthGenerator(), 
    reignEndCalculator()
    ).rulerSummary();

/*let i = 0;

do {
    i++;
   rulerFactory(
        titleSelector(), 
        rulerNameSelector(), 
        regnalNumSelector(), 
        nicknameSelector(),
        politySelector(), 
        eraSelector(), 
        reignStartGenerator(),
        reignLengthGenerator(), 
        reignEndCalculator()
        ).rulerSummary();
    } while (i < 20);*/


    /*console.log(`title: ${titleSelector()}`);
    console.log(`name: ${rulerNameSelector()}`);
    console.log(`regnal number: ${regnalNumSelector()}`);
    console.log(`nickname: ${nicknameSelector()}`);
    console.log(`polity: ${politySelector()}`);
    console.log(`era: ${eraSelector()}`);
    console.log(`reign start: ${reignStartGenerator()}`);
    console.log(`reign length: ${reignLengthGenerator()}`);
    console.log(`reign end: ${reignEndCalculator()}`);*/
