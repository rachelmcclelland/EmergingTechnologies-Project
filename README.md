# EmergingTechnologies-Project

## mnistreader-c
This file contains a C program to read in and output data from the mnist training files and their corresponding labels.
Currently the file only reads in the first three numbers and first three labels from each file as it is 
just a test program to attempt to see what the files look like.

## webapp.py

### Issues
Error message jinja2.exceptions.TemplateNotFound appeared when trying to load the html page 
Google answer and found that the folder holding the application.html file must be called templates
for Flask to find it. I had originally called it static and after changing it, error was gone

## Refereneces
https://stackoverflow.com/questions/2368784/draw-on-html5-canvas-using-a-mouse

https://github.com/SamArgt/Mnist-flask-Tensorflow/blob/master/app.py
https://stackoverflow.com/a/48334563