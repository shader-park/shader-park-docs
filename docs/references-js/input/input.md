### input()

### Example

<iframe width="100%" height="450px" src="https://shaderpark.com/sculpture/-M21S8vSKMzSPfEQOJJ9?example=true&embed=true" frameborder="0"></iframe>

### Description
Creates an input slider defaulting to the provided starting value that ranges from the given minimum and maximum values. 

Internally a uniform is created for your input slider, which allows the value to be updated without re-compiling the shader.

### Syntax
```js
input(startValue, minValue, maxValue);

input(startValue);

input();
```

### Parameters
**startValue** Float: the initial value. Defaults to 0.

**minValue** Float: the minimum range of the slider input. Defaults to 0.

**maxValue** Float: the maximum range of the slider input. Defaults to 1.0.
