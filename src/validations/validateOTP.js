import validator from 'validator';

const validateOTP = (data) => {
  let errors = {}

  const {otp} = data;

  if(validator.isEmpty(otp)) {
    errors.otp = 'OTP 입력'
  }

  

  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  }
}

export default validateOTP;