'use strict';
const Alexa = require('alexa-sdk');

const APP_ID = undefined;

const SKILL_NAME = "Facts about Columbia Maryland";
const GET_FACT_MESSAGE = "";
const HELP_MESSAGE = "You can ask me a fact, or, you can say exit... What can I help you with?";
const HELP_REPROMPT = "What can I help you with?";
const STOP_MESSAGE = "Bye!";

// TODO use a separate content file 
const data = [
    "The first post office named Columbia opened in 1874. It was at the intersection of what is now 108 and 29.",
    "Columbia was founded by James W. Rouse, a real estate developer.",
    "Columbia was unveiled on June 21, 1967 as a planned new city",
    "Columbia consists of 10 villages: Wilde Lake, Harper's Choice, Oakland Mills, Long Reach, Owen Brown, Town Center, Hickory Ridge, Kings Contrivance, Dorsey's Search, and River Hill.",
    "Columbia Mall and Lake Kittamaqundi are the centerpiece of Columbia.",
    "Columbia takes its street names from famous works of art and literature.",
    "In 2016, Time's Money magazine ranked Columbia first in Best Places to Live in the United States.",
    "Columbia has always ranked in the top 10 Best Places to Live in the United States since 2006.",
    "There are 10 high schools that serve some part of Columbia.",
    "Two Howard County Public Libraries are located inside Columbia. The Howard County Public Library System was consistently top rated according to the Hennen's American Public Library Ratings",
    "Columbia has three sister cities: Cergy-Pontoise, France; Tema, Ghana; and Tres Cantos, Spain",
    "Notable people from Columbia include: Edward Norton, Elise Ray, Stephen Hunter, Aaron McGruder.",
    "The cartoon OK K.O.! Let's Be Heroes is loosely based on Dobbin and Columbia Crossing shopping centers.",
    "Columbia has a population of 102,221 with median home price of $310,000",
    "The People Tree is the symbolic sculpture of Columbia commissioned by The Rouse Company in 1965 to artist Pierre Du Fayet.",
    "Laura Lippman's fictional novel 'Wilde Lake' is set in Columbia. Lippman graduated from Wilde Lake High School."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
