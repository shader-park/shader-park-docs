---
sidebar: false
---
## References JS
Shader Park provides a set of built in functions to help you create your sculptures.



### Geometry
#### Primitives
[sphere](/references-js/geometries/sphere.html), [box](/references-js/geometries/box.html), [torus](/references-js/geometries/torus.html), [line](/references-js/geometries/line.html), [cylinder](/references-js/geometries/cylinder.html)

#### Construction Modes
[union](/references-js/operations/union.html), [difference](/references-js/operations/difference.html), [blend](/references-js/operations/blend.html), [intersect](/references-js/operations/intersect.html), [mixGeo](/references-js/operations/mixGeo.html)

#### Modifiers
[expand](/references-js/operations/expand.html), [shell](/references-js/operations/shell.html), [setSDF](/references-js/operations/setSDF.html)

### Composition
[shape](/references-js/geometries/shape.html)

------

### Coordinate Space Modifiers 
[displace](/references-js/operations/displace.html)

[setSpace](/references-js/operations/setSpace.html)

[mirrorX](/references-js/operations/mirrorX.html), [mirrorY](/references-js/operations/mirrorY.html), [mirrorZ](/references-js/operations/mirrorX.html), [mirrorXYZ](/references-js/operations/mirrorXYZ.html)

[rotateX](/references-js/operations/rotateX.html), [rotateY](/references-js/operations/rotateY.html), [rotateZ](/references-js/operations/rotateZ.html)

[reset](/references-js/operations/reset.html)



------

### Material

[color](/references-js/color/color.html), 

[metal](/references-js/color/metal.html),
[shine](/references-js/color/shine.html)

[hsv2rgb](/references-js/color/hsv2rgb.html) , rgb2hsv, 

[occlusion](/references-js/color/occlusion.html)

#### Lighting
[noLighting](/references-js/color/noLighting.html), [lightDirection](/references-js/color/lightDirection.html) 

------


### Input

#### Space and Time

[getSpace](/references-js/input/getSpace.html),

getSpherical,

[getRayDirection](/references-js/input/getRayDirection.html),

[time](/references-js/input/time.html),

[normal](/references-js/input/normal.html)


#### Interactive

[input](/references-js/input/input.html), 
[mouse](/references-js/input/mouse.html), 
[mouseIntersection](/references-js/input/mouseIntersection.html), 


------

### Math

sin, cos, tan, asin, acos 

exp, log, exp2, log2

pow, sqrt, inversesqrt

mod, fract, abs, sign, floor, ceil

min, max, clamp, mix, smoothstep,

length, distance, dot, cross, normalize, reflect, refract

toSpherical, fromSpherical

------

### Algorithms
[noise](/references-js/algorithms/noise.html), [fractalNoise](/references-js/algorithms/fractalNoise.html), 

[sphericalDistribution](/references-js/algorithms/sphericalDistribution.html)


------

### Constants

PI, TWO_PI, TAU

------

### Global Settings

[setGeometryQuality](/references-js/global-settings/setGeometryQuality.html), [setStepSize](/references-js/global-settings/setStepSize.html)


### Known Issues / WIP

length, distance, dot, cross, normalize, reflect, and refract work only with with vec3s

pow, mod, min, max, atan, clamp, mix, and smoothstep work only with floats.

