import validator from 'validator';

const validpassword = (data) => {
  let errors = {}

  const { newp, confi} = data;

 
  
  if(validator.isEmpty(newp)) {
    errors.newp =  '새 비밀번호를 입력하세요.'
  }
  if(validator.isEmpty(confi)) {
    errors.confi =  '확인 비밀번호를 입력하세요.'
  }
  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  }
}

export default validpassword;