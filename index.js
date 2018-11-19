'use strict';

exports.message = (req, res) => {

  let phoneNumber;
  let textMessage;

  switch (req.get('content-type')) {

    case 'application/json':
      phoneNumber = req.body.phoneNumber;
      textMessage = req.body.textMessage;
      break;

    case 'application/x-www-form-urlencoded':
      phoneNumber = req.body.phoneNumber;
      textMessage = req.body.textMessage;
      break;
  }

  const credentials = {
    apiKey: process.env.AFRICASTALKINGAPIKEY,
    username: process.env.AFRICASTALKINGUSERNAME
  }

  const AfricasTalking = require('africastalking')(credentials);

  const sms = AfricasTalking.SMS;

  function sendMessage() {
    
    const options = {
      to: [phoneNumber],
      message: textMessage
    }

    sms.send(options).then(response => {
      res.send(response);
    }).catch(error => {
      res.send(error);
    });

  }

  sendMessage();
};