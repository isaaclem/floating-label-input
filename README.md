# floating-label-input

This package lets you create a animated floating label text input. This is fully customizable with following props. 


## Install
```js
npm install floating-label-input --save
```

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
    onChangeText={value => (this.setState({ email: value }))}
/>
<FloatingLabelInput
    label="Password"
    secureTextEntry
    value={this.state.password}
    onChangeText={value => (this.setState({ password: value }))}
/>
```

And It will look like below
![Alt Text](https://media.giphy.com/media/22Qck7T2Ca39C9jMgT/giphy.gif)

Feel free to Raise PR should you wish to contribute.
