// Load environment variables
require("dotenv").config();

const functions = require("firebase-functions");
const cors = require("cors")({origin: true});
const {Configuration, OpenAIApi} = require("openai");

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_KEY,
}));

// Cloud Function: AI Resume Generator
exports.resumeAi = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const {resumeData, templateType} = req.body;
      console.log("Received data:", resumeData, templateType);

      const prompt = `
        Generate a ${templateType} resume for the following data:
        ${JSON.stringify(resumeData, null, 2)}
        Format the resume as plain text.
      `;

      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: prompt}],
        max_tokens: 800,
      });

      const resumeText = completion.data.choices[0].message.content;
      console.log("AI response:", resumeText);

      res.json({success: true, resumeText});
    } catch (err) {
      console.error("AI resume error:", err);
      res.json({success: false, error: err.message});
    }
  });
});
