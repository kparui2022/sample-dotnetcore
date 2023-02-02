import validator from 'validator';

const validateReset = (data) => {
  let errors = {}

  const {resetemail} = data;

  if(!validator.isEmail(resetemail)) {
    errors.resetemail = '유효한 이메일을 입력해주세요'
  }
  if(validator.isEmpty(resetemail)) {
    errors.resetemail = '이메일 주소를 입력해주세요'
  }

  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  }
}

export default validateReset;