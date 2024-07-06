export class LoginData {
    // información util para login

    static get invalidCredentials() {
        return {
            username: 'abc',
            password: 'abc'
        };
    }
}