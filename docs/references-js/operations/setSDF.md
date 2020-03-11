### setSDF()

### Example



<iframe width="100%" height="450px" src="https://shaderpark.netlify.com/sculpture/-M21MTrG4TVZ9rlQmyD0?example=true&embed=true" frameborder="0"></iframe>

---

<iframe width="100%" height="450px" src="https://shaderpark.netlify.com/sculpture/-M21QsaGAGKf354Yh4yZ?example=true&embed=true" frameborder="0"></iframe>

### Description
Applies the provided distance field.

### Syntax
```js
setSDF(distanceField);
```

### Parameters
**distanceField** Function: a function where any negative value is inside the shape, 0 intersects the shape and positive values are outside the shape.
