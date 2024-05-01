### setMaxIterations()

### Example

<!-- <iframe width="100%" height="450px" src="https://shaderpark.com/sculpture/-M2aYDh1dNIjNlCg8HLr?example=true&embed=true" frameborder="0"></iframe> -->

### Description

Sets the number of loops that are performed while raymarching(the underlying technique that allows us to render 3D shaders). Decreasing this number will speed up the rendering, but may cause artifacts. Increasing the number will slow down the rendering, but may improve the quality. You may want to combine this with [setStepSize()]((/references-js/global-settings/setStepSize.html)) to get a good balance.

### Syntax
```js
setMaxIterations(iterations);
```

### Parameters
**iterations** Int: value from 0 to any value.