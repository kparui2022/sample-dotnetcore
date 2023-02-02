import validator from "validator";
import i18n from '@/config/i18n';

const { t } = i18n.global;
i18n.global.locale = 'en';

const ContactUsValidation = (data) => {
    let errors = {};

    const { email, name, type, message } = data;

    if (validator.isEmpty(name)) {
        errors.name = t('Error.requiredField');
    }
    if (validator.isEmpty(email)) {
        errors.email = t('Error.requiredField');
    }
    if (validator.isEmpty(type)) {
        errors.type = t('Error.requiredField');
    }
    if (validator.isEmpty(message)) {
        errors.message = t('Error.requiredField');
    }

    return {
        isInvalid: Object.keys(errors).length > 0,
        error: errors
    };
};

export default ContactUsValidation;
