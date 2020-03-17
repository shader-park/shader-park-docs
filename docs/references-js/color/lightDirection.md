### lightDirection()

### Example

<iframe width="100%" height="450px" src="https://shaderpark.netlify.com/sculpture/-M2aPfxOPt9evUT9w3va?example=true&embed=true" frameborder="0"></iframe>

### Description
Sets the direction of the built-in lighting. By default the light points from the top down as lightDirection(0, 1, 0).

### Syntax
```js
lightDirection(x, y, z);

lightDirection(position);
```

### Parameters
**x** Float: value from 0.0 to 1.0. Defaults to 0
**y** Float: value from 0.0 to 1.0. Defaults to 1
**z** Float: value from 0.0 to 1.0. Defaults to 0

**position** Vec3: defaults to vec3(0, 1, 0).