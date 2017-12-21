// Action Creator welcher nur für die Employee Screens verantwortlich ist
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS } from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  // Eine Referenz zu dem Pfad der JSON Datenspeicherung erzeugen
  // Um die ID des aktuell eingeloggten Users zu erhalten:
  const { currentUser } = firebase.auth();
  // Die Backticks wandeln die variable in einen String um, um das richtige Format zu haben
  return (dispatch) => {
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
  .push({ name, phone, shift })
  // Durch type: reset wird der Backbutton entfernt. Der ganze View Stack wird entfernt
  .then(() => {
    dispatch({ type: EMPLOYEE_CREATE });
  Actions.main({ type: 'reset' });
});
};
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    // Jedes mal wenn Daten von der angegegeben Referenz übertragen werden wird die Funktion
    // aufgerufen, welche ein Objekt enthält, welches die Daten beschreibt
    // snapshot selbst enthält nicht die Daten, sondern erteilt lediglich Zugriff auf die Daten

    // Jedes mal wenn neue Daten reinkommen wird die Funktion ausgeführt und diese werden ergänzt
    // snapshot.val() Liefert die Daten, die wir wollen. In diesem Fall die employees
    .on('value', snapshot => {
      dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};
