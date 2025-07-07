import { moviesData } from "../data/moviesData.js";
import { PageTemplate } from "../templates/PageTemplate.js"
import { moviesFilterForm } from "../ui/forms/moviesFilterForm.js";
import { moviesListSection } from "../ui/moviesList.js";
import { pageTitle } from "../ui/pageTitle.js";
import { placeholder } from "../ui/placeholder.js";

export class PageMovies extends PageTemplate {
    main() {
        return ` 
            <main>
                ${pageTitle('Movies')}
                ${moviesFilterForm()}
                ${placeholder('Filter', [
            'filtravimas, pagal:',
            'tekstine paieska is pavadinimo ir apraso',
            'pagal trukme',
            'pagal kategorija',
            'ivertinimas',
        ])}
    
            ${moviesListSection(moviesData)}
            </main>`;
    }
}