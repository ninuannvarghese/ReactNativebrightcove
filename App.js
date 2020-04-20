import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen'


const navigator = createStackNavigator({
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
}, {
    initialRouteName: 'Search',
    defaultNavigationOption: {
        title: 'TVO Search'
    }
});

export default createAppContainer(navigator);