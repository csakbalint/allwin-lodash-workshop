# Allwin Lodash workshop

## Intro

This project meant to be a tutorial for getting basic/advanced knowledge in using the lodash libray.

Lodash is a utility library, it has a bunch of useful methods to handle various data transformations or evaluations. It applies safeguards to most of its methods to avoid errors in case of invalid values.

Let's _(lo-)DASH_ out some knowledge! 🧐

## How to use this repository

To start practicing, it is useful to clone this repository and read the README file. If you want to get hands-on experience you can checkout some of the branches and try the commands.

## Table of contents

- [Allwin Git workshop](#allwin-git-workshop)
  - [Intro](#intro)
  - [How to use this repository](#how-to-use-this-repository)
  - [Table of contents](#table-of-contents)
    - [Tools](#tools)
  - [Useful Lodash methods](#useful-lodash-methods)
    - [Typecheck](#typecheck)
    - [isEqual](#isequal)
    - [groupBy](#groupby)
    - [compact](#compact)
    - [map](#map)
    - [uniq or sortedUniq](#uniq-or-sorteduniq)
    - [difference](#difference)
    - [flatten && flattenDeep](#flatten----flattendeep)
    - [filter && reject](#filter----reject)
    - [once](#once)
    - [cloneDeep](#clonedeep)
    - [omitBy && pickBy](#omitby----pickby)
    - [camelCase, kebabCase, capitalize etc.](#camelcase--kebabcase--capitalize-etc)
    - [range](#range)
    - [debounce](#debounce)
  - [Worth to mention](#worth-to-mention)
    - [chunk](#chunk)
    - [xor, intersection, union](#xor--intersection--union)
    - [includes](#includes)
    - [throttle](#throttle)
    - [memoize](#memoize)
    - [partition](#partition)
    - [assign](#assign)
    - [defaults](#defaults)
    - [trim](#trim)
  - [Useful links](#useful-links)
  - [Finale](#finale)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

### Tools

It is recommended to use several tools:

- the repository itself cloned to your local environment
- Visual Studio Code

## Useful Lodash methods

### Typecheck

Check the type of the given value. Handle falsy values too (it has built/in safeguards).

```typescript
_.isArray(value); // check if the value is an array object

_.isBoolean(value);

_.isNil(value); // Checks if value is null or undefined.

// and so much more
```

### isEqual

Performs a deep comparison between two values to determine if they are equivalent.

ℹ️ This method supports comparing arrays, array buffers, booleans, date objects, error objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and typed arrays. Object objects are compared by their own, not inherited, enumerable properties. Functions and DOM nodes are compared by strict equality, i.e. ===.

```typescript
var object = { a: 1 };
var other = { a: 1 };

_.isEqual(object, other);
// => true

object === other;
// => false
```

### groupBy

Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The order of grouped values is determined by the order they occur in collection. The corresponding value of each key is an array of elements responsible for generating the key. The iteratee is invoked with one argument: (value).

```typescript
_.groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }

// The `_.property` iteratee shorthand.
_.groupBy(['one', 'two', 'three'], 'length');
// => { '3': ['one', 'two'], '5': ['three'] }
```

### compact

Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

ℹ️ If you want to remove reference values (object), then use reject.

```typescript
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```

### map

Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments:
(value, index|key, collection).

```typescript
function square(n) {
  return n * n;
}

_.map([4, 8], square);
// => [16, 64]

_.map({ a: 4, b: 8 }, square);
// => [16, 64] (iteration order is not guaranteed)

var users = [{ user: 'barney' }, { user: 'fred' }];

// The `_.property` iteratee shorthand.
_.map(users, 'user');
// => ['barney', 'fred']
```

### uniq or sortedUniq

Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.

ℹ️ _.sortedUniq is like _.uniq except that it's designed and optimized for sorted arrays.

```typescript
_.uniq([2, 1, 2]);
// => [2, 1]

_.sortedUniq([1, 1, 2]);
// => [1, 2]
```

### difference

Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

❗️ Unlike \_.pullAll, this method returns a new array.

```typescript
_.difference([2, 1], [2, 3]);
// => [1]
```

### flatten && flattenDeep

Flattens array a single level deep. flattenDeep recursively flattens array.

```typescript
_.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]

_.flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
```

### filter && reject

Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).

ℹ️ Unlike \_.remove, this method returns a new array.

```typescript
var users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
];

_.filter(users, function (o) {
  return !o.active;
});
// => objects for ['fred']

// The `_.matches` iteratee shorthand.
_.filter(users, { age: 36, active: true });
// => objects for ['barney']

// The `_.matchesProperty` iteratee shorthand.
_.filter(users, ['active', false]);
// => objects for ['fred']

// The `_.property` iteratee shorthand.
_.filter(users, 'active');
// => objects for ['barney']
```

### once

Creates a function that is restricted to invoking func once. Repeat calls to the function return the value of the first invocation. The func is invoked with the this binding and arguments of the created function.

```typescript
var initialize = _.once(createApplication);
initialize();
initialize();
// => `createApplication` is invoked once
```

### cloneDeep

Creates a clone of value recursively.

❗️ Note: This method is loosely based on the structured clone algorithm and supports cloning arrays, array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and typed arrays. The own enumerable properties of arguments objects are cloned as plain objects. An empty object is returned for uncloneable values such as error objects, functions, DOM nodes, and WeakMaps.

```typescript
var objects = [{ a: 1 }, { b: 2 }];

var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false
```

### omitBy && pickBy

Creates an object composed of the object properties predicate returns truthy for. The predicate is invoked with two arguments: (value, key).

ℹ️ omitBy is the opposite of \_.pickBy.

```typescript
var object = { a: 1, b: '2', c: 3 };

_.pickBy(object, _.isNumber);
// => { 'a': 1, 'c': 3 }

var object = { a: 1, b: '2', c: 3 };

_.omitBy(object, _.isNumber);
// => { 'b': '2' }
```

### camelCase, kebabCase, capitalize etc.

String transformation methods. Convert string to various cases (camelCase, kebabCase), capitalize, convert every characters to lower, or upper etc.

```typescript
_.camelCase('Foo Bar');
// => 'fooBar'

_.camelCase('--foo-bar--');
// => 'fooBar'

_.camelCase('__FOO_BAR__');
// => 'fooBar'

_.kebabCase('Foo Bar');
// => 'foo-bar'

_.kebabCase('fooBar');
// => 'foo-bar'

_.kebabCase('__FOO_BAR__');
// => 'foo-bar'

_.capitalize('FRED');
// => 'Fred'

_.toLower('--Foo-Bar--');
// => '--foo-bar--'

_.toLower('fooBar');
// => 'foobar'

_.toLower('__FOO_BAR__');
// => '__foo_bar__'
```

### range

Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end. A step of -1 is used if a negative start is specified without an end or step. If end is not specified, it's set to start with start then set to 0

```typescript
_.range(4);
// => [0, 1, 2, 3]

_.range(-4);
// => [0, -1, -2, -3]

_.range(1, 5);
// => [1, 2, 3, 4]
```

### debounce

Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked. The debounced function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them. Provide options to indicate whether func should be invoked on the leading and/or trailing edge of the wait timeout. The func is invoked with the last arguments provided to the debounced function. Subsequent calls to the debounced function return the result of the last func invocation.

```typescript
// Avoid costly calculations while the window size is in flux.
jQuery(window).on('resize', _.debounce(calculateLayout, 150));

// Invoke `sendMail` when clicked, debouncing subsequent calls.
jQuery(element).on(
  'click',
  _.debounce(sendMail, 300, {
    leading: true,
    trailing: false,
  })
);

// Ensure `batchLog` is invoked once after 1 second of debounced calls.
var debounced = _.debounce(batchLog, 250, { maxWait: 1000 });
var source = new EventSource('/stream');
jQuery(source).on('message', debounced);

// Cancel the trailing debounced invocation.
jQuery(window).on('popstate', debounced.cancel);
```

## Worth to mention

### chunk

Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

```typescript
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```

### xor, intersection, union

Logical operations on arrays.

Xor creates an array of unique values that is the symmetric difference of the given arrays. The order of result values is determined by the order they occur in the arrays.

Intersection creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons. (Aka `_.uniq(_.concat(arr1, arr2))`)

```typescript
_.xor([2, 1], [2, 3]);
// => [1, 3]

_.intersection([2, 1], [2, 3]);
// => [2]

_.union([2], [1, 2]);
// => [2, 1]
```

### includes

Checks if value is in collection. If collection is a string, it's checked for a substring of value, otherwise SameValueZero is used for equality comparisons. If fromIndex is negative, it's used as the offset from the end of collecti

```typescript
_.includes([1, 2, 3], 1);
// => true

_.includes([1, 2, 3], 1, 2);
// => false

_.includes({ a: 1, b: 2 }, 1);
// => true

_.includes('abcd', 'bc');
// => true
```

### throttle

Creates a throttled function that only invokes func at most once per every wait milliseconds. The throttled function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them. Provide options to indicate whether func should be invoked on the leading and/or trailing edge of the wait timeout. The func is invoked with the last arguments provided to the throttled function. Subsequent calls to the throttled function return the result of the last func invocation.

```typescript
// Avoid excessively updating the position while scrolling.
jQuery(window).on('scroll', _.throttle(updatePosition, 100));

// Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
var throttled = _.throttle(renewToken, 300000, { trailing: false });
jQuery(element).on('click', throttled);

// Cancel the trailing throttled invocation.
jQuery(window).on('popstate', throttled.cancel);
```

### memoize

Creates a function that memoizes the result of func. If resolver is provided, it determines the cache key for storing the result based on the arguments provided to the memoized function. By default, the first argument provided to the memoized function is used as the map cache key. The func is invoked with the this binding of the memoized function.

ℹ️ The cache is exposed as the cache property on the memoized function. Its creation may be customized by replacing the \_.memoize.Cache constructor with one whose instances implement the Map method interface of clear, delete, get, has, and set.

```typescript
var object = { a: 1, b: 2 };
var other = { c: 3, d: 4 };

var values = _.memoize(_.values);
values(object);
// => [1, 2]

values(other);
// => [3, 4]

object.a = 2;
values(object);
// => [1, 2]

// Modify the result cache.
values.cache.set(object, ['a', 'b']);
values(object);
// => ['a', 'b']

// Replace `_.memoize.Cache`.
_.memoize.Cache = WeakMap;
```

### partition

Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for, the second of which contains elements predicate returns falsey for. The predicate is invoked with one argument: (value).

```typescript
var users = [
  { user: 'barney', age: 36, active: false },
  { user: 'fred', age: 40, active: true },
  { user: 'pebbles', age: 1, active: false },
];

_.partition(users, function (o) {
  return o.active;
});
// => objects for [['fred'], ['barney', 'pebbles']]

// The `_.matches` iteratee shorthand.
_.partition(users, { age: 1, active: false });
// => objects for [['pebbles'], ['barney', 'fred']]

// The `_.matchesProperty` iteratee shorthand.
_.partition(users, ['active', false]);
// => objects for [['barney', 'pebbles'], ['fred']]

// The `_.property` iteratee shorthand.
_.partition(users, 'active');
// => objects for [['fred'], ['barney', 'pebbles']]
```

### assign

Assigns own enumerable string keyed properties of source objects to the destination object. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.

ℹ️ This method mutates object and is loosely based on Object.assign.

```typescript
function Foo() {
  this.a = 1;
}

function Bar() {
  this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

_.assign({ a: 0 }, new Foo(), new Bar());
// => { 'a': 1, 'c': 3 }
Try in REPL;
```

### defaults

Assigns own and inherited enumerable string keyed properties of source objects to the destination object for all destination properties that resolve to undefined. Source objects are applied from left to right. Once a property is set, additional values of the same property are ignored.

ℹ️ This method mutates object.

```typescript
_.defaults({ a: 1 }, { b: 2 }, { a: 3 });
// => { 'a': 1, 'b': 2 }
```

### trim

Removes leading and trailing whitespace or specified characters from string.

```typescript
_.trim('  abc  ');
// => 'abc'

_.trim('-_-abc-_-', '_-');
// => 'abc'

_.map(['  foo  ', '  bar  '], _.trim);
// => ['foo', 'bar']
```

## Useful links

- [Lodash documentation](https://lodash.com/docs/4.17.15)
- [Lodash es for code-split](https://www.npmjs.com/package/lodash-es)
- [Difference between debounce and throttle](https://css-tricks.com/debouncing-throttling-explained-examples/)

## Finale

I hope you found this tutorial useful! And keep this in your mind:

![git gut](/assets/git-gut.jpeg)
