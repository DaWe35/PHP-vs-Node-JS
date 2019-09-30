# PHP-vs-Node-JS
PHP &amp; Node JS benchmark.

Okay, so I didn't finished this benchmarks, because when you are testing owith 1 clint, you're actually taking away node's biggest advantage, which is asynchronous IO. Even though node.js is single-threaded, it will handle other requests while waiting on the db.query call.

Because node is not using system threads for this, but it's own lightweight scheduler, it can execute concurrent requests much cheaper than Apache. Apache can be configured in different ways to handle multiple requests (e.g. pre-forking a fixed number of processes or event-driven forking), but once you have a certain number of concurrent requests, things will slow down as requests might have to wait for others to complete, even if those others are doing nothing but waiting for the DB.

So, to conclude, for synchronously executing a single request, yes PHP might be faster; but once you have enough requests which exceed the limit set by Apache's configuration and which is affected also by the size of your machine, you should see node.js being faster overall. [Source](https://stackoverflow.com/questions/41928870/nodejs-much-slower-than-php)

These benchmarks are tested in console (with 1 client). That would be better testing with a lot of real requests, so if you have any idea, feel free to submit a pl.


| File         | PHP 7.3.10           | Node JS v10.16.0 |
| ------------ |----------------------| -----------------|
| Maths / add  | 27.156               | 1.125            |
|Maths / sha256| 8.359                | 30.917           |