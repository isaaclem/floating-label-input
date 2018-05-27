# floating-label-input

This package lets you create a animated floating label text input.


## Install
```js
npm install floating-label-input --save
```

This is fully customizable with following props. 

```js
FloatingLabelInput.propTypes = {
  label: PropTypes.any.isRequired,
  sourceColor: PropTypes.string,
  targetColor: PropTypes.string,
  fontColor: PropTypes.string,
  labelSize: PropTypes.number
};
```

## Sample Usage

```js
<FloatingLabelInput
    label="Email"
    value={this.state.email}
    autoCapitalize="none"
    autoCorrect={false}
    onChangeText={value => (this.setState({ email: value }))}
/>
<FloatingLabelInput
    label="Password"
    secureTextEntry
    autoCapitalize="none"
    autoCorrect={false}
    value={this.state.password}
    onChangeText={value => (this.setState({ password: value }))}
/>
```

And It will look like below <br />
![Alt Text](https://media.giphy.com/media/22Qck7T2Ca39C9jMgT/giphy.gif)

Feel free to Raise PR should you wish to contribute.
