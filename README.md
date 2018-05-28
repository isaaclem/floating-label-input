# floating-label-input

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/isaaclem/floating-label-input/issues) [![HitCount](http://hits.dwyl.io/isaaclem/floating-label-input.svg)](http://hits.dwyl.io/isaaclem/floating-label-input) [![npm version](https://badge.fury.io/js/floating-label-input.svg)](https://badge.fury.io/js/floating-label-input)

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
