const fs = require('fs');
let c = fs.readFileSync('script.js', 'utf8');

// Replace all occurrences of `, eur: "€xxx"`
c = c.replace(/,\s*eur:\s*"€\d+"/g, '');

// Remove totalEuro variable
c = c.replace(/let totalEuro = data\.costs\.reduce\(\(acc, current\) => \{\s*let priceValue = current\.eur\.replace\('€', ''\)\.replace\(\/,\/g, ''\)\.trim\(\);\s*return acc \+ \(isNaN\(priceValue\) \? 0 : parseFloat\(priceValue\)\);\s*\}, 0\);/g, '');

// Remove EUR TH in table header
c = c.replace(/<th style="text-align: right;">EUR<\/th>/g, '');

// Remove EUR TD in table body
c = c.replace(/<td style="font-size: 0\.8rem; color: var\(--text-light\); text-align: right;">\$\{cost\.eur\}<\/td>/g, '');

// Remove total EUR TD in footer
c = c.replace(/<td style="font-size: 0\.9rem; text-align: right;">€\$\{totalEuro\}<\/td>/g, '');

fs.writeFileSync('script.js', c, 'utf8');
