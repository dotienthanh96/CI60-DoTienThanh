const $template = document.createElement('template');
$template.innerHTML = ` 
<form action="" class="register-form">
<h2 class="title">Create an account</h2>
<div class="sub-title">đừng hỏi em vì sao</div>
<input-wrapper class="name" placeholder='your name' type='text' error=""></input-wrapper>
<input-wrapper class="email" placeholder='your email' type='text' error=""></input-wrapper>
<input-wrapper class="password" placeholder='your password' type='password' error=""></input-wrapper>
<input-wrapper class="password-confirmation" placeholder='Repeat password' type='password' error=""></input-wrapper>
<button class="register-btn">Register</button>
</form>
`;
export default class RegisterForm extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$registerForm = this.querySelector('.register-form');
        this.$name = this.querySelector('.name');
        this.$email = this.querySelector('.email');
        this.$password = this.querySelector('.password');
        this.$passwordConfirmation = this.querySelector('.password-confirmation');
    }
    connectedCallback() {
        this.$registerForm.onsubmit = (event) => {
            event.preventDefault();
            console.log("Register form submitted")
                       
          let isPassed = this.$name.validate((value) => {
                return value != '';
            }, "Invalid name") &
            this.$email.validate((value) => {
                return value != '';
            }, "Invalid email") & 
            this.$password.validate((value) => {
                return value != '';
            }, "Invalid password") &
            this.$passwordConfirmation.validate((value) => {
                return value != '';
            }, "Invalid password confirmation") &&
            this.$passwordConfirmation.validate((value) => {
                return value == this.$password.value
            }, " Password confirmation is not correct");
        }
        let data = {
            name: this.$name.value,
            email: this.$email.value,
            password: this.$password.value
        };

    }
}
window.customElements.define('register-form', RegisterForm);