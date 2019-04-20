// A way to call `hasOwnProperty` on an object that has a property by that name.

function check(obj, prop) {
  if (Object.prototype.hasOwnProperty.call(obj, prop)) {
    return true;
  } else return false;
}
