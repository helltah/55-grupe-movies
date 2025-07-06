import { PageTemplate } from "../templates/PageTemplate.js";
import { pageTitle } from "../ui/pageTitle.js";
import { placeholder } from "../ui/placeholder.js";

export class PageRegister extends PageTemplate {
    main() {
        return `
            <main class="container">
                ${pageTitle('Register title')}
                ${placeholder('Form',[
                    'username',
                    'email',
                    'password',
                    'sutinku su taisyklemis',
                    'mygtukas',
                ])}
        </main>`;
    }
}
