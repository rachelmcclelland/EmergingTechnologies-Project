# EmergingTechnologies-Project

## mnistreader-c
This file contains a C program to read in and output data from the mnist training files and their corresponding labels.
Currently the file only reads in the first three numbers and first three labels from each file as it is 
just a test program to attempt to see what the files look like.

## Flask - webapp.py
This file is used for running the server. It contains python code that runs. It uses the Flask python package to run the application which allows us to view the app in a web browser.

### Issues
1. Error message jinja2.exceptions.TemplateNotFound appeared when trying to load the html page 
Googled answer and found that the folder holding the application.html file must be called templates
for Flask to find it. I had originally called it static and after changing it, error was gone.

2. I had a few issues with reshaping the data in the mnist file to match what the input from the user was so that it can be compared. The issue was related to a four dimensional array being used in the javascript file while it was only being reshaped to a three dimensional array in the python notebook. I had resoved this issue by researching the topic and found [this](https://bensonruan.com/handwritten-digit-recognition-with-tensorflow-js/) website that used 4 dimensional array in its python code. After adpating this code into my project, the issue was resolved.

### How to run Flask
*In the command prompt*
set FLASK_APP=webapp.py
flask run

## Demo
![demo](/assets/gifs/appsample.gif)

## Refereneces
https://stackoverflow.com/questions/2368784/draw-on-html5-canvas-using-a-mouse

https://github.com/SamArgt/Mnist-flask-Tensorflow/blob/master/app.py
https://stackoverflow.com/a/48334563
https://bensonruan.com/handwritten-digit-recognition-with-tensorflow-js/
https://www.w3schools.com/jquery/jquery_ref_events.asp
