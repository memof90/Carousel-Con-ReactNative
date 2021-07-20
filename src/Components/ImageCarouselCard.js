import React from "react";
import PropTypes from "prop-types";
import { Text, View, ImageBackground } from "react-native";

/* Importamos nuestros estilos */
import styles, { _backgroundStyle, _shadowStyle, _blackOverlay } from '../Styles/ImageStyleCarousel';



const CarouselCardImage = props => {
    const {
        style,
        text,
        source,
        width,
        height,
        textStyle,
        shadowColor,
        shadowStyle,
        borderRadius,
        overlayHeight,
        shadowPaddingBottom,
        overlayBackgroundColor,
        overlayBorderBottomLeftRadius,
        overlayBorderBottomRightRadius
      } = props;

      return (
        <ImageBackground
          source={source}
          borderRadius={borderRadius}
          style={[
            _backgroundStyle(width, height, shadowPaddingBottom),
            shadowStyle || _shadowStyle(shadowColor),
            style,
          ]}
        >
          <View
            style={_blackOverlay(
              overlayHeight,
              width,
              overlayBackgroundColor,
              overlayBorderBottomLeftRadius,
              overlayBorderBottomRightRadius
            )}
          >
            <Text style={textStyle || styles.textStyle}>{text}</Text>
          </View>
        </ImageBackground>
      );
    };

CarouselCardImage.propTypes = {
    style: PropTypes.object,
    text: PropTypes.string,
    shadowColor: PropTypes.string,
    borderRadius: PropTypes.number,
    overlayHeight: PropTypes.number,
    shadowPaddingBottom: PropTypes.number,
    overlayBackgroundColor: PropTypes.string,
    overlayBorderBottomLeftRadius: PropTypes.number,
    overlayBorderBottomRightRadius: PropTypes.number
  };

CarouselCardImage.defaultProps = {
    text: "Fiesta Digital 2021",
    width: 300,
    height: 300,
    borderRadius: 16,
    overlayHeight: 50,
    shadowColor: "#000",
    shadowPaddingBottom: 18,
    overlayBorderBottomLeftRadius: 16,
    overlayBorderBottomRightRadius: 16,
    overlayBackgroundColor: "rgba(0,0,0,0.3)",
    source: {
      uri:
        "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
    }
  };

export default CarouselCardImage;
