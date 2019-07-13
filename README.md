<!--#region:intro-->
# RegExp match array offsets for ECMAScript

ECMAScript `RegExp` match array offsets provide additional information about the start and end 
position of a captured substring.

An example implementation can be found in [`regexp-measure`](https://www.npmjs.com/package/regexp-measure).
> NOTE: `regexp-measure` was built around the Stage 0 proposal and is no longer up to date with respect to
> the current proposed API design.

* [Stage 0 Presentation](https://docs.google.com/presentation/d/12I8W-uViPXuFu2IAk3yZpXTr5MxLYxCfhJValykyT0E/edit?usp=sharing)
<!--#endregion:intro-->

<!--#region:status-->
## Status

**Stage:** 2
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
needs more than just the `index` of the _match_, but also the offsets for individual capture
groups.

As such, we propose the addition of an optional `options` argument to `Regex.prototype.exec`,
`String.prototype.match`, `String.prototype.matchAll`, and `String.prototype.replace` that would
take an object with properties that could inform the runtime to capture the indices of each match
rather than the string, to be used as the elements of the resulting _match_ array. The structure of
the resulting _match_ array itself does not change (it still would have own `index`, `input`, and
(optional) `groups` properties), but rather the value of each element would be derived from a
property on `options`:

```ts
regex.exec(string, { capture: "indices" })
string.match(regexp, { capture: "indices" })
string.matchAll(regexp, { capture: "indices" })
string.replace(searchValue, replaceFn, { capture: "indices" })
```

By making `options` an optional argument object, future proposals could seek to modify RegExp 
behavior by specifying additional properties on the object.

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
const re1 = /a*(?<Z>z)?/;

// indices are relative to start of the input string:
const s1 = "xaaaz";
const m1 = re1.exec(s1, { capture: "indices" });
m1[0][0] === 1;
m1[0][1] === 5;
s1.slice(...m1[0]) === "aaaz";

m1[1][0] === 4;
m1[1][1] === 5;
s1.slice(...m1[1]) === "z";

m1.groups["Z"][0] === 4;
m1.groups["Z"][1] === 5;
s1.slice(...m1.groups["Z"]) === "z";

// capture groups that are not matched return `undefined`:
const m2 = re1.exec("xaaay", { capture: "indices" });
m2[1] === undefined;
m2.groups["Z"] === undefined;

// the following three statements are functionally equivalent:
re1.exec(text);
re1.exec(text, { });
re1.exec(text, { capture: "strings" }); // default behavior
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
* [ ] Designated reviewers have [signed off][Stage3ReviewerSignOff] on the current spec text.
* [ ] The ECMAScript editor has [signed off][Stage3EditorSignOff] on the current spec text.

### Stage 4 Entrance Criteria

* [ ] [Test262](https://github.com/tc39/test262) acceptance tests have been written for mainline usage scenarios and [merged][Test262PullRequest].
* [ ] Two compatible implementations which pass the acceptance tests: [\[1\]][Implementation1], [\[2\]][Implementation2].
* [ ] A [pull request][Ecma262PullRequest] has been sent to tc39/ecma262 with the integrated spec text.
* [ ] The ECMAScript editor has signed off on the [pull request][Ecma262PullRequest].
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
[Specification]: https://tc39.es/proposal-regexp-match-offsets/

<!-- The following links should be supplied as the proposal advances: -->
[Transpiler]: #todo
[Stage3ReviewerSignOff]: https://github.com/tc39/proposal-regexp-match-offsets/issues/11
[Stage3EditorSignOff]: https://github.com/tc39/proposal-regexp-match-offsets/issues/11
[Test262PullRequest]: #todo
[Implementation1]: #todo
[Implementation2]: #todo
[Ecma262PullRequest]: #todo
<!--#endregion:links-->
