### displace()

### Example
<iframe width="100%" height="450px" src="https://shader-park.appspot.com/sculpture/-M1-ib3SU9lL2GeqDsLR?example=true&embed=true" frameborder="0"></iframe>

----


<iframe width="100%" height="450px" src="https://shader-park.appspot.com/sculpture/-LgzZJVtRnw4NHNGjX_G?example=true&embed=true" frameborder="0"></iframe>

----

<iframe width="100%" height="450px" src="https://shader-park.appspot.com/sculpture/-Lgz7za4PCYhmR2Ihx50?example=true&embed=true" frameborder="0"></iframe>

### Description
Translate, or distort the coordinate space by the given positions.


Transformations are cumulative and apply to everything that happens after and subsequent calls to the function accumulates the effect. For example, calling displace(.2, 0, 0) and then displace(.2, 0, 0) is the same as displace(.4, 0, 0). The coordinate space can be set back to default by calling reset(). This function can be further controlled by using the shape().


### Syntax
```js
displace(xPosition, yPosition, zPosition);

displace(position);
```


