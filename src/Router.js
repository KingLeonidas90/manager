// In Dieser Datei werden alle jeweiligen Routen/Scenes angeboten,
// die zum navigieren innerhalb der App nötig sind

import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';


const RouterComponent = () => {
  return (
    <Router>
      {/* Wenn man die Scenes nested mit einer Parent Scene,
        dann fällt der Back Button weg, wenn nur eine Scene vorhanden ist
        Sofern mehrere in einer Parent Scene definiert werden, entsteht der Back Button
        */}

      <Scene hideNavBar>
        <Scene key='auth'>
          <Scene key='login' component={LoginForm} title='Please Login' />
        </Scene>

        <Scene key='main'>
          <Scene
             key='employeeList'
             component={EmployeeList}
             title='Employees'
             rightTitle='Add'
             onRight={() => Actions.employeeCreate()}
             initial
          />
          <Scene
            key='employeeCreate'
            component={EmployeeCreate}
            title='Employee Creation'
          />
          <Scene
            key='employeeEdit'
            component={EmployeeEdit}
            title='Employee Edit'
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
