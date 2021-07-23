# DOVA (Dental Office Virtual Assistant)

DOVA is a virtual assistant available for users visiting the [Contoso Dentistry website](https://zealous-pond-02c17e30f.azurestaticapps.net). It answers your general FAQs as well as informs you about the available slots and schedules appointments for the patients. 

## Getting Started

This repository has been divided into multiple branches to isolate the codebase for independentally running CI/CD on multiple modules.
1. [Chatbot](https://github.com/rai-harshit/nd073-c2-Dental-Office-Virtual-Assistant/tree/chatbot)
2. [Contoso Dentistry Website](https://github.com/rai-harshit/nd073-c2-Dental-Office-Virtual-Assistant/tree/dentist-website)
3. [Appointment Scheduler](https://github.com/rai-harshit/nd073-c2-Dental-Office-Virtual-Assistant/tree/scheduler)


### Installation

The required NPM packages can be downloaded by typing the following command in the terminal
```
npm install
```

### Testing

To test the bot locally, make sure you download and install the Microsoft Bot Framework Emulator.
Once the installation for required packages is complete, you can start the bot by typing the following command in the terminal
```
npm start
```
Now, start the Bot Framwork Emulator and click on the 'Open Bot' on the Welcome screen. In the Bot URL, type in the following link
```
http://localhost:3978/api/messages
```
Copy and paste the Microsoft App ID and Microsoft App Password from the .env file.

### Demo

1. The QnA maker is first used to create a Knowledge Base which can be then queried by the chatbot to provide answers to the FAQs.
![qna-maker](https://github.com/rai-harshit/nd073-c2-Dental-Office-Virtual-Assistant/blob/master/screenshots/knowledge_base.png)

2. Next, we train a LUIS model to identify two intents:
- Get availability of slot
- Schedule an appointment
![luis-intent](https://github.com/rai-harshit/nd073-c2-Dental-Office-Virtual-Assistant/blob/master/screenshots/luis_get_availability.png)

3. The modified bot code can be seen in the screenshot attached below.
![bot-code](https://github.com/rai-harshit/nd073-c2-Dental-Office-Virtual-Assistant/blob/master/screenshots/bot_code.png)

4. The bot can be then tested locally using the Microsoft Bot Framework Emulator as can be seen below.
![bot-local](https://github.com/rai-harshit/nd073-c2-Dental-Office-Virtual-Assistant/blob/master/screenshots/dova_local.png)

5. Once tested locally, these modules are then pushed to Github and hosted on Azure App Service using CI/CD.
![github-ci-cd](https://github.com/rai-harshit/nd073-c2-Dental-Office-Virtual-Assistant/blob/master/screenshots/github_ci_cd.png)

6. After deploying the bot on Azure App Service, the same can be tested using the 'Test in Web Chat' UI present on the Azure Portal.
![test-webchat](https://github.com/rai-harshit/nd073-c2-Dental-Office-Virtual-Assistant/blob/master/screenshots/dova_webchat.png)

7. Finally, the bot can be added to the Contoso Dentistry website and tested.
![website-bot-test](https://github.com/rai-harshit/nd073-c2-Dental-Office-Virtual-Assistant/blob/master/screenshots/website_bot_test.png)

### License

[License](LICENSE.txt)
