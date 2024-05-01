### getSpace()

### Example

<iframe width="100%" height="450px" src="https://shaderpark.com/sculpture/-M32McTu1HcCLRvSID84?example=true&embed=true" frameborder="0"></iframe>

---

<iframe width="100%" height="450px" src="https://shaderpark.com/sculpture/-M1-gPj_vGDyHeVzLWmd?example=true&embed=true" frameborder="0"></iframe>

---

<iframe width="100%" height="450px" src="https://shaderpark.com/sculpture/-Lgz7za4PCYhmR2Ihx50?example=true&embed=true" frameborder="0"></iframe>

### Description
Gets the current coordinate space.

When combining operations it can be helpful to get a reference to an unchanged coordinate space. Calling getSpace() inside [shape()](/references-js/geometries/shape.html) returns a new reference to the space at the current scope.

### Syntax
```js
getSpace();
```

### Returns
Vec3: The current coordinate space
