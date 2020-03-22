### setSpace()

### Example

<iframe width="100%" height="450px" src="https://shaderpark.netlify.com/sculpture/-M32McTu1HcCLRvSID84?example=true&embed=true" frameborder="0"></iframe>

----

<iframe width="100%" height="450px" src="https://shaderpark.netlify.com/sculpture/-M32O5bxw4Z9Honr2Lnf?example=true&embed=true" frameborder="0"></iframe>

### Description

Used for applying any kind of space transformation. This includes translating the coordinate space, or stretching / warping the space the objects reside in.

This function can be used to recreate similar functionality to [displace()](/references-js/operations/displace.html), however if you scale the coordinate space using displace it will also translate the object.

It's commonly used setSpace with [getSpace()](/references-js/input/getSpace.html).

### Syntax
```js
setSpace(space);
```

### Parameters
**space** Vec3: coordinate space
