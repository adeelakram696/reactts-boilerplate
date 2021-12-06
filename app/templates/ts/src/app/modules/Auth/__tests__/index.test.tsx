import * as React from 'react';
import { render } from '@testing-library/react';
import { Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { createStoreInstance } from 'store';
import AuthComponent from '../Auth';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
  Trans: ({ children }) => children,
}));

const renderModule = (store: Store) =>
  render(
    <Provider store={store}>
      <AuthComponent />
    </Provider>,
  );

describe('<Auth />', () => {
  let store: ReturnType<typeof createStoreInstance>;

  beforeEach(() => {
    store = createStoreInstance();
  });
  it('should match the snapshot', () => {
    const component = renderModule(store);
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
