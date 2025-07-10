import { PageTemplate } from "../../templates/PageTemplate.js";

export class PageDashboard extends PageTemplate {
    main() {
        return `
            <main>
                <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 claUss="display-1">Welcome to your dashboard!</h1>
                    <h1 class="display-6">User:${this.req.user.username}</h1>
                    <h1 class="display-6">User:${this.req.user.email}</h1>
                </div>
            </div>
        </div>
            </main>`;
    }
}