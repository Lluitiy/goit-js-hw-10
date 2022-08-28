import { fetchCountries } from './fetchCountries';
import { countriesMarkupList } from './counties_markup_list';
import { oneCountryMarkup } from './counties_markup_list';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/styles.css';

export function onInput(e) {
	fetchCountries(e.target.value)
		.then(r => {
			return r.json();
		})
		.then(country => {
			oneCountryMarkup(country);
			console.log(country);
		})
		.catch(Notify.failure('Oops, there is no country with that name'));
}
