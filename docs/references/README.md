<!-- ---
home: true
sidebar: true
features:
- title: Creative Coding Community
  details: Focuses on real time generative graphics and teaches new developers techniques in 3D graphics.
- title: Builtin Shading Functions
  details: The setup of ray marching is provided to you with helper functions for creating the signed distance field geometry so that you can focus on creating.
- title: Live Collaboration
  details: Save your sculptures and explore other people's creations.
footer: MIT Licensed | Copyright © 2018-present Torin Blankensmith & Peter Whidden
--- -->

### References
Shader Park provides a set of built in functions to help you create your sculptures.
Try out any of the examples on the left.




<!-- <iframe width="100%" height="450px" src="/examples?embed=true" frameborder="0"></iframe> -->

<!-- 
## Geometries

### sphere

```float sphere( vec3 p, float size )```

#### Example
```glsl
float sphere(vec3 p, float size);
```
<iframe width="100%" height="450px" src="https://shader-park.appspot.com/sculpture/-LM-Nx6cvMmlbdKKiB64?example=true&embed=true" frameborder="0"></iframe>

### box
```flat box(vec3 p, vec3 dimensions)```
#### Example
```glsl
float box(vec3 p, vec3 size);
```

<iframe width="100%" height="450px" src="https://shader-park.appspot.com/sculpture/-LM-LkFiHWJrolzNlpFF?example=true&embed=true" frameborder="0"></iframe>

### roundedBox
```flat roundedBox(vec3 p, vec3 dimensions, float roundness)```
#### Example
```glsl
float map(vec3 p) {
	return box(p, vec3(0.3, 0.3, 0.3), 0.2);
}
```
<iframe width="100%" height="450px" src="http://shaderpark.herokuapp.com" frameborder="0"></iframe>



### line
#### Example
```glsl
float line(p, vec3 start, vec3 end, float width);
```
<iframe width="100%" height="450px" src="https://shader-park.appspot.com/sculpture/-LM0vjFEwV1Ha18Hl9AP?example=true&embed=true" frameborder="0"></iframe>

### torus
#### Example
```glsl
float torus(vec3 p, vec2 size);
```
<iframe width="100%" height="450px" src="https://shader-park.appspot.com/sculpture/-LM-OGmDkb48R4uyugiA?example=true&embed=true" frameborder="0"></iframe>

### cylinder
#### Example
```glsl
float cylinder(vec3 p, vec2 size);
```
<iframe width="100%" height="450px" src="https://shader-park.appspot.com/sculpture/-LM0t3ZICdtWkNLFkO1q?example=true&embed=true" frameborder="0"></iframe>


### cone
#### Example

### plane
#### Example

### prism
#### Example

## Operations

### add
#### Example
```glsl 
float add(float obj1, float obj2);
```
<iframe width="100%" height="450px" src="https://shader-park.appspot.com/sculpture/-LM3FtAfpWixlL9VAr4G?example=true&embed=true" frameborder="0"></iframe>

### subtract
#### Example
```glsl 
float subtract(float obj1, float obj2);
```
<iframe width="100%" height="450px" src="https://shader-park.appspot.com/sculpture/-LM3HB7wAVNSJW5ggB4d?example=true&embed=true" frameborder="0"></iframe>

### intersect
#### Example
```glsl
float intersect(float obj1, float obj2);
```
<iframe width="100%" height="450px" src="https://shader-park.appspot.com/sculpture/-LM3HsbO0jkByC9KAAgs?example=true&embed=true" frameborder="0"></iframe>

### smoothAdd
#### Example
```glsl
float smoothAdd(float obj1, float obj2, float amount);
```
<iframe width="100%" height="450px" src="https://shader-park.appspot.com/sculpture/-LMjM7k1N6SLJKFu_7UR?example=true&embed=true" frameborder="0"></iframe>

### Smooth Subtraction

### mix
#### Example
```glsl
float mix(float obj1, float obj2, float amount);
```
<iframe width="100%" height="450px" src="https://shader-park.appspot.com/sculpture/-LMjG0XPKeUoPRK1i1GW?example=true&embed=true" frameborder="0"></iframe>

### Repeat 3D
### Radial Repeat

### Translate 2D
### Translate 3D
### Scale 2D
### Scale 3D
### Twist


## Lighting

### simpleLighting
#### Example
```glsl
float simpleLighting(vec3 p, vec3 normal, vec3 lightDirection);
```
<iframe width="100%" height="450px" src="https://shader-park.appspot.com/sculpture/-LM-Nx6cvMmlbdKKiB64?example=true&embed=true" frameborder="0"></iframe>

### occlusion
#### Example
```glsl
float occlusion(vec3 p, vec3 normal);
```
<iframe width="100%" height="450px" src="https://shader-park.appspot.com/sculpture/-LOLQrXYlRMTrAkVtTcA?&embed=true" frameborder="0"></iframe>

## Noise
### noise
#### Example
```glsl
vec3 noise(vec3 pos);
```
<iframe width="100%" height="450px" src="https://shader-park.appspot.com/sculpture/-LOCynJRpfhD4y_2gpxG?&embed=true" frameborder="0"></iframe>

### fractalNoise
#### Example
```glsl
vec3 fractalNoise(vec3 pos);
```
<iframe width="100%" height="450px" src="https://shader-park.appspot.com/sculpture/-LPiqQhbCJWu873hB-qW?&embed=true" frameborder="0"></iframe>
 
## Mouse Interactions

### mouse
#### Example
```glsl
vec3 mouse;
```
<iframe width="100%" height="450px" src="https://shader-park.appspot.com/sculpture/-LOCLqPCs9XAEDaBI9Vd?&embed=true" frameborder="0"></iframe>

### mouseIntersection
#### Example
```glsl
vec3 mouseIntersection();
```
<iframe width="100%" height="450px" src="https://shader-park.appspot.com/sculpture/-LOCklVRmdW9CJbSTMQT?&embed=true" frameborder="0"></iframe>
 -->