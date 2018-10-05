import Constants from './../AppConstants';

export default function doStuff() {
  return {
    type: Constants.DO_STUFF_START,
    payload: 'stuff'
  }
}
