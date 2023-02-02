import validator from 'validator';

const validateForget = (data) => {
  let errors = {}

  const {email} = data;

  if(!validator.isEmail(email)) {
    errors.email = '유효한 이메일을 입력하세요'
  } 

  if(validator.isEmpty(email)) {
    errors.email = '이메일 입력'
  }

  
  

  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  }
}

export default validateForget;