const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

const themesPath = 'node_modules/vue-mapp/src/themes';
const files = fs.readdirSync(themesPath);
const staticThemesPath = 'static/themes';


console.log(chalk.cyan('\n- copying vue-mapp themes\n'))

if (!fs.existsSync(staticThemesPath)) {
    fs.mkdirSync(staticThemesPath);
}

files.forEach(function(file) {
    if (/\.css/.test(file)) {
        const srcFilePath = path.join(themesPath, file);
        const targetFilePath = path.join(staticThemesPath, file);
        fs.createReadStream(srcFilePath).pipe(fs.createWriteStream(targetFilePath));
    }
});

console.log(chalk.green('  Done\n'))
