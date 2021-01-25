import React from 'react';
import TabNavigator from './src/routes/TabNavigator';
import {mapping, light as lightTheme} from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from 'react-native-ui-kitten';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {DataContextProvider} from './src/context/DataContext';

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <DataContextProvider>
          <TabNavigator />
        </DataContextProvider>
      </ApplicationProvider>
    </>
  );
};

export default App;
