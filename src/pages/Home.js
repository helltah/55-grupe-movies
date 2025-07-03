import { PageTemplate } from "../templates/PageTemplate.js";

export class PageHome extends PageTemplate {
    main() {
        return `
        <main>
            <div>
                <div class="col-12">
                    TEMPLATE PAGE CONTENT         
                </div>
            </div>
        </main>`;
    }
}
