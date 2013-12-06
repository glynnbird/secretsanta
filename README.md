# SECRET SANTA

IF you are running a Secret Santa draw in your workplace and need a means of pairing the gifts between sender and receiver, then this is the tool for you. 


## Installation

Download the repository, run "npm install" and the run the script.

## Running secretsanta.js

It is a command-line, Node.js script which is run like this (Node.js required):

```
node secretsanta.js Rita Sue Bob "Alan Sugar"
```

i.e. you supply a list people on the command-line and the script will produce a list of whose present is destined for whom, without paper and guaranteeing
that a sender can't receive his/her own present.

## The output

The output is as follows:

```
Rita  ------>  Bob
Sue  ------>  Rita
Bob  ------>  Alan Sugar
Alan Sugar  ------>  Sue
```

Merry Christmas.
