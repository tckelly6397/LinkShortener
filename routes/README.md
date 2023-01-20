# Overview
Handles what files to pass to the browser based on the path given

## Render
arg1 - Name of the template to render\
arg2 - Variables to be passed to the template

## Routes

### Basic
home \\home\
-A single page application with a input for a link and a button

### Advanced
analytics \\a?link-name\
-View the analytics of a link if you have the permission to view it\
-Else redirect back to home?\
account \\profile\
-View all your links as well as other profile information\
forgot \\forgot-password\
-A user input for an email that sends a link to reset your password\
reset \\reset-password?key=\
-Reset your password given a key

