import { StyleSheet, Text, View } from 'react-native'
import tw from 'twrnc';

const SpecialSell = (props) => {

  const { discount, inStock, style } = props;

  if (discount > 0 && inStock > 0) { 
    return (
      <View style={tw`px-2 py-1 bg-red-500 rounded-full overflow-hidden ${style}`}>
        <Text style={tw`text-white text-center`}>特价销售</Text>
      </View>
    )
  } else {
    return null;
  }
}

export default SpecialSell

const styles = StyleSheet.create({})