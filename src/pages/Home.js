import { herosection } from "../ui/hero.js";
import { PageTemplate } from "../templates/PageTemplate.js";

export class PageHome extends PageTemplate {
    main() {
        return `
        <main>
           ${herosection()}
        </main>         
    `;
    } 
}
