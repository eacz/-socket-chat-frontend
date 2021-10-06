const formatError = (errors) => {
  if(!errors) return;
  let error = ''
  if (typeof errors === 'string') {
    error = errors
  } else {
    Object.keys(errors).forEach(key => {
      console.log(errors[key].msg);
      error += errors[key].msg + '\n'
    })
  }

  console.log(error);
  return error
}

export default formatError
