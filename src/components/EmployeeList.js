import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  // Eine Weitere Lifecycle Methode
  // Kriegt als Argument die neuen props übergeben
  // Man hat sowohl zugriff auf die neuen props, als auch auf die alten
  componentWillReceiveProps(nextProps) {
    //nextProps are the next set of Props that this component
    // will be rendered with
    // this.props. is still the old set of props
    this.createDataSource(nextProps);
  }
  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }


  render() {
    return (
    <ListView
      enableEmptySections
      dataSource={this.dataSource}
      renderRow={this.renderRow}
    />
    );
  }
}

const mapStateToProps = state => {
  // state.employees ist das objekt von den employees, für jedes key value paar aus dem objekt
  // val ist das objekt modell von employees, in dem fall der value und key der key
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
};


export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
