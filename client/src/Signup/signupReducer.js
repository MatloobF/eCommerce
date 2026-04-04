export const ACTIONS = {
    NAME_CHANGE: "NAME_CHANGE",
    USERNAME_CHANGE: "USERNAME_CHANGE",
    EMAIL_CHANGE: "EMAIL_CHANGE",
    PASSWORD_CHANGE: "PASSWORD_CHANGE",

};

export const initialState = {
    name: {value: "", isValid: false},
    username: {value: "", isValid: false},
    email: {value: "", isValid: false},
    password: {
        value: "",
        validations: {
            // isValid: false,
            hasLowerCase: false,
            hasUpperCase: false,
            hasNumber: false,
            hasSpecialChar: false,
            minLength: false
        }
        
    },   
};

const NAME_PATTERN = /^[a-zA-Z\s]+$/;
const USERNAME_PATTERN = /^[a-zA-Z0-9_]{3,}$/;
const EMAIL_PATTERN = /^(?<username>[a-z]\w+\.?\w+)@(?<domain>[a-z]{2,15})\.(?<tld>[a-z]{2,3})$/;
// const SPECIAL_CHAR_PATTERN = /[!@#$%^&*(),.?":{}|<>]/;

export const signupReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type){
        case ACTION.NAME_CHANGE: 
            const isNameValid = NAME_PATTERN.test(payload);
            return {
                ...state,
                name: {value: payload, isValid: isNameValid},
            };

        case ACTION.USERNAME_CHANGE:
            const isUsernameValid = USERNAME_PATTERN.test(payload);
            return {
                ...state,
                username: {value: payload, isValid: isUsernameValid},
            };

        case ACTION.EMAIL_CHANGE:
            const isEmailValid = EMAIL_PATTERN.test(payload);
            return {
                ...state,
                email: {value: payload, isValid: isEmailValid},
            }; 
        
        case ACTION.PASSWORD_CHANGE:
            const password = payload;
            const hasLowerCase = /[a-z]/.test(payload);
            const hasUpperCase = /[A-Z]/.test(payload);
            const hasNumber = /\d/.test(payload);
            const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(payload);
            const minLength = payload.length >= 8;
            // const isPasswordValid = hasLowerCase && hasUpperCase && hasNumber && hasSpecialChar && minLength;
            return {
                ...state,
                password: {
                    value: password,
                    // isValid: isPasswordValid,
                    validations: {
                        hasLowerCase,
                        hasUpperCase,
                        hasNumber,
                        hasSpecialChar,
                        minLength
                    },
                },
            };
    }
}