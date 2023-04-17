export default function validateLoginInfo(loginValues) {
    let errors = {};
  
  
    if (!loginValues.username.trim() ) {
      errors.fields = 'Username is required';
    }
    if (!loginValues.password) {
      errors.password = 'Password is required';
    }
  
    return errors;
  }