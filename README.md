# EmergingTechnologies-Project

## Overview
This application uses the popular Mnist database that is found online to predict user input of a single digit using Python, Flask, Jupyter and Keras. The model is trained from a 60 000 dataset using jupyter notebook which is used in the back end with javascript to predict what number it was the user entered on the web application on the front end. 

Originally the model was unzipping the files from the mnist website that I had downloaded to train the model but later I had changed it to the model retrieving the files from the website itself as it worked better with my project and prevented me from running into any more errors relating to the reshaping of the image for prediciting.

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
* Navigate to the location the file is in on the command prompty
* set FLASK_APP=webapp.py
* flask run

**Alternatively it can be run with**
* python application.html

### How to use application
* open any web browser and navigate to http://localhost:5000
* using your mouse, right click and drag it across the black square to write a number
* click 'predict' to find out what the answer is

* click 'clear' if you have made a mistake or want to try again

*This application can also work on mobile as it contains javascript could to detect touch.*

## Demo
![demo](/assets/gifs/appsample.gif)

## Refereneces
https://stackoverflow.com/questions/2368784/draw-on-html5-canvas-using-a-mouse

https://github.com/SamArgt/Mnist-flask-Tensorflow/blob/master/app.py

Helped with issues relating to error when file was in the incorrect folder - https://stackoverflow.com/a/48334563

Demo on how to predict hand drawn numbers - 
https://bensonruan.com/handwritten-digit-recognition-with-tensorflow-js/

Convolutional Neural Networks: A Python Tutorial Using TensorFlow and Keras - https://www.kdnuggets.com/2019/07/convolutional-neural-networks-python-tutorial-tensorflow-keras.html

https://www.w3schools.com/jquery/jquery_ref_events.asp

Help with editing a markdown file - 
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links
