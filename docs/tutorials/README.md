---
sidebar: auto
---

## Modeling with Distance Functions

Distance functions (DFs) are a functional representation useful for defining shapes and solid volumes. Deriving the DF of an arbitrary surface in general is a complex problem. However by understanding some simple primitives and studying their properties we can develop an intuition for modeling with DFs. Constructive solid geometry (CSG), symmetry and non-linear transformations can be applied to create sophisticated models.
  
**Definition:** For a solid $\large S$ and a point $\large \,p \notin S$, the distance function maps $\large p$ to its minimum distance to $\large S$.  
<br>
To understand what this means, consider a solid 2D circle. The distance $\large d$ from a point $\large {p}=(x,y)$ to a circle of radius $\large r$ centered at the origin is:
<br>
<center>$\Large d=\sqrt{x^2+y^2}-r$</center>
<br>
<iframe src="https://www.desmos.com/calculator/o2mcl7poux?embed" width="100%" height="400px" style="border: 1px solid #ccc" frameborder=0></iframe>
<center>*The purple line shows that the distance from $\large p$ to the circle is the distance to the origin minus the radius $\large r$*</center>
<br>
Try dragging around the point in the interactive example above to convince yourself that no matter where $\large p$ is the equation holds true.  
You may also notice that when $\large p$ is inside the circle the DF is the negative of the distance to the surface. This is a special case of a DF, called a signed distance function (SDF). SDFs have additional features, such as the ability to invert the solid by multiplying the SDF by -1.  
  
In 3D, the DF of a sphere is basically the same: $\large d=\sqrt{x^2+y^2+z^2}-r$.  
This sphere can be rendered by expressing it in GLSL (See sections on GLSL and sphere tracing to learn more).  
Because GLSL has built vector types and functions, the DF of the sphere can be written simply as:
```glsl
float sphere(vec3 p, float r) {
	return length(p)-r;
}
```  
This produces:  
<iframe width="100%" height="450px" src="http://shader-park.appspot.com/sculpture/-LM-Nx6cvMmlbdKKiB64?example=true&embed=true&hideeditor=true" frameborder="0" scrolling="no"></iframe>
  


### Coordinate Systems

Spherical

### Preserving operations

Translation
Rotation
Reflection
Revolve from 2D

### Non-Preserving operations

Any arbitrary distortion  
  
magnitude of the grad of DF is 1. If it is different step step size must be scaled.

## The Sphere-tracing algorithm

## Color Vector Fields

### Lighting
Gradient of DF is normal.

## Roll your own intersection function

The shade function can be hacked to render 2D shaders, or implement your own intersection algorithm or volumetric renderer. 

## Sources
Much of the math and code in this page is based on
IQ articles
Jamie wong

## GLSL (OpenGL Shading Language)

GLSL a small language (essentially C without pointers) with built-in functions and data types for working with vectors and common maths. It is designed to run very efficiently on a graphics processor, even from within a web page. Graphics processors are capable of performing calculations at an amazing speed. In just a few minutes of interactive modeling on this site, your program in distanceToSurface can easily be executed over 100 billion times.

Some built in types:
vec2
vec3
vec4
mat2
mat3
mat4

Some built in functions:
float length(vec v)
float distance(vec v1,vec v2)
vec normalize(vec v)
pow
exp
sqrt
abs
Trig - sin, cos, tan, atan, acos, asin...

A full list of built-in functions can be found at: [url]

## Further reading and resources

IQs articles
shadertoy
Curv