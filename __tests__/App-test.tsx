/**
 * @format
 */

import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
// Note: test renderer must be required after react-native

import App from '../src/App';

it('renders correctly', () => {
  renderer.create(<App />);
});
