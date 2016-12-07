# SECRET SANTA

IF you are running a Secret Santa draw in your workplace and need a means of pairing the gifts between sender and receiver, then this is the tool for you. 

## Installation

You'll need [Node.js](https://nodejs.org/en/) installed. Then run:

```sh
npm install -g secret_santa
```

## Running

Run `secretsanta` passing it the names of people who have been good:

```
secretsanta Rita Sue Bob "Alan Sugar"
```

## The output

The output is as follows:

```
Rita  ------>  Bob
Sue  ------>  Rita
Bob  ------>  Alan Sugar
Alan Sugar  ------>  Sue
```

Merry Christmas.
