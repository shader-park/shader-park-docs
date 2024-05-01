### sphericalDistribution()

### Example

<iframe width="100%" height="450px" src="https://shaderpark.com/sculpture/-M2BljrhSv4vBfyvzZiP?example=true&embed=true" frameborder="0"></iframe>

---

<iframe width="100%" height="450px" src="https://shaderpark.com/sculpture/-M2BkuOHDHy1VwWBhesz?example=true&embed=true" frameborder="0"></iframe>

### Description
Computes the distance to the nearest of N points distributed over a sphere. 

### Syntax
```js
sphericalDistribution(p, numPoints)
```

### Parameters
**p** vec3: a point to sample.

**numPoints** Float: number of points distributed on the sphere.

### Returns
Vec4: x,y,z is the location of the point nearest to p, and w is the distance to that point ( w = distance(xyz,p) )
