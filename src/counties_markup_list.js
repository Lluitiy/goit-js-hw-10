import debounce from 'lodash.debounce';
import { onInput } from '.';

const DEBOUNCE_DELAY = 300;

const refs = {
	searchBox: document.querySelector('#search-box'),
	countryUl: document.querySelector('.country-list'),
	countryDiv: document.querySelector('.country-info'),
};
refs.searchBox.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));
export function countriesMarkupList(fields) {
	const markUpListResult = fields
		.map(({ flags: { svg }, name: name }) => {
			return `
        <li>
        <div class ='country-list__item'>
            <img src=${svg} width='30' height='20' class='country-list__icon'/>
                <p>
                    ${name}
                </p>
            </div>
        </li>`;
		})
		.join('');
	refs.countryUl.insertAdjacentHTML('beforeend', markUpListResult);
}

export function oneCountryMarkup([aloneCountry]) {
    const { flags: { svg },
        name: name,
        capital,
        population,
        languages: [languages]} = aloneCountry;
    const aloneCountryResult = `
    <div>
        <img src='${svg}'/>
        <h2>
        ${name}
        </h2>
    </div>    
            <ul>
                <li>
                    ${capital}
                </li>
                <li>
                    ${population}
                </li>
                <li>
                    ${Object.key(languages).join(', ')}
                </li>
            </ul>
    `;
    refs.countryDiv.insertAdjacentHTML(
			'beforeend',
			aloneCountryResult
		);
    
    
}
