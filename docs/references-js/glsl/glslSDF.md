### glslSDF()

### Example

<iframe width="100%" height="450px" src="https://shaderpark.com/sculpture/-N-zzJMPuGNRgk7wJzcN?example=true&embed=true" frameborder="0"></iframe>

---
::: details Example 2 (click to open)
<iframe width="100%" height="450px" src="https://shaderpark.com/sculpture/-N-zyfdiGNS3Y3TwfVy8?example=true&embed=true" frameborder="0"></iframe>
:::

---

::: details Example 3 
<iframe width="100%" height="450px" src="https://shaderpark.com/sculpture/-N-nbKAm-LUNKWjQvbVz?example=true&embed=true" frameborder="0"></iframe>
:::


### Description
Generates an primitive from the provided GLSL function. 
The provided GLSL function must return a float(the distance filed) and the first parameter must be a vec3(position).

This will not work with GL ES3.

### Syntax
```js
glslSDF(glslCode);
```

### Parameters
**glslCode** String: The glsl source code.

### Returns
Function: A js function of the glslCode. Any arguments given to this function will be forwarded as arguments to the provided glsl function.
