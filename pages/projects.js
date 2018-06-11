import React, { Component } from 'react';
import Link from 'next/link';

import { Layout } from '../components/layout';

// import styles..
import "../styles/styles.less";

export default class Projects extends Component {
  render() {
    return (
      <Layout className='Projects'>
        <ul>
          <li>
            <img src="images/projects/pmteor.png" />
            <div class="links">
              <a href="https://github.com/pmteor/pmteor" target="_blank">github</a>
              <a href="http://pmteor.com" target="_blank">site</a>
            </div>
            <p>
              It is a Process Manager that is constructed with Meteor framework and can deploy any application that
              is done with Pmteor Meteorjs web framework to production stage.
            </p>
            <hr/>
          </li>
          <li>
            <img src="images/projects/fileer.png" />
            <div class="links">
              <a href="http://fileer.com" target="_blank">site</a>
            </div>
            <p>
              Online file storage, deploy to <a href="http://pmteor.com" target="_blank">pmteor</a> :)
            </p>
            <hr/>
          </li>
        </ul>
      </Layout>
    )
  }
}
