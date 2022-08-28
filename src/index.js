import { fetchCountries } from './fetchCountries';
import { countriesMarkupList } from './counties_markup_list';
import { oneCountryMarkup } from './counties_markup_list';
import { clearMarkup } from './counties_markup_list';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/styles.css';

export function onInput(e) {
	clearMarkup();
	const inputValue = e.target.value.trim()
	console.log("🚀 ~ inputValue", inputValue)
	if (inputValue) {
		fetchCountries(inputValue)
			.then(r => {
				if (!r.ok) {
					throw new Error(r.status);
				}
				return r.json();
			})
			.then(country => {
				if (country.length > 10) {
					Notify.info(
						'Too many matches found. Please enter a more specific name.'
					);
					return;
				}
				if (country.length > 1 && country.length <= 10) {
					countriesMarkupList(country);
					console.log(country);
					return;
				}
				oneCountryMarkup(country);
			})
			.catch(error => {
				Notify.failure('Oops, there is no country with that name');
			});
	}
}
