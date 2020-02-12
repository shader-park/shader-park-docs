---
sidebar: auto
---

# Introduction

## Motivation

Functional representations provide a highly expressive medium for modeling and animation. The goal of this project is to provide a simple, batteries-included platform that makes it as 

## Distance Fields

Distance fields (DFs) are a type of functional representation for defining a 3D model. Deriving the DF of an arbitrary surface in general is a complex problem. However by considering some basic examples we can an intuition for modeling with DFs.

### Coordinate Systems

Spherical

### Preserving operations

Translation
Rotation
Reflection


### Non-Preserving operations

Any abritrary distortion

## The Sphere-tracing algorithm

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