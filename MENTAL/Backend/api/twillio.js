const accountSid = 'ACef056886c667cbfa0470c4941b351efb';
const authToken = 'e8a030fc380a2236c1dd0eae7db69499';
const client = require('twilio')(accountSid, authToken);

const sendSMS = async (to, message) => {
  try {
    const sentMessage = await client.messages.create({
      body: message,
      from: '+16084664671', // Your Twilio phone number
      to: to // The number you want to send the SMS to
    });
    console.log('Message sent successfully and :', sentMessage.sid);
    return sentMessage;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

module.exports = { sendSMS };