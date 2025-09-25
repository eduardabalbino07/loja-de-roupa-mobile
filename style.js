import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
},

view1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},

view2: {
    backgroundColor: 'lightblue',
    width: 400,
    height: 150,
    borderRadius: 10,
    marginBottom: 50,
    zIndex: 2,
},

view3: {
    backgroundColor: 'lightblue',
    width: 400,
    height: 250,
    borderRadius: 10,
    marginBottom: 50,
    zIndex: 3,
},

view4: {
    backgroundColor: 'lightblue',
    width: 400,
    height: 100,
    borderRadius: 10,
    marginBottom: 100,
    zIndex: 4,
},

});

export default styles;