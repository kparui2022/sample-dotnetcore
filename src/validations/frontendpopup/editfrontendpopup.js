import validator from 'validator';

const validateEditFrontend = (data) => {
  let errors = {}

  const {title} = data;
  if(validator.isEmpty(title)) {
    errors.title =  "제목을 입력해주세요.";
  }
  // if(validator.isEmpty(uploadimg)) {
  //   errors.uploadimg =  "형식의 파일을 업로드 해주세요";
  // }
  // if(validator.isEmpty(exposure)) {
  //   errors.exposure =  "제목을 입력해주세요.";
  // }
 
  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  }
}

export default validateEditFrontend;