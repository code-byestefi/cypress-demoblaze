export class LoginData {
    // información util para login

    static get invalidCredentials() {
        return {
            username: 'abc',
            password: 'abc'
        };
    }

    static get validCredentials() {
        return {
            username: 'username',
            password: 'password'
        };
    }
}