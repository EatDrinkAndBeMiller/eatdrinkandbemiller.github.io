//amplify for AWS cognito
import { Auth } from 'aws-amplify';

async function signUp() {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,          // optional
                phone_number,   // optional - E.164 number convention
                // other custom attributes 
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}

{
    user: CognitoUser;
    userConfirmed: boolean;
    userSub: string;
}

async function signIn() {
    try {
        const user = await Auth.signIn(username, password);
    } catch (error) {
        console.log('error signing in', error);
    }
}

async function resendConfirmationCode() {
    try {
        await Auth.resendSignUp(username);
        console.log('code resent successfully');
    } catch (err) {
        console.log('error resending code: ', err);
    }
}

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}


//allow users to add ingredients to a shopping list

/*get value from checkbox -- this function gets the values of boxes checked upon submitting,
    iterates through values and adds them to an array*/
/* let shoppingList = document.querySelector('.shopping-list');

function shoppingLists() {
    shoppingList.addEventListener('click', function(event){
        event.preventDefault();
        
        const checks = document.querySelectorAll(`input[name="ingredient"]:checked`);
        let array = [];

        checks.forEach((check) => {
            array.push(check.value);
        });
        console.log(array);

        return array;
    });
} */