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
[expand](/references-js/operations/expand.html), [shell](/references-js/operations/shell.html), applySDF

------

### Coordinate Space Modifiers 
[displace](/references-js/operations/displace.html)

[mirrorX](/references-js/operations/mirrorX.html), [mirrorY](/references-js/operations/mirrorY.html), [mirrorZ](/references-js/operations/mirrorX.html), [mirrorXYZ](/references-js/operations/mirrorXYZ.html)

[rotateX](/references-js/operations/rotateX.html), [rotateY](/references-js/operations/rotateY.html), [rotateZ](/references-js/operations/rotateZ.html)

[reset](/references-js/operations/reset.html)

setSpace

------

### Material

[color](/references-js/color/color.html), 

hsv2rgb, rgb2hsv, 

occlusion

#### Lighting
basicLighting, noMaterial, lightDirection

------


### Input

#### Space and Time

getSpace, 

getSpherical,

getRayDirection,

time,

normal


#### Interactive

input

mouse, mouseIntersection


------

### Math

sin, cos, tan, asin, acos 
exp, log, exp2, log2
pow, sqrt, inversesqrt
mod, fract, abs, sign, floor, ceil
min, max, clamp, mix, smoothstep
length, distance, dot, cross, normalize, reflect, refract
toSpherical, fromSpherical

------

### Algorithms

noise, fractalNoise

sphericalDistribution

------

### Constants

PI, TWO_PI, TAU

------

### Global Settings

lightDirection
noLighting
setGeometryQuality
setStepSize


