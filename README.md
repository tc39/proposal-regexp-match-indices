<!--#region:intro-->
# RegExp Match Indices for ECMAScript

ECMAScript `RegExp` Match Indices provide additional information about the start and end
indices of captured substrings relative to the start of the input string.

A polyfill can be found in the [`regexp-match-indices`](https://www.npmjs.com/package/regexp-match-indices) package on NPM.

> NOTE: This proposal was previously named "RegExp Match Array Offsets", but has been renamed
> to more accurately represent the current status of the proposal.

<!--#endregion:intro-->

<!--#region:status-->
## Status

**Stage:** 3
**Champion:** Ron Buckton (@rbuckton)

_For detailed status of this proposal see [TODO](#todo), below._
<!--#endregion:status-->

<!--#region:authors-->
## Authors

* Ron Buckton (@rbuckton)
<!--#endregion:authors-->

<!--#region:motivations-->
# Motivations

Today, ECMAScript `RegExp` objects can provide information about a _match_ when calling the `exec`
method. This result is an `Array` containing information about the substrings that were matched,
along with additional properties to indicate the `input` string, the `index` in the input at which
the match was found, as well as a `groups` object containing the substrings for any named capture
groups.

However, there are several more advanced scenarios where this information may not necessarily be
sufficient. For example, an ECMAScript implementation of TextMate Language syntax highlighting
needs more than just the `index` of the _match_, but also the start and end indices for individual
capture groups.

As such, we propose the adoption of an additional `indices` property on the array result (the 
_substrings array_) of `RegExp.prototype.exec()`. This property would itself be an _indices array_ 
containing a pair of start and end indices for each captured substring. Any _unmatched_ capture 
groups would be `undefined`, similar to their corresponding element in the _substrings array_. 
In addition, the _indices array_ would itself have a `groups` property containing the start and end
indices for each named capture group.

<!--#endregion:motivations-->

<!--#region:prior-art-->
# Prior Art

* Oniguruma NodeJS bindings: [`captureIndices` property](https://github.com/atom/node-oniguruma#onigscannerfindnextmatchsyncstring-startposition)
* .NET: [`Capture.Index` Property](https://msdn.microsoft.com/en-us/library/system.text.regularexpressions.capture.index(v=vs.110).aspx)
* Java: [`Matcher.start(int)` Method](https://docs.oracle.com/javase/7/docs/api/java/util/regex/Matcher.html#start(int))

<!--#endregion:prior-art-->

<!--#region:semantics-->
<!--
# Semantics

> TODO: Describe static and runtime semantics of the proposal.
-->
<!--#endregion:semantics-->

<!--#region:examples-->
# Examples

```js
const re1 = /a+(?<Z>z)?/;

// indices are relative to start of the input string:
const s1 = "xaaaz";
const m1 = re1.exec(s1);
m1.indices[0][0] === 1;
m1.indices[0][1] === 5;
s1.slice(...m1.indices[0]) === "aaaz";

m1.indices[1][0] === 4;
m1.indices[1][1] === 5;
s1.slice(...m1.indices[1]) === "z";

m1.indices.groups["Z"][0] === 4;
m1.indices.groups["Z"][1] === 5;
s1.slice(...m1.indices.groups["Z"]) === "z";

// capture groups that are not matched return `undefined`:
const m2 = re1.exec("xaaay");
m2.indices[1] === undefined;
m2.indices.groups["Z"] === undefined;
```
<!--#endregion:examples-->

<!--#region:api-->
<!--
# API

```ts
```
-->
<!--#endregion:api-->

<!--#region:grammar-->
<!--
# Grammar

> TODO: Provide the grammar for the proposal. Please use [grammarkdown][Grammarkdown] syntax in
> fenced code blocks as grammarkdown is the grammar format used by ecmarkup.

```grammarkdown
```
-->
<!--#endregion:grammar-->

<!--#region:references-->
<!--
# References

> TODO: Provide links to other specifications, etc.

* [Title](url)
-->
<!--#endregion:references-->

<!--#region:prior-discussion-->
<!--
# Prior Discussion

> TODO: Provide links to prior discussion topics on https://esdiscuss.org.

* [Subject](https://esdiscuss.org)
-->
<!--#endregion:prior-discussion-->

<!--#region:todo-->
# TODO

The following is a high-level list of tasks to progress through each stage of the [TC39 proposal process](https://tc39.github.io/process-document/):

### Stage 1 Entrance Criteria

* [x] Identified a "[champion][Champion]" who will advance the addition.
* [x] [Prose][Prose] outlining the problem or need and the general shape of a solution.
* [x] Illustrative [examples][Examples] of usage.
* [x] High-level [API][API].

### Stage 2 Entrance Criteria

* [x] [Initial specification text][Specification].
* [ ] ~~[Transpiler support][Transpiler] (_Optional_).~~

### Stage 3 Entrance Criteria

* [x] [Complete specification text][Specification].
* [x] Designated reviewers have [signed off][Stage3ReviewerSignOff] on the current spec text.
* [x] The ECMAScript editor has [signed off][Stage3EditorSignOff] on the current spec text.

### Stage 4 Entrance Criteria

* [x] [Test262](https://github.com/tc39/test262) acceptance tests have been written for mainline usage scenarios and [merged][Test262PullRequest].
* [ ] Two compatible implementations which pass the acceptance tests:
    * [x] V8 ([tracking bug](https://bugs.chromium.org/p/v8/issues/detail?id=9548)) &mdash; Implemented in v7.8 behind the `--harmony-regexp-match-indices` flag
    * [ ] SpiderMonkey ([tracking bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1519483)) &mdash; Not yet implemented.
    * [ ] JavaScriptCore ([tracking bug](https://bugs.webkit.org/show_bug.cgi?id=202475)) &mdash; Not yet implemented.
* [x] A [pull request][Ecma262PullRequest] has been sent to tc39/ecma262 with the integrated spec text.
* [x] The ECMAScript editor has signed off on the [pull request][Ecma262PullRequest].
<!--#endregion:todo-->

<!--#region:links-->
<!-- The following links are used throughout the README: -->
[Process]: https://tc39.github.io/process-document/
[Proposals]: https://github.com/tc39/proposals/
[Grammarkdown]: http://github.com/rbuckton/grammarkdown#readme
[Champion]: #status
[Prose]: #motivations
[Examples]: #examples
[API]: #api
[Specification]: https://tc39.es/proposal-regexp-match-indices/

<!-- The following links should be supplied as the proposal advances: -->
[Transpiler]: #todo
[Stage3ReviewerSignOff]: https://github.com/tc39/proposal-regexp-match-indices/issues/11
[Stage3EditorSignOff]: https://github.com/tc39/proposal-regexp-match-indices/issues/11
[Test262PullRequest]: https://github.com/tc39/test262/pull/2309
[Implementation1]: https://bugs.chromium.org/p/v8/issues/detail?id=9548
[Implementation2]: #todo
[Ecma262PullRequest]: https://github.com/tc39/ecma262/pull/1713
<!--#endregion:links-->
