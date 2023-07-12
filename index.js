import { Configuration, OpenAIApi } from 'openai';
import readline from 'readline';

const config = new Configuration({
    organization: "tu-id-Organizacion-Openai",
    apiKey: "tu-Openai-api-key",
});

const openai = new OpenAIApi(config);

const usarioIntefaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

usarioIntefaz.prompt();

usarioIntefaz.on('line', async (input)=>{
    await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{
            role: "user",
            content: input
        }]
    })
    .then((result)=>{
        console.log(result.data.choices[0].message.content);
        usarioIntefaz.prompt();
    })
    .catch((err)=>{
        console.log('Ops, ha ocurrido un error: ' + err)
    })
})

/*

*/