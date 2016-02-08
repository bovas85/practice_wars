function validateUsr(username) {
  if (username.length < 3 || username.length > 17)
    return false;
  if (/[A-Z\s0]/g.test(username))
    return false;
  else
    return /[a-z\d_]/g.test(username);
}

// better 

function validateUsr(username) {
  return /^[0-9a-z_]{4,16}$/.test(username)
}

// or 

function validateUsr(username) {
  return username.search(/[a-z0-9_]{4,16}$/) === 0 ? true : false;
}

validateUsr('asddsa');

validateUsr('012');

validateUsr('as23sa');