let signUpButton;
let signInButton;
let container;
let mobileSwitchToSignupBtn;
let mobileSwitchToSigninBtn;

function 스위치(){
    signUpButton = document.getElementById('signUp');
    signInButton = document.getElementById('signIn');
    container = document.getElementById('container');
    mobileSwitchToSignupBtn = document.getElementById('switch_to_signup');
    mobileSwitchToSigninBtn = document.getElementById('switch_to_signin');

    signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
    });
    signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });
    function handleMobileLayout() {
        if (window.innerWidth < 832) {
            mobileSwitchToSignupBtn.addEventListener('click', () => {
                container.classList.add('switch_to_signup');
                container.classList.remove('switch_to_signin');
            });
            mobileSwitchToSigninBtn.addEventListener('click', () => {
                container.classList.add('switch_to_signin');
                container.classList.remove('switch_to_signup');
            });
        }
    }
    handleMobileLayout();
    window.addEventListener('resize', handleMobileLayout);
}
document.addEventListener('DOMContentLoaded', () => {
    스위치();
});