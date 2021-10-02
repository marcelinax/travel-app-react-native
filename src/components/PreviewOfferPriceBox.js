import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import PreviewOfferStyles from '../assets/styles/PreviewOffer.styles';

const PreviewOfferPriceBox = () => {
  return (
    <View style={{...PreviewOfferStyles.priceBox}}>
      <View>
        <Text style={{color: '#6988BD', fontWeight: '500', fontSize: 12}}>
          Price per person
        </Text>
        <Text style={{...PreviewOfferStyles.price}}>$ 1450</Text>
      </View>
      <TouchableWithoutFeedback>
        <View style={{...PreviewOfferStyles.button}}>
          <Text style={{fontWeight: '800', color: '#64B3D9', fontSize: 16}}>
            Book it
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default PreviewOfferPriceBox;
