<!--#region:intro-->
# RegExp match array offsets for ECMAScript

ECMAScript `RegExp` match array offsets provide additional information about the position of a
captured substring relative to the `index` of the match.

An example implementation can be found in [`regexp-measure`](https://www.npmjs.com/package/regexp-measure).
<!--#endregion:intro-->

<!--#region:status-->
## Status

**Stage:** 0  
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

However, there are several more advanced scenarios where this information may not 
necessarily be sufficient. For example, an ECMAScript implementation of TextMate Language syntax
highlighting needs more than just the `index` of the _match_, but also the offsets for individual
capture groups. We also have no mechanism to indicate whether a capture group was merely _empty_ 
vs. _unmatched_ (either optional or in an unchosen alternative of a disjunction).

As such, we propose the adoption of an additional `offsets` property on the _match_ array. This
property would itself be an array containing the offset from `index` for each captured substring.
Any _unmatched_ capture groups would have an offset of `-1`. Also, the `offsets` array would itself
have an additional `groups` property containing the offset from `index` for any named capture 
groups.
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

// offsets are relative to start of the match:
const m2 = re1.exec("xaaaz");
m2.index === 1;
m2.offsets[1] === 3;
m2.offsets.groups["Z"] === 3;

// capture groups that are not matched (either optional or in the unmatched alternative of a
// disjunction) have an offset of -1:
const m3 = re1.exec("xaaay");
m2.offsets[1] === -1;
m2.offsets.groups["Z"] === -1;
```
<!--#endregion:examples-->

<!--#region:api-->
<!-- 
# API

```ts
interface RegExpExecArray extends Array<string> {
  index: number;
  input: string;
  groups: { [groupName: string]: string } | undefined;
  offsets: RegExpOffsetsArray;
}
interface RegExpOffsetsArray extends Array<string> {
  groups: { [groupName: string]: number } | undefined;
}
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

* [ ] [Initial specification text][Specification].  
* [ ] [Transpiler support][Transpiler] (_Optional_).  

### Stage 3 Entrance Criteria

* [ ] [Complete specification text][Specification].  
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
[Specification]: https://rbuckton.github.io/proposal-regexp-match-offsets

<!-- The following links should be supplied as the proposal advances: -->
[Transpiler]: #todo
[Stage3ReviewerSignOff]: #todo
[Stage3EditorSignOff]: #todo
[Test262PullRequest]: #todo
[Implementation1]: #todo
[Implementation2]: #todo
[Ecma262PullRequest]: #todo
<!--#endregion:links-->
