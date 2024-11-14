const figlet = require("figlet");
import chalk from "chalk";
const { exec } = require("child_process");
const prompt = require('multiselect-prompt')

let logo = "";

figlet("Reach Systems", (err, data) => {
    if (err) {
        console.log(err)
    }
    logo = chalk.blue(data)
})

await Bun.sleep(100);

const colors = [
    {title: 'UI', value: 'UI'},
    {title: 'Auth Proxy', value: 'auth'},
    {title: 'Kanban', value: 'kanban'},
    {title: 'Page', value: 'page'},
    {title: 'Page server', value: 'pageServer'},
    {title: 'Storage server', value: 'storage'},
    {title: 'Page Analytics', value: 'pageAnalytics'},
    {title: 'Landing', value: 'landing'},
    {title: 'Mailing Server', value: 'mailing'}
    {title: 'Mail Template', value: 'templates'},
]

const selected = (items) => items
    .filter((item) => item.selected)
    .map((item) => item.value)

// All these options are optional
const opts = {
    // The message to display as hint if enabled, below is the default value
    hint: '– Space to select. Return to submit.'
}

const handleRunner = (e) => {
    switch (e) {
        case 'UI':
            exec(`
                osascript -e 'tell app "Terminal"
                    do script "cd /Users/iresharma/Documents/reach-io/reach@v2 && bun dev"
                end tell'
            `)
            break
        case 'auth':
            exec(`
                osascript -e 'tell app "Terminal"
                    do script "cd /Users/iresharma/GolandProjects/awesomeProject && source .env && go run cmd/main.go"
                end tell'
            `)
            break
        case 'kanban':
            exec(`
                osascript -e 'tell app "Terminal"
                    do script "cd /Users/iresharma/Documents/pythonProject && source venv/bin/activate && source .env && python3 main.py"
                end tell'
            `)
            break
        case 'mailing':
            exec(`
                osascript -e 'tell app "Terminal"
                    do script "cd /Users/iresharma/Documents/flaskProject && source venv/bin/activate && source .env && python3 app.py"
                end tell'
            `)
            break
        case 'pageServer':
            exec(`
                osascript -e 'tell app "Terminal"
                    do script "cd /Users/iresharma/Documents/reach-io/reach-page-server && bun dev"
                end tell'
            `)
            break
        case 'pageAnalytics':
            exec(`
                osascript -e 'tell app "Terminal"
                    do script "cd /Users/iresharma/Documents/reach-page-analytics && source .venv/bin/activate && source .env && python3 app.py "
                end tell'
            `)
            break
        case 'page':
            exec(`
                osascript -e 'tell app "Terminal"
                    do script "cd /Users/iresharma/GolandProjects/Reach-page && source .env && go run cmd/main.go"
                end tell'
            `)
            break
        case 'templates':
            exec(`
                osascript -e 'tell app "Terminal"
                    do script "cd /Users/iresharma/Documents/reach-io/react-email-starter && bun dev"
                end tell'
            `)
            break
        case 'landing':
            exec(`
                osascript -e 'tell app "Terminal"
                    do script "cd /Users/iresharma/Documents/reach-io/temp-landing && bun dev"
                end tell'
            `)
            break
        case 'storage':
            exec(`
                osascript -e 'tell app "Terminal"
                    do script "cd /Users/iresharma/Documents/reach-file-server && source .venv/bin/activate && source .env && python3 app.py"
                end tell'
            `)
            break
    }
}

prompt("\n" + logo + '\nWhich colors do you like?', colors, opts)
    .on('data', (data) => console.log('Changed to', selected(data.value)))
    .on('abort', (items) => console.log('Aborted with', selected(items)))
    .on('submit', (items) => console.log('Submitted with', selected(items).forEach(e => handleRunner(e))))
