// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityHandler, MessageFactory } = require('botbuilder');

const { QnAMaker } = require('botbuilder-ai');
const DentistScheduler = require('./dentistscheduler');
const IntentRecognizer = require("./intentrecognizer")

class DentaBot extends ActivityHandler {
    constructor(configuration, qnaOptions) {
        // call the parent constructor
        super();
        if (!configuration) throw new Error('[QnaMakerBot]: Missing parameter. configuration is required');

        // create a QnAMaker connector
        this.qnaMaker = new QnAMaker(configuration.QnAConfiguration, qnaOptions);
       
        // create a DentistScheduler connector
        this.dentistScheduler = new DentistScheduler(configuration.SchedulerConfiguration);
      
        // create a IntentRecognizer connector
        this.intentRecognier = new IntentRecognizer(configuration.LuisConfiguration);

        this.onMessage(async (context, next) => {

            // Send user input to QnA maker
            const qnaResults = await this.qnaMaker.getAnswers(context);

            // Send user input to LUIS
            const LuisResult = await this.intentRecognier.executeLuisQuery(context);
                     
            if (LuisResult.luisResult.prediction.topIntent == 'getAvailability' &&
                LuisResult.intents.getAvailability.score > .6 &&
                LuisResult.entities.$instance){
                    // call api with location entity info
                    const availableTime = await this.dentistScheduler.getAvailability();
                    await context.sendActivity(availableTime);
                    next();
                    return;
            }

            if (LuisResult.luisResult.prediction.topIntent == 'scheduleAppointment' &&
                LuisResult.intents.scheduleAppointment.score > .6 &&
                LuisResult.entities.$instance && 
                LuisResult.entities.$instance.time &&
                LuisResult.entities.$instance.time[0]){
                    // call api with location entity info
                    const time = LuisResult.entities.$instance.time[0].text;
                    const schedulerResponse = await this.dentistScheduler.scheduleAppointment(time);
                    await context.sendActivity(schedulerResponse);
                    next();
                    return;
            }

            if(qnaResults[0]){
                console.log(qnaResults[0])
                await context.sendActivity(`${qnaResults[0].answer}`);
            }
            else{
                // If no answer was received from QnA maker, reply with help.
                await context.sendActivity(`I'm not sure `
                + 'I found an answer to your question. '
                + `You can ask me questions about availability of doctors and appointment.`);
            }
             
            await next();
    });

        this.onMembersAdded(async (context, next) => {
        const membersAdded = context.activity.membersAdded;
        //write a custom greeting
        const welcomeText = "Hello, I'm DOVA, Dental Office Virtual Assistant. You can ask me about the availability of the doctors or to schedule an appointment for you.";
        for (let cnt = 0; cnt < membersAdded.length; ++cnt) {
            if (membersAdded[cnt].id !== context.activity.recipient.id) {
                await context.sendActivity(MessageFactory.text(welcomeText, welcomeText));
            }
        }
        // by calling next() you ensure that the next BotHandler is run.
        await next();
    });
    }
}

module.exports.DentaBot = DentaBot;
