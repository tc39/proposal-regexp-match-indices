Based on list of Regular Expression Engines from https://en.wikipedia.org/wiki/Comparison_of_regular-expression_engines.

NOTE: Some implementations may have missing or incomplete information. If you have more information about a particular engine,
please file a pull request.

| Engine                     | Language       | Flags                                     | Note
|:---------------------------|:---------------|:------------------------------------------|:-----
| [Boost.Regex][]            | C++            | [`imsx`][Boost.Regex(flags)]              |
| [DEELX][]                  | C++            | [`imsg`][DEELX(flags)]                    |
| [Glib/GRegex][]            | C++            | [`imsx`][Glib/GRegex(flags)]              |
| [GRETA][]                  | C++            |                                           | Could not find documentation.
| [Gregex][]                 | RTL, HLS       |                                           | Could not find documentation.
| [RXP][]                    | RTL            |                                           | Could not find documentation.
| [Hyperscan][]              | C++            | [`imsx`][Hyperscan(flags)]                | Based on PCRE.
| [ICU][]                    | C, C++         | [`imsxw`][ICU(flags)]                     |
| [Jakarta/Regexp][]         | Java           |                                           | Deprecated project. Could not find documentation.
| [java.util.regex][]        | Java           | [`imsxduU`][java.util.regex(flags)]       | `d` flag is UNIX lines mode (only use `\n` for `.`, `^`, and `$`).
| [Jregex][]                 | Java           | [`imsxuX`][Jregex(flags)]                 |
| [MATLAB][]                 | MATLAB         | [`imsx`][MATLAB(flags)]                   |
| [Oniguruma][]              | C              | [`imxWDSPy`][Oniguruma(flags)]            | `D` makes `\d` match only ASCII digits.
| [Onigmo (Oniguruma-mod)][] | C, Ruby        | [`imxdau`][Onigmo (Oniguruma-mod)(flags)] | Fork of Oniguruma. `d` is Default compatiblity mode for Ruby 1.9.3.
| [PCRE][]                   | C, C++         | [`imnsxx`][PCRE(flags)]                   |
| [Qt/QRegExp][]             | C++            |                                           | No character-based flags that I could find.
| [RE2][]                    | C++            | [`imsU`][RE2(flags)]                      |
| [RGX][]                    | C++            |                                           | Could not find documentation.
| [SubReg][]                 | C              | [`iI`][SubReg(flags)]                     |
| [TPerlRegEx][]             | Object Pascal  | [`imnsxx`][TPerlRegEx(flags)]             | Wrapper for PCRE.
| [TRE][]                    | C              | [`inrU`][TRE(flags)]                      |
| [TRegExpr][]               | Object Pascal  | [`imsgxr`][TRegExpr(flags)]               |
| [XRegExp][]                | ECMAScript     | [`imguynsxA`][XRegExp(flags)]             |
| [APL][]                    | APL            | [`imsx`][APL(flags)]                      | Based on PCRE.
| [C++ 11][]                 | C++            |                                           |
| [D][]                      | D              | [`imsxg`][D(flags)]                       |
| [Go][]                     | Go             | [`imsU`][RE2(flags)]                      | Based on RE2.
| [Haskell][]                | Haskell        | [`imnsxx`][Haskell(flags)]                | Multiple implementations including PCRE.
| [ECMAScript][]             | ECMAScript     | [`imsugy`][ECMAScript(flags)]             |
| [Julia][]                  | Julia          | [`imsxa`][Julia(flags)]                   |
| [Lua][]                    | Lua            |                                           | No character-based flags that I could find.
| [Mathmatica][]             | Mathmatica     |                                           | No character-based flags that I could find.
| [.NET][]                   | .NET           | [`imsxn`][.NET(flags)]                    |
| [Nim][]                    | Nim            | [`imnsxx`][Nim(flags)]                    | Uses PCRE.
| [Ocaml][]                  | Ocaml          |                                           | No character-based flags that I could find.
| [Perl][]                   | Perl           | [`imsxxpaadlun`][Perl(flags)]             | `d` enables legacy problematic behavior.
| [PHP][]                    | PHP            | [`imnsxx`][PHP(flags)]                    | Uses PCRE.
| [POSIX C][]                | POSIX C        |                                           |
| [Python/re][]              | Python         | [`iLmsux`][Python/re(flags)]              |
| [Python/regex][]           | Python         | [`iLmsuxV0V1`][Python/regex(flags)]       |
| [Rust][]                   | Rust           | [`imsUux`][Rust(flags)]                   |
| [SAP ABAP][]               | SAP ABAP       |                                           | No character-based flags that I could find.
| [Tcl][]                    | Tcl            | [`imsxnbcepqtw`][Tcl(flags)]              |
| [Wolfram][]                | Wolfram        |                                           | No character-based flags that I could find.
| [XML Schema][]             | XML Schema     |                                           | No character-based flags that I could find.
| [XPath 3/XQuery][]         | XPath 3/XQuery | [`imsxq`][XPath 3/XQuery(flags)]          |

[Boost.Regex]: https://www.boost.org/doc/libs/1_75_0/libs/regex/doc/html/
[DEELX]: https://web.archive.org/web/20081201072631/http:/www.regexlab.com/en/deelx/
[Glib/GRegex]: https://developer.gnome.org/glib/unstable/glib-Perl-compatible-regular-expressions.html
[GRETA]: https://grovf.com/products/gregex
[Gregex]: https://grovf.com/products/gregex
[RXP]: http://www.titan-ic.com/
[Hyperscan]: https://www.hyperscan.io/
[ICU]: https://unicode-org.github.io/icu/userguide/strings/regexp.html
[Jakarta/Regexp]: http://attic.apache.org/projects/jakarta-regexp.html
[java.util.regex]: http://docs.oracle.com/javase/7/docs/api/java/util/regex/package-summary.html
[Jregex]: http://jregex.sourceforge.net/
[MATLAB]: https://www.mathworks.com/help/matlab/ref/regexp.html
[Oniguruma]: https://github.com/kkos/oniguruma
[Onigmo (Oniguruma-mod)]: https://github.com/k-takata/Onigmo
[PCRE]: http://www.pcre.org/
[Qt/QRegExp]: http://qt-project.org/doc/qt-5.1/qtcore/qregexp.html
[RE2]: https://github.com/google/re2
[RGX]: https://web.archive.org/web/20110715032327/https:/www.p6r.com/software/rgx.html
[SubReg]: https://github.com/mattbucknall/subreg
[TPerlRegEx]: http://www.regexbuddy.com/delphi.html
[TRE]: http://laurikari.net/tre/
[TRegExpr]: https://web.archive.org/web/20090502051956/http:/www.regexpstudio.com/TRegExpr/TRegExpr.html
[XRegExp]: http://xregexp.com/
[APL]: https://en.wikipedia.org/wiki/APL_(programming_language)
[C++ 11]: http://isocpp.org/
[D]: https://dlang.org/phobos/std_regex.html
[Go]: https://golang.org/pkg/regexp/
[Haskell]: http://haskell.org/haskellwiki/Regular_expressions
[ECMAScript]: https://tc39.es/ecma262
[Julia]: http://julialang.org/
[Lua]: http://www.lua.org/
[Mathmatica]: https://reference.wolfram.com/language/ref/RegularExpression.html
[.NET]: http://msdn2.microsoft.com/en-us/library/system.text.regularexpressions.aspx
[Nim]: https://nim-lang.org/docs/re.html
[Ocaml]: http://caml.inria.fr/pub/docs/manual-ocaml/libref/Str.html
[Perl]: http://www.perl.com/doc/manual/html/pod/perlre.html
[PHP]: http://www.php.net/manual/en/reference.pcre.pattern.syntax.php
[POSIX C]: https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/regex.h.html
[Python/re]: https://docs.python.org/2/library/re.html
[Python/regex]: https://pypi.python.org/pypi/regex
[Rust]: https://docs.rs/regex/1.2.1/regex/
[SAP ABAP]: http://www.sap.com/
[Tcl]: https://www.tcl-lang.org/man/tcl/TclCmd/re_syntax.htm
[Wolfram]: http://www.wolfram.com/language/
[XML Schema]: https://www.w3.org/TR/xmlschema/
[XPath 3/XQuery]: https://www.w3.org/TR/xpath-functions-31/#regex-syntax

[Boost.Regex(flags)]: https://www.boost.org/doc/libs/1_75_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.modifiers
[DEELX(flags)]: https://web.archive.org/web/20090201210015/http://regexlab.com/en/deelx/syntax/ext_modm.htm
[Hyperscan(flags)]: http://www.pcre.org/current/doc/html/pcre2pattern.html#SEC13
[Glib/GRegex(flags)]: https://developer.gnome.org/glib/unstable/glib-regex-syntax.html#id-1.5.25.11
[ICU(flags)]: https://unicode-org.github.io/icu/userguide/strings/regexp.html#regular-expression-operators
[java.util.regex(flags)]: https://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html#special
[Jregex(flags)]: http://jregex.sourceforge.net/gstarted.html#appendix-a
[MATLAB(flags)]: https://www.mathworks.com/help/matlab/ref/regexp.html#expand_panel_body_btn_p45_sep_shared-expression
[Oniguruma(flags)]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L265-L289
[Onigmo (Oniguruma-mod)(flags)]: https://github.com/k-takata/Onigmo/blob/a06a42b51713eeafe30a939827031c3ba79da936/doc/RE#L239-L257
[PCRE(flags)]: http://www.pcre.org/current/doc/html/pcre2pattern.html#SEC13
[RE2(flags)]: https://github.com/google/re2/wiki/Syntax
[SubReg(flags)]: https://github.com/mattbucknall/subreg#syntax
[TPerlRegEx(flags)]: http://www.pcre.org/current/doc/html/pcre2pattern.html#SEC13
[TRE(flags)]: https://github.com/laurikari/tre/blob/2ad33edb5f9e9991c6b4a78105eacb2c1b9d4048/doc/tre-syntax.html#L390-L412
[TRegExpr(flags)]: https://web.archive.org/web/20090429031956/http:/regexpstudio.com/TRegExpr/Help/RegExp_Syntax.html#about_modifiers
[XRegExp(flags)]: http://xregexp.com/flags/
[APL(flags)]: http://www.pcre.org/current/doc/html/pcre2pattern.html#SEC13
[D(flags)]: https://dlang.org/phobos/std_regex.html#:~:text=Regex%20flags
[Haskell(flags)]: http://www.pcre.org/current/doc/html/pcre2pattern.html#SEC13
[ECMAScript(flags)]: https://tc39.es/ecma262/#sec-regexpinitialize
[Julia(flags)]: https://docs.julialang.org/en/v1/base/strings/#Base.@r_str
[.NET(flags)]: https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-options
[Nim(flags)]: http://www.pcre.org/current/doc/html/pcre2pattern.html#SEC13
[Perl(flags)]: https://perldoc.perl.org/perlre#Modifiers
[PHP(flags)]: http://www.pcre.org/current/doc/html/pcre2pattern.html#SEC13
[Python/re(flags)]: https://docs.python.org/2/library/re.html#regular-expression-syntax
[Python/regex(flags)]: https://pypi.org/project/regex/#old-vs-new-behaviour
[Rust(flags)]: https://docs.rs/regex/1.2.1/regex/#grouping-and-flags
[Tcl(flags)]: https://www.tcl-lang.org/man/tcl/TclCmd/re_syntax.htm#M82
[XPath 3/XQuery(flags)]: https://www.w3.org/TR/xpath-functions-31/#flags
