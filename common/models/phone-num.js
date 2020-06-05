'use strict';

module.exports = function(Phonenum) {
    // Model Validations
  Phonenum.validatesPresenceOf('name', {message: 'Name cannot be blank'});
  Phonenum.validatesLengthOf('name',
  {min: 3, message: {min: 'Name should have at least 3 letters '}});
  const rgx = /([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}/g;
  Phonenum.validatesPresenceOf('phone', {message: 'Number cannot be blank'});
  Phonenum.validatesLengthOf('phone',
  {max: 15, message: {max: 'phone should less than 15 digit'}});
  Phonenum.validatesFormatOf('phone',
  {with: rgx, message: 'Number not correct'});
  Phonenum.validatesUniquenessOf('phone',
  {message: 'This number already exist'});
};
