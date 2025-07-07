import { PageTemplate } from "../templates/PageTemplate.js";
import { loginForm } from "../ui/forms/loginForm.js";
import { pageTitle } from "../ui/pageTitle.js";

export class PageLogin extends PageTemplate {
    main() {
        return `
            <main class="container">
                ${pageTitle('Login title')}
                ${loginForm()}    
            </main>`;
    }
}
