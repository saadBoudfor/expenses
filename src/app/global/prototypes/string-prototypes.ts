/**
 * Created by sboudfor on 27/04/2019.
 */

String.prototype.toCapitalize = toCapitalize;

interface String {
  toCapitalize: typeof toCapitalize;
}

function toCapitalize() {
  return this.charAt(0).toUpperCase() + this.substr(1);
}
