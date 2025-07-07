import { categoriesData } from "../data/categoriesData.js";
import { PageTemplate } from "../templates/PageTemplate.js";
import { categoriesListSection } from "../ui/categoriesList.js";
import { pageTitle } from "../ui/pageTitle.js";
import { placeholder } from "../ui/placeholder.js";

export class PageCategories extends PageTemplate {
    main() {
        return `
            <main>
                ${pageTitle('Page title')}
                ${categoriesListSection(categoriesData)}
                
        </main>`;
    }
}