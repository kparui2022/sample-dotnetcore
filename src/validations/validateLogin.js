import validator from 'validator';

const validateLogin = (data) => {
  let errors = {}

  const {login_user, login_password} = data;

  if(validator.isEmpty(login_user)) {
    errors.login_user = '이메일은 비워둘 수 없습니다.'
  }

  if(!validator.isEmail(login_user)) {
    errors.login_user = '유효한 이메일을 입력하세요'
  }

  if(validator.isEmpty(login_password)) {
    errors.login_password = '비밀번호는 비워둘 수 없습니다.'
  }

  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  }
}

export default validateLogin;