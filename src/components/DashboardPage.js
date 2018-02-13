import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class DashboardPage extends Component {

  render() {
    return (
      <div>
        DashboardPage
        <Link to="/search">Search</Link>
      </div>
    )
  }
}



export default DashboardPage;