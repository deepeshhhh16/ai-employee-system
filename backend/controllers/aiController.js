const axios = require("axios");

exports.getRecommendation = async(req,res)=>{

    try{

        const employee = req.body;

        const prompt = `
        Give promotion recommendation,
        training suggestions,
        and improvement feedback
        for this employee:

        ${JSON.stringify(employee)}
        `;

        const response = await axios.post(

            "https://openrouter.ai/api/v1/chat/completions",

            {
                model:"openai/gpt-3.5-turbo",

                messages:[
                    {
                        role:"user",
                        content:prompt
                    }
                ]
            },

            {
                headers:{
                    Authorization:
                    `Bearer ${process.env.OPENAI_API_KEY}`
                }
            }

        );

        res.json({
            recommendation:
            response.data.choices[0].message.content
        });

    }catch(err){

        res.status(500).json({
            message:err.message
        });

    }

};