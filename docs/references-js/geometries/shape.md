### shape()

### Example

<iframe width="100%" height="450px" src="https://shaderpark.netlify.com/sculpture/-M2Bum8BeSfW9VZBweDc?example=true&embed=true" frameborder="0"></iframe>

---

<iframe width="100%" height="450px" src="https://shaderpark.netlify.com/sculpture/-M2BwAOmljLNZ_xQ988v?example=true&embed=true" frameborder="0"></iframe>

---

<iframe width="100%" height="450px" src="https://shaderpark.netlify.com/sculpture/-M2C1oaf91kELOJd1wJ0?example=true&embed=true" frameborder="0"></iframe>

---

<iframe width="100%" height="450px" src="https://shaderpark.netlify.com/sculpture/-M2C9GfEoFoiUc-poavg?example=true&embed=true" frameborder="0"></iframe>

---

<iframe width="100%" height="450px" src="https://shaderpark.netlify.com/sculpture/-M2C4rBujMVPVE9LWp67?example=true&embed=true" frameborder="0"></iframe>



### Description
Creates a new primitive shape. All state changing commands (color, displacement, geometry modes) are encapsulated and will only have an affect within scope of the provided function. Useful for isolating components with their own distortions and materials. Shapes can be nested for hierarchical modeling.

### Syntax
```js
shape(shape_func);
```

### Parameters
**shape_func** Function: A function which draws a shape.  


### Returns
Function: An encapsuled version of shape_func which will not modify any drawing state outside of its own scope.  
Note: Any arguements given to this function will be forwarded as arguments to shape_func.
