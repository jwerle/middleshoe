middleshoe
===

allow for middle ware with [shoe](https://github.com/substack/shoe) or anything that emits a 'data' event much like [connect](https://github.com/senchalabs/connect)

## install

```js
$ npm install middleshoe
```

## usage

with [shoe](https://github.com/substack/shoe)

```js
var sock = middleshoe(shoe('/shoe'))
```

Now `sock` has a `use(fn)` function which accepts data from the emitter 'data' event. You can "hook" into the call stack and do things like parse JSON into an object and pass it along to the next function in the stack

***server***

```js
var sock = shoe(function (stream) {
  stream.write(JSON.stringify({
    hello: "world"
  }));
});
```

***client***

```js
sock.use(function (data, next) {
  next(JSON.stringify(data));
});

sock.use(function (data) {
  console.log(data); // {hello: "world"}
});
```

`middleshoe` also comes shipped with middle ware like `jsonParser`

```js
sock.use(middleshoe.jsonParser());
sock.use(function (data) {
  
});
```

## license

MIT