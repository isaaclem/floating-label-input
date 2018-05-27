import React, { Component } from 'react';
import {
  View,
  TextInput,
  Animated
} from 'react-native';
import PropTypes from 'prop-types';

export default class FloatingLabelInput extends Component {
  state = {
    isFocused: false,
  };

  componentWillMount() {
    this.animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
  }

  componentDidUpdate() {
    Animated.timing(this.animatedIsFocused, {
      toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
      duration: 200,
    }).start();
  }
  
  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  render() {
    const { 
      label, 
      sourceColor, 
      targetColor, 
      fontColor, 
      labelSize, 
      ...props 
    } = this.props;

    const styles = {
      labelStyle: {
        position: 'absolute',
        left: 2,
        top: this.animatedIsFocused.interpolate({
          inputRange: [0, 1],
          outputRange: [labelSize, 0],
        }),
        fontSize: this.animatedIsFocused.interpolate({
          inputRange: [0, 1],
          outputRange: [(labelSize - 1), (labelSize - 4)],
        }),
        color: this.animatedIsFocused.interpolate({
          inputRange: [0, 1],
          outputRange: [sourceColor, targetColor],
        }),
      },
      textInputStyle: { 
        height: (labelSize + 1), 
        fontSize: labelSize, 
        color: fontColor,
        marginTop: 2,
        borderBottomWidth: !this.state.isFocused ? 1 : 1.5, 
        borderBottomColor: !this.state.isFocused ? fontColor : targetColor
      },
    };
    
    return (
      <View behavior="padding" style={{ paddingTop: labelSize + 1 }}>
        <Animated.Text style={styles.labelStyle}>
          {label}
        </Animated.Text>
        <TextInput
          {...props}
          underlineColorAndroid='rgba(0,0,0,0)'
          style={styles.textInputStyle}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
      </View>
    );
  }
}

FloatingLabelInput.propTypes = {
  label: PropTypes.any.isRequired,
  sourceColor: PropTypes.string,
  targetColor: PropTypes.string,
  fontColor: PropTypes.string,
  labelSize: PropTypes.number
};

FloatingLabelInput.defaultProps = {
  label: '', 
  sourceColor: '#aaa', 
  targetColor: 'green', 
  fontColor: '#000', 
  labelSize: 18,
};

