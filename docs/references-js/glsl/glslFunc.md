### glslFunc()

### Example

<iframe width="100%" height="450px" src="https://shaderpark.netlify.com/sculpture/-N01zT0sQ9alzTaxVDgG?example=true&embed=true" frameborder="0"></iframe>

---

::: details Example 2 Custom Color + Shape Extrusion (click to open)
<iframe width="100%" height="450px" src="https://shaderpark.netlify.com/sculpture/-N08hC7qDfxdQX9K91XY?embed=true&example=true" frameborder="0"></iframe>
:::

---

::: details Example 3 Custom Raymarcher
<iframe width="100%" height="450px" src="https://shaderpark.netlify.com/sculpture/-N08gr2FStcIFmTFOyKL?embed=true&example=true" frameborder="0"></iframe>
:::



### Description
Creates a javascript function from a GLSL function. This enables the ability to use if statements(branching),work with integers and even create your own raymarcher. Note this will not work with GL ES3. To use GL ES3 look at [glslFuncES3](/references-js/glsl/glslFuncES3.html) (note, the error handeling of the glsl is not nearly as good as the glslFunc).

### Syntax
```js
glslFunc(func);
```

### Parameters
**func** String: a String containing a GLSL function.

### Returns
Function: An encapsulated version of func. Any arguments given to this function will be forwarded as arguments to the provided glsl function.
