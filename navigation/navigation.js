import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Cursos from '../screens/Cursos'
import Account  from '../screens/Account'

const Tab = createBottomTabNavigator()

export default  function Navigation(){

    return(

        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name='Home'
                    component={Cursos}
                    options={{
                        title:"Inicio"
                    }}
                />
                <Tab.Screen
                    name='Cuenta'
                    component={Account}
                    options={{
                        title:"Cuentas"
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
         )
}