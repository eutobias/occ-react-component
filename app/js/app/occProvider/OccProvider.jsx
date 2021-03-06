/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

/* eslint react/prefer-stateless-function: 0, import/no-extraneous-dependencies: 0  */

/**
 * @project occ-react-component
 * @file OccProvider.jsx
 * @company leedium
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateCreated 21/10/2018
 * @description Higher order component to pass through OCC props to
 *              Wrapped Component
 */


import React, { Component } from "react";

function OccProvider(WrappedComponent, occData) {
  return class extends Component {
    render() {
      const { children } = this.props;
      return (
        <WrappedComponent {...occData}>
          {children}
        </WrappedComponent>
      );
    }
  };
}

export default OccProvider;

