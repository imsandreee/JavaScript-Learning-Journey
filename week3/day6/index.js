import { countryData } from './countries_data_old.js';
const population = document.querySelector('#population-btn');
const language = document.querySelector('#language-btn');
const headers = document.querySelector('#head-text');
const countries = document.querySelector('#countries');

population.addEventListener('click', e => {
    headers.innerHTML = 'Most Populated Countries In the World';
    countries.innerHTML = ''; 

    const sortedCountries = [...countryData].sort((a, b) => b.population - a.population);
    
    // Find the highest population (the first item) to use as 100% max width
    const maxPopulation = sortedCountries[0]?.population || 1;

    for (const country of sortedCountries) {
        // Calculate what percentage of the bar should be filled
        const percentage = (country.population / maxPopulation) * 100;

        countries.innerHTML += `
            <li>
                <span class="item-name">${country.name}</span>
                <div class="bar-container">
                    <div class="bar population-bar" style="width: ${percentage}%"></div>
                </div>
                <span class="item-value">${country.population.toLocaleString()}</span>
            </li>
        `;
    }
});

language.addEventListener('click', e => {
    headers.innerHTML = 'Most Spoken Languages in the World';
    countries.innerHTML = ''; 

    const languageCounts = {};
    for (const country of countryData) {
        for (const lang of country.languages) {
            const langName = typeof lang === 'string' ? lang : lang.name;
            languageCounts[langName] = (languageCounts[langName] || 0) + 1;
        }
    }

    const sortedLanguages = Object.entries(languageCounts).sort((a, b) => b[1] - a[1]);
    
    // Find the highest language count (the first item) to use as 100% max width
    const maxLanguageCount = sortedLanguages[0]?.[1] || 1;

    for (const [langName, count] of sortedLanguages) {
        // Calculate what percentage of the bar should be filled
        const percentage = (count / maxLanguageCount) * 100;

        countries.innerHTML += `
            <li>
                <span class="item-name">${langName}</span>
                <div class="bar-container">
                    <div class="bar language-bar" style="width: ${percentage}%"></div>
                </div>
                <span class="item-value">${count} countries</span>
            </li>
        `;
    }
});