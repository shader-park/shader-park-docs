### setStepSize()

### Example

<iframe width="100%" height="450px" src="https://shaderpark.netlify.com/sculpture/-M2aYDh1dNIjNlCg8HLr?example=true&embed=true" frameborder="0"></iframe>

### Description

As you distort the surface of any of the objects you create you may notice artifacting. To get rid of this you can use a smaller step size, but at the cost of performance. This function provides the same functionality as [setGeometryQuality](/references-js/global-settings/setGeometryQuality.html), but is provided as a short hand for anyone with previous raymarching experience.

The raymarching engine that powers Shader Park uses an algorithm called sphere tracing. In this process a ray / photon is marched forwards from the camera's perspective towards the current scene. The size of the step is determined from setStepSize(). If the value is really small the engine must take many more steps as it calculates the distance to the surface of the object. This will provide more detail, but it is calculated for every pixel, which can dramatically slow down the performance.

A great breakdown of the how raymarching works can be found [here](https://www.youtube.com/watch?v=Cp5WWtMoeKg) (Note the example in the video uses GLSL and is built in Unity).


### Syntax
```js
setStepSize(size);
```

### Parameters
**size** Float: value from 0.0 to 1.0. Defaults to 0.85;