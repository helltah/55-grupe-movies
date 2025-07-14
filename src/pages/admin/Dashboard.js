import { COOKIE_MAX_AGE } from "../../env.js";
import { PageTemplate } from "../../templates/PageTemplate.js";

export class PageDashboard extends PageTemplate {
    main() {
        const cookie = this.req.user.login_token_created_at.getTime();
        const age = 3600;
        const secondsLeft = Math.floor((COOKIE_MAX_AGE - Date.now() - cookie) / 1000);

        const seconds = secondsLeft % 60;
        const minutes = (secondsLeft - seconds) / 60;


        return `
            <main>
                <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="display-1">Welcome to your dashboard!</h1>
                    <h1 class="display-6">User:${this.req.user.username}</h1>
                    <h1 class="display-6">User:${this.req.user.email}</h1>
                    <h1 class="display-6">Likes sesijos laikas ${minutes}:${seconds}</h1>
                </div>
            </div>
        </div>
            </main>`;
    }
}