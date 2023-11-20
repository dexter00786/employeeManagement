export const validateInputs = (firstName, lastName, salary) => {
  const nameExp = /^[a-zA-Z]+$/;
  const salaryExp = /^\d{1,6}(?:\.\d{0,2})?$/;
  let errors = {};
  let formIsValid = true;
  const firstNameValid = nameExp.test(firstName);
  const lastNameValid = nameExp.test(lastName);
  const salaryValid = salaryExp.test(salary);

  if (!firstName) {
    formIsValid = false;
    errors['firstNameError'] = 'First name can not be left empty';
  } else if (!firstNameValid) {
    formIsValid = false;
    errors['firstNameError'] = 'Enter the valid first name ';
  } else {
    errors['firstNameError'] = '';
  }

  if (!lastName) {
    formIsValid = false;
    errors['lastNameError'] = 'Last name can not be left empty';
  } else if (!lastNameValid) {
    formIsValid = false;
    errors['lastNameError'] = 'Enter the valid Last name ';
  } else {
    errors['lastNameError'] = '';
  }

  if (!salary) {
    formIsValid = false;
    errors['salaryError'] = 'salary can not be left empty';
  } else if (!salaryValid) {
    formIsValid = false;
    errors[
      'salaryError'
    ] = `*Salary should not contain any special character \n*Salary should be in numbers only`;
  } else {
    errors['salaryError'] = '';
  }

  return {formIsValid, errors};
};

export const sortByName = employees => {
  employees.sort(function (a, b) {
    console.log(a.firstName, b.firstName);
    if (a.firstName < b.firstName) {
      return -1;
    }
    if (a.firstName > b.firstName) {
      return 1;
    }
    return 0;
  });
  return employees;
};


export const sortByLastName = employees => {
  employees.sort(function (a, b) {
    console.log(a.lastName, b.lastName);
    if (a.lastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    }
    return 0;
  });
  return employees;
};