import validator from 'validator';

const validateUploadDoc = (data) => {
  let errors = {}

  const {title,file} = data;
  if(validator.isEmpty(title)) {
    errors.title =  "제목을 입력해주세요";
  }
  if(validator.isEmpty(file)) {
    errors.file =  "파일 선택";
  }
 
  return {
    isInvalid: Object.keys(errors).length > 0,
    error: errors
  }
}

export default validateUploadDoc;