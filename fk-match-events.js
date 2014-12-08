var matchstates = {
    before: {
        text: 'Före matchen'
    },
    soon: {
        text: 'Snart avspark'
    },
    verysoon: {
        text: 'Nationalsånger'
    },
    firsthalf: {
        text: 'Första halvlek'
    },
    pause: {
        text: 'pause'
    },
    secondhalf: {
        text: 'Andra halvlek'
    },
    after: {
        text: 'Matchen slut'
    }
};

exports.events = [{
    text : 'Arsenal - Manchester United börjar snart',
    state : matchstates.before,
    image: 'images/waiting.gif'
},
{
    text : 'Matchen börjar om 3 timmar', 
    state : matchstates.before
},
{
    text : 'Matchen börjar om 2 timmar', 
    state : matchstates.before
},
{
    text : 'Matchen börjar om 1 timmar', 
    state : matchstates.before
},
{
    text : 'Matchen börjar om 10 min',
    state : matchstates.soon,
    image: 'images/countdown.gif'
},
{
    text : 'Matchen börjar om 5 min',
    state : matchstates.soon
},
{
    text : 'Matchen börjar om 4 min',
    state : matchstates.soon
},
{
    text : 'Matchen börjar om 3 min', 
    state : matchstates.soon
},
{
    text : 'Matchen börjar om 2 min', 
    state : matchstates.verysoon,
    image: 'images/verysoon.gif'
},
{
    text : 'Matchen börjar om 1 min',
    state : matchstates.verysoon
},
{
    text : 'Matchen börjar nu', 
    state : matchstates.firsthalf,
    image: 'images/teamwork.gif'
},
{
    text : 'Första halvlek. 10 min in i Matchen',
    state : matchstates.firsthalf
},
{
    text : 'Första halvlek. 20 min in i Matchen',
    state : matchstates.firsthalf
},
{
    text : 'Första halvlek. 30 min in i Matchen', 
    state : matchstates.firsthalf
},
{
    text : 'Första halvlek. 40 min in i Matchen',
    state : matchstates.firsthalf
},
{
    text : 'Första halvlek slut. Paus i 15 minuter.',
    state : matchstates.pause,
    image : 'images/waiting.gif'
},
{
    text : 'Avspark andra halvlek. 45 min in i Matchen',
    state : matchstates.secondhalf,
    image : 'images/long-kick.gif'
},
{
    text : 'Andra halvlek. 55 min in i Matchen',
    state : matchstates.secondhalf
},
{
    text : 'Andra halvlek. 65 min in i Matchen', 
    state : matchstates.secondhalf
},
{
    text : 'Andra halvlek. 75 min in i Matchen',
    state : matchstates.secondhalf
},
{
    text : 'Andra halvlek. 80 min in i Matchen',
    state : matchstates.secondhalf
},
{
    text : 'Andra halvlek. 85 min in i Matchen', 
    state : matchstates.secondhalf
},
{
    text : 'Andra halvlek, tre minuters tilläggstid. 90 min in i Matchen',
    state : matchstates.secondhalf
},
{
    text : 'Matchen slut.',
    state : matchstates.after,
    image : 'images/breath.gif'
},
{
    text : 'Efterssnack.',
    state : matchstates.after,
    image : 'images/disqus.gif'
},
{
    text : 'Efterssnack slut.',
    state : matchstates.after
}

];

exports.matchstates = matchstates;


    