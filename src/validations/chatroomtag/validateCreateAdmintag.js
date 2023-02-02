
import validator from 'validator';

const validateCreateAdmintag = (data) => {
    let errors = {};

    const { name} = data;

    if (validator.isEmpty(name)) {
        errors.name = '이름을 입력하세요';
    }
    
    
    
    return {
        isInvalid: Object.keys(errors).length > 0,
        error: errors,
    };
};

export default validateCreateAdmintag;