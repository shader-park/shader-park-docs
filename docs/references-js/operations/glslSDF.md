### glslSDF()

### Example

<iframe width="100%" height="450px" src="https://shaderpark.netlify.com/sculpture/-N-zzJMPuGNRgk7wJzcN?example=true&embed=true" frameborder="0"></iframe>

---

<iframe width="100%" height="450px" src="https://shaderpark.netlify.com/sculpture/-N-zyfdiGNS3Y3TwfVy8?example=true&embed=true" frameborder="0"></iframe>

---

<iframe width="100%" height="450px" src="https://shaderpark.netlify.com/sculpture/-N-nbKAm-LUNKWjQvbVz?example=true&embed=true" frameborder="0"></iframe>



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
