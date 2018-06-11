import React, { Component } from 'react';
import Link from 'next/link';
import _ from 'underscore';

export class Layout extends Component {
  isActive(className) {
    if (_.isEqual(this.props.className, className)) {
      return 'active';
    }
  }

  render() {
    return (
      <div id="Surface" className={this.props.className}>
        <header class="page-header">
          <img src={require('../static/images/avatar.png')} />
          <ul>
            <li className={this.isActive('About')}>
              <Link>
                <a href="/">about</a>
              </Link>
            </li>
            <li className={this.isActive('Projects')}>
              <Link>
                <a href="/projects">projects</a>
              </Link>
            </li>
            <li>
              <Link>
                <a href="https://github.com/yasaricli" target='_blank'>github</a>
              </Link>
            </li>
            <li className={this.isActive('Contact')}>
              <Link>
                <a href="/contact">contact</a>
              </Link>
            </li>
          </ul>
        </header>
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
}
