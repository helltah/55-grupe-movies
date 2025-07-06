import { PageTemplate } from "../templates/PageTemplate.js";
import { pageTitle } from "../ui/pageTitle.js";
import { placeholder } from "../ui/placeholder.js";

export class PageCategories extends PageTemplate {
    main() {
        return `
            <main>
                ${pageTitle('Page title')}
                ${placeholder('Categories list',[
        
            'pavadinimas',
            'trumpas aprasymas',
            'filmu keikis toje kategorijoje',
            'nuoroda i vidini puslapi'
        ])}
        </main>`;
    }
}