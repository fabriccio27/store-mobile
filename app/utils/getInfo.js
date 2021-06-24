import AsyncStorage from "@react-native-async-storage/async-storage"

const getInfo = async (hashString) => {
    try{
        const jsonValue = await AsyncStorage.getItem(hashString)
        return (jsonValue != null ? JSON.parse(jsonValue): null)
    } catch(e){
        console.log(`esto paso tratando de leer de AsyncStorage: ${e}`)
    }
    console.log("Listo leer.");
}
export default getInfo;