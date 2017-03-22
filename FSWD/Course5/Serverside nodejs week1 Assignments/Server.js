{\rtf1\ansi\ansicpg1252\cocoartf1504\cocoasubrtf810
{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl280\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 var express = require('express');\
var morgan = require('morgan');\
\
var dishRouter = require('./dishRouter');\
var promoRouter = require('./promoRouter');\
var leaderRouter = require('./leaderRouter');\
var hostname = 'localhost';\
var port = 3000;\
var app = express();\
\
app.use(morgan('dev'));\
\
app.use('/dishes', dishRouter);\
app.use('/promotions', promoRouter);\
app.use('/leadership', leaderRouter);\
\
app.listen(port, hostname, function () \{\
  console.log(`Server running at http://$\{hostname\}:$\{port\}/`)\
\});\
}