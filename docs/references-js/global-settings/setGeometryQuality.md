### setGeometryQuality()

### Example

<iframe width="100%" height="450px" src="https://shaderpark.netlify.com/sculpture/-M2ahRQDBS1m-iOReXov?example=true&embed=true" frameborder="0"></iframe>

### Description

As you distort the surface of any of the objects you create you may notice artifacting. To get rid of this you can use a higher Geometry Quality, but at the cost of performance. This function provides the same functionality as [setStepSize](/references-js/global-settings/setStepSize.html).


### Syntax
```js
setGeometryQuality(size);
```

### Parameters
**size** Float: value from 0 to 100. Defaults to 15;