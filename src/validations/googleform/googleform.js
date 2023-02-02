import validator from 'validator';

const validateGoogleForm = (data) => {
  let errors = {}

  const {link} = data;
  if (!validator.isURL(link)) {
    errors.link = '유효한 URL을 기입해주세요.';
}
  if(validator.isEmpty(link)) {
    errors.link =  "입력하지 않은 항목이 있습니다.";
  }
 
  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  }
}

export default validateGoogleForm;