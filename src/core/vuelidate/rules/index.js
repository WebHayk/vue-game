import {email, minLength, required} from "@vuelidate/validators";

export const LOGIN_FORM_RULES = {
    email: { required, email },
    password: { required, minLength: minLength(6) },
};
