/**
 * Created by sboudfor on 26/04/2019.
 * Additional properties to array object.
 */

Array.prototype.first = first;
Array.prototype.last = last;

interface Array<T> {
  first: typeof first;
  last: typeof last;
}

function first() {
  return this[0];
}

function last() {
  return this[this.length - 1];
}
