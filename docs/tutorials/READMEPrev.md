---
sidebar: auto
---

# Getting Started

## What is shader park?
It's a creative coding community that aims to take a niche area of graphics programming and make it accessible to new developers, while simplifying the creation process for experience graphics programmers.

The graphics technique used in Shader Park is called Signed Distance Fields. If you're new to them, that's great! 
This community is here to teach you how they work and get you creating your own artwork quickly.



<iframe width="50%" height="450px" src="https://shader-park.appspot.com/sculpture/-LSgHohvTH80MAgJbbPy?hideeditor=true&hidepedestal=true&embed=true&clickenabled=false" frameborder="0" style="float: left"></iframe>

<iframe width="50%" height="450px" src="https://shader-park.appspot.com/sculpture/-LPOucSRaaSOIEF9W5Qs?hideeditor=true&hidepedestal=true&embed=true&clickenabled=false" frameborder="0" style="float: left"></iframe>

<iframe width="50%" height="450px" src="https://shader-park.appspot.com/sculpture/-LRNqUDSccinZfco4bOy?hideeditor=true&hidepedestal=true&embed=true&clickenabled=false" frameborder="0" style="float: left"></iframe>

<iframe width="50%" height="450px" src="https://shader-park.appspot.com/sculpture/-LQLGa1s1XZx3cjMKJuD?hideeditor=true&hidepedestal=true&embed=true&clickenabled=false" frameborder="0" style="float: left"></iframe>

## What language is this?
The code is written in GLSL which runs directly the graphics card. Unlike more commonly taught languages, the graphics card runs operations in parallel, so code specific to graphics programming can run very efficiently. 
Shader park provides a number of helper functions that are available under [references](https://shader-park.appspot.com/references).

If you're new to GLSL check out our guide [here](#glsl)

## Creating your first sculpture

<iframe width="100%" height="450px" src="http://shader-park.appspot.com/sculpture/-LM-Nx6cvMmlbdKKiB64?example=true&embed=true" frameborder="0"></iframe>

In **scene** we define the shape of the object that we want to create.
One thing to note is that the code written in scene is run on every pixel.

Notice that we return a float out of **scene**. In order to create a shape we need to return the shortest distance to the shape where positive values are outside the shape, negative values are inside, and 0 is at the surface of the shape. The positive, or negative part is the "Signed" in Signed Distance Field.

## Creating our own Signed Distance Function
In this example we'll write the sphere function from scratch.

If you're new to creating graphics on a GPU you can imagine the scene function is run with **p** (the current pixel position) passed in with every value from (-1.0, -1.0, -1.0) to (1.0, 1.0, 1.0)
```glsl{5}
//Note this is just a mental model
for(float x = -1.0; x <1.0; x+=0.001) {
    for(float y = -1.0; y <1.0; y+=0.001) {
        for(float z = -1.0; z <1.0; z+=0.001) {
            float distanceToObject = scene(vec3(x, y, z)); 
        }
    }
}
```
It's not actually set up like this because the GPU will run this process in parallel, which makes it incredibly fast.

Now imagine we've paused part way through the loop and **p** happens to be (0.4, 0.1, 1.).
We need to write a function that determines if **p** is inside or outside our sphere.
The easiest way to do this is to calculate the distance from our origin to the sphere, and subtract the size of the sphere we want to make.

```glsl{3}
scene(vec3 p) {
    float size = 0.2;
    return distance((vec3(0.0, 0.0, 0.0), p) - size);
}
```
Because the origin is 0.0 for short we can just calculate the length of p and subtract our size;

```glsl
scene(vec3 p) {
    return length(p - 0.2);
}
```



Breaking down: sphere(p, 0.2). 
Here we're providing the currently pixel coordinate p and the size that we want to define our sphere.

Try change 0.2 to a smaller and larger value.
Notice if you set the value to 1.0 it fills the entire space.


## Coordinate space



## Coloring your sculpture
In **shade** we define how we want to shade in the color at each pixel.

## Coloring two different objects




## <a name="glsl"></a>Learning GLSL
## Learning raymarching

