import { PageTemplate } from "../../templates/PageTemplate.js";

export class PageError401 extends PageTemplate {
    constructor(req) {
        super(req);
    }
    main() {
        return `
        <main class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="display-5"> 401 - Neturi teises matyti siuo turinio</h1>   
                    <a class="fs-2" href="/login">Eik prisijunti</a>
                </div>
            </div>
        </main>`;
    }
}