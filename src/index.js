import React, { Component } from 'react';
import {
  View,
  TextInput,
  Animated
} from 'react-native';

class FloatingLabelInput extends Component {
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
    const { label, ...props } = this.props;
    const styles = {
      labelStyle: {
        position: 'absolute',
        left: 2,
        top: this.animatedIsFocused.interpolate({
          inputRange: [0, 1],
          outputRange: [18, 0],
        }),
        fontSize: this.animatedIsFocused.interpolate({
          inputRange: [0, 1],
          outputRange: [17, 14],
        }),
        color: this.animatedIsFocused.interpolate({
          inputRange: [0, 1],
          outputRange: ['#aaa', 'red'],
        }),
      },
      textInputStyle: { 
        height: 26, 
        fontSize: 18, 
        color: '#000',
        marginTop: 2,
        borderBottomWidth: !this.state.isFocused ? 1 : 1.5, 
        borderBottomColor: !this.state.isFocused ? '#000' : 'red'
      },
    };
    
    return (
      <View behavior="padding" style={{ paddingTop: 18 }}>
        <Animated.Text style={styles.labelStyle}>
          {label}
        </Animated.Text>
        <TextInput
          {...props}
          underlineColorAndroid='rgba(0,0,0,0)'
          style={styles.textInputStyle}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          autoCorrect={false}
          autoCapitalize="none"
          blurOnSubmit
        />
      </View>
    );
  }
}

export { FloatingLabelInput };
