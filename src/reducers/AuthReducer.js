import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
 } from '../actions/types';

// Einen State definieren, der genommen wird zum starten
const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};
// Wenn state undefined ist, soll er den Wert der Variablen INITIAL_STATE nehmen
export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
    // Returne ein neues Objekt, ...state -> nimm alle Properties von State
    // und pack diese in das neue Objekt, dann definiere den Prop für Email und
    // Weise den Wert action.payload zu. Das Email property wird mit dem email aus
    // dem state verglichen. falls es das bereits hat, wird es dadurch überschrieben
    // Redux wird dieses komplett neue Objekt mit dem alten vergleichen udn feststellen,
    // das dieses noch nicht vorhanden ist. Somit wird der Reducer aktualisiert und stellt Eine
    // Änderung fest
      return { ...state, email: action.payload };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case LOGIN_USER:
      return { ...state, loading: true, error: '' };

    case LOGIN_USER_SUCCESS:
      return { ...state,
        // Wir nehmen alle state Attribute, anschließend setzen wir sie alle auf den default wert
        ...INITIAL_STATE,
        user: action.payload,
        };

    case LOGIN_USER_FAIL:
    console.log('failure');

      return { ...state, error: 'Authentification failed', loading: false };

    default:
      return state;
  }
};
