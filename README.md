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

### License

[License](LICENSE.txt)
