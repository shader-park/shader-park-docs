### glslFuncES3()

### Example
<!-- 
<iframe width="100%" height="450px" src="https://shaderpark.netlify.com/sculpture/-N01zT0sQ9alzTaxVDgG?example=true&embed=true" frameborder="0"></iframe>

---

::: details Example 2 Custom Color + Shape Extrusion (click to open)
<iframe width="100%" height="450px" src="https://shaderpark.netlify.com/sculpture/-N08hC7qDfxdQX9K91XY?embed=true&example=true" frameborder="0"></iframe>
:::

---

::: details Example 3 Custom Raymarcher
<iframe width="100%" height="450px" src="https://shaderpark.netlify.com/sculpture/-N08gr2FStcIFmTFOyKL?embed=true&example=true" frameborder="0"></iframe>
::: -->



### Description
Creates a javascript function from a GLSL function. This enables the ability to use if statements(branching), work with integers and even create your own raymarcher. Note this will work with GL ES3, but does not have as nice of error handeling as [glslFunc](/references-js/glsl/glslFunc.html)

### Syntax
```js
glslFuncES3(func);
```

### Parameters
**func** String: a String containing a GLSL function.

### Returns
Function: An encapsulated version of func. Any arguments given to this function will be forwarded as arguments to the provided glsl function.
