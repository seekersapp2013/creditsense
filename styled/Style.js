const Style = () => (
<style jsx>{`

@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

@import "https://digimatix2.herokuapp.com/assets/img/brand/favicon.png";

@import "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700";

@import "https://digimatix2.herokuapp.com/assets/js/plugins/nucleo/css/nucleo.css";

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

@-ms-viewport {
  width: device-width;
}


body {
  margin: 0;
  font-family: Open Sans, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #525f7f;
  text-align: left;
  background-color: #f8f9fe;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

abbr[title],
abbr[data-original-title] {
  text-decoration: underline;
  text-decoration: underline dotted;
  cursor: help;
  border-bottom: 0;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: 600;
}

dd {
  margin-bottom: .5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

dfn {
  font-style: italic;
}

b,
strong {
  font-weight: bolder;
}

small {
  font-size: 80%;
}

sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -.25em;
}

sup {
  top: -.5em;
}

a {
  color: #5e72e4;
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

a:hover {
  color: #233dd2;
  text-decoration: none;
}

a:not([href]):not([tabindex]) {
  color: inherit;
  text-decoration: none;
}

a:not([href]):not([tabindex]):hover,
a:not([href]):not([tabindex]):focus {
  color: inherit;
  text-decoration: none;
}

a:not([href]):not([tabindex]):focus {
  outline: 0;
}

pre,
code,
kbd,
samp {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em;
}

pre {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  -ms-overflow-style: scrollbar;
}

figure {
  margin: 0 0 1rem;
}

img {
  vertical-align: middle;
  border-style: none;
}

svg {
  overflow: hidden;
  vertical-align: middle;
}

table {
  border-collapse: collapse;
}

caption {
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #8898aa;
  text-align: left;
  caption-side: bottom;
}

th {
  text-align: inherit;
}

label {
  display: inline-block;
  margin-bottom: 0.5rem;
}

button {
  border-radius: 0;
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
html [type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

input[type="radio"],
input[type="checkbox"] {
  box-sizing: border-box;
  padding: 0;
}

input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"] {
  -webkit-appearance: listbox;
}

textarea {
  overflow: auto;
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin-bottom: .5rem;
  font-size: 1.5rem;
  line-height: inherit;
  color: inherit;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  outline-offset: -2px;
  -webkit-appearance: none;
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

summary {
  display: list-item;
  cursor: pointer;
}

template {
  display: none;
}

[hidden] {
  display: none !important;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 600;
  line-height: 1.5;
  color: #32325d;
}

h1,
.h1 {
  font-size: 1.625rem;
}

h2,
.h2 {
  font-size: 1.25rem;
}

h3,
.h3 {
  font-size: 1.0625rem;
}

h4,
.h4 {
  font-size: 0.9375rem;
}

h5,
.h5 {
  font-size: 0.8125rem;
}

h6,
.h6 {
  font-size: 0.625rem;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.display-1 {
  font-size: 3.3rem;
  font-weight: 600;
  line-height: 1.5;
}

.display-2 {
  font-size: 2.75rem;
  font-weight: 600;
  line-height: 1.5;
}

.display-3 {
  font-size: 2.1875rem;
  font-weight: 600;
  line-height: 1.5;
}

.display-4 {
  font-size: 1.6275rem;
  font-weight: 600;
  line-height: 1.5;
}

hr {
  margin-top: 2rem;
  margin-bottom: 2rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

small,
.small {
  font-size: 80%;
  font-weight: 400;
}

mark,
.mark {
  padding: 0.2em;
  background-color: #fcf8e3;
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}

.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}

.initialism {
  font-size: 90%;
  text-transform: uppercase;
}

.blockquote {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.blockquote-footer {
  display: block;
  font-size: 80%;
  color: #8898aa;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-thumbnail {
  padding: 0.25rem;
  background-color: #f8f9fe;
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.075);
  max-width: 100%;
  height: auto;
}

.figure {
  display: inline-block;
}

.figure-img {
  margin-bottom: 0.5rem;
  line-height: 1;
}

.figure-caption {
  font-size: 90%;
  color: #8898aa;
}

code {
  font-size: 87.5%;
  color: #f3a4b5;
  word-break: break-word;
}

a>code {
  color: inherit;
}

kbd {
  padding: 0.2rem 0.4rem;
  font-size: 87.5%;
  color: #fff;
  background-color: #212529;
  border-radius: 0.25rem;
  box-shadow: inset 0 -0.1rem 0 rgba(0, 0, 0, 0.25);
}

kbd kbd {
  padding: 0;
  font-size: 100%;
  font-weight: 600;
  box-shadow: none;
}

pre {
  display: block;
  font-size: 87.5%;
  color: #212529;
}

pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}

.pre-scrollable {
  max-height: 340px;
  overflow-y: scroll;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}

.no-gutters>.col,
.no-gutters>[class*="col-"] {
  padding-right: 0;
  padding-left: 0;
}

.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col,
.col-auto,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm,
.col-sm-auto,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md,
.col-md-auto,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg,
.col-lg-auto,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl,
.col-xl-auto {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: none;
}

.col-1 {
  flex: 0 0 8.333333%;
  max-width: 8.333333%;
}

.col-2 {
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
}

.col-3 {
  flex: 0 0 25%;
  max-width: 25%;
}

.col-4 {
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
}

.col-5 {
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
}

.col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.col-7 {
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
}

.col-8 {
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
}

.col-9 {
  flex: 0 0 75%;
  max-width: 75%;
}

.col-10 {
  flex: 0 0 83.333333%;
  max-width: 83.333333%;
}

.col-11 {
  flex: 0 0 91.666667%;
  max-width: 91.666667%;
}

.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

.order-first {
  order: -1;
}

.order-last {
  order: 13;
}

.order-0 {
  order: 0;
}

.order-1 {
  order: 1;
}

.order-2 {
  order: 2;
}

.order-3 {
  order: 3;
}

.order-4 {
  order: 4;
}

.order-5 {
  order: 5;
}

.order-6 {
  order: 6;
}

.order-7 {
  order: 7;
}

.order-8 {
  order: 8;
}

.order-9 {
  order: 9;
}

.order-10 {
  order: 10;
}

.order-11 {
  order: 11;
}

.order-12 {
  order: 12;
}

.offset-1 {
  margin-left: 8.333333%;
}

.offset-2 {
  margin-left: 16.666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.333333%;
}

.offset-5 {
  margin-left: 41.666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.333333%;
}

.offset-8 {
  margin-left: 66.666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.333333%;
}

.offset-11 {
  margin-left: 91.666667%;
}

@media (min-width: 576px) {
  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }

  .col-sm-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }

  .col-sm-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

  .col-sm-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-sm-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-sm-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-sm-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }

  .col-sm-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  .col-sm-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-sm-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }

  .col-sm-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }

  .col-sm-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-sm-first {
    order: -1;
  }

  .order-sm-last {
    order: 13;
  }

  .order-sm-0 {
    order: 0;
  }

  .order-sm-1 {
    order: 1;
  }

  .order-sm-2 {
    order: 2;
  }

  .order-sm-3 {
    order: 3;
  }

  .order-sm-4 {
    order: 4;
  }

  .order-sm-5 {
    order: 5;
  }

  .order-sm-6 {
    order: 6;
  }

  .order-sm-7 {
    order: 7;
  }

  .order-sm-8 {
    order: 8;
  }

  .order-sm-9 {
    order: 9;
  }

  .order-sm-10 {
    order: 10;
  }

  .order-sm-11 {
    order: 11;
  }

  .order-sm-12 {
    order: 12;
  }

  .offset-sm-0 {
    margin-left: 0;
  }

  .offset-sm-1 {
    margin-left: 8.333333%;
  }

  .offset-sm-2 {
    margin-left: 16.666667%;
  }

  .offset-sm-3 {
    margin-left: 25%;
  }

  .offset-sm-4 {
    margin-left: 33.333333%;
  }

  .offset-sm-5 {
    margin-left: 41.666667%;
  }

  .offset-sm-6 {
    margin-left: 50%;
  }

  .offset-sm-7 {
    margin-left: 58.333333%;
  }

  .offset-sm-8 {
    margin-left: 66.666667%;
  }

  .offset-sm-9 {
    margin-left: 75%;
  }

  .offset-sm-10 {
    margin-left: 83.333333%;
  }

  .offset-sm-11 {
    margin-left: 91.666667%;
  }
}

@media (min-width: 768px) {
  .col-md {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }

  .col-md-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }

  .col-md-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

  .col-md-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-md-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-md-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-md-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }

  .col-md-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  .col-md-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-md-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }

  .col-md-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }

  .col-md-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-md-first {
    order: -1;
  }

  .order-md-last {
    order: 13;
  }

  .order-md-0 {
    order: 0;
  }

  .order-md-1 {
    order: 1;
  }

  .order-md-2 {
    order: 2;
  }

  .order-md-3 {
    order: 3;
  }

  .order-md-4 {
    order: 4;
  }

  .order-md-5 {
    order: 5;
  }

  .order-md-6 {
    order: 6;
  }

  .order-md-7 {
    order: 7;
  }

  .order-md-8 {
    order: 8;
  }

  .order-md-9 {
    order: 9;
  }

  .order-md-10 {
    order: 10;
  }

  .order-md-11 {
    order: 11;
  }

  .order-md-12 {
    order: 12;
  }

  .offset-md-0 {
    margin-left: 0;
  }

  .offset-md-1 {
    margin-left: 8.333333%;
  }

  .offset-md-2 {
    margin-left: 16.666667%;
  }

  .offset-md-3 {
    margin-left: 25%;
  }

  .offset-md-4 {
    margin-left: 33.333333%;
  }

  .offset-md-5 {
    margin-left: 41.666667%;
  }

  .offset-md-6 {
    margin-left: 50%;
  }

  .offset-md-7 {
    margin-left: 58.333333%;
  }

  .offset-md-8 {
    margin-left: 66.666667%;
  }

  .offset-md-9 {
    margin-left: 75%;
  }

  .offset-md-10 {
    margin-left: 83.333333%;
  }

  .offset-md-11 {
    margin-left: 91.666667%;
  }
}

@media (min-width: 992px) {
  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }

  .col-lg-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }

  .col-lg-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-lg-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-lg-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  .col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-lg-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }

  .col-lg-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  .col-lg-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-lg-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }

  .col-lg-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }

  .col-lg-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-lg-first {
    order: -1;
  }

  .order-lg-last {
    order: 13;
  }

  .order-lg-0 {
    order: 0;
  }

  .order-lg-1 {
    order: 1;
  }

  .order-lg-2 {
    order: 2;
  }

  .order-lg-3 {
    order: 3;
  }

  .order-lg-4 {
    order: 4;
  }

  .order-lg-5 {
    order: 5;
  }

  .order-lg-6 {
    order: 6;
  }

  .order-lg-7 {
    order: 7;
  }

  .order-lg-8 {
    order: 8;
  }

  .order-lg-9 {
    order: 9;
  }

  .order-lg-10 {
    order: 10;
  }

  .order-lg-11 {
    order: 11;
  }

  .order-lg-12 {
    order: 12;
  }

  .offset-lg-0 {
    margin-left: 0;
  }

  .offset-lg-1 {
    margin-left: 8.333333%;
  }

  .offset-lg-2 {
    margin-left: 16.666667%;
  }

  .offset-lg-3 {
    margin-left: 25%;
  }

  .offset-lg-4 {
    margin-left: 33.333333%;
  }

  .offset-lg-5 {
    margin-left: 41.666667%;
  }

  .offset-lg-6 {
    margin-left: 50%;
  }

  .offset-lg-7 {
    margin-left: 58.333333%;
  }

  .offset-lg-8 {
    margin-left: 66.666667%;
  }

  .offset-lg-9 {
    margin-left: 75%;
  }

  .offset-lg-10 {
    margin-left: 83.333333%;
  }

  .offset-lg-11 {
    margin-left: 91.666667%;
  }
}

@media (min-width: 1200px) {
  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }

  .col-xl-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }

  .col-xl-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

  .col-xl-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-xl-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-xl-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  .col-xl-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-xl-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }

  .col-xl-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  .col-xl-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-xl-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }

  .col-xl-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }

  .col-xl-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-xl-first {
    order: -1;
  }

  .order-xl-last {
    order: 13;
  }

  .order-xl-0 {
    order: 0;
  }

  .order-xl-1 {
    order: 1;
  }

  .order-xl-2 {
    order: 2;
  }

  .order-xl-3 {
    order: 3;
  }

  .order-xl-4 {
    order: 4;
  }

  .order-xl-5 {
    order: 5;
  }

  .order-xl-6 {
    order: 6;
  }

  .order-xl-7 {
    order: 7;
  }

  .order-xl-8 {
    order: 8;
  }

  .order-xl-9 {
    order: 9;
  }

  .order-xl-10 {
    order: 10;
  }

  .order-xl-11 {
    order: 11;
  }

  .order-xl-12 {
    order: 12;
  }

  .offset-xl-0 {
    margin-left: 0;
  }

  .offset-xl-1 {
    margin-left: 8.333333%;
  }

  .offset-xl-2 {
    margin-left: 16.666667%;
  }

  .offset-xl-3 {
    margin-left: 25%;
  }

  .offset-xl-4 {
    margin-left: 33.333333%;
  }

  .offset-xl-5 {
    margin-left: 41.666667%;
  }

  .offset-xl-6 {
    margin-left: 50%;
  }

  .offset-xl-7 {
    margin-left: 58.333333%;
  }

  .offset-xl-8 {
    margin-left: 66.666667%;
  }

  .offset-xl-9 {
    margin-left: 75%;
  }

  .offset-xl-10 {
    margin-left: 83.333333%;
  }

  .offset-xl-11 {
    margin-left: 91.666667%;
  }
}

.table {
  width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
}

.table th,
.table td {
  padding: 1rem;
  vertical-align: top;
  border-top: 1px solid #e9ecef;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #e9ecef;
}

.table tbody+tbody {
  border-top: 2px solid #e9ecef;
}

.table .table {
  background-color: #f8f9fe;
}

.table-sm th,
.table-sm td {
  padding: 0.5rem;
}

.table-bordered {
  border: 1px solid #e9ecef;
}

.table-bordered th,
.table-bordered td {
  border: 1px solid #e9ecef;
}

.table-bordered thead th,
.table-bordered thead td {
  border-bottom-width: 2px;
}

.table-borderless th,
.table-borderless td,
.table-borderless thead th,
.table-borderless tbody+tbody {
  border: 0;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}

.table-hover tbody tr:hover {
  background-color: #f6f9fc;
}

.table-primary,
.table-primary>th,
.table-primary>td {
  background-color: #d2d8f7;
}

.table-hover .table-primary:hover {
  background-color: #bcc5f3;
}

.table-hover .table-primary:hover>td,
.table-hover .table-primary:hover>th {
  background-color: #bcc5f3;
}

.table-secondary,
.table-secondary>th,
.table-secondary>td {
  background-color: #fdfefe;
}

.table-hover .table-secondary:hover {
  background-color: #ecf6f6;
}

.table-hover .table-secondary:hover>td,
.table-hover .table-secondary:hover>th {
  background-color: #ecf6f6;
}

.table-success,
.table-success>th,
.table-success>td {
  background-color: #c4f1de;
}

.table-hover .table-success:hover {
  background-color: #afecd2;
}

.table-hover .table-success:hover>td,
.table-hover .table-success:hover>th {
  background-color: #afecd2;
}

.table-info,
.table-info>th,
.table-info>td {
  background-color: #bcf1fb;
}

.table-hover .table-info:hover {
  background-color: #a4ecfa;
}

.table-hover .table-info:hover>td,
.table-hover .table-info:hover>th {
  background-color: #a4ecfa;
}

.table-warning,
.table-warning>th,
.table-warning>td {
  background-color: #fed3ca;
}

.table-hover .table-warning:hover {
  background-color: #febeb1;
}

.table-hover .table-warning:hover>td,
.table-hover .table-warning:hover>th {
  background-color: #febeb1;
}

.table-danger,
.table-danger>th,
.table-danger>td {
  background-color: #fcc7d1;
}

.table-hover .table-danger:hover {
  background-color: #fbafbd;
}

.table-hover .table-danger:hover>td,
.table-hover .table-danger:hover>th {
  background-color: #fbafbd;
}

.table-light,
.table-light>th,
.table-light>td {
  background-color: #e8eaed;
}

.table-hover .table-light:hover {
  background-color: #dadde2;
}

.table-hover .table-light:hover>td,
.table-hover .table-light:hover>th {
  background-color: #dadde2;
}

.table-dark,
.table-dark>th,
.table-dark>td {
  background-color: #c1c2c3;
}

.table-hover .table-dark:hover {
  background-color: #b4b5b6;
}

.table-hover .table-dark:hover>td,
.table-hover .table-dark:hover>th {
  background-color: #b4b5b6;
}

.table-default,
.table-default>th,
.table-default>td {
  background-color: #bec4cd;
}

.table-hover .table-default:hover {
  background-color: #b0b7c2;
}

.table-hover .table-default:hover>td,
.table-hover .table-default:hover>th {
  background-color: #b0b7c2;
}

.table-white,
.table-white>th,
.table-white>td {
  background-color: white;
}

.table-hover .table-white:hover {
  background-color: #f2f2f2;
}

.table-hover .table-white:hover>td,
.table-hover .table-white:hover>th {
  background-color: #f2f2f2;
}

.table-neutral,
.table-neutral>th,
.table-neutral>td {
  background-color: white;
}

.table-hover .table-neutral:hover {
  background-color: #f2f2f2;
}

.table-hover .table-neutral:hover>td,
.table-hover .table-neutral:hover>th {
  background-color: #f2f2f2;
}

.table-darker,
.table-darker>th,
.table-darker>td {
  background-color: #b8b8b8;
}

.table-hover .table-darker:hover {
  background-color: #ababab;
}

.table-hover .table-darker:hover>td,
.table-hover .table-darker:hover>th {
  background-color: #ababab;
}

.table-active,
.table-active>th,
.table-active>td {
  background-color: #f6f9fc;
}

.table-hover .table-active:hover {
  background-color: #e3ecf6;
}

.table-hover .table-active:hover>td,
.table-hover .table-active:hover>th {
  background-color: #e3ecf6;
}

.table .thead-dark th {
  color: #f8f9fe;
  background-color: #172b4d;
  border-color: #1f3a68;
}

.table .thead-light th {
  color: #8898aa;
  background-color: #f6f9fc;
  border-color: #e9ecef;
}

.table-dark {
  color: #f8f9fe;
  background-color: #172b4d;
}

.table-dark th,
.table-dark td,
.table-dark thead th {
  border-color: #1f3a68;
}

.table-dark.table-bordered {
  border: 0;
}

.table-dark.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(255, 255, 255, 0.05);
}

.table-dark.table-hover tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.075);
}

@media (max-width: 575.98px) {
  .table-responsive-sm {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  .table-responsive-sm>.table-bordered {
    border: 0;
  }
}

@media (max-width: 767.98px) {
  .table-responsive-md {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  .table-responsive-md>.table-bordered {
    border: 0;
  }
}

@media (max-width: 991.98px) {
  .table-responsive-lg {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  .table-responsive-lg>.table-bordered {
    border: 0;
  }
}

@media (max-width: 1199.98px) {
  .table-responsive-xl {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  .table-responsive-xl>.table-bordered {
    border: 0;
  }
}

.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}

.table-responsive>.table-bordered {
  border: 0;
}

.form-control {
  display: block;
  width: 100%;
  height: calc(2.75rem + 2px);
  padding: 0.625rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #8898aa;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #cad1d7;
  border-radius: 0.375rem;
  box-shadow: none;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@media screen and (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}

.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}

.form-control:focus {
  color: #8898aa;
  background-color: #fff;
  border-color: rgba(50, 151, 211, 0.25);
  outline: 0;
  box-shadow: none, none;
}

.form-control::placeholder {
  color: #adb5bd;
  opacity: 1;
}

.form-control:disabled,
.form-control[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}

select.form-control:focus::-ms-value {
  color: #8898aa;
  background-color: #fff;
}

.form-control-file,
.form-control-range {
  display: block;
  width: 100%;
}

.col-form-label {
  padding-top: calc(0.625rem + 1px);
  padding-bottom: calc(0.625rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}

.col-form-label-lg {
  padding-top: calc(0.875rem + 1px);
  padding-bottom: calc(0.875rem + 1px);
  font-size: 1.25rem;
  line-height: 1.5;
}

.col-form-label-sm {
  padding-top: calc(0.25rem + 1px);
  padding-bottom: calc(0.25rem + 1px);
  font-size: 0.875rem;
  line-height: 1.5;
}

.form-control-plaintext {
  display: block;
  width: 100%;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  margin-bottom: 0;
  line-height: 1.5;
  color: #525f7f;
  background-color: transparent;
  border: solid transparent;
  border-width: 1px 0;
}

.form-control-plaintext.form-control-sm,
.form-control-plaintext.form-control-lg {
  padding-right: 0;
  padding-left: 0;
}

.form-control-sm {
  height: calc(1.8125rem + 2px);
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.25rem;
}

.form-control-lg {
  height: calc(3.625rem + 2px);
  padding: 0.875rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.4375rem;
}

select.form-control[size],
select.form-control[multiple] {
  height: auto;
}

textarea.form-control {
  height: auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-text {
  display: block;
  margin-top: 0.25rem;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
}

.form-row>.col,
.form-row>[class*="col-"] {
  padding-right: 5px;
  padding-left: 5px;
}

.form-check {
  position: relative;
  display: block;
  padding-left: 1.25rem;
}

.form-check-input {
  position: absolute;
  margin-top: 0.3rem;
  margin-left: -1.25rem;
}

.form-check-input:disabled~.form-check-label {
  color: #8898aa;
}

.form-check-label {
  margin-bottom: 0;
}

.form-check-inline {
  display: inline-flex;
  align-items: center;
  padding-left: 0;
  margin-right: 0.75rem;
}

.form-check-inline .form-check-input {
  position: static;
  margin-top: 0;
  margin-right: 0.3125rem;
  margin-left: 0;
}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #2dce89;
}

.valid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: .5rem;
  margin-top: .1rem;
  font-size: .875rem;
  line-height: 1;
  color: #fff;
  background-color: rgba(45, 206, 137, 0.8);
  border-radius: .2rem;
}

.was-validated .form-control:valid,
.form-control.is-valid,
.was-validated .custom-select:valid,
.custom-select.is-valid {
  border-color: #2dce89;
}

.was-validated .form-control:valid:focus,
.form-control.is-valid:focus,
.was-validated .custom-select:valid:focus,
.custom-select.is-valid:focus {
  border-color: #2dce89;
}

.was-validated .form-control:valid~.valid-feedback,
.was-validated .form-control:valid~.valid-tooltip,
.form-control.is-valid~.valid-feedback,
.form-control.is-valid~.valid-tooltip,
.was-validated .custom-select:valid~.valid-feedback,
.was-validated .custom-select:valid~.valid-tooltip,
.custom-select.is-valid~.valid-feedback,
.custom-select.is-valid~.valid-tooltip {
  display: block;
}

.was-validated .form-check-input:valid~.form-check-label,
.form-check-input.is-valid~.form-check-label {
  color: #2dce89;
}

.was-validated .form-check-input:valid~.valid-feedback,
.was-validated .form-check-input:valid~.valid-tooltip,
.form-check-input.is-valid~.valid-feedback,
.form-check-input.is-valid~.valid-tooltip {
  display: block;
}

.was-validated .custom-control-input:valid~.custom-control-label,
.custom-control-input.is-valid~.custom-control-label {
  color: #2dce89;
}

.was-validated .custom-control-input:valid~.custom-control-label::before,
.custom-control-input.is-valid~.custom-control-label::before {
  background-color: #93e7c3;
  border-color: #93e7c3;
}

.was-validated .custom-control-input:valid~.valid-feedback,
.was-validated .custom-control-input:valid~.valid-tooltip,
.custom-control-input.is-valid~.valid-feedback,
.custom-control-input.is-valid~.valid-tooltip {
  display: block;
}

.was-validated .custom-control-input:valid:checked~.custom-control-label::before,
.custom-control-input.is-valid:checked~.custom-control-label::before {
  background-color: #54daa1;
  border-color: #93e7c3;
}

.was-validated .custom-control-input:valid:focus~.custom-control-label::before,
.custom-control-input.is-valid:focus~.custom-control-label::before {
  box-shadow: 0 0 0 1px #f8f9fe, 0 0 0 0 rgba(45, 206, 137, 0.25);
}

.was-validated .custom-file-input:valid~.custom-file-label,
.custom-file-input.is-valid~.custom-file-label {
  border-color: #2dce89;
}

.was-validated .custom-file-input:valid~.custom-file-label::before,
.custom-file-input.is-valid~.custom-file-label::before {
  border-color: inherit;
}

.was-validated .custom-file-input:valid~.valid-feedback,
.was-validated .custom-file-input:valid~.valid-tooltip,
.custom-file-input.is-valid~.valid-feedback,
.custom-file-input.is-valid~.valid-tooltip {
  display: block;
}

.was-validated .custom-file-input:valid:focus~.custom-file-label,
.custom-file-input.is-valid:focus~.custom-file-label {
  box-shadow: 0 0 0 0 rgba(45, 206, 137, 0.25);
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #fb6340;
}

.invalid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: .5rem;
  margin-top: .1rem;
  font-size: .875rem;
  line-height: 1;
  color: #fff;
  background-color: rgba(251, 99, 64, 0.8);
  border-radius: .2rem;
}

.was-validated .form-control:invalid,
.form-control.is-invalid,
.was-validated .custom-select:invalid,
.custom-select.is-invalid {
  border-color: #fb6340;
}

.was-validated .form-control:invalid:focus,
.form-control.is-invalid:focus,
.was-validated .custom-select:invalid:focus,
.custom-select.is-invalid:focus {
  border-color: #fb6340;
}

.was-validated .form-control:invalid~.invalid-feedback,
.was-validated .form-control:invalid~.invalid-tooltip,
.form-control.is-invalid~.invalid-feedback,
.form-control.is-invalid~.invalid-tooltip,
.was-validated .custom-select:invalid~.invalid-feedback,
.was-validated .custom-select:invalid~.invalid-tooltip,
.custom-select.is-invalid~.invalid-feedback,
.custom-select.is-invalid~.invalid-tooltip {
  display: block;
}

.was-validated .form-check-input:invalid~.form-check-label,
.form-check-input.is-invalid~.form-check-label {
  color: #fb6340;
}

.was-validated .form-check-input:invalid~.invalid-feedback,
.was-validated .form-check-input:invalid~.invalid-tooltip,
.form-check-input.is-invalid~.invalid-feedback,
.form-check-input.is-invalid~.invalid-tooltip {
  display: block;
}

.was-validated .custom-control-input:invalid~.custom-control-label,
.custom-control-input.is-invalid~.custom-control-label {
  color: #fb6340;
}

.was-validated .custom-control-input:invalid~.custom-control-label::before,
.custom-control-input.is-invalid~.custom-control-label::before {
  background-color: #fec9bd;
  border-color: #fec9bd;
}

.was-validated .custom-control-input:invalid~.invalid-feedback,
.was-validated .custom-control-input:invalid~.invalid-tooltip,
.custom-control-input.is-invalid~.invalid-feedback,
.custom-control-input.is-invalid~.invalid-tooltip {
  display: block;
}

.was-validated .custom-control-input:invalid:checked~.custom-control-label::before,
.custom-control-input.is-invalid:checked~.custom-control-label::before {
  background-color: #fc8c72;
  border-color: #fec9bd;
}

.was-validated .custom-control-input:invalid:focus~.custom-control-label::before,
.custom-control-input.is-invalid:focus~.custom-control-label::before {
  box-shadow: 0 0 0 1px #f8f9fe, 0 0 0 0 rgba(251, 99, 64, 0.25);
}

.was-validated .custom-file-input:invalid~.custom-file-label,
.custom-file-input.is-invalid~.custom-file-label {
  border-color: #fb6340;
}

.was-validated .custom-file-input:invalid~.custom-file-label::before,
.custom-file-input.is-invalid~.custom-file-label::before {
  border-color: inherit;
}

.was-validated .custom-file-input:invalid~.invalid-feedback,
.was-validated .custom-file-input:invalid~.invalid-tooltip,
.custom-file-input.is-invalid~.invalid-feedback,
.custom-file-input.is-invalid~.invalid-tooltip {
  display: block;
}

.was-validated .custom-file-input:invalid:focus~.custom-file-label,
.custom-file-input.is-invalid:focus~.custom-file-label {
  box-shadow: 0 0 0 0 rgba(251, 99, 64, 0.25);
}

.form-inline {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.form-inline .form-check {
  width: 100%;
}

@media (min-width: 576px) {
  .form-inline label {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
  }

  .form-inline .form-group {
    display: flex;
    flex: 0 0 auto;
    flex-flow: row wrap;
    align-items: center;
    margin-bottom: 0;
  }

  .form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }

  .form-inline .form-control-plaintext {
    display: inline-block;
  }

  .form-inline .input-group,
  .form-inline .custom-select {
    width: auto;
  }

  .form-inline .form-check {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    padding-left: 0;
  }

  .form-inline .form-check-input {
    position: relative;
    margin-top: 0;
    margin-right: 0.25rem;
    margin-left: 0;
  }

  .form-inline .custom-control {
    align-items: center;
    justify-content: center;
  }

  .form-inline .custom-control-label {
    margin-bottom: 0;
  }
}

.btn {
  display: inline-block;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.375rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media screen and (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}

.btn:hover,
.btn:focus {
  text-decoration: none;
}

.btn:focus,
.btn.focus {
  outline: 0;
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}

.btn.disabled,
.btn:disabled {
  opacity: 0.65;
  box-shadow: none;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.btn:not(:disabled):not(.disabled):active,
.btn:not(:disabled):not(.disabled).active {
  box-shadow: none;
}

.btn:not(:disabled):not(.disabled):active:focus,
.btn:not(:disabled):not(.disabled).active:focus {
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08), none;
}

a.btn.disabled,
fieldset:disabled a.btn {
  pointer-events: none;
}

.btn-primary {
  color: #fff;
  background-color: #5e72e4;
  border-color: #5e72e4;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-primary:hover {
  color: #fff;
  background-color: #5e72e4;
  border-color: #5e72e4;
}

.btn-primary:focus,
.btn-primary.focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(94, 114, 228, 0.5);
}

.btn-primary.disabled,
.btn-primary:disabled {
  color: #fff;
  background-color: #5e72e4;
  border-color: #5e72e4;
}

.btn-primary:not(:disabled):not(.disabled):active,
.btn-primary:not(:disabled):not(.disabled).active,
.show>.btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #324cdd;
  border-color: #5e72e4;
}

.btn-primary:not(:disabled):not(.disabled):active:focus,
.btn-primary:not(:disabled):not(.disabled).active:focus,
.show>.btn-primary.dropdown-toggle:focus {
  box-shadow: none, 0 0 0 0 rgba(94, 114, 228, 0.5);
}

.btn-secondary {
  color: #212529;
  background-color: #f7fafc;
  border-color: #f7fafc;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-secondary:hover {
  color: #212529;
  background-color: #f7fafc;
  border-color: #f7fafc;
}

.btn-secondary:focus,
.btn-secondary.focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(247, 250, 252, 0.5);
}

.btn-secondary.disabled,
.btn-secondary:disabled {
  color: #212529;
  background-color: #f7fafc;
  border-color: #f7fafc;
}

.btn-secondary:not(:disabled):not(.disabled):active,
.btn-secondary:not(:disabled):not(.disabled).active,
.show>.btn-secondary.dropdown-toggle {
  color: #212529;
  background-color: #d2e3ee;
  border-color: #f7fafc;
}

.btn-secondary:not(:disabled):not(.disabled):active:focus,
.btn-secondary:not(:disabled):not(.disabled).active:focus,
.show>.btn-secondary.dropdown-toggle:focus {
  box-shadow: none, 0 0 0 0 rgba(247, 250, 252, 0.5);
}

.btn-success {
  color: #fff;
  background-color: #2dce89;
  border-color: #2dce89;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-success:hover {
  color: #fff;
  background-color: #2dce89;
  border-color: #2dce89;
}

.btn-success:focus,
.btn-success.focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(45, 206, 137, 0.5);
}

.btn-success.disabled,
.btn-success:disabled {
  color: #fff;
  background-color: #2dce89;
  border-color: #2dce89;
}

.btn-success:not(:disabled):not(.disabled):active,
.btn-success:not(:disabled):not(.disabled).active,
.show>.btn-success.dropdown-toggle {
  color: #fff;
  background-color: #24a46d;
  border-color: #2dce89;
}

.btn-success:not(:disabled):not(.disabled):active:focus,
.btn-success:not(:disabled):not(.disabled).active:focus,
.show>.btn-success.dropdown-toggle:focus {
  box-shadow: none, 0 0 0 0 rgba(45, 206, 137, 0.5);
}

.btn-info {
  color: #fff;
  background-color: #11cdef;
  border-color: #11cdef;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-info:hover {
  color: #fff;
  background-color: #11cdef;
  border-color: #11cdef;
}

.btn-info:focus,
.btn-info.focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(17, 205, 239, 0.5);
}

.btn-info.disabled,
.btn-info:disabled {
  color: #fff;
  background-color: #11cdef;
  border-color: #11cdef;
}

.btn-info:not(:disabled):not(.disabled):active,
.btn-info:not(:disabled):not(.disabled).active,
.show>.btn-info.dropdown-toggle {
  color: #fff;
  background-color: #0da5c0;
  border-color: #11cdef;
}

.btn-info:not(:disabled):not(.disabled):active:focus,
.btn-info:not(:disabled):not(.disabled).active:focus,
.show>.btn-info.dropdown-toggle:focus {
  box-shadow: none, 0 0 0 0 rgba(17, 205, 239, 0.5);
}

.btn-warning {
  color: #fff;
  background-color: #fb6340;
  border-color: #fb6340;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-warning:hover {
  color: #fff;
  background-color: #fb6340;
  border-color: #fb6340;
}

.btn-warning:focus,
.btn-warning.focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(251, 99, 64, 0.5);
}

.btn-warning.disabled,
.btn-warning:disabled {
  color: #fff;
  background-color: #fb6340;
  border-color: #fb6340;
}

.btn-warning:not(:disabled):not(.disabled):active,
.btn-warning:not(:disabled):not(.disabled).active,
.show>.btn-warning.dropdown-toggle {
  color: #fff;
  background-color: #fa3a0e;
  border-color: #fb6340;
}

.btn-warning:not(:disabled):not(.disabled):active:focus,
.btn-warning:not(:disabled):not(.disabled).active:focus,
.show>.btn-warning.dropdown-toggle:focus {
  box-shadow: none, 0 0 0 0 rgba(251, 99, 64, 0.5);
}

.btn-danger {
  color: #fff;
  background-color: #f5365c;
  border-color: #f5365c;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-danger:hover {
  color: #fff;
  background-color: #f5365c;
  border-color: #f5365c;
}

.btn-danger:focus,
.btn-danger.focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(245, 54, 92, 0.5);
}

.btn-danger.disabled,
.btn-danger:disabled {
  color: #fff;
  background-color: #f5365c;
  border-color: #f5365c;
}

.btn-danger:not(:disabled):not(.disabled):active,
.btn-danger:not(:disabled):not(.disabled).active,
.show>.btn-danger.dropdown-toggle {
  color: #fff;
  background-color: #ec0c38;
  border-color: #f5365c;
}

.btn-danger:not(:disabled):not(.disabled):active:focus,
.btn-danger:not(:disabled):not(.disabled).active:focus,
.show>.btn-danger.dropdown-toggle:focus {
  box-shadow: none, 0 0 0 0 rgba(245, 54, 92, 0.5);
}

.btn-light {
  color: #fff;
  background-color: #adb5bd;
  border-color: #adb5bd;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-light:hover {
  color: #fff;
  background-color: #adb5bd;
  border-color: #adb5bd;
}

.btn-light:focus,
.btn-light.focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(173, 181, 189, 0.5);
}

.btn-light.disabled,
.btn-light:disabled {
  color: #fff;
  background-color: #adb5bd;
  border-color: #adb5bd;
}

.btn-light:not(:disabled):not(.disabled):active,
.btn-light:not(:disabled):not(.disabled).active,
.show>.btn-light.dropdown-toggle {
  color: #fff;
  background-color: #919ca6;
  border-color: #adb5bd;
}

.btn-light:not(:disabled):not(.disabled):active:focus,
.btn-light:not(:disabled):not(.disabled).active:focus,
.show>.btn-light.dropdown-toggle:focus {
  box-shadow: none, 0 0 0 0 rgba(173, 181, 189, 0.5);
}

.btn-dark {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-dark:hover {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}

.btn-dark:focus,
.btn-dark.focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(33, 37, 41, 0.5);
}

.btn-dark.disabled,
.btn-dark:disabled {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}

.btn-dark:not(:disabled):not(.disabled):active,
.btn-dark:not(:disabled):not(.disabled).active,
.show>.btn-dark.dropdown-toggle {
  color: #fff;
  background-color: #0a0c0d;
  border-color: #212529;
}

.btn-dark:not(:disabled):not(.disabled):active:focus,
.btn-dark:not(:disabled):not(.disabled).active:focus,
.show>.btn-dark.dropdown-toggle:focus {
  box-shadow: none, 0 0 0 0 rgba(33, 37, 41, 0.5);
}

.btn-default {
  color: #fff;
  background-color: #172b4d;
  border-color: #172b4d;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-default:hover {
  color: #fff;
  background-color: #172b4d;
  border-color: #172b4d;
}

.btn-default:focus,
.btn-default.focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(23, 43, 77, 0.5);
}

.btn-default.disabled,
.btn-default:disabled {
  color: #fff;
  background-color: #172b4d;
  border-color: #172b4d;
}

.btn-default:not(:disabled):not(.disabled):active,
.btn-default:not(:disabled):not(.disabled).active,
.show>.btn-default.dropdown-toggle {
  color: #fff;
  background-color: #0b1526;
  border-color: #172b4d;
}

.btn-default:not(:disabled):not(.disabled):active:focus,
.btn-default:not(:disabled):not(.disabled).active:focus,
.show>.btn-default.dropdown-toggle:focus {
  box-shadow: none, 0 0 0 0 rgba(23, 43, 77, 0.5);
}

.btn-white {
  color: #212529;
  background-color: #fff;
  border-color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-white:hover {
  color: #212529;
  background-color: white;
  border-color: white;
}

.btn-white:focus,
.btn-white.focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(255, 255, 255, 0.5);
}

.btn-white.disabled,
.btn-white:disabled {
  color: #212529;
  background-color: #fff;
  border-color: #fff;
}

.btn-white:not(:disabled):not(.disabled):active,
.btn-white:not(:disabled):not(.disabled).active,
.show>.btn-white.dropdown-toggle {
  color: #212529;
  background-color: #e6e6e6;
  border-color: white;
}

.btn-white:not(:disabled):not(.disabled):active:focus,
.btn-white:not(:disabled):not(.disabled).active:focus,
.show>.btn-white.dropdown-toggle:focus {
  box-shadow: none, 0 0 0 0 rgba(255, 255, 255, 0.5);
}

.btn-neutral {
  color: #212529;
  background-color: #fff;
  border-color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-neutral:hover {
  color: #212529;
  background-color: white;
  border-color: white;
}

.btn-neutral:focus,
.btn-neutral.focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(255, 255, 255, 0.5);
}

.btn-neutral.disabled,
.btn-neutral:disabled {
  color: #212529;
  background-color: #fff;
  border-color: #fff;
}

.btn-neutral:not(:disabled):not(.disabled):active,
.btn-neutral:not(:disabled):not(.disabled).active,
.show>.btn-neutral.dropdown-toggle {
  color: #212529;
  background-color: #e6e6e6;
  border-color: white;
}

.btn-neutral:not(:disabled):not(.disabled):active:focus,
.btn-neutral:not(:disabled):not(.disabled).active:focus,
.show>.btn-neutral.dropdown-toggle:focus {
  box-shadow: none, 0 0 0 0 rgba(255, 255, 255, 0.5);
}

.btn-darker {
  color: #fff;
  background-color: black;
  border-color: black;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-darker:hover {
  color: #fff;
  background-color: black;
  border-color: black;
}

.btn-darker:focus,
.btn-darker.focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(0, 0, 0, 0.5);
}

.btn-darker.disabled,
.btn-darker:disabled {
  color: #fff;
  background-color: black;
  border-color: black;
}

.btn-darker:not(:disabled):not(.disabled):active,
.btn-darker:not(:disabled):not(.disabled).active,
.show>.btn-darker.dropdown-toggle {
  color: #fff;
  background-color: black;
  border-color: black;
}

.btn-darker:not(:disabled):not(.disabled):active:focus,
.btn-darker:not(:disabled):not(.disabled).active:focus,
.show>.btn-darker.dropdown-toggle:focus {
  box-shadow: none, 0 0 0 0 rgba(0, 0, 0, 0.5);
}

.btn-outline-primary {
  color: #5e72e4;
  background-color: transparent;
  background-image: none;
  border-color: #5e72e4;
}

.btn-outline-primary:hover {
  color: #fff;
  background-color: #5e72e4;
  border-color: #5e72e4;
}

.btn-outline-primary:focus,
.btn-outline-primary.focus {
  box-shadow: 0 0 0 0 rgba(94, 114, 228, 0.5);
}

.btn-outline-primary.disabled,
.btn-outline-primary:disabled {
  color: #5e72e4;
  background-color: transparent;
}

.btn-outline-primary:not(:disabled):not(.disabled):active,
.btn-outline-primary:not(:disabled):not(.disabled).active,
.show>.btn-outline-primary.dropdown-toggle {
  color: #fff;
  background-color: #5e72e4;
  border-color: #5e72e4;
}

.btn-outline-primary:not(:disabled):not(.disabled):active:focus,
.btn-outline-primary:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(94, 114, 228, 0.5);
}

.btn-outline-secondary {
  color: #f7fafc;
  background-color: transparent;
  background-image: none;
  border-color: #f7fafc;
}

.btn-outline-secondary:hover {
  color: #212529;
  background-color: #f7fafc;
  border-color: #f7fafc;
}

.btn-outline-secondary:focus,
.btn-outline-secondary.focus {
  box-shadow: 0 0 0 0 rgba(247, 250, 252, 0.5);
}

.btn-outline-secondary.disabled,
.btn-outline-secondary:disabled {
  color: #f7fafc;
  background-color: transparent;
}

.btn-outline-secondary:not(:disabled):not(.disabled):active,
.btn-outline-secondary:not(:disabled):not(.disabled).active,
.show>.btn-outline-secondary.dropdown-toggle {
  color: #212529;
  background-color: #f7fafc;
  border-color: #f7fafc;
}

.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,
.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(247, 250, 252, 0.5);
}

.btn-outline-success {
  color: #2dce89;
  background-color: transparent;
  background-image: none;
  border-color: #2dce89;
}

.btn-outline-success:hover {
  color: #fff;
  background-color: #2dce89;
  border-color: #2dce89;
}

.btn-outline-success:focus,
.btn-outline-success.focus {
  box-shadow: 0 0 0 0 rgba(45, 206, 137, 0.5);
}

.btn-outline-success.disabled,
.btn-outline-success:disabled {
  color: #2dce89;
  background-color: transparent;
}

.btn-outline-success:not(:disabled):not(.disabled):active,
.btn-outline-success:not(:disabled):not(.disabled).active,
.show>.btn-outline-success.dropdown-toggle {
  color: #fff;
  background-color: #2dce89;
  border-color: #2dce89;
}

.btn-outline-success:not(:disabled):not(.disabled):active:focus,
.btn-outline-success:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(45, 206, 137, 0.5);
}

.btn-outline-info {
  color: #11cdef;
  background-color: transparent;
  background-image: none;
  border-color: #11cdef;
}

.btn-outline-info:hover {
  color: #fff;
  background-color: #11cdef;
  border-color: #11cdef;
}

.btn-outline-info:focus,
.btn-outline-info.focus {
  box-shadow: 0 0 0 0 rgba(17, 205, 239, 0.5);
}

.btn-outline-info.disabled,
.btn-outline-info:disabled {
  color: #11cdef;
  background-color: transparent;
}

.btn-outline-info:not(:disabled):not(.disabled):active,
.btn-outline-info:not(:disabled):not(.disabled).active,
.show>.btn-outline-info.dropdown-toggle {
  color: #fff;
  background-color: #11cdef;
  border-color: #11cdef;
}

.btn-outline-info:not(:disabled):not(.disabled):active:focus,
.btn-outline-info:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(17, 205, 239, 0.5);
}

.btn-outline-warning {
  color: #fb6340;
  background-color: transparent;
  background-image: none;
  border-color: #fb6340;
}

.btn-outline-warning:hover {
  color: #fff;
  background-color: #fb6340;
  border-color: #fb6340;
}

.btn-outline-warning:focus,
.btn-outline-warning.focus {
  box-shadow: 0 0 0 0 rgba(251, 99, 64, 0.5);
}

.btn-outline-warning.disabled,
.btn-outline-warning:disabled {
  color: #fb6340;
  background-color: transparent;
}

.btn-outline-warning:not(:disabled):not(.disabled):active,
.btn-outline-warning:not(:disabled):not(.disabled).active,
.show>.btn-outline-warning.dropdown-toggle {
  color: #fff;
  background-color: #fb6340;
  border-color: #fb6340;
}

.btn-outline-warning:not(:disabled):not(.disabled):active:focus,
.btn-outline-warning:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(251, 99, 64, 0.5);
}

.btn-outline-danger {
  color: #f5365c;
  background-color: transparent;
  background-image: none;
  border-color: #f5365c;
}

.btn-outline-danger:hover {
  color: #fff;
  background-color: #f5365c;
  border-color: #f5365c;
}

.btn-outline-danger:focus,
.btn-outline-danger.focus {
  box-shadow: 0 0 0 0 rgba(245, 54, 92, 0.5);
}

.btn-outline-danger.disabled,
.btn-outline-danger:disabled {
  color: #f5365c;
  background-color: transparent;
}

.btn-outline-danger:not(:disabled):not(.disabled):active,
.btn-outline-danger:not(:disabled):not(.disabled).active,
.show>.btn-outline-danger.dropdown-toggle {
  color: #fff;
  background-color: #f5365c;
  border-color: #f5365c;
}

.btn-outline-danger:not(:disabled):not(.disabled):active:focus,
.btn-outline-danger:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(245, 54, 92, 0.5);
}

.btn-outline-light {
  color: #adb5bd;
  background-color: transparent;
  background-image: none;
  border-color: #adb5bd;
}

.btn-outline-light:hover {
  color: #fff;
  background-color: #adb5bd;
  border-color: #adb5bd;
}

.btn-outline-light:focus,
.btn-outline-light.focus {
  box-shadow: 0 0 0 0 rgba(173, 181, 189, 0.5);
}

.btn-outline-light.disabled,
.btn-outline-light:disabled {
  color: #adb5bd;
  background-color: transparent;
}

.btn-outline-light:not(:disabled):not(.disabled):active,
.btn-outline-light:not(:disabled):not(.disabled).active,
.show>.btn-outline-light.dropdown-toggle {
  color: #fff;
  background-color: #adb5bd;
  border-color: #adb5bd;
}

.btn-outline-light:not(:disabled):not(.disabled):active:focus,
.btn-outline-light:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(173, 181, 189, 0.5);
}

.btn-outline-dark {
  color: #212529;
  background-color: transparent;
  background-image: none;
  border-color: #212529;
}

.btn-outline-dark:hover {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}

.btn-outline-dark:focus,
.btn-outline-dark.focus {
  box-shadow: 0 0 0 0 rgba(33, 37, 41, 0.5);
}

.btn-outline-dark.disabled,
.btn-outline-dark:disabled {
  color: #212529;
  background-color: transparent;
}

.btn-outline-dark:not(:disabled):not(.disabled):active,
.btn-outline-dark:not(:disabled):not(.disabled).active,
.show>.btn-outline-dark.dropdown-toggle {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}

.btn-outline-dark:not(:disabled):not(.disabled):active:focus,
.btn-outline-dark:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(33, 37, 41, 0.5);
}

.btn-outline-default {
  color: #172b4d;
  background-color: transparent;
  background-image: none;
  border-color: #172b4d;
}

.btn-outline-default:hover {
  color: #fff;
  background-color: #172b4d;
  border-color: #172b4d;
}

.btn-outline-default:focus,
.btn-outline-default.focus {
  box-shadow: 0 0 0 0 rgba(23, 43, 77, 0.5);
}

.btn-outline-default.disabled,
.btn-outline-default:disabled {
  color: #172b4d;
  background-color: transparent;
}

.btn-outline-default:not(:disabled):not(.disabled):active,
.btn-outline-default:not(:disabled):not(.disabled).active,
.show>.btn-outline-default.dropdown-toggle {
  color: #fff;
  background-color: #172b4d;
  border-color: #172b4d;
}

.btn-outline-default:not(:disabled):not(.disabled):active:focus,
.btn-outline-default:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-default.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(23, 43, 77, 0.5);
}

.btn-outline-white {
  color: #fff;
  background-color: transparent;
  background-image: none;
  border-color: #fff;
}

.btn-outline-white:hover {
  color: #212529;
  background-color: #fff;
  border-color: #fff;
}

.btn-outline-white:focus,
.btn-outline-white.focus {
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
}

.btn-outline-white.disabled,
.btn-outline-white:disabled {
  color: #fff;
  background-color: transparent;
}

.btn-outline-white:not(:disabled):not(.disabled):active,
.btn-outline-white:not(:disabled):not(.disabled).active,
.show>.btn-outline-white.dropdown-toggle {
  color: #212529;
  background-color: #fff;
  border-color: #fff;
}

.btn-outline-white:not(:disabled):not(.disabled):active:focus,
.btn-outline-white:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-white.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
}

.btn-outline-neutral {
  color: #fff;
  background-color: transparent;
  background-image: none;
  border-color: #fff;
}

.btn-outline-neutral:hover {
  color: #212529;
  background-color: #fff;
  border-color: #fff;
}

.btn-outline-neutral:focus,
.btn-outline-neutral.focus {
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
}

.btn-outline-neutral.disabled,
.btn-outline-neutral:disabled {
  color: #fff;
  background-color: transparent;
}

.btn-outline-neutral:not(:disabled):not(.disabled):active,
.btn-outline-neutral:not(:disabled):not(.disabled).active,
.show>.btn-outline-neutral.dropdown-toggle {
  color: #212529;
  background-color: #fff;
  border-color: #fff;
}

.btn-outline-neutral:not(:disabled):not(.disabled):active:focus,
.btn-outline-neutral:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-neutral.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
}

.btn-outline-darker {
  color: black;
  background-color: transparent;
  background-image: none;
  border-color: black;
}

.btn-outline-darker:hover {
  color: #fff;
  background-color: black;
  border-color: black;
}

.btn-outline-darker:focus,
.btn-outline-darker.focus {
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
}

.btn-outline-darker.disabled,
.btn-outline-darker:disabled {
  color: black;
  background-color: transparent;
}

.btn-outline-darker:not(:disabled):not(.disabled):active,
.btn-outline-darker:not(:disabled):not(.disabled).active,
.show>.btn-outline-darker.dropdown-toggle {
  color: #fff;
  background-color: black;
  border-color: black;
}

.btn-outline-darker:not(:disabled):not(.disabled):active:focus,
.btn-outline-darker:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-darker.dropdown-toggle:focus {
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
}

.btn-link {
  font-weight: 400;
  color: #5e72e4;
  background-color: transparent;
}

.btn-link:hover {
  color: #233dd2;
  text-decoration: none;
  background-color: transparent;
  border-color: transparent;
}

.btn-link:focus,
.btn-link.focus {
  text-decoration: none;
  border-color: transparent;
  box-shadow: none;
}

.btn-link:disabled,
.btn-link.disabled {
  color: #8898aa;
  pointer-events: none;
}

.btn-lg,
.btn-group-lg>.btn {
  padding: 0.875rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.4375rem;
}

.btn-sm,
.btn-group-sm>.btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.375rem;
}

.btn-block {
  display: block;
  width: 100%;
}

.btn-block+.btn-block {
  margin-top: 0.5rem;
}

input[type="submit"].btn-block,
input[type="reset"].btn-block,
input[type="button"].btn-block {
  width: 100%;
}

.fade {
  transition: opacity 0.15s linear;
}

@media screen and (prefers-reduced-motion: reduce) {
  .fade {
    transition: none;
  }
}

.fade:not(.show) {
  opacity: 0;
}

.collapse:not(.show) {
  display: none;
}

.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}

@media screen and (prefers-reduced-motion: reduce) {
  .collapsing {
    transition: none;
  }
}

.dropup,
.dropright,
.dropdown,
.dropleft {
  position: relative;
}

.dropdown-toggle::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}

.dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #525f7f;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 0 solid rgba(0, 0, 0, 0.15);
  border-radius: 0.4375rem;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
}

.dropdown-menu-right {
  right: 0;
  left: auto;
}

.dropup .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: 0.125rem;
}

.dropup .dropdown-toggle::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}

.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropright .dropdown-menu {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: 0.125rem;
}

.dropright .dropdown-toggle::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}

.dropright .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropright .dropdown-toggle::after {
  vertical-align: 0;
}

.dropleft .dropdown-menu {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: 0.125rem;
}

.dropleft .dropdown-toggle::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}

.dropleft .dropdown-toggle::after {
  display: none;
}

.dropleft .dropdown-toggle::before {
  display: inline-block;
  width: 0;
  height: 0;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}

.dropleft .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropleft .dropdown-toggle::before {
  vertical-align: 0;
}

.dropdown-menu[x-placement^="top"],
.dropdown-menu[x-placement^="right"],
.dropdown-menu[x-placement^="bottom"],
.dropdown-menu[x-placement^="left"] {
  right: auto;
  bottom: auto;
}

.dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #e9ecef;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}

.dropdown-item:hover,
.dropdown-item:focus {
  color: #16181b;
  text-decoration: none;
  background-color: #f6f9fc;
}

.dropdown-item.active,
.dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #5e72e4;
}

.dropdown-item.disabled,
.dropdown-item:disabled {
  color: #8898aa;
  background-color: transparent;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-header {
  display: block;
  padding: 0.5rem 1.5rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  color: #8898aa;
  white-space: nowrap;
}

.dropdown-item-text {
  display: block;
  padding: 0.25rem 1.5rem;
  color: #212529;
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}

.btn-group>.btn,
.btn-group-vertical>.btn {
  position: relative;
  flex: 0 1 auto;
}

.btn-group>.btn:hover,
.btn-group-vertical>.btn:hover {
  z-index: 1;
}

.btn-group>.btn:focus,
.btn-group>.btn:active,
.btn-group>.btn.active,
.btn-group-vertical>.btn:focus,
.btn-group-vertical>.btn:active,
.btn-group-vertical>.btn.active {
  z-index: 1;
}

.btn-group .btn+.btn,
.btn-group .btn+.btn-group,
.btn-group .btn-group+.btn,
.btn-group .btn-group+.btn-group,
.btn-group-vertical .btn+.btn,
.btn-group-vertical .btn+.btn-group,
.btn-group-vertical .btn-group+.btn,
.btn-group-vertical .btn-group+.btn-group {
  margin-left: -1px;
}

.btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.btn-toolbar .input-group {
  width: auto;
}

.btn-group>.btn:first-child {
  margin-left: 0;
}

.btn-group>.btn:not(:last-child):not(.dropdown-toggle),
.btn-group>.btn-group:not(:last-child)>.btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.btn-group>.btn:not(:first-child),
.btn-group>.btn-group:not(:first-child)>.btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.dropdown-toggle-split {
  padding-right: 0.9375rem;
  padding-left: 0.9375rem;
}

.dropdown-toggle-split::after,
.dropup .dropdown-toggle-split::after,
.dropright .dropdown-toggle-split::after {
  margin-left: 0;
}

.dropleft .dropdown-toggle-split::before {
  margin-right: 0;
}

.btn-sm+.dropdown-toggle-split,
.btn-group-sm>.btn+.dropdown-toggle-split {
  padding-right: 0.375rem;
  padding-left: 0.375rem;
}

.btn-lg+.dropdown-toggle-split,
.btn-group-lg>.btn+.dropdown-toggle-split {
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}

.btn-group.show .dropdown-toggle {
  box-shadow: none;
}

.btn-group.show .dropdown-toggle.btn-link {
  box-shadow: none;
}

.btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.btn-group-vertical .btn,
.btn-group-vertical .btn-group {
  width: 100%;
}

.btn-group-vertical>.btn+.btn,
.btn-group-vertical>.btn+.btn-group,
.btn-group-vertical>.btn-group+.btn,
.btn-group-vertical>.btn-group+.btn-group {
  margin-top: -1px;
  margin-left: 0;
}

.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle),
.btn-group-vertical>.btn-group:not(:last-child)>.btn {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.btn-group-vertical>.btn:not(:first-child),
.btn-group-vertical>.btn-group:not(:first-child)>.btn {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.btn-group-toggle>.btn,
.btn-group-toggle>.btn-group>.btn {
  margin-bottom: 0;
}

.btn-group-toggle>.btn input[type="radio"],
.btn-group-toggle>.btn input[type="checkbox"],
.btn-group-toggle>.btn-group>.btn input[type="radio"],
.btn-group-toggle>.btn-group>.btn input[type="checkbox"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}

.input-group>.form-control,
.input-group>.custom-select,
.input-group>.custom-file {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  margin-bottom: 0;
}

.input-group>.form-control+.form-control,
.input-group>.form-control+.custom-select,
.input-group>.form-control+.custom-file,
.input-group>.custom-select+.form-control,
.input-group>.custom-select+.custom-select,
.input-group>.custom-select+.custom-file,
.input-group>.custom-file+.form-control,
.input-group>.custom-file+.custom-select,
.input-group>.custom-file+.custom-file {
  margin-left: -1px;
}

.input-group>.form-control:focus,
.input-group>.custom-select:focus,
.input-group>.custom-file .custom-file-input:focus~.custom-file-label {
  z-index: 3;
}

.input-group>.custom-file .custom-file-input:focus {
  z-index: 4;
}

.input-group>.form-control:not(:last-child),
.input-group>.custom-select:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group>.form-control:not(:first-child),
.input-group>.custom-select:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group>.custom-file {
  display: flex;
  align-items: center;
}

.input-group>.custom-file:not(:last-child) .custom-file-label,
.input-group>.custom-file:not(:last-child) .custom-file-label::after {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group>.custom-file:not(:first-child) .custom-file-label {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group-prepend,
.input-group-append {
  display: flex;
}

.input-group-prepend .btn,
.input-group-append .btn {
  position: relative;
  z-index: 2;
}

.input-group-prepend .btn+.btn,
.input-group-prepend .btn+.input-group-text,
.input-group-prepend .input-group-text+.input-group-text,
.input-group-prepend .input-group-text+.btn,
.input-group-append .btn+.btn,
.input-group-append .btn+.input-group-text,
.input-group-append .input-group-text+.input-group-text,
.input-group-append .input-group-text+.btn {
  margin-left: -1px;
}

.input-group-prepend {
  margin-right: -1px;
}

.input-group-append {
  margin-left: -1px;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.625rem 0.75rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #adb5bd;
  text-align: center;
  white-space: nowrap;
  background-color: #fff;
  border: 1px solid #cad1d7;
  border-radius: 0.375rem;
}

.input-group-text input[type="radio"],
.input-group-text input[type="checkbox"] {
  margin-top: 0;
}

.input-group-lg>.form-control,
.input-group-lg>.input-group-prepend>.input-group-text,
.input-group-lg>.input-group-append>.input-group-text,
.input-group-lg>.input-group-prepend>.btn,
.input-group-lg>.input-group-append>.btn {
  height: calc(3.625rem + 2px);
  padding: 0.875rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.4375rem;
}

.input-group-sm>.form-control,
.input-group-sm>.input-group-prepend>.input-group-text,
.input-group-sm>.input-group-append>.input-group-text,
.input-group-sm>.input-group-prepend>.btn,
.input-group-sm>.input-group-append>.btn {
  height: calc(1.8125rem + 2px);
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.25rem;
}

.input-group>.input-group-prepend>.btn,
.input-group>.input-group-prepend>.input-group-text,
.input-group>.input-group-append:not(:last-child)>.btn,
.input-group>.input-group-append:not(:last-child)>.input-group-text,
.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),
.input-group>.input-group-append:last-child>.input-group-text:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group>.input-group-append>.btn,
.input-group>.input-group-append>.input-group-text,
.input-group>.input-group-prepend:not(:first-child)>.btn,
.input-group>.input-group-prepend:not(:first-child)>.input-group-text,
.input-group>.input-group-prepend:first-child>.btn:not(:first-child),
.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.custom-control {
  position: relative;
  display: block;
  min-height: 1.5rem;
  padding-left: 1.75rem;
}

.custom-control-inline {
  display: inline-flex;
  margin-right: 1rem;
}

.custom-control-input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-control-input:checked~.custom-control-label::before {
  color: #fff;
  background-color: #5e72e4;
  box-shadow: none;
}

.custom-control-input:focus~.custom-control-label::before {
  box-shadow: none;
}

.custom-control-input:active~.custom-control-label::before {
  color: #fff;
  background-color: #5e72e4;
  box-shadow: none;
}

.custom-control-input:disabled~.custom-control-label {
  color: #8898aa;
}

.custom-control-input:disabled~.custom-control-label::before {
  background-color: #e9ecef;
}

.custom-control-label {
  position: relative;
  margin-bottom: 0;
}

.custom-control-label::before {
  position: absolute;
  top: 0.125rem;
  left: -1.75rem;
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  pointer-events: none;
  content: "";
  user-select: none;
  background-color: #fff;
  box-shadow: none;
}

.custom-control-label::after {
  position: absolute;
  top: 0.125rem;
  left: -1.75rem;
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  content: "";
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.custom-checkbox .custom-control-label::before {
  border-radius: 0.25rem;
}

.custom-checkbox .custom-control-input:checked~.custom-control-label::before {
  background-color: #5e72e4;
}

.custom-checkbox .custom-control-input:checked~.custom-control-label::after {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
}

.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::before {
  background-color: #5e72e4;
  box-shadow: none;
}

.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::after {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E");
}

.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::before {
  background-color: rgba(94, 114, 228, 0.5);
}

.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label::before {
  background-color: rgba(94, 114, 228, 0.5);
}

.custom-radio .custom-control-label::before {
  border-radius: 50%;
}

.custom-radio .custom-control-input:checked~.custom-control-label::before {
  background-color: #5e72e4;
}

.custom-radio .custom-control-input:checked~.custom-control-label::after {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E");
}

.custom-radio .custom-control-input:disabled:checked~.custom-control-label::before {
  background-color: rgba(94, 114, 228, 0.5);
}

.custom-select {
  display: inline-block;
  width: 100%;
  height: calc(2.75rem + 2px);
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  line-height: 1.5;
  color: #8898aa;
  vertical-align: middle;
  background: #fff url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%2332325d' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right 0.75rem center;
  background-size: 8px 10px;
  border: 1px solid #cad1d7;
  border-radius: 0.375rem;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);
  appearance: none;
}

.custom-select:focus {
  border-color: rgba(50, 151, 211, 0.25);
  outline: 0;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 0 0 rgba(50, 151, 211, 0.5);
}

.custom-select:focus::-ms-value {
  color: #8898aa;
  background-color: #fff;
}

.custom-select[multiple],
.custom-select[size]:not([size="1"]) {
  height: auto;
  padding-right: 0.75rem;
  background-image: none;
}

.custom-select:disabled {
  color: #8898aa;
  background-color: #e9ecef;
}

.custom-select::-ms-expand {
  opacity: 0;
}

.custom-select-sm {
  height: calc(1.8125rem + 2px);
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 75%;
}

.custom-select-lg {
  height: calc(3.625rem + 2px);
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 125%;
}

.custom-file {
  position: relative;
  display: inline-block;
  width: 100%;
  height: calc(2.75rem + 2px);
  margin-bottom: 0;
}

.custom-file-input {
  position: relative;
  z-index: 2;
  width: 100%;
  height: calc(2.75rem + 2px);
  margin: 0;
  opacity: 0;
}

.custom-file-input:focus~.custom-file-label {
  border-color: rgba(50, 151, 211, 0.25);
  box-shadow: none;
}

.custom-file-input:focus~.custom-file-label::after {
  border-color: rgba(50, 151, 211, 0.25);
}

.custom-file-input:disabled~.custom-file-label {
  background-color: #e9ecef;
}

.custom-file-input:lang(en)~.custom-file-label::after {
  content: "Browse";
}

.custom-file-label {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: calc(2.75rem + 2px);
  padding: 0.625rem 0.75rem;
  line-height: 1.5;
  color: #8898aa;
  background-color: #fff;
  border: 1px solid #cad1d7;
  border-radius: 0.375rem;
  box-shadow: none;
}

.custom-file-label::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: block;
  height: 2.75rem;
  padding: 0.625rem 0.75rem;
  line-height: 1.5;
  color: #8898aa;
  content: "Browse";
  background-color: #fff;
  border-left: 1px solid #cad1d7;
  border-radius: 0 0.375rem 0.375rem 0;
}

.custom-range {
  width: 100%;
  padding-left: 0;
  background-color: transparent;
  appearance: none;
}

.custom-range:focus {
  outline: none;
}

.custom-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #f8f9fe, none;
}

.custom-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #f8f9fe, none;
}

.custom-range:focus::-ms-thumb {
  box-shadow: 0 0 0 1px #f8f9fe, none;
}

.custom-range::-moz-focus-outer {
  border: 0;
}

.custom-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  background-color: #5e72e4;
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.1);
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
}

@media screen and (prefers-reduced-motion: reduce) {
  .custom-range::-webkit-slider-thumb {
    transition: none;
  }
}

.custom-range::-webkit-slider-thumb:active {
  background-color: #f7f8fe;
}

.custom-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
  box-shadow: inset 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
}

.custom-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  background-color: #5e72e4;
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.1);
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
}

@media screen and (prefers-reduced-motion: reduce) {
  .custom-range::-moz-range-thumb {
    transition: none;
  }
}

.custom-range::-moz-range-thumb:active {
  background-color: #f7f8fe;
}

.custom-range::-moz-range-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
  box-shadow: inset 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
}

.custom-range::-ms-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
  background-color: #5e72e4;
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.1);
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
}

@media screen and (prefers-reduced-motion: reduce) {
  .custom-range::-ms-thumb {
    transition: none;
  }
}

.custom-range::-ms-thumb:active {
  background-color: #f7f8fe;
}

.custom-range::-ms-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
  border-width: 0.5rem;
  box-shadow: inset 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
}

.custom-range::-ms-fill-lower {
  background-color: #dee2e6;
  border-radius: 1rem;
}

.custom-range::-ms-fill-upper {
  margin-right: 15px;
  background-color: #dee2e6;
  border-radius: 1rem;
}

.custom-control-label::before,
.custom-file-label,
.custom-select {
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media screen and (prefers-reduced-motion: reduce) {

  .custom-control-label::before,
  .custom-file-label,
  .custom-select {
    transition: none;
  }
}

.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: block;
  padding: 0.25rem 0.75rem;
}

.nav-link:hover,
.nav-link:focus {
  text-decoration: none;
}

.nav-link.disabled {
  color: #8898aa;
}

.nav-tabs {
  border-bottom: 1px solid #dee2e6;
}

.nav-tabs .nav-item {
  margin-bottom: -1px;
}

.nav-tabs .nav-link {
  border: 1px solid transparent;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
}

.nav-tabs .nav-link:hover,
.nav-tabs .nav-link:focus {
  border-color: #e9ecef #e9ecef #dee2e6;
}

.nav-tabs .nav-link.disabled {
  color: #8898aa;
  background-color: transparent;
  border-color: transparent;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #525f7f;
  background-color: #f8f9fe;
  border-color: #dee2e6 #dee2e6 #f8f9fe;
}

.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav-pills .nav-link {
  border-radius: 0.375rem;
}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
  color: #fff;
  background-color: #5e72e4;
}

.nav-fill .nav-item {
  flex: 1 1 auto;
  text-align: center;
}

.nav-justified .nav-item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}
.tab-content>.tab-pane {
  display: none;
}

.tab-content>.active {
  display: block;
}

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
}

.navbar>.container,
.navbar>.container-fluid {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: inline-block;
  padding-top: 0.0625rem;
  padding-bottom: 0.0625rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
}
.navbar-brand:hover,
.navbar-brand:focus {
  text-decoration: none;
}

.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0;
}

.navbar-nav .dropdown-menu {
  position: static;
  float: none;
}

.navbar-text {
  display: inline-block;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.375rem;
}

.navbar-toggler:hover,
.navbar-toggler:focus {
  text-decoration: none;
}
.navbar-toggler:not(:disabled):not(.disabled) {
  cursor: pointer;
}
.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: no-repeat center center;
  background-size: 100% 100%;
}

@media (max-width: 575.98px) {

  .navbar-expand-sm>.container,
  .navbar-expand-sm>.container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 576px) {
  .navbar-expand-sm {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-sm .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: 1rem;
    padding-left: 1rem;
  }

  .navbar-expand-sm>.container,
  .navbar-expand-sm>.container-fluid {
    flex-wrap: nowrap;
  }

  .navbar-expand-sm .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }

  .navbar-expand-sm .navbar-toggler {
    display: none;
  }
}

@media (max-width: 767.98px) {

  .navbar-expand-md>.container,
  .navbar-expand-md>.container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width: 768px) {
  .navbar-expand-md {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-md .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-md .navbar-nav .nav-link {
    padding-right: 1rem;
    padding-left: 1rem;
  }

  .navbar-expand-md>.container,
  .navbar-expand-md>.container-fluid {
    flex-wrap: nowrap;
  }

  .navbar-expand-md .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }

  .navbar-expand-md .navbar-toggler {
    display: none;
  }
}

@media (max-width: 991.98px) {

  .navbar-expand-lg>.container,
  .navbar-expand-lg>.container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width: 992px) {
  .navbar-expand-lg {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 1rem;
    padding-left: 1rem;
  }

  .navbar-expand-lg>.container,
  .navbar-expand-lg>.container-fluid {
    flex-wrap: nowrap;
  }

  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }

  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
}

@media (max-width: 1199.98px) {

  .navbar-expand-xl>.container,
  .navbar-expand-xl>.container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 1200px) {
  .navbar-expand-xl {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-xl .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: 1rem;
    padding-left: 1rem;
  }

  .navbar-expand-xl>.container,
  .navbar-expand-xl>.container-fluid {
    flex-wrap: nowrap;
  }

  .navbar-expand-xl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }

  .navbar-expand-xl .navbar-toggler {
    display: none;
  }
}

.navbar-expand {
  flex-flow: row nowrap;
  justify-content: flex-start;
}

.navbar-expand>.container,
.navbar-expand>.container-fluid {
  padding-right: 0;
  padding-left: 0;
}

.navbar-expand .navbar-nav {
  flex-direction: row;
}

.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}

.navbar-expand .navbar-nav .nav-link {
  padding-right: 1rem;
  padding-left: 1rem;
}

.navbar-expand>.container,
.navbar-expand>.container-fluid {
  flex-wrap: nowrap;
}

.navbar-expand .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}

.navbar-expand .navbar-toggler {
  display: none;
}

.navbar-light .navbar-brand {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-brand:hover,
.navbar-light .navbar-brand:focus {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.5);
}

.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link:focus {
  color: rgba(0, 0, 0, 0.7);
}

.navbar-light .navbar-nav .nav-link.disabled {
  color: rgba(0, 0, 0, 0.3);
}

.navbar-light .navbar-nav .show>.nav-link,
.navbar-light .navbar-nav .active>.nav-link,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .nav-link.active {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.5);
  border-color: transparent;
}

.navbar-light .navbar-text {
  color: rgba(0, 0, 0, 0.5);
}

.navbar-light .navbar-text a {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-text a:hover,
.navbar-light .navbar-text a:focus {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-dark .navbar-brand {
  color: rgba(255, 255, 255, 0.65);
}

.navbar-dark .navbar-brand:hover,
.navbar-dark .navbar-brand:focus {
  color: rgba(255, 255, 255, 0.65);
}

.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.95);
}

.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link:focus {
  color: rgba(255, 255, 255, 0.65);
}

.navbar-dark .navbar-nav .nav-link.disabled {
  color: rgba(255, 255, 255, 0.25);
}

.navbar-dark .navbar-nav .show>.nav-link,
.navbar-dark .navbar-nav .active>.nav-link,
.navbar-dark .navbar-nav .nav-link.show,
.navbar-dark .navbar-nav .nav-link.active {
  color: rgba(255, 255, 255, 0.65);
}

.navbar-dark .navbar-toggler {
  color: rgba(255, 255, 255, 0.95);
  border-color: transparent;
}
.navbar-dark .navbar-text {
  color: rgba(255, 255, 255, 0.95);
}

.navbar-dark .navbar-text a {
  color: rgba(255, 255, 255, 0.65);
}

.navbar-dark .navbar-text a:hover,
.navbar-dark .navbar-text a:focus {
  color: rgba(255, 255, 255, 0.65);
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0.375rem;
}

.card>hr {
  margin-right: 0;
  margin-left: 0;
}

.card>.list-group:first-child .list-group-item:first-child {
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
}

.card>.list-group:last-child .list-group-item:last-child {
  border-bottom-right-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}

.card-body {
  flex: 1 1 auto;
  padding: 1.5rem;
}

.card-title {
  margin-bottom: 1.25rem;
}

.card-subtitle {
  margin-top: -0.625rem;
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link:hover {
  text-decoration: none;
}

.card-link+.card-link {
  margin-left: 1.5rem;
}

.card-header {
  padding: 1.25rem 1.5rem;
  margin-bottom: 0;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.card-header+.list-group .list-group-item:first-child {
    border-top: 0;
  }

  .card-footer {
    padding: 1.25rem 1.5rem;
    background-color: #fff;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }

  .card-footer:last-child {
    border-radius: 0 0 calc(0.375rem - 1px) calc(0.375rem - 1px);
  }

  .card-header-tabs {
    margin-right: -0.75rem;
    margin-bottom: -1.25rem;
    margin-left: -0.75rem;
    border-bottom: 0;
  }

  .card-header-pills {
    margin-right: -0.75rem;
    margin-left: -0.75rem;
  }

  .card-img-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1.25rem;
  }

  .card-img {
    width: 100%;
    border-radius: calc(0.375rem - 1px);
  }

  .card-img-top {
    width: 100%;
    border-top-left-radius: calc(0.375rem - 1px);
    border-top-right-radius: calc(0.375rem - 1px);
  }

  .card-img-bottom {
    width: 100%;
    border-bottom-right-radius: calc(0.375rem - 1px);
    border-bottom-left-radius: calc(0.375rem - 1px);
  }

  .card-deck {
    display: flex;
    flex-direction: column;
  }

  .card-deck .card {
    margin-bottom: 15px;
  }

  @media (min-width: 576px) {
    .card-deck {
      flex-flow: row wrap;
      margin-right: -15px;
      margin-left: -15px;
    }

    .card-deck .card {
      display: flex;
      flex: 1 0 0%;
      flex-direction: column;
      margin-right: 15px;
      margin-bottom: 0;
      margin-left: 15px;
    }
  }

  .card-group {
    display: flex;
    flex-direction: column;
  }

  .card-group>.card {
    margin-bottom: 15px;
  }

  @media (min-width: 576px) {
    .card-group {
      flex-flow: row wrap;
    }

    .card-group>.card {
      flex: 1 0 0%;
      margin-bottom: 0;
    }

    .card-group>.card+.card {
      margin-left: 0;
      border-left: 0;
    }

    .card-group>.card:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    .card-group>.card:first-child .card-img-top,
    .card-group>.card:first-child .card-header {
      border-top-right-radius: 0;
    }

    .card-group>.card:first-child .card-img-bottom,
    .card-group>.card:first-child .card-footer {
      border-bottom-right-radius: 0;
    }

    .card-group>.card:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    .card-group>.card:last-child .card-img-top,
    .card-group>.card:last-child .card-header {
      border-top-left-radius: 0;
    }

    .card-group>.card:last-child .card-img-bottom,
    .card-group>.card:last-child .card-footer {
      border-bottom-left-radius: 0;
    }

    .card-group>.card:only-child {
      border-radius: 0.375rem;
    }

    .card-group>.card:only-child .card-img-top,
    .card-group>.card:only-child .card-header {
      border-top-left-radius: 0.375rem;
      border-top-right-radius: 0.375rem;
    }

    .card-group>.card:only-child .card-img-bottom,
    .card-group>.card:only-child .card-footer {
      border-bottom-right-radius: 0.375rem;
      border-bottom-left-radius: 0.375rem;
    }

    .card-group>.card:not(:first-child):not(:last-child):not(:only-child) {
      border-radius: 0;
    }

    .card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-top,
    .card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,
    .card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-header,
    .card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-footer {
      border-radius: 0;
    }
  }

  .card-columns .card {
    margin-bottom: 1.25rem;
  }

  @media (min-width: 576px) {
    .card-columns {
      column-count: 3;
      column-gap: 1.25rem;
      orphans: 1;
      widows: 1;
    }

    .card-columns .card {
      display: inline-block;
      width: 100%;
    }
  }
  .accordion .card:not(:first-of-type):not(:last-of-type) {
    border-bottom: 0;
    border-radius: 0;
  }

  .accordion .card:not(:first-of-type) .card-header:first-child {
    border-radius: 0;
  }

  .accordion .card:first-of-type {
    border-bottom: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .accordion .card:last-of-type {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .breadcrumb {
    display: flex;
    flex-wrap: wrap;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: #e9ecef;
    border-radius: 0.375rem;
  }

  .breadcrumb-item+.breadcrumb-item {
    padding-left: 0.5rem;
  }

  .breadcrumb-item+.breadcrumb-item::before {
    display: inline-block;
    padding-right: 0.5rem;
    color: #8898aa;
    content: "/";
  }

  .breadcrumb-item+.breadcrumb-item:hover::before {
    text-decoration: underline;
  }

  .breadcrumb-item+.breadcrumb-item:hover::before {
    text-decoration: none;
  }

  .breadcrumb-item.active {
    color: #8898aa;
  }

  .pagination {
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: 0.375rem;
  }

  .page-link {
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #8898aa;
    background-color: #fff;
    border: 1px solid #dee2e6;
  }

  .page-link:hover {
    z-index: 2;
    color: #8898aa;
    text-decoration: none;
    background-color: #dee2e6;
    border-color: #dee2e6;
  }

  .page-link:focus {
    z-index: 2;
    outline: 0;
    box-shadow: none;
  }

  .page-link:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  .page-item:first-child .page-link {
    margin-left: 0;
    border-top-left-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem;
  }

  .page-item:last-child .page-link {
    border-top-right-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
  }

  .page-item.active .page-link {
    z-index: 1;
    color: #fff;
    background-color: #5e72e4;
    border-color: #5e72e4;
  }

  .page-item.disabled .page-link {
    color: #8898aa;
    pointer-events: none;
    cursor: auto;
    background-color: #fff;
    border-color: #dee2e6;
  }

  .pagination-lg .page-link {
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
    line-height: 1.5;
  }

  .pagination-lg .page-item:first-child .page-link {
    border-top-left-radius: 0.4375rem;
    border-bottom-left-radius: 0.4375rem;
  }

  .pagination-lg .page-item:last-child .page-link {
    border-top-right-radius: 0.4375rem;
    border-bottom-right-radius: 0.4375rem;
  }

  .pagination-sm .page-link {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
  }

  .pagination-sm .page-item:first-child .page-link {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  .pagination-sm .page-item:last-child .page-link {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  .badge {
    display: inline-block;
    padding: 0.35rem 0.375rem;
    font-size: 66%;
    font-weight: 600;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.375rem;
  }

  .badge:empty {
    display: none;
  }

  .btn .badge {
    position: relative;
    top: -1px;
  }

  .badge-pill {
    padding-right: 0.875em;
    padding-left: 0.875em;
    border-radius: 10rem;
  }

  .badge-primary {
    color: #2643e9;
    background-color: rgba(203, 210, 246, 0.5);
  }

  .badge-primary[href]:hover,
  .badge-primary[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #324cdd;
  }

  .badge-secondary {
    color: #cfe3f1;
    background-color: rgba(255, 255, 255, 0.5);
  }

  .badge-secondary[href]:hover,
  .badge-secondary[href]:focus {
    color: #212529;
    text-decoration: none;
    background-color: #d2e3ee;
  }

  .badge-success {
    color: #1aae6f;
    background-color: rgba(147, 231, 195, 0.5);
  }

  .badge-success[href]:hover,
  .badge-success[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #24a46d;
  }

  .badge-info {
    color: #03acca;
    background-color: rgba(136, 230, 247, 0.5);
  }

  .badge-info[href]:hover,
  .badge-info[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #0da5c0;
  }

  .badge-warning {
    color: #ff3709;
    background-color: rgba(254, 201, 189, 0.5);
  }

  .badge-warning[href]:hover,
  .badge-warning[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #fa3a0e;
  }

  .badge-danger {
    color: #f80031;
    background-color: rgba(251, 175, 190, 0.5);
  }

  .badge-danger[href]:hover,
  .badge-danger[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #ec0c38;
  }

  .badge-light {
    color: #879cb0;
    background-color: rgba(244, 245, 246, 0.5);
  }

  .badge-light[href]:hover,
  .badge-light[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #919ca6;
  }

  .badge-dark {
    color: #090c0e;
    background-color: rgba(90, 101, 112, 0.5);
  }

  .badge-dark[href]:hover,
  .badge-dark[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #0a0c0d;
  }

  .badge-default {
    color: #091428;
    background-color: rgba(52, 98, 175, 0.5);
  }

  .badge-default[href]:hover,
  .badge-default[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #0b1526;
  }

  .badge-white {
    color: #e8e3e3;
    background-color: rgba(255, 255, 255, 0.5);
  }

  .badge-white[href]:hover,
  .badge-white[href]:focus {
    color: #212529;
    text-decoration: none;
    background-color: #e6e6e6;
  }

  .badge-neutral {
    color: #e8e3e3;
    background-color: rgba(255, 255, 255, 0.5);
  }

  .badge-neutral[href]:hover,
  .badge-neutral[href]:focus {
    color: #212529;
    text-decoration: none;
    background-color: #e6e6e6;
  }

  .badge-darker {
    color: black;
    background-color: rgba(64, 64, 64, 0.5);
  }

  .badge-darker[href]:hover,
  .badge-darker[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: black;
  }

  .jumbotron {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    background-color: #e9ecef;
    border-radius: 0.4375rem;
  }

  @media (min-width: 576px) {
    .jumbotron {
      padding: 4rem 2rem;
    }
  }

  .jumbotron-fluid {
    padding-right: 0;
    padding-left: 0;
    border-radius: 0;
  }

  .alert {
    position: relative;
    padding: 1rem 1.5rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.375rem;
  }

  .alert-heading {
    color: inherit;
  }

  .alert-link {
    font-weight: 600;
  }

  .alert-dismissible {
    padding-right: 4.5rem;
  }

  .alert-dismissible .close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 1.5rem;
    color: inherit;
  }

  .alert-primary {
    color: #fff;
    background-color: #7889e8;
    border-color: #7889e8;
  }

  .alert-primary hr {
    border-top-color: #6276e4;
  }

  .alert-primary .alert-link {
    color: #324cdd;
  }

  .alert-secondary {
    color: #212529;
    background-color: #f8fbfc;
    border-color: #f8fbfc;
  }

  .alert-secondary hr {
    border-top-color: #e6f1f4;
  }

  .alert-secondary .alert-link {
    color: #d2e3ee;
  }

  .alert-success {
    color: #fff;
    background-color: #4fd69c;
    border-color: #4fd69c;
  }

  .alert-success hr {
    border-top-color: #3ad190;
  }

  .alert-success .alert-link {
    color: #24a46d;
  }

  .alert-info {
    color: #fff;
    background-color: #37d5f2;
    border-color: #37d5f2;
  }

  .alert-info hr {
    border-top-color: #1fd0f0;
  }

  .alert-info .alert-link {
    color: #0da5c0;
  }

  .alert-warning {
    color: #fff;
    background-color: #fc7c5f;
    border-color: #fc7c5f;
  }

  .alert-warning hr {
    border-top-color: #fc6846;
  }

  .alert-warning .alert-link {
    color: #fa3a0e;
  }

  .alert-danger {
    color: #fff;
    background-color: #f75676;
    border-color: #f75676;
  }

  .alert-danger hr {
    border-top-color: #f63e62;
  }

  .alert-danger .alert-link {
    color: #ec0c38;
  }

  .alert-light {
    color: #fff;
    background-color: #bac1c8;
    border-color: #bac1c8;
  }

  .alert-light hr {
    border-top-color: #acb4bd;
  }

  .alert-light .alert-link {
    color: #919ca6;
  }

  .alert-dark {
    color: #fff;
    background-color: #45484b;
    border-color: #45484b;
  }

  .alert-dark hr {
    border-top-color: #393b3e;
  }

  .alert-dark .alert-link {
    color: #0a0c0d;
  }

  .alert-default {
    color: #fff;
    background-color: #3c4d69;
    border-color: #3c4d69;
  }

  .alert-default hr {
    border-top-color: #334159;
  }

  .alert-default .alert-link {
    color: #0b1526;
  }

  .alert-white {
    color: #212529;
    background-color: white;
    border-color: white;
  }

  .alert-white hr {
    border-top-color: #f2f2f2;
  }

  .alert-white .alert-link {
    color: #e6e6e6;
  }

  .alert-neutral {
    color: #212529;
    background-color: white;
    border-color: white;
  }

  .alert-neutral hr {
    border-top-color: #f2f2f2;
  }

  .alert-neutral .alert-link {
    color: #e6e6e6;
  }

  .alert-darker {
    color: #fff;
    background-color: #292929;
    border-color: #292929;
  }

  .alert-darker hr {
    border-top-color: #1c1c1c;
  }

  .alert-darker .alert-link {
    color: black;
  }

  @keyframes progress-bar-stripes {
    from {
      background-position: 1rem 0;
    }

    to {
      background-position: 0 0;
    }
  }

  .progress {
    display: flex;
    height: 1rem;
    overflow: hidden;
    font-size: 0.75rem;
    background-color: #e9ecef;
    border-radius: 0.375rem;
    box-shadow: inset 0 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
  }

  .progress-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: #5e72e4;
    transition: width 0.6s ease;
  }

  @media screen and (prefers-reduced-motion: reduce) {
    .progress-bar {
      transition: none;
    }
  }

  .progress-bar-striped {
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-size: 1rem 1rem;
  }

  .progress-bar-animated {
    animation: progress-bar-stripes 1s linear infinite;
  }

  .media {
    display: flex;
    align-items: flex-start;
  }

  .media-body {
    flex: 1;
  }

  .list-group {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
  }

  .list-group-item-action {
    width: 100%;
    color: #525f7f;
    text-align: inherit;
  }

  .list-group-item-action:hover,
  .list-group-item-action:focus {
    color: #525f7f;
    text-decoration: none;
    background-color: #f6f9fc;
  }

  .list-group-item-action:active {
    color: #525f7f;
    background-color: #e9ecef;
  }

  .list-group-item {
    position: relative;
    display: block;
    padding: 1rem 1rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid #e9ecef;
  }

  .list-group-item:first-child {
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
  }

  .list-group-item:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem;
  }

  .list-group-item:hover,
  .list-group-item:focus {
    z-index: 1;
    text-decoration: none;
  }

  .list-group-item.disabled,
  .list-group-item:disabled {
    color: #8898aa;
    background-color: #fff;
  }

  .list-group-item.active {
    z-index: 2;
    color: #fff;
    background-color: #5e72e4;
    border-color: #5e72e4;
  }

  .list-group-flush .list-group-item {
    border-right: 0;
    border-left: 0;
    border-radius: 0;
  }

  .list-group-flush:first-child .list-group-item:first-child {
    border-top: 0;
  }

  .list-group-flush:last-child .list-group-item:last-child {
    border-bottom: 0;
  }

  .list-group-item-primary {
    color: #313b77;
    background-color: #d2d8f7;
  }

  .list-group-item-primary.list-group-item-action:hover,
  .list-group-item-primary.list-group-item-action:focus {
    color: #313b77;
    background-color: #bcc5f3;
  }

  .list-group-item-primary.list-group-item-action.active {
    color: #fff;
    background-color: #313b77;
    border-color: #313b77;
  }

  .list-group-item-secondary {
    color: #808283;
    background-color: #fdfefe;
  }

  .list-group-item-secondary.list-group-item-action:hover,
  .list-group-item-secondary.list-group-item-action:focus {
    color: #808283;
    background-color: #ecf6f6;
  }

  .list-group-item-secondary.list-group-item-action.active {
    color: #fff;
    background-color: #808283;
    border-color: #808283;
  }

  .list-group-item-success {
    color: #176b47;
    background-color: #c4f1de;
  }

  .list-group-item-success.list-group-item-action:hover,
  .list-group-item-success.list-group-item-action:focus {
    color: #176b47;
    background-color: #afecd2;
  }

  .list-group-item-success.list-group-item-action.active {
    color: #fff;
    background-color: #176b47;
    border-color: #176b47;
  }

  .list-group-item-info {
    color: #096b7c;
    background-color: #bcf1fb;
  }

  .list-group-item-info.list-group-item-action:hover,
  .list-group-item-info.list-group-item-action:focus {
    color: #096b7c;
    background-color: #a4ecfa;
  }

  .list-group-item-info.list-group-item-action.active {
    color: #fff;
    background-color: #096b7c;
    border-color: #096b7c;
  }

  .list-group-item-warning {
    color: #833321;
    background-color: #fed3ca;
  }

  .list-group-item-warning.list-group-item-action:hover,
  .list-group-item-warning.list-group-item-action:focus {
    color: #833321;
    background-color: #febeb1;
  }

  .list-group-item-warning.list-group-item-action.active {
    color: #fff;
    background-color: #833321;
    border-color: #833321;
  }

  .list-group-item-danger {
    color: #7f1c30;
    background-color: #fcc7d1;
  }

  .list-group-item-danger.list-group-item-action:hover,
  .list-group-item-danger.list-group-item-action:focus {
    color: #7f1c30;
    background-color: #fbafbd;
  }

  .list-group-item-danger.list-group-item-action.active {
    color: #fff;
    background-color: #7f1c30;
    border-color: #7f1c30;
  }

  .list-group-item-light {
    color: #5a5e62;
    background-color: #e8eaed;
  }

  .list-group-item-light.list-group-item-action:hover,
  .list-group-item-light.list-group-item-action:focus {
    color: #5a5e62;
    background-color: #dadde2;
  }

  .list-group-item-light.list-group-item-action.active {
    color: #fff;
    background-color: #5a5e62;
    border-color: #5a5e62;
  }

  .list-group-item-dark {
    color: #111315;
    background-color: #c1c2c3;
  }

  .list-group-item-dark.list-group-item-action:hover,
  .list-group-item-dark.list-group-item-action:focus {
    color: #111315;
    background-color: #b4b5b6;
  }

  .list-group-item-dark.list-group-item-action.active {
    color: #fff;
    background-color: #111315;
    border-color: #111315;
  }

  .list-group-item-default {
    color: #0c1628;
    background-color: #bec4cd;
  }

  .list-group-item-default.list-group-item-action:hover,
  .list-group-item-default.list-group-item-action:focus {
    color: #0c1628;
    background-color: #b0b7c2;
  }

  .list-group-item-default.list-group-item-action.active {
    color: #fff;
    background-color: #0c1628;
    border-color: #0c1628;
  }

  .list-group-item-white {
    color: #858585;
    background-color: white;
  }

  .list-group-item-white.list-group-item-action:hover,
  .list-group-item-white.list-group-item-action:focus {
    color: #858585;
    background-color: #f2f2f2;
  }

  .list-group-item-white.list-group-item-action.active {
    color: #fff;
    background-color: #858585;
    border-color: #858585;
  }

  .list-group-item-neutral {
    color: #858585;
    background-color: white;
  }

  .list-group-item-neutral.list-group-item-action:hover,
  .list-group-item-neutral.list-group-item-action:focus {
    color: #858585;
    background-color: #f2f2f2;
  }

  .list-group-item-neutral.list-group-item-action.active {
    color: #fff;
    background-color: #858585;
    border-color: #858585;
  }

  .list-group-item-darker {
    color: black;
    background-color: #b8b8b8;
  }

  .list-group-item-darker.list-group-item-action:hover,
  .list-group-item-darker.list-group-item-action:focus {
    color: black;
    background-color: #ababab;
  }

  .list-group-item-darker.list-group-item-action.active {
    color: #fff;
    background-color: black;
    border-color: black;
  }

  .close {
    float: right;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1;
    color: rgba(0, 0, 0, 0.6);
    text-shadow: none;
    opacity: .5;
  }

  .close:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  .close:not(:disabled):not(.disabled):hover,
  .close:not(:disabled):not(.disabled):focus {
    color: rgba(0, 0, 0, 0.6);
    text-decoration: none;
    opacity: .75;
  }

  button.close {
    padding: 0;
    background-color: transparent;
    border: 0;
    -webkit-appearance: none;
  }

  .modal-open {
    overflow: hidden;
  }

  .modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto;
  }

  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    overflow: hidden;
    outline: 0;
  }

  .modal-dialog {
    position: relative;
    width: auto;
    margin: 0.5rem;
    pointer-events: none;
  }

  .modal.fade .modal-dialog {
    transition: transform 0.3s ease-out;
    transform: translate(0, -25%);
  }

  @media screen and (prefers-reduced-motion: reduce) {
    .modal.fade .modal-dialog {
      transition: none;
    }
  }

  .modal.show .modal-dialog {
    transform: translate(0, 0);
  }

  .modal-dialog-centered {
    display: flex;
    align-items: center;
    min-height: calc(100% - (0.5rem * 2));
  }

  .modal-dialog-centered::before {
    display: block;
    height: calc(100vh - (0.5rem * 2));
    content: "";
  }

  .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 0 solid rgba(0, 0, 0, 0.2);
    border-radius: 0.4375rem;
    box-shadow: 0 15px 35px rgba(50, 50, 93, 0.2), 0 5px 15px rgba(0, 0, 0, 0.17);
    outline: 0;
  }

.card-header:first-child {
  border-radius: calc(0.375rem - 1px) calc(0.375rem - 1px) 0 0;
}
.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000;
  }

  .modal-backdrop.fade {
    opacity: 0;
  }

  .modal-backdrop.show {
    opacity: 0.16;
  }

  .modal-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1.25rem;
    border-bottom: 0 solid #e9ecef;
    border-top-left-radius: 0.4375rem;
    border-top-right-radius: 0.4375rem;
  }

  .modal-header .close {
    padding: 1.25rem;
    margin: -1.25rem -1.25rem -1.25rem auto;
  }

  .modal-title {
    margin-bottom: 0;
    line-height: 1.1;
  }

  .modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 1.5rem;
  }

  .modal-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1.5rem;
    border-top: 0 solid #e9ecef;
  }

  .modal-footer> :not(:first-child) {
    margin-left: .25rem;
  }

  .modal-footer> :not(:last-child) {
    margin-right: .25rem;
  }

  .modal-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll;
  }

  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 500px;
      margin: 1.75rem auto;
    }

    .modal-dialog-centered {
      min-height: calc(100% - (1.75rem * 2));
    }

    .modal-dialog-centered::before {
      height: calc(100vh - (1.75rem * 2));
    }

    .modal-content {
      box-shadow: 0 15px 35px rgba(50, 50, 93, 0.2), 0 5px 15px rgba(0, 0, 0, 0.17);
    }

    .modal-sm {
      max-width: 380px;
    }
  }

  @media (min-width: 992px) {
    .modal-lg {
      max-width: 800px;
    }
  }


  .tooltip {
    position: absolute;
    z-index: 1070;
    display: block;
    margin: 0;
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: 0.875rem;
    word-wrap: break-word;
    opacity: 0;
  }

  .tooltip.show {
    opacity: 0.9;
  }

  .tooltip .arrow {
    position: absolute;
    display: block;
    width: 0.8rem;
    height: 0.4rem;
  }

  .tooltip .arrow::before {
    position: absolute;
    content: "";
    border-color: transparent;
    border-style: solid;
  }

  .bs-tooltip-top,
  .bs-tooltip-auto[x-placement^="top"] {
    padding: 0.4rem 0;
  }

  .bs-tooltip-top .arrow,
  .bs-tooltip-auto[x-placement^="top"] .arrow {
    bottom: 0;
  }

  .bs-tooltip-top .arrow::before,
  .bs-tooltip-auto[x-placement^="top"] .arrow::before {
    top: 0;
    border-width: 0.4rem 0.4rem 0;
    border-top-color: #000;
  }

  .bs-tooltip-right,
  .bs-tooltip-auto[x-placement^="right"] {
    padding: 0 0.4rem;
  }

  .bs-tooltip-right .arrow,
  .bs-tooltip-auto[x-placement^="right"] .arrow {
    left: 0;
    width: 0.4rem;
    height: 0.8rem;
  }

  .bs-tooltip-right .arrow::before,
  .bs-tooltip-auto[x-placement^="right"] .arrow::before {
    right: 0;
    border-width: 0.4rem 0.4rem 0.4rem 0;
    border-right-color: #000;
  }

  .bs-tooltip-bottom,
  .bs-tooltip-auto[x-placement^="bottom"] {
    padding: 0.4rem 0;
  }

  .bs-tooltip-bottom .arrow,
  .bs-tooltip-auto[x-placement^="bottom"] .arrow {
    top: 0;
  }

  .bs-tooltip-bottom .arrow::before,
  .bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
    bottom: 0;
    border-width: 0 0.4rem 0.4rem;
    border-bottom-color: #000;
  }

  .bs-tooltip-left,
  .bs-tooltip-auto[x-placement^="left"] {
    padding: 0 0.4rem;
  }

  .bs-tooltip-left .arrow,
  .bs-tooltip-auto[x-placement^="left"] .arrow {
    right: 0;
    width: 0.4rem;
    height: 0.8rem;
  }

  .bs-tooltip-left .arrow::before,
  .bs-tooltip-auto[x-placement^="left"] .arrow::before {
    left: 0;
    border-width: 0.4rem 0 0.4rem 0.4rem;
    border-left-color: #000;
  }

  .tooltip-inner {
    max-width: 200px;
    padding: 0.25rem 0.5rem;
    color: #fff;
    text-align: center;
    background-color: #000;
    border-radius: 0.375rem;
  }

  .popover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1060;
    display: block;
    max-width: 276px;
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: 0.875rem;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 0.4375rem;
    box-shadow: 0px 0.5rem 2rem 0px rgba(0, 0, 0, 0.2);
  }

  .popover .arrow {
    position: absolute;
    display: block;
    width: 1.5rem;
    height: 0.75rem;
    margin: 0 0.4375rem;
  }

  .popover .arrow::before,
  .popover .arrow::after {
    position: absolute;
    display: block;
    content: "";
    border-color: transparent;
    border-style: solid;
  }

  .bs-popover-top,
  .bs-popover-auto[x-placement^="top"] {
    margin-bottom: 0.75rem;
  }

  .bs-popover-top .arrow,
  .bs-popover-auto[x-placement^="top"] .arrow {
    bottom: calc((0.75rem + 1px) * -1);
  }

  .bs-popover-top .arrow::before,
  .bs-popover-auto[x-placement^="top"] .arrow::before,
  .bs-popover-top .arrow::after,
  .bs-popover-auto[x-placement^="top"] .arrow::after {
    border-width: 0.75rem 0.75rem 0;
  }

  .bs-popover-top .arrow::before,
  .bs-popover-auto[x-placement^="top"] .arrow::before {
    bottom: 0;
    border-top-color: transparent;
  }

  .bs-popover-top .arrow::after,
  .bs-popover-auto[x-placement^="top"] .arrow::after {
    bottom: 1px;
    border-top-color: #fff;
  }

  .bs-popover-right,
  .bs-popover-auto[x-placement^="right"] {
    margin-left: 0.75rem;
  }

  .bs-popover-right .arrow,
  .bs-popover-auto[x-placement^="right"] .arrow {
    left: calc((0.75rem + 1px) * -1);
    width: 0.75rem;
    height: 1.5rem;
    margin: 0.4375rem 0;
  }

  .bs-popover-right .arrow::before,
  .bs-popover-auto[x-placement^="right"] .arrow::before,
  .bs-popover-right .arrow::after,
  .bs-popover-auto[x-placement^="right"] .arrow::after {
    border-width: 0.75rem 0.75rem 0.75rem 0;
  }

  .bs-popover-right .arrow::before,
  .bs-popover-auto[x-placement^="right"] .arrow::before {
    left: 0;
    border-right-color: transparent;
  }


  .bs-popover-right .arrow::after,
  .bs-popover-auto[x-placement^="right"] .arrow::after {
    left: 1px;
    border-right-color: #fff;
  }

  .bs-popover-bottom,
  .bs-popover-auto[x-placement^="bottom"] {
    margin-top: 0.75rem;
  }

  .bs-popover-bottom .arrow,
  .bs-popover-auto[x-placement^="bottom"] .arrow {
    top: calc((0.75rem + 1px) * -1);
  }

  .bs-popover-bottom .arrow::before,
  .bs-popover-auto[x-placement^="bottom"] .arrow::before,
  .bs-popover-bottom .arrow::after,
  .bs-popover-auto[x-placement^="bottom"] .arrow::after {
    border-width: 0 0.75rem 0.75rem 0.75rem;
  }

  .bs-popover-bottom .arrow::before,
  .bs-popover-auto[x-placement^="bottom"] .arrow::before {
    top: 0;
    border-bottom-color: transparent;
  }


  .bs-popover-bottom .arrow::after,
  .bs-popover-auto[x-placement^="bottom"] .arrow::after {
    top: 1px;
    border-bottom-color: #fff;
  }

  .bs-popover-bottom .popover-header::before,
  .bs-popover-auto[x-placement^="bottom"] .popover-header::before {
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: 1.5rem;
    margin-left: -0.75rem;
    content: "";
    border-bottom: 1px solid #fff;
  }

  .bs-popover-left,
  .bs-popover-auto[x-placement^="left"] {
    margin-right: 0.75rem;
  }

  .bs-popover-left .arrow,
  .bs-popover-auto[x-placement^="left"] .arrow {
    right: calc((0.75rem + 1px) * -1);
    width: 0.75rem;
    height: 1.5rem;
    margin: 0.4375rem 0;
  }
  .bs-popover-left .arrow::before,
  .bs-popover-auto[x-placement^="left"] .arrow::before,
  .bs-popover-left .arrow::after,
  .bs-popover-auto[x-placement^="left"] .arrow::after {
    border-width: 0.75rem 0 0.75rem 0.75rem;
  }

  .bs-popover-left .arrow::before,
  .bs-popover-auto[x-placement^="left"] .arrow::before {
    right: 0;
    border-left-color: transparent;
  }


  .bs-popover-left .arrow::after,
  .bs-popover-auto[x-placement^="left"] .arrow::after {
    right: 1px;
    border-left-color: #fff;
  }

  .popover-header {
    padding: 0.5rem 0.95rem;
    margin-bottom: 0;
    font-size: 1rem;
    color: #32325d;
    background-color: #fff;
    border-bottom: 1px solid #f2f2f2;
    border-top-left-radius: calc(0.4375rem - 1px);
    border-top-right-radius: calc(0.4375rem - 1px);
  }

  .popover-header:empty {
    display: none;
  }

  .popover-body {
    padding: 0.5rem 0.95rem;
    color: #525f7f;
  }

  .carousel {
    position: relative;
  }

  .carousel-inner {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .carousel-item {
    position: relative;
    display: none;
    align-items: center;
    width: 100%;
    backface-visibility: hidden;
    perspective: 1000px;
  }

  .carousel-item.active,
  .carousel-item-next,
  .carousel-item-prev {
    display: block;
    transition: transform 0.6s ease;
  }

  @media screen and (prefers-reduced-motion: reduce) {

    .carousel-item.active,
    .carousel-item-next,
    .carousel-item-prev {
      transition: none;
    }
  }

  .carousel-item-next,
  .carousel-item-prev {
    position: absolute;
    top: 0;
  }

  .carousel-item-next.carousel-item-left,
  .carousel-item-prev.carousel-item-right {
    transform: translateX(0);
  }

  @supports (transform-style: preserve-3d) {

    .carousel-item-next.carousel-item-left,
    .carousel-item-prev.carousel-item-right {
      transform: translate3d(0, 0, 0);
    }
  }

  .carousel-item-next,
  .active.carousel-item-right {
    transform: translateX(100%);
  }

  @supports (transform-style: preserve-3d) {

    .carousel-item-next,
    .active.carousel-item-right {
      transform: translate3d(100%, 0, 0);
    }
  }

  .carousel-item-prev,
  .active.carousel-item-left {
    transform: translateX(-100%);
  }

  @supports (transform-style: preserve-3d) {

    .carousel-item-prev,
    .active.carousel-item-left {
      transform: translate3d(-100%, 0, 0);
    }
  }

  .carousel-fade .carousel-item {
    opacity: 0;
    transition-duration: .6s;
    transition-property: opacity;
  }

  .carousel-fade .carousel-item.active,
  .carousel-fade .carousel-item-next.carousel-item-left,
  .carousel-fade .carousel-item-prev.carousel-item-right {
    opacity: 1;
  }

  .carousel-fade .active.carousel-item-left,
  .carousel-fade .active.carousel-item-right {
    opacity: 0;
  }

  .carousel-fade .carousel-item-next,
  .carousel-fade .carousel-item-prev,
  .carousel-fade .carousel-item.active,
  .carousel-fade .active.carousel-item-left,
  .carousel-fade .active.carousel-item-prev {
    transform: translateX(0);
  }

  @supports (transform-style: preserve-3d) {

    .carousel-fade .carousel-item-next,
    .carousel-fade .carousel-item-prev,
    .carousel-fade .carousel-item.active,
    .carousel-fade .active.carousel-item-left,
    .carousel-fade .active.carousel-item-prev {
      transform: translate3d(0, 0, 0);
    }
  }

  .carousel-control-prev,
  .carousel-control-next {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    color: #fff;
    text-align: center;
    opacity: 0.5;
  }

  .carousel-control-prev:hover,
  .carousel-control-prev:focus,
  .carousel-control-next:hover,
  .carousel-control-next:focus {
    color: #fff;
    text-decoration: none;
    outline: 0;
    opacity: .9;
  }

  .carousel-control-prev {
    left: 0;
  }

  .carousel-control-next {
    right: 0;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: transparent no-repeat center center;
    background-size: 100% 100%;
  }

  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
  }

  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
  }
  .carousel-indicators {
    position: absolute;
    right: 0;
    bottom: 10px;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    padding-left: 0;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
  }

  .carousel-indicators li {
    position: relative;
    flex: 0 1 auto;
    width: 30px;
    height: 3px;
    margin-right: 3px;
    margin-left: 3px;
    text-indent: -999px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);
  }

  .carousel-indicators li::before {
    position: absolute;
    top: -10px;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 10px;
    content: "";
  }

  .carousel-indicators li::after {
    position: absolute;
    bottom: -10px;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 10px;
    content: "";
  }

  .carousel-indicators .active {
    background-color: #fff;
  }

  .carousel-caption {
    position: absolute;
    right: 15%;
    bottom: 20px;
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center;
  }

  .align-baseline {
    vertical-align: baseline !important;
  }

  .align-top {
    vertical-align: top !important;
  }

  .align-middle {
    vertical-align: middle !important;
  }

  .align-bottom {
    vertical-align: bottom !important;
  }

  .align-text-bottom {
    vertical-align: text-bottom !important;
  }

  .align-text-top {
    vertical-align: text-top !important;
  }

  .bg-primary {
    background-color: #5e72e4 !important;
  }

  a.bg-primary:hover,
  a.bg-primary:focus,
  button.bg-primary:hover,
  button.bg-primary:focus {
    background-color: #324cdd !important;
  }
  .bg-secondary {
    background-color: #f7fafc !important;
  }

  a.bg-secondary:hover,
  a.bg-secondary:focus,
  button.bg-secondary:hover,
  button.bg-secondary:focus {
    background-color: #d2e3ee !important;
  }

  .bg-success {
    background-color: #2dce89 !important;
  }

  a.bg-success:hover,
  a.bg-success:focus,
  button.bg-success:hover,
  button.bg-success:focus {
    background-color: #24a46d !important;
  }

  .bg-info {
    background-color: #11cdef !important;
  }

  a.bg-info:hover,
  a.bg-info:focus,
  button.bg-info:hover,
  button.bg-info:focus {
    background-color: #0da5c0 !important;
  }

  .bg-warning {
    background-color: #fb6340 !important;
  }

  a.bg-warning:hover,
  a.bg-warning:focus,
  button.bg-warning:hover,
  button.bg-warning:focus {
    background-color: #fa3a0e !important;
  }

  .bg-danger {
    background-color: #f5365c !important;
  }

  a.bg-danger:hover,
  a.bg-danger:focus,
  button.bg-danger:hover,
  button.bg-danger:focus {
    background-color: #ec0c38 !important;
  }

  .bg-light {
    background-color: #adb5bd !important;
  }

  a.bg-light:hover,
  a.bg-light:focus,
  button.bg-light:hover,
  button.bg-light:focus {
    background-color: #919ca6 !important;
  }

  .bg-dark {
    background-color: #212529 !important;
  }

  a.bg-dark:hover,
  a.bg-dark:focus,
  button.bg-dark:hover,
  button.bg-dark:focus {
    background-color: #0a0c0d !important;
  }

  .bg-default {
    background-color: #172b4d !important;
  }

  a.bg-default:hover,
  a.bg-default:focus,
  button.bg-default:hover,
  button.bg-default:focus {
    background-color: #0b1526 !important;
  }

  .bg-white {
    background-color: #fff !important;
  }

  a.bg-white:hover,
  a.bg-white:focus,
  button.bg-white:hover,
  button.bg-white:focus {
    background-color: #e6e6e6 !important;
  }

  .bg-neutral {
    background-color: #fff !important;
  }

  a.bg-neutral:hover,
  a.bg-neutral:focus,
  button.bg-neutral:hover,
  button.bg-neutral:focus {
    background-color: #e6e6e6 !important;
  }

  .bg-darker {
    background-color: black !important;
  }

  a.bg-darker:hover,
  a.bg-darker:focus,
  button.bg-darker:hover,
  button.bg-darker:focus {
    background-color: black !important;
  }

  .bg-white {
    background-color: #fff !important;
  }

  .bg-transparent {
    background-color: transparent !important;
  }

  .border {
    border: 1px solid #e9ecef !important;
  }

  .border-top {
    border-top: 1px solid #e9ecef !important;
  }

  .border-right {
    border-right: 1px solid #e9ecef !important;
  }

  .border-bottom {
    border-bottom: 1px solid #e9ecef !important;
  }

  .border-left {
    border-left: 1px solid #e9ecef !important;
  }

  .border-0 {
    border: 0 !important;
  }

  .border-top-0 {
    border-top: 0 !important;
  }

  .border-right-0 {
    border-right: 0 !important;
  }

  .border-bottom-0 {
    border-bottom: 0 !important;
  }

  .border-left-0 {
    border-left: 0 !important;
  }

  .border-primary {
    border-color: #5e72e4 !important;
  }

  .border-secondary {
    border-color: #f7fafc !important;
  }

  .border-success {
    border-color: #2dce89 !important;
  }

  .border-info {
    border-color: #11cdef !important;
  }

  .border-warning {
    border-color: #fb6340 !important;
  }

  .border-danger {
    border-color: #f5365c !important;
  }

  .border-light {
    border-color: #adb5bd !important;
  }

  .border-dark {
    border-color: #212529 !important;
  }

  .border-default {
    border-color: #172b4d !important;
  }

  .border-white {
    border-color: #fff !important;
  }

  .border-neutral {
    border-color: #fff !important;
  }

  .border-darker {
    border-color: black !important;
  }

  .border-white {
    border-color: #fff !important;
  }

  .rounded {
    border-radius: 0.375rem !important;
  }

  .rounded-top {
    border-top-left-radius: 0.375rem !important;
    border-top-right-radius: 0.375rem !important;
  }

  .rounded-right {
    border-top-right-radius: 0.375rem !important;
    border-bottom-right-radius: 0.375rem !important;
  }

  .rounded-bottom {
    border-bottom-right-radius: 0.375rem !important;
    border-bottom-left-radius: 0.375rem !important;
  }

  .rounded-left {
    border-top-left-radius: 0.375rem !important;
    border-bottom-left-radius: 0.375rem !important;
  }

  .rounded-circle {
    border-radius: 50% !important;
  }

  .rounded-0 {
    border-radius: 0 !important;
  }

  .clearfix::after {
    display: block;
    clear: both;
    content: "";
  }

  .d-none {
    display: none !important;
  }

  .d-inline {
    display: inline !important;
  }

  .d-inline-block {
    display: inline-block !important;
  }

  .d-block {
    display: block !important;
  }

  .d-table {
    display: table !important;
  }

  .d-table-row {
    display: table-row !important;
  }

  .d-table-cell {
    display: table-cell !important;
  }

  .d-flex {
    display: flex !important;
  }

  .d-inline-flex {
    display: inline-flex !important;
  }

  @media (min-width: 576px) {
    .d-sm-none {
      display: none !important;
    }

    .d-sm-inline {
      display: inline !important;
    }

    .d-sm-inline-block {
      display: inline-block !important;
    }

    .d-sm-block {
      display: block !important;
    }

    .d-sm-table {
      display: table !important;
    }

    .d-sm-table-row {
        display: table-row !important;
      }

      .d-sm-table-cell {
        display: table-cell !important;
      }

      .d-sm-flex {
        display: flex !important;
      }

      .d-sm-inline-flex {
        display: inline-flex !important;
      }
    }

    @media (min-width: 768px) {
      .d-md-none {
        display: none !important;
      }

      .d-md-inline {
        display: inline !important;
      }

      .d-md-inline-block {
        display: inline-block !important;
      }

      .d-md-block {
        display: block !important;
      }

      .d-md-table {
        display: table !important;
      }

      .d-md-table-row {
        display: table-row !important;
      }

      .d-md-table-cell {
        display: table-cell !important;
      }

      .d-md-flex {
        display: flex !important;
      }

      .d-md-inline-flex {
        display: inline-flex !important;
      }
    }

    @media (min-width: 992px) {
      .d-lg-none {
        display: none !important;
      }

      .d-lg-inline {
        display: inline !important;
      }

      .d-lg-inline-block {
        display: inline-block !important;
      }

      .d-lg-block {
        display: block !important;
      }

      .d-lg-table {
        display: table !important;
      }

      .d-lg-table-row {
        display: table-row !important;
      }

      .d-lg-table-cell {
        display: table-cell !important;
      }

      .d-lg-flex {
        display: flex !important;
      }

      .d-lg-inline-flex {
        display: inline-flex !important;
      }
    }

    @media (min-width: 1200px) {
      .d-xl-none {
        display: none !important;
      }

      .d-xl-inline {
        display: inline !important;
      }

      .d-xl-inline-block {
        display: inline-block !important;
      }

      .d-xl-block {
        display: block !important;
      }

      .d-xl-table {
        display: table !important;
      }

      .d-xl-table-row {
        display: table-row !important;
      }

      .d-xl-table-cell {
        display: table-cell !important;
      }

      .d-xl-flex {
        display: flex !important;
      }

      .d-xl-inline-flex {
        display: inline-flex !important;
      }
    }

    @media print {
      .d-print-none {
        display: none !important;
      }

      .d-print-inline {
        display: inline !important;
      }

      .d-print-inline-block {
        display: inline-block !important;
      }

      .d-print-block {
        display: block !important;
      }

      .d-print-table {
        display: table !important;
      }

      .d-print-table-row {
        display: table-row !important;
      }

      .d-print-table-cell {
        display: table-cell !important;
      }

      .d-print-flex {
        display: flex !important;
      }

      .d-print-inline-flex {
        display: inline-flex !important;
      }
    }

    .embed-responsive {
      position: relative;
      display: block;
      width: 100%;
      padding: 0;
      overflow: hidden;
    }

    .embed-responsive::before {
      display: block;
      content: "";
    }

    .embed-responsive .embed-responsive-item,
    .embed-responsive iframe,
    .embed-responsive embed,
    .embed-responsive object,
    .embed-responsive video {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }

    .embed-responsive-21by9::before {
      padding-top: 42.857143%;
    }

    .embed-responsive-16by9::before {
      padding-top: 56.25%;
    }

    .embed-responsive-4by3::before {
      padding-top: 75%;
    }

    .embed-responsive-1by1::before {
      padding-top: 100%;
    }

    .flex-row {
      flex-direction: row !important;
    }

    .flex-column {
      flex-direction: column !important;
    }

    .flex-row-reverse {
      flex-direction: row-reverse !important;
    }

    .flex-column-reverse {
      flex-direction: column-reverse !important;
    }

    .flex-wrap {
      flex-wrap: wrap !important;
    }

    .flex-nowrap {
      flex-wrap: nowrap !important;
    }

    .flex-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }

    .flex-fill {
      flex: 1 1 auto !important;
    }

    .flex-grow-0 {
      flex-grow: 0 !important;
    }

    .flex-grow-1 {
      flex-grow: 1 !important;
    }

    .flex-shrink-0 {
      flex-shrink: 0 !important;
    }

    .flex-shrink-1 {
      flex-shrink: 1 !important;
    }

    .justify-content-start {
      justify-content: flex-start !important;
    }

    .justify-content-end {
      justify-content: flex-end !important;
    }

    .justify-content-center {
      justify-content: center !important;
    }

    .justify-content-between {
      justify-content: space-between !important;
    }

    .justify-content-around {
      justify-content: space-around !important;
    }

    .align-items-start {
      align-items: flex-start !important;
    }

    .align-items-end {
      align-items: flex-end !important;
    }

    .align-items-center {
      align-items: center !important;
    }

    .align-items-baseline {
      align-items: baseline !important;
    }

    .align-items-stretch {
      align-items: stretch !important;
    }

    .align-content-start {
      align-content: flex-start !important;
    }

    .align-content-end {
      align-content: flex-end !important;
    }

    .align-content-center {
      align-content: center !important;
    }

    .align-content-between {
      align-content: space-between !important;
    }

    .align-content-around {
      align-content: space-around !important;
    }

    .align-content-stretch {
      align-content: stretch !important;
    }

    .align-self-auto {
      align-self: auto !important;
    }

    .align-self-start {
      align-self: flex-start !important;
    }

    .align-self-end {
      align-self: flex-end !important;
    }

    .align-self-center {
      align-self: center !important;
    }

    .align-self-baseline {
      align-self: baseline !important;
    }

    .align-self-stretch {
      align-self: stretch !important;
    }

    @media (min-width: 576px) {
      .flex-sm-row {
        flex-direction: row !important;
      }

      .flex-sm-column {
        flex-direction: column !important;
      }

      .flex-sm-row-reverse {
        flex-direction: row-reverse !important;
      }

      .flex-sm-column-reverse {
        flex-direction: column-reverse !important;
      }

      .flex-sm-wrap {
        flex-wrap: wrap !important;
      }

      .flex-sm-nowrap {
        flex-wrap: nowrap !important;
      }

      .flex-sm-wrap-reverse {
        flex-wrap: wrap-reverse !important;
      }

      .flex-sm-fill {
        flex: 1 1 auto !important;
      }

      .flex-sm-grow-0 {
        flex-grow: 0 !important;
      }

      .flex-sm-grow-1 {
        flex-grow: 1 !important;
      }

      .flex-sm-shrink-0 {
        flex-shrink: 0 !important;
      }

      .flex-sm-shrink-1 {
        flex-shrink: 1 !important;
      }

      .justify-content-sm-start {
        justify-content: flex-start !important;
      }

      .justify-content-sm-end {
        justify-content: flex-end !important;
      }

      .justify-content-sm-center {
        justify-content: center !important;
      }

      .justify-content-sm-between {
        justify-content: space-between !important;
      }

      .justify-content-sm-around {
        justify-content: space-around !important;
      }

      .align-items-sm-start {
        align-items: flex-start !important;
      }

      .align-items-sm-end {
        align-items: flex-end !important;
      }

      .align-items-sm-center {
        align-items: center !important;
      }

      .align-items-sm-baseline {
        align-items: baseline !important;
      }

      .align-items-sm-stretch {
        align-items: stretch !important;
      }

      .align-content-sm-start {
        align-content: flex-start !important;
      }

      .align-content-sm-end {
        align-content: flex-end !important;
      }

      .align-content-sm-center {
        align-content: center !important;
      }

      .align-content-sm-between {
        align-content: space-between !important;
      }

      .align-content-sm-around {
        align-content: space-around !important;
      }

      .align-content-sm-stretch {
        align-content: stretch !important;
      }

      .align-self-sm-auto {
        align-self: auto !important;
      }

      .align-self-sm-start {
        align-self: flex-start !important;
      }

      .align-self-sm-end {
        align-self: flex-end !important;
      }

      .align-self-sm-center {
        align-self: center !important;
      }

      .align-self-sm-baseline {
        align-self: baseline !important;
      }

      .align-self-sm-stretch {
        align-self: stretch !important;
      }
    }

    @media (min-width: 768px) {
      .flex-md-row {
        flex-direction: row !important;
      }

      .flex-md-column {
        flex-direction: column !important;
      }

      .flex-md-row-reverse {
        flex-direction: row-reverse !important;
      }

      .flex-md-column-reverse {
        flex-direction: column-reverse !important;
      }

      .flex-md-wrap {
        flex-wrap: wrap !important;
      }

      .flex-md-nowrap {
        flex-wrap: nowrap !important;
      }

      .flex-md-wrap-reverse {
        flex-wrap: wrap-reverse !important;
      }

      .flex-md-fill {
        flex: 1 1 auto !important;
      }

      .flex-md-grow-0 {
        flex-grow: 0 !important;
      }

      .flex-md-grow-1 {
        flex-grow: 1 !important;
      }

      .flex-md-shrink-0 {
        flex-shrink: 0 !important;
      }

      .flex-md-shrink-1 {
        flex-shrink: 1 !important;
      }

      .justify-content-md-start {
        justify-content: flex-start !important;
      }

      .justify-content-md-end {
        justify-content: flex-end !important;
      }

      .justify-content-md-center {
        justify-content: center !important;
      }

      .justify-content-md-between {
        justify-content: space-between !important;
      }

      .justify-content-md-around {
        justify-content: space-around !important;
      }

      .align-items-md-start {
        align-items: flex-start !important;
      }

      .align-items-md-end {
        align-items: flex-end !important;
      }

      .align-items-md-center {
        align-items: center !important;
      }

      .align-items-md-baseline {
        align-items: baseline !important;
      }

      .align-items-md-stretch {
        align-items: stretch !important;
      }
      .align-content-md-start {
        align-content: flex-start !important;
      }

      .align-content-md-end {
        align-content: flex-end !important;
      }

      .align-content-md-center {
        align-content: center !important;
      }

      .align-content-md-between {
        align-content: space-between !important;
      }

      .align-content-md-around {
        align-content: space-around !important;
      }

      .align-content-md-stretch {
        align-content: stretch !important;
      }

      .align-self-md-auto {
        align-self: auto !important;
      }

      .align-self-md-start {
        align-self: flex-start !important;
      }

      .align-self-md-end {
        align-self: flex-end !important;
      }

      .align-self-md-center {
        align-self: center !important;
      }

      .align-self-md-baseline {
        align-self: baseline !important;
      }

      .align-self-md-stretch {
        align-self: stretch !important;
      }
    }

    @media (min-width: 992px) {
      .flex-lg-row {
        flex-direction: row !important;
      }

      .flex-lg-column {
        flex-direction: column !important;
      }

      .flex-lg-row-reverse {
        flex-direction: row-reverse !important;
      }

      .flex-lg-column-reverse {
        flex-direction: column-reverse !important;
      }

      .flex-lg-wrap {
        flex-wrap: wrap !important;
      }

      .flex-lg-nowrap {
        flex-wrap: nowrap !important;
      }

      .flex-lg-wrap-reverse {
        flex-wrap: wrap-reverse !important;
      }

      .flex-lg-fill {
        flex: 1 1 auto !important;
      }

      .flex-lg-grow-0 {
        flex-grow: 0 !important;
      }

      .flex-lg-grow-1 {
        flex-grow: 1 !important;
      }

      .flex-lg-shrink-0 {
        flex-shrink: 0 !important;
      }

      .flex-lg-shrink-1 {
        flex-shrink: 1 !important;
      }

      .justify-content-lg-start {
        justify-content: flex-start !important;
      }

      .justify-content-lg-end {
        justify-content: flex-end !important;
      }

      .justify-content-lg-center {
        justify-content: center !important;
      }

      .justify-content-lg-between {
        justify-content: space-between !important;
      }

      .justify-content-lg-around {
        justify-content: space-around !important;
      }

      .align-items-lg-start {
        align-items: flex-start !important;
      }

      .align-items-lg-end {
        align-items: flex-end !important;
      }

      .align-items-lg-center {
        align-items: center !important;
      }

      .align-items-lg-baseline {
        align-items: baseline !important;
      }

      .align-items-lg-stretch {
        align-items: stretch !important;
      }

      .align-content-lg-start {
        align-content: flex-start !important;
      }

      .align-content-lg-end {
        align-content: flex-end !important;
      }

      .align-content-lg-center {
        align-content: center !important;
      }

      .align-content-lg-between {
        align-content: space-between !important;
      }

      .align-content-lg-around {
        align-content: space-around !important;
      }

      .align-content-lg-stretch {
        align-content: stretch !important;
      }

      .align-self-lg-auto {
        align-self: auto !important;
      }

      .align-self-lg-start {
        align-self: flex-start !important;
      }

      .align-self-lg-end {
        align-self: flex-end !important;
      }

      .align-self-lg-center {
        align-self: center !important;
      }

      .align-self-lg-baseline {
        align-self: baseline !important;
      }

      .align-self-lg-stretch {
        align-self: stretch !important;
      }
    }

    @media (min-width: 1200px) {
      .flex-xl-row {
        flex-direction: row !important;
      }

      .flex-xl-column {
        flex-direction: column !important;
      }

      .flex-xl-row-reverse {
        flex-direction: row-reverse !important;
      }

      .flex-xl-column-reverse {
        flex-direction: column-reverse !important;
      }

      .flex-xl-wrap {
        flex-wrap: wrap !important;
      }

      .flex-xl-nowrap {
        flex-wrap: nowrap !important;
      }

      .flex-xl-wrap-reverse {
        flex-wrap: wrap-reverse !important;
      }

      .flex-xl-fill {
        flex: 1 1 auto !important;
      }

      .flex-xl-grow-0 {
        flex-grow: 0 !important;
      }

      .flex-xl-grow-1 {
        flex-grow: 1 !important;
      }

      .flex-xl-shrink-0 {
        flex-shrink: 0 !important;
      }

      .flex-xl-shrink-1 {
        flex-shrink: 1 !important;
      }

      .justify-content-xl-start {
        justify-content: flex-start !important;
      }

      .justify-content-xl-end {
        justify-content: flex-end !important;
      }

      .justify-content-xl-center {
        justify-content: center !important;
      }

      .justify-content-xl-between {
        justify-content: space-between !important;
      }

      .justify-content-xl-around {
        justify-content: space-around !important;
      }

      .align-items-xl-start {
        align-items: flex-start !important;
      }

      .align-items-xl-end {
        align-items: flex-end !important;
      }

      .align-items-xl-center {
        align-items: center !important;
      }

      .align-items-xl-baseline {
        align-items: baseline !important;
      }

      .align-items-xl-stretch {
        align-items: stretch !important;
      }

      .align-content-xl-start {
        align-content: flex-start !important;
      }

      .align-content-xl-end {
        align-content: flex-end !important;
      }

      .align-content-xl-center {
        align-content: center !important;
      }

      .align-content-xl-between {
        align-content: space-between !important;
      }

      .align-content-xl-around {
        align-content: space-around !important;
      }

      .align-content-xl-stretch {
        align-content: stretch !important;
      }

      .align-self-xl-auto {
        align-self: auto !important;
      }

      .align-self-xl-start {
        align-self: flex-start !important;
      }

      .align-self-xl-end {
        align-self: flex-end !important;
      }

      .align-self-xl-center {
        align-self: center !important;
      }

      .align-self-xl-baseline {
        align-self: baseline !important;
      }

      .align-self-xl-stretch {
        align-self: stretch !important;
      }
    }

    .float-left {
      float: left !important;
    }

    .float-right {
      float: right !important;
    }

    .float-none {
      float: none !important;
    }

    @media (min-width: 576px) {
      .float-sm-left {
        float: left !important;
      }

      .float-sm-right {
        float: right !important;
      }

      .float-sm-none {
        float: none !important;
      }
    }

    @media (min-width: 768px) {
      .float-md-left {
        float: left !important;
      }

      .float-md-right {
        float: right !important;
      }

      .float-md-none {
        float: none !important;
      }
    }

    @media (min-width: 992px) {
      .float-lg-left {
        float: left !important;
      }

      .float-lg-right {
        float: right !important;
      }

      .float-lg-none {
        float: none !important;
      }
    }

    @media (min-width: 1200px) {
      .float-xl-left {
        float: left !important;
      }

      .float-xl-right {
        float: right !important;
      }

      .float-xl-none {
        float: none !important;
      }
    }

    .position-static {
      position: static !important;
    }

    .position-relative {
      position: relative !important;
    }

    .position-absolute {
      position: absolute !important;
    }

    .position-fixed {
      position: fixed !important;
    }

    .position-sticky {
      position: sticky !important;
    }
    .fixed-top {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 1030;
    }

    .fixed-bottom {
      position: fixed;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1030;
    }

    @supports (position: sticky) {
      .sticky-top {
        position: sticky;
        top: 0;
        z-index: 1020;
      }
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    .sr-only-focusable:active,
    .sr-only-focusable:focus {
      position: static;
      width: auto;
      height: auto;
      overflow: visible;
      clip: auto;
      white-space: normal;
    }

    .shadow-sm {
      box-shadow: 0 0 0.5rem rgba(136, 152, 170, 0.075) !important;
    }

    .shadow,
    .card-profile-image img {
      box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15) !important;
    }

    .shadow-lg {
      box-shadow: 0 0 3rem rgba(136, 152, 170, 0.175) !important;
    }

    .shadow-none {
      box-shadow: none !important;
    }

    .w-25 {
      width: 25% !important;
    }

    .w-50 {
      width: 50% !important;
    }

    .w-75 {
      width: 75% !important;
    }
    .w-100 {
        width: 100% !important;
      }

      .w-auto {
        width: auto !important;
      }

      .h-25 {
        height: 25% !important;
      }

      .h-50 {
        height: 50% !important;
      }

      .h-75 {
        height: 75% !important;
      }

      .h-100 {
        height: 100% !important;
      }

      .h-auto {
        height: auto !important;
      }

      .mw-100 {
        max-width: 100% !important;
      }

      .mh-100 {
        max-height: 100% !important;
      }

      .m-0 {
        margin: 0 !important;
      }

      .mt-0,
      .my-0 {
        margin-top: 0 !important;
      }

      .mr-0,
      .mx-0 {
        margin-right: 0 !important;
      }

      .mb-0,
      .my-0 {
        margin-bottom: 0 !important;
      }

      .ml-0,
      .mx-0 {
        margin-left: 0 !important;
      }

      .m-1 {
        margin: 0.25rem !important;
      }

      .mt-1,
      .my-1 {
        margin-top: 0.25rem !important;
      }

      .mr-1,
      .mx-1 {
        margin-right: 0.25rem !important;
      }

      .mb-1,
      .my-1 {
        margin-bottom: 0.25rem !important;
      }

      .ml-1,
      .mx-1 {
        margin-left: 0.25rem !important;
      }

      .m-2 {
        margin: 0.5rem !important;
      }

      .mt-2,
      .my-2 {
        margin-top: 0.5rem !important;
      }

      .mr-2,
      .mx-2 {
        margin-right: 0.5rem !important;
      }

      .mb-2,
      .my-2 {
        margin-bottom: 0.5rem !important;
      }

      .ml-2,
      .mx-2 {
        margin-left: 0.5rem !important;
      }

      .m-3 {
        margin: 1rem !important;
      }

      .mt-3,
      .my-3 {
        margin-top: 1rem !important;
      }

      .mr-3,
      .mx-3 {
        margin-right: 1rem !important;
      }

      .mb-3,
      .my-3 {
        margin-bottom: 1rem !important;
      }

      .ml-3,
      .mx-3 {
        margin-left: 1rem !important;
      }

      .m-4 {
        margin: 1.5rem !important;
      }

      .mt-4,
      .my-4 {
        margin-top: 1.5rem !important;
      }

      .mr-4,
      .mx-4 {
        margin-right: 1.5rem !important;
      }

      .mb-4,
      .my-4 {
        margin-bottom: 1.5rem !important;
      }

      .ml-4,
      .mx-4 {
        margin-left: 1.5rem !important;
      }

      .m-5 {
        margin: 3rem !important;
      }

      .mt-5,
      .my-5 {
        margin-top: 3rem !important;
      }

      .mr-5,
      .mx-5 {
        margin-right: 3rem !important;
      }

      .mb-5,
      .my-5 {
        margin-bottom: 3rem !important;
      }

      .ml-5,
      .mx-5 {
        margin-left: 3rem !important;
      }

      .m--9 {
        margin: -10rem !important;
      }

      .mt--9,
      .my--9 {
        margin-top: -10rem !important;
      }

      .mr--9,
      .mx--9 {
        margin-right: -10rem !important;
      }

      .mb--9,
      .my--9 {
        margin-bottom: -10rem !important;
      }

      .ml--9,
      .mx--9 {
        margin-left: -10rem !important;
      }

      .m--8 {
        margin: -8rem !important;
      }

      .mt--8,
      .my--8 {
        margin-top: -8rem !important;
      }

      .mr--8,
      .mx--8 {
        margin-right: -8rem !important;
      }

      .mb--8,
      .my--8 {
        margin-bottom: -8rem !important;
      }

      .ml--8,
      .mx--8 {
        margin-left: -8rem !important;
      }

      .m--7 {
        margin: -6rem !important;
      }

      .mt--7,
      .my--7 {
        margin-top: -6rem !important;
      }

      .mr--7,
      .mx--7 {
        margin-right: -6rem !important;
      }

      .mb--7,
      .my--7 {
        margin-bottom: -6rem !important;
      }

      .ml--7,
      .mx--7 {
        margin-left: -6rem !important;
      }

      .m--6 {
        margin: -4.5rem !important;
      }

      .mt--6,
      .my--6 {
        margin-top: -4.5rem !important;
      }

      .mr--6,
      .mx--6 {
        margin-right: -4.5rem !important;
      }

      .mb--6,
      .my--6 {
        margin-bottom: -4.5rem !important;
      }

      .ml--6,
      .mx--6 {
        margin-left: -4.5rem !important;
      }

      .m--5 {
        margin: -3rem !important;
      }

      .mt--5,
      .my--5 {
        margin-top: -3rem !important;
      }

      .mr--5,
      .mx--5 {
        margin-right: -3rem !important;
      }

      .mb--5,
      .my--5 {
        margin-bottom: -3rem !important;
      }

      .ml--5,
      .mx--5 {
        margin-left: -3rem !important;
      }

      .m--4 {
        margin: -1.5rem !important;
      }

      .mt--4,
      .my--4 {
        margin-top: -1.5rem !important;
      }

      .mr--4,
      .mx--4 {
        margin-right: -1.5rem !important;
      }

      .mb--4,
      .my--4 {
        margin-bottom: -1.5rem !important;
      }

      .ml--4,
      .mx--4 {
        margin-left: -1.5rem !important;
      }

      .m--3 {
        margin: -1rem !important;
      }

      .mt--3,
      .my--3 {
        margin-top: -1rem !important;
      }

      .mr--3,
      .mx--3 {
        margin-right: -1rem !important;
      }

      .mb--3,
      .my--3 {
        margin-bottom: -1rem !important;
      }

      .ml--3,
      .mx--3 {
        margin-left: -1rem !important;
      }

      .m--2 {
        margin: -0.5rem !important;
      }

      .mt--2,
      .my--2 {
        margin-top: -0.5rem !important;
      }

      .mr--2,
      .mx--2 {
        margin-right: -0.5rem !important;
      }

      .mb--2,
      .my--2 {
        margin-bottom: -0.5rem !important;
      }

      .ml--2,
      .mx--2 {
        margin-left: -0.5rem !important;
      }

      .m--1 {
        margin: -0.25rem !important;
      }

      .mt--1,
      .my--1 {
        margin-top: -0.25rem !important;
      }

      .mr--1,
      .mx--1 {
        margin-right: -0.25rem !important;
      }

      .mb--1,
      .my--1 {
        margin-bottom: -0.25rem !important;
      }

      .ml--1,
      .mx--1 {
        margin-left: -0.25rem !important;
      }

      .m-6 {
        margin: 4.5rem !important;
      }

      .mt-6,
      .my-6 {
        margin-top: 4.5rem !important;
      }

      .mr-6,
      .mx-6 {
        margin-right: 4.5rem !important;
      }

      .mb-6,
      .my-6 {
        margin-bottom: 4.5rem !important;
      }

      .ml-6,
      .mx-6 {
        margin-left: 4.5rem !important;
      }

      .m-7 {
        margin: 6rem !important;
      }

      .mt-7,
      .my-7 {
        margin-top: 6rem !important;
      }

      .mr-7,
      .mx-7 {
        margin-right: 6rem !important;
      }

      .mb-7,
      .my-7 {
        margin-bottom: 6rem !important;
      }

      .ml-7,
      .mx-7 {
        margin-left: 6rem !important;
      }

      .m-8 {
        margin: 8rem !important;
      }

      .mt-8,
      .my-8 {
        margin-top: 8rem !important;
      }

      .mr-8,
      .mx-8 {
        margin-right: 8rem !important;
      }

      .mb-8,
      .my-8 {
        margin-bottom: 8rem !important;
      }

      .ml-8,
      .mx-8 {
        margin-left: 8rem !important;
      }
      .m-9 {
        margin: 10rem !important;
      }

      .mt-9,
      .my-9 {
        margin-top: 10rem !important;
      }

      .mr-9,
      .mx-9 {
        margin-right: 10rem !important;
      }

      .mb-9,
      .my-9 {
        margin-bottom: 10rem !important;
      }

      .ml-9,
      .mx-9 {
        margin-left: 10rem !important;
      }

      .p-0 {
        padding: 0 !important;
      }

      .pt-0,
      .py-0 {
        padding-top: 0 !important;
      }

      .pr-0,
      .px-0 {
        padding-right: 0 !important;
      }

      .pb-0,
      .py-0 {
        padding-bottom: 0 !important;
      }

      .pl-0,
      .px-0 {
        padding-left: 0 !important;
      }

      .p-1 {
        padding: 0.25rem !important;
      }

      .pt-1,
      .py-1 {
        padding-top: 0.25rem !important;
      }

      .pr-1,
      .px-1 {
        padding-right: 0.25rem !important;
      }

      .pb-1,
      .py-1 {
        padding-bottom: 0.25rem !important;
      }

      .pl-1,
      .px-1 {
        padding-left: 0.25rem !important;
      }

      .p-2 {
        padding: 0.5rem !important;
      }

      .pt-2,
      .py-2 {
        padding-top: 0.5rem !important;
      }

      .pr-2,
      .px-2 {
        padding-right: 0.5rem !important;
      }

      .pb-2,
      .py-2 {
        padding-bottom: 0.5rem !important;
      }

      .pl-2,
      .px-2 {
        padding-left: 0.5rem !important;
      }

      .p-3 {
        padding: 1rem !important;
      }

      .pt-3,
      .py-3 {
        padding-top: 1rem !important;
      }

      .pr-3,
      .px-3 {
        padding-right: 1rem !important;
      }

      .pb-3,
      .py-3 {
        padding-bottom: 1rem !important;
      }

      .pl-3,
      .px-3 {
        padding-left: 1rem !important;
      }

      .p-4 {
        padding: 1.5rem !important;
      }

      .pt-4,
      .py-4 {
        padding-top: 1.5rem !important;
      }

      .pr-4,
      .px-4 {
        padding-right: 1.5rem !important;
      }

      .pb-4,
      .py-4 {
        padding-bottom: 1.5rem !important;
      }

      .pl-4,
      .px-4 {
        padding-left: 1.5rem !important;
      }

      .p-5 {
        padding: 3rem !important;
      }

      .pt-5,
      .py-5 {
        padding-top: 3rem !important;
      }

      .pr-5,
      .px-5 {
        padding-right: 3rem !important;
      }

      .pb-5,
      .py-5 {
        padding-bottom: 3rem !important;
      }

      .pl-5,
      .px-5 {
        padding-left: 3rem !important;
      }

      .p--9 {
        padding: -10rem !important;
      }

      .pt--9,
      .py--9 {
        padding-top: -10rem !important;
      }

      .pr--9,
      .px--9 {
        padding-right: -10rem !important;
      }

      .pb--9,
      .py--9 {
        padding-bottom: -10rem !important;
      }

      .pl--9,
      .px--9 {
        padding-left: -10rem !important;
      }

      .p--8 {
        padding: -8rem !important;
      }

      .pt--8,
      .py--8 {
        padding-top: -8rem !important;
      }

      .pr--8,
      .px--8 {
        padding-right: -8rem !important;
      }

      .pb--8,
      .py--8 {
        padding-bottom: -8rem !important;
      }

      .pl--8,
      .px--8 {
        padding-left: -8rem !important;
      }

      .p--7 {
        padding: -6rem !important;
      }

      .pt--7,
      .py--7 {
        padding-top: -6rem !important;
      }

      .pr--7,
      .px--7 {
        padding-right: -6rem !important;
      }

      .pb--7,
      .py--7 {
        padding-bottom: -6rem !important;
      }

      .pl--7,
      .px--7 {
        padding-left: -6rem !important;
      }

      .p--6 {
        padding: -4.5rem !important;
      }

      .pt--6,
      .py--6 {
        padding-top: -4.5rem !important;
      }

      .pr--6,
      .px--6 {
        padding-right: -4.5rem !important;
      }

      .pb--6,
      .py--6 {
        padding-bottom: -4.5rem !important;
      }

      .pl--6,
      .px--6 {
        padding-left: -4.5rem !important;
      }

      .p--5 {
        padding: -3rem !important;
      }

      .pt--5,
      .py--5 {
        padding-top: -3rem !important;
      }

      .pr--5,
      .px--5 {
        padding-right: -3rem !important;
      }

      .pb--5,
      .py--5 {
        padding-bottom: -3rem !important;
      }

      .pl--5,
      .px--5 {
        padding-left: -3rem !important;
      }

      .p--4 {
        padding: -1.5rem !important;
      }

      .pt--4,
      .py--4 {
        padding-top: -1.5rem !important;
      }

      .pr--4,
      .px--4 {
        padding-right: -1.5rem !important;
      }

      .pb--4,
      .py--4 {
        padding-bottom: -1.5rem !important;
      }

      .pl--4,
      .px--4 {
        padding-left: -1.5rem !important;
      }

      .p--3 {
        padding: -1rem !important;
      }

      .pt--3,
      .py--3 {
        padding-top: -1rem !important;
      }

      .pr--3,
      .px--3 {
        padding-right: -1rem !important;
      }

      .pb--3,
      .py--3 {
        padding-bottom: -1rem !important;
      }

      .pl--3,
      .px--3 {
        padding-left: -1rem !important;
      }

      .p--2 {
        padding: -0.5rem !important;
      }

      .pt--2,
      .py--2 {
        padding-top: -0.5rem !important;
      }

      .pr--2,
      .px--2 {
        padding-right: -0.5rem !important;
      }

      .pb--2,
      .py--2 {
        padding-bottom: -0.5rem !important;
      }

      .pl--2,
      .px--2 {
        padding-left: -0.5rem !important;
      }

      .p--1 {
        padding: -0.25rem !important;
      }

      .pt--1,
      .py--1 {
        padding-top: -0.25rem !important;
      }
      .ml-sm--5,
      .mx-sm--5 {
        margin-left: -3rem !important;
      }

      .m-sm--4 {
        margin: -1.5rem !important;
      }

      .mt-sm--4,
      .my-sm--4 {
        margin-top: -1.5rem !important;
      }

      .mr-sm--4,
      .mx-sm--4 {
        margin-right: -1.5rem !important;
      }

      .mb-sm--4,
      .my-sm--4 {
        margin-bottom: -1.5rem !important;
      }

      .ml-sm--4,
      .mx-sm--4 {
        margin-left: -1.5rem !important;
      }

      .m-sm--3 {
        margin: -1rem !important;
      }

      .mt-sm--3,
      .my-sm--3 {
        margin-top: -1rem !important;
      }

      .mr-sm--3,
      .mx-sm--3 {
        margin-right: -1rem !important;
      }

      .mb-sm--3,
      .my-sm--3 {
        margin-bottom: -1rem !important;
      }

      .ml-sm--3,
      .mx-sm--3 {
        margin-left: -1rem !important;
      }

      .m-sm--2 {
        margin: -0.5rem !important;
      }

      .mt-sm--2,
      .my-sm--2 {
        margin-top: -0.5rem !important;
      }

      .mr-sm--2,
      .mx-sm--2 {
        margin-right: -0.5rem !important;
      }

      .mb-sm--2,
      .my-sm--2 {
        margin-bottom: -0.5rem !important;
      }

      .ml-sm--2,
      .mx-sm--2 {
        margin-left: -0.5rem !important;
      }

      .m-sm--1 {
        margin: -0.25rem !important;
      }

      .mt-sm--1,
      .my-sm--1 {
        margin-top: -0.25rem !important;
      }

      .mr-sm--1,
      .mx-sm--1 {
        margin-right: -0.25rem !important;
      }

      .mb-sm--1,
      .my-sm--1 {
        margin-bottom: -0.25rem !important;
      }

      .ml-sm--1,
      .mx-sm--1 {
        margin-left: -0.25rem !important;
      }

      .m-sm-6 {
        margin: 4.5rem !important;
      }

      .mt-sm-6,
      .my-sm-6 {
        margin-top: 4.5rem !important;
      }

      .mr-sm-6,
      .mx-sm-6 {
        margin-right: 4.5rem !important;
      }

      .mb-sm-6,
      .my-sm-6 {
        margin-bottom: 4.5rem !important;
      }

      .ml-sm-6,
      .mx-sm-6 {
        margin-left: 4.5rem !important;
      }

      .m-sm-7 {
        margin: 6rem !important;
      }

      .mt-sm-7,
      .my-sm-7 {
        margin-top: 6rem !important;
      }

      .mr-sm-7,
      .mx-sm-7 {
        margin-right: 6rem !important;
      }

      .mb-sm-7,
      .my-sm-7 {
        margin-bottom: 6rem !important;
      }

      .ml-sm-7,
      .mx-sm-7 {
        margin-left: 6rem !important;
      }

      .m-sm-8 {
        margin: 8rem !important;
      }

      .mt-sm-8,
      .my-sm-8 {
        margin-top: 8rem !important;
      }

      .mr-sm-8,
      .mx-sm-8 {
        margin-right: 8rem !important;
      }

      .mb-sm-8,
      .my-sm-8 {
        margin-bottom: 8rem !important;
      }

      .ml-sm-8,
      .mx-sm-8 {
        margin-left: 8rem !important;
      }

      .m-sm-9 {
        margin: 10rem !important;
      }
      .mt-sm-9,
      .my-sm-9 {
        margin-top: 10rem !important;
      }

      .mr-sm-9,
      .mx-sm-9 {
        margin-right: 10rem !important;
      }

      .mb-sm-9,
      .my-sm-9 {
        margin-bottom: 10rem !important;
      }

      .ml-sm-9,
      .mx-sm-9 {
        margin-left: 10rem !important;
      }

      .p-sm-0 {
        padding: 0 !important;
      }

      .pt-sm-0,
      .py-sm-0 {
        padding-top: 0 !important;
      }

      .pr-sm-0,
      .px-sm-0 {
        padding-right: 0 !important;
      }

      .pb-sm-0,
      .py-sm-0 {
        padding-bottom: 0 !important;
      }
      .pl-sm-0,
      .px-sm-0 {
        padding-left: 0 !important;
      }

      .p-sm-1 {
        padding: 0.25rem !important;
      }

      .pt-sm-1,
      .py-sm-1 {
        padding-top: 0.25rem !important;
      }

      .pr-sm-1,
      .px-sm-1 {
        padding-right: 0.25rem !important;
      }

      .pb-sm-1,
      .py-sm-1 {
        padding-bottom: 0.25rem !important;
      }

      .pl-sm-1,
      .px-sm-1 {
        padding-left: 0.25rem !important;
      }

      .p-sm-2 {
        padding: 0.5rem !important;
      }

      .pt-sm-2,
      .py-sm-2 {
        padding-top: 0.5rem !important;
      }

      .pr-sm-2,
      .px-sm-2 {
        padding-right: 0.5rem !important;
      }

      .pb-sm-2,
      .py-sm-2 {
        padding-bottom: 0.5rem !important;
      }

      .pl-sm-2,
      .px-sm-2 {
        padding-left: 0.5rem !important;
      }

      .p-sm-3 {
        padding: 1rem !important;
      }

      .pt-sm-3,
      .py-sm-3 {
        padding-top: 1rem !important;
      }

      .pr-sm-3,
      .px-sm-3 {
        padding-right: 1rem !important;
      }

      .pb-sm-3,
      .py-sm-3 {
        padding-bottom: 1rem !important;
      }

      .pl-sm-3,
      .px-sm-3 {
        padding-left: 1rem !important;
      }

      .p-sm-4 {
        padding: 1.5rem !important;
      }

      .pt-sm-4,
      .py-sm-4 {
        padding-top: 1.5rem !important;
      }

      .pr-sm-4,
      .px-sm-4 {
        padding-right: 1.5rem !important;
      }

      .pb-sm-4,
      .py-sm-4 {
        padding-bottom: 1.5rem !important;
      }

      .pl-sm-4,
      .px-sm-4 {
        padding-left: 1.5rem !important;
      }

      .p-sm-5 {
        padding: 3rem !important;
      }

      .pt-sm-5,
      .py-sm-5 {
        padding-top: 3rem !important;
      }

      .pr-sm-5,
      .px-sm-5 {
        padding-right: 3rem !important;
      }

      .pb-sm-5,
      .py-sm-5 {
        padding-bottom: 3rem !important;
      }

      .pl-sm-5,
      .px-sm-5 {
        padding-left: 3rem !important;
      }

      .p-sm--9 {
        padding: -10rem !important;
      }

      .pt-sm--9,
      .py-sm--9 {
        padding-top: -10rem !important;
      }

      .pr-sm--9,
      .px-sm--9 {
        padding-right: -10rem !important;
      }

      .pb-sm--9,
      .py-sm--9 {
        padding-bottom: -10rem !important;
      }

      .pl-sm--9,
      .px-sm--9 {
        padding-left: -10rem !important;
      }

      .p-sm--8 {
        padding: -8rem !important;
      }

      .pt-sm--8,
      .py-sm--8 {
        padding-top: -8rem !important;
      }

      .pr-sm--8,
      .px-sm--8 {
        padding-right: -8rem !important;
      }

      .pb-sm--8,
      .py-sm--8 {
        padding-bottom: -8rem !important;
      }

      .pl-sm--8,
      .px-sm--8 {
        padding-left: -8rem !important;
      }

      .p-sm--7 {
        padding: -6rem !important;
      }

      .pt-sm--7,
      .py-sm--7 {
        padding-top: -6rem !important;
      }

      .pr-sm--7,
      .px-sm--7 {
        padding-right: -6rem !important;
      }

      .pb-sm--7,
      .py-sm--7 {
        padding-bottom: -6rem !important;
      }

      .pl-sm--7,
      .px-sm--7 {
        padding-left: -6rem !important;
      }

      .p-sm--6 {
        padding: -4.5rem !important;
      }

      .pt-sm--6,
      .py-sm--6 {
        padding-top: -4.5rem !important;
      }

      .pr-sm--6,
      .px-sm--6 {
        padding-right: -4.5rem !important;
      }
      .pb-sm--6,
      .py-sm--6 {
        padding-bottom: -4.5rem !important;
      }

      .pl-sm--6,
      .px-sm--6 {
        padding-left: -4.5rem !important;
      }

      .p-sm--5 {
        padding: -3rem !important;
      }

      .pt-sm--5,
      .py-sm--5 {
        padding-top: -3rem !important;
      }

      .pr-sm--5,
      .px-sm--5 {
        padding-right: -3rem !important;
      }

      .pb-sm--5,
      .py-sm--5 {
        padding-bottom: -3rem !important;
      }

      .pl-sm--5,
      .px-sm--5 {
        padding-left: -3rem !important;
      }

      .p-sm--4 {
        padding: -1.5rem !important;
      }

      .pt-sm--4,
      .py-sm--4 {
        padding-top: -1.5rem !important;
      }

      .pr-sm--4,
      .px-sm--4 {
        padding-right: -1.5rem !important;
      }

      .pb-sm--4,
      .py-sm--4 {
        padding-bottom: -1.5rem !important;
      }

      .pl-sm--4,
      .px-sm--4 {
        padding-left: -1.5rem !important;
      }

      .p-sm--3 {
        padding: -1rem !important;
      }

      .pt-sm--3,
      .py-sm--3 {
        padding-top: -1rem !important;
      }

      .pr-sm--3,
      .px-sm--3 {
        padding-right: -1rem !important;
      }

      .pb-sm--3,
      .py-sm--3 {
        padding-bottom: -1rem !important;
      }

      .pl-sm--3,
      .px-sm--3 {
        padding-left: -1rem !important;
      }

      .p-sm--2 {
        padding: -0.5rem !important;
      }

      .pt-sm--2,
      .py-sm--2 {
        padding-top: -0.5rem !important;
      }

      .pr-sm--2,
      .px-sm--2 {
        padding-right: -0.5rem !important;
      }

      .pb-sm--2,
      .py-sm--2 {
        padding-bottom: -0.5rem !important;
      }

      .pl-sm--2,
      .px-sm--2 {
        padding-left: -0.5rem !important;
      }

      .p-sm--1 {
        padding: -0.25rem !important;
      }

      .pt-sm--1,
      .py-sm--1 {
        padding-top: -0.25rem !important;
      }

      .pr-sm--1,
      .px-sm--1 {
        padding-right: -0.25rem !important;
      }

      .pb-sm--1,
      .py-sm--1 {
        padding-bottom: -0.25rem !important;
      }

      .pl-sm--1,
      .px-sm--1 {
        padding-left: -0.25rem !important;
      }

      .p-sm-6 {
        padding: 4.5rem !important;
      }

      .pt-sm-6,
      .py-sm-6 {
        padding-top: 4.5rem !important;
      }

      .pr-sm-6,
      .px-sm-6 {
        padding-right: 4.5rem !important;
      }

      .pb-sm-6,
      .py-sm-6 {
        padding-bottom: 4.5rem !important;
      }

      .pl-sm-6,
      .px-sm-6 {
        padding-left: 4.5rem !important;
      }

      .p-sm-7 {
        padding: 6rem !important;
      }

      .pt-sm-7,
      .py-sm-7 {
        padding-top: 6rem !important;
      }

      .pr-sm-7,
      .px-sm-7 {
        padding-right: 6rem !important;
      }

      .pb-sm-7,
      .py-sm-7 {
        padding-bottom: 6rem !important;
      }

      .pl-sm-7,
      .px-sm-7 {
        padding-left: 6rem !important;
      }

      .p-sm-8 {
        padding: 8rem !important;
      }

      .pt-sm-8,
      .py-sm-8 {
        padding-top: 8rem !important;
      }

      .pr-sm-8,
      .px-sm-8 {
        padding-right: 8rem !important;
      }

      .pb-sm-8,
      .py-sm-8 {
        padding-bottom: 8rem !important;
      }

      .pl-sm-8,
      .px-sm-8 {
        padding-left: 8rem !important;
      }

      .p-sm-9 {
        padding: 10rem !important;
      }

      .pt-sm-9,
      .py-sm-9 {
        padding-top: 10rem !important;
      }

      .pr-sm-9,
      .px-sm-9 {
        padding-right: 10rem !important;
      }

      .pb-sm-9,
      .py-sm-9 {
        padding-bottom: 10rem !important;
      }

      .pl-sm-9,
      .px-sm-9 {
        padding-left: 10rem !important;
      }

      .m-sm-auto {
        margin: auto !important;
      }

      .mt-sm-auto,
      .my-sm-auto {
        margin-top: auto !important;
      }

      .mr-sm-auto,
      .mx-sm-auto {
        margin-right: auto !important;
      }

      .mb-sm-auto,
      .my-sm-auto {
        margin-bottom: auto !important;
      }

      .ml-sm-auto,
      .mx-sm-auto {
        margin-left: auto !important;
      }
    }

    @media (min-width: 768px) {
      .m-md-0 {
        margin: 0 !important;
      }

      .mt-md-0,
      .my-md-0 {
        margin-top: 0 !important;
      }

      .mr-md-0,
      .mx-md-0 {
        margin-right: 0 !important;
      }
      .mb-md-0,
      .my-md-0 {
        margin-bottom: 0 !important;
      }

      .ml-md-0,
      .mx-md-0 {
        margin-left: 0 !important;
      }

      .m-md-1 {
        margin: 0.25rem !important;
      }

      .mt-md-1,
      .my-md-1 {
        margin-top: 0.25rem !important;
      }

      .mr-md-1,
      .mx-md-1 {
        margin-right: 0.25rem !important;
      }

      .mb-md-1,
      .my-md-1 {
        margin-bottom: 0.25rem !important;
      }

      .ml-md-1,
      .mx-md-1 {
        margin-left: 0.25rem !important;
      }

      .m-md-2 {
        margin: 0.5rem !important;
      }

      .mt-md-2,
      .my-md-2 {
        margin-top: 0.5rem !important;
      }

      .mr-md-2,
      .mx-md-2 {
        margin-right: 0.5rem !important;
      }

      .mb-md-2,
      .my-md-2 {
        margin-bottom: 0.5rem !important;
      }

      .ml-md-2,
      .mx-md-2 {
        margin-left: 0.5rem !important;
      }

      .m-md-3 {
        margin: 1rem !important;
      }

      .mt-md-3,
      .my-md-3 {
        margin-top: 1rem !important;
      }

      .mr-md-3,
      .mx-md-3 {
        margin-right: 1rem !important;
      }

      .mb-md-3,
      .my-md-3 {
        margin-bottom: 1rem !important;
      }

      .ml-md-3,
      .mx-md-3 {
        margin-left: 1rem !important;
      }

      .m-md-4 {
        margin: 1.5rem !important;
      }

      .mt-md-4,
      .my-md-4 {
        margin-top: 1.5rem !important;
      }

      .mr-md-4,
      .mx-md-4 {
        margin-right: 1.5rem !important;
      }

      .mb-md-4,
      .my-md-4 {
        margin-bottom: 1.5rem !important;
      }

      .ml-md-4,
      .mx-md-4 {
        margin-left: 1.5rem !important;
      }

      .m-md-5 {
        margin: 3rem !important;
      }

      .mt-md-5,
      .my-md-5 {
        margin-top: 3rem !important;
      }

      .mr-md-5,
      .mx-md-5 {
        margin-right: 3rem !important;
      }

      .mb-md-5,
      .my-md-5 {
        margin-bottom: 3rem !important;
      }

      .ml-md-5,
      .mx-md-5 {
        margin-left: 3rem !important;
      }

      .m-md--9 {
        margin: -10rem !important;
      }

      .mt-md--9,
      .my-md--9 {
        margin-top: -10rem !important;
      }

      .mr-md--9,
      .mx-md--9 {
        margin-right: -10rem !important;
      }

      .mb-md--9,
      .my-md--9 {
        margin-bottom: -10rem !important;
      }

      .ml-md--9,
      .mx-md--9 {
        margin-left: -10rem !important;
      }

      .m-md--8 {
        margin: -8rem !important;
      }

      .mt-md--8,
      .my-md--8 {
        margin-top: -8rem !important;
      }

      .mr-md--8,
      .mx-md--8 {
        margin-right: -8rem !important;
      }

      .mb-md--8,
      .my-md--8 {
        margin-bottom: -8rem !important;
      }

      .ml-md--8,
      .mx-md--8 {
        margin-left: -8rem !important;
      }

      .m-md--7 {
        margin: -6rem !important;
      }

      .mt-md--7,
      .my-md--7 {
        margin-top: -6rem !important;
      }

      .mr-md--7,
      .mx-md--7 {
        margin-right: -6rem !important;
      }

      .mb-md--7,
      .my-md--7 {
        margin-bottom: -6rem !important;
      }

      .ml-md--7,
      .mx-md--7 {
        margin-left: -6rem !important;
      }

      .m-md--6 {
        margin: -4.5rem !important;
      }

      .mt-md--6,
      .my-md--6 {
        margin-top: -4.5rem !important;
      }

      .mr-md--6,
      .mx-md--6 {
        margin-right: -4.5rem !important;
      }

      .mb-md--6,
      .my-md--6 {
        margin-bottom: -4.5rem !important;
      }

      .ml-md--6,
      .mx-md--6 {
        margin-left: -4.5rem !important;
      }

      .m-md--5 {
        margin: -3rem !important;
      }

      .mt-md--5,
      .my-md--5 {
        margin-top: -3rem !important;
      }

      .mr-md--5,
      .mx-md--5 {
        margin-right: -3rem !important;
      }

      .mb-md--5,
      .my-md--5 {
        margin-bottom: -3rem !important;
      }

      .ml-md--5,
      .mx-md--5 {
        margin-left: -3rem !important;
      }

      .m-md--4 {
        margin: -1.5rem !important;
      }

      .mt-md--4,
      .my-md--4 {
        margin-top: -1.5rem !important;
      }

      .mr-md--4,
      .mx-md--4 {
        margin-right: -1.5rem !important;
      }

      .mb-md--4,
      .my-md--4 {
        margin-bottom: -1.5rem !important;
      }

      .ml-md--4,
      .mx-md--4 {
        margin-left: -1.5rem !important;
      }

      .m-md--3 {
        margin: -1rem !important;
      }

      .mt-md--3,
      .my-md--3 {
        margin-top: -1rem !important;
      }

      .mr-md--3,
      .mx-md--3 {
        margin-right: -1rem !important;
      }

      .mb-md--3,
      .my-md--3 {
        margin-bottom: -1rem !important;
      }

      .ml-md--3,
      .mx-md--3 {
        margin-left: -1rem !important;
      }

      .m-md--2 {
        margin: -0.5rem !important;
      }

      .mt-md--2,
      .my-md--2 {
        margin-top: -0.5rem !important;
      }
      .pl-md-5,
      .px-md-5 {
        padding-left: 3rem !important;
      }

      .p-md--9 {
        padding: -10rem !important;
      }

      .pt-md--9,
      .py-md--9 {
        padding-top: -10rem !important;
      }

      .pr-md--9,
      .px-md--9 {
        padding-right: -10rem !important;
      }

      .pb-md--9,
      .py-md--9 {
        padding-bottom: -10rem !important;
      }

      .pl-md--9,
      .px-md--9 {
        padding-left: -10rem !important;
      }

      .p-md--8 {
        padding: -8rem !important;
      }

      .pt-md--8,
      .py-md--8 {
        padding-top: -8rem !important;
      }

      .pr-md--8,
      .px-md--8 {
        padding-right: -8rem !important;
      }

      .pb-md--8,
      .py-md--8 {
        padding-bottom: -8rem !important;
      }

      .pl-md--8,
      .px-md--8 {
        padding-left: -8rem !important;
      }

      .p-md--7 {
        padding: -6rem !important;
      }

      .pt-md--7,
      .py-md--7 {
        padding-top: -6rem !important;
      }

      .pr-md--7,
      .px-md--7 {
        padding-right: -6rem !important;
      }

      .pb-md--7,
      .py-md--7 {
        padding-bottom: -6rem !important;
      }

      .pl-md--7,
      .px-md--7 {
        padding-left: -6rem !important;
      }

      .p-md--6 {
        padding: -4.5rem !important;
      }

      .pt-md--6,
      .py-md--6 {
        padding-top: -4.5rem !important;
      }

      .pr-md--6,
      .px-md--6 {
        padding-right: -4.5rem !important;
      }

      .pb-md--6,
      .py-md--6 {
        padding-bottom: -4.5rem !important;
      }

      .pl-md--6,
      .px-md--6 {
        padding-left: -4.5rem !important;
      }

      .p-md--5 {
        padding: -3rem !important;
      }

      .pt-md--5,
      .py-md--5 {
        padding-top: -3rem !important;
      }

      .pr-md--5,
      .px-md--5 {
        padding-right: -3rem !important;
      }

      .pb-md--5,
      .py-md--5 {
        padding-bottom: -3rem !important;
      }

      .pl-md--5,
      .px-md--5 {
        padding-left: -3rem !important;
      }

      .p-md--4 {
        padding: -1.5rem !important;
      }

      .pt-md--4,
      .py-md--4 {
        padding-top: -1.5rem !important;
      }

      .pr-md--4,
      .px-md--4 {
        padding-right: -1.5rem !important;
      }

      .pb-md--4,
      .py-md--4 {
        padding-bottom: -1.5rem !important;
      }

      .pl-md--4,
      .px-md--4 {
        padding-left: -1.5rem !important;
      }

      .p-md--3 {
        padding: -1rem !important;
      }

      .pt-md--3,
      .py-md--3 {
        padding-top: -1rem !important;
      }

      .pr-md--3,
      .px-md--3 {
        padding-right: -1rem !important;
      }

      .pb-md--3,
      .py-md--3 {
        padding-bottom: -1rem !important;
      }

      .pl-md--3,
      .px-md--3 {
        padding-left: -1rem !important;
      }

      .p-md--2 {
        padding: -0.5rem !important;
      }

      .pt-md--2,
      .py-md--2 {
        padding-top: -0.5rem !important;
      }

      .pr-md--2,
      .px-md--2 {
        padding-right: -0.5rem !important;
      }

      .pb-md--2,
      .py-md--2 {
        padding-bottom: -0.5rem !important;
      }

      .pl-md--2,
      .px-md--2 {
        padding-left: -0.5rem !important;
      }

      .p-md--1 {
        padding: -0.25rem !important;
      }

      .pt-md--1,
      .py-md--1 {
        padding-top: -0.25rem !important;
      }

      .pr-md--1,
      .px-md--1 {
        padding-right: -0.25rem !important;
      }

      .pb-md--1,
      .py-md--1 {
        padding-bottom: -0.25rem !important;
      }

      .pl-md--1,
      .px-md--1 {
        padding-left: -0.25rem !important;
      }

      .p-md-6 {
        padding: 4.5rem !important;
      }

      .pt-md-6,
      .py-md-6 {
        padding-top: 4.5rem !important;
      }

      .pr-md-6,
      .px-md-6 {
        padding-right: 4.5rem !important;
      }

      .pb-md-6,
      .py-md-6 {
        padding-bottom: 4.5rem !important;
      }

      .pl-md-6,
      .px-md-6 {
        padding-left: 4.5rem !important;
      }

      .p-md-7 {
        padding: 6rem !important;
      }

      .pt-md-7,
      .py-md-7 {
        padding-top: 6rem !important;
      }

      .pr-md-7,
      .px-md-7 {
        padding-right: 6rem !important;
      }

      .pb-md-7,
      .py-md-7 {
        padding-bottom: 6rem !important;
      }

      .pl-md-7,
      .px-md-7 {
        padding-left: 6rem !important;
      }

      .p-md-8 {
        padding: 8rem !important;
      }

      .pt-md-8,
      .py-md-8 {
        padding-top: 8rem !important;
      }

      .pr-md-8,
      .px-md-8 {
        padding-right: 8rem !important;
      }

      .pb-md-8,
      .py-md-8 {
        padding-bottom: 8rem !important;
      }

      .pl-md-8,
      .px-md-8 {
        padding-left: 8rem !important;
      }

      .p-md-9 {
        padding: 10rem !important;
      }

      .pt-md-9,
      .py-md-9 {
        padding-top: 10rem !important;
      }

      .pr-md-9,
      .px-md-9 {
        padding-right: 10rem !important;
      }

      .pb-md-9,
      .py-md-9 {
        padding-bottom: 10rem !important;
      }

      .pl-md-9,
      .px-md-9 {
        padding-left: 10rem !important;
      }

      .m-md-auto {
        margin: auto !important;
      }

      .mt-md-auto,
      .my-md-auto {
        margin-top: auto !important;
      }

      .mr-md-auto,
      .mx-md-auto {
        margin-right: auto !important;
      }

      .mb-md-auto,
      .my-md-auto {
        margin-bottom: auto !important;
      }

      .ml-md-auto,
      .mx-md-auto {
        margin-left: auto !important;
      }
    }

    @media (min-width: 992px) {
      .m-lg-0 {
        margin: 0 !important;
      }

      .mt-lg-0,
      .my-lg-0 {
        margin-top: 0 !important;
      }

      .mr-lg-0,
      .mx-lg-0 {
        margin-right: 0 !important;
      }

      .mb-lg-0,
      .my-lg-0 {
        margin-bottom: 0 !important;
      }

      .ml-lg-0,
      .mx-lg-0 {
        margin-left: 0 !important;
      }

      .m-lg-1 {
        margin: 0.25rem !important;
      }

      .mt-lg-1,
      .my-lg-1 {
        margin-top: 0.25rem !important;
      }

      .mr-lg-1,
      .mx-lg-1 {
        margin-right: 0.25rem !important;
      }

      .mb-lg-1,
      .my-lg-1 {
        margin-bottom: 0.25rem !important;
      }

      .ml-lg-1,
      .mx-lg-1 {
        margin-left: 0.25rem !important;
      }

      .m-lg-2 {
        margin: 0.5rem !important;
      }

      .mt-lg-2,
      .my-lg-2 {
        margin-top: 0.5rem !important;
      }

      .mr-lg-2,
      .mx-lg-2 {
        margin-right: 0.5rem !important;
      }

      .mb-lg-2,
      .my-lg-2 {
        margin-bottom: 0.5rem !important;
      }

      .ml-lg-2,
      .mx-lg-2 {
        margin-left: 0.5rem !important;
      }

      .m-lg-3 {
        margin: 1rem !important;
      }

      .mt-lg-3,
      .my-lg-3 {
        margin-top: 1rem !important;
      }

      .mr-lg-3,
      .mx-lg-3 {
        margin-right: 1rem !important;
      }

      .mb-lg-3,
      .my-lg-3 {
        margin-bottom: 1rem !important;
      }

      .ml-lg-3,
      .mx-lg-3 {
        margin-left: 1rem !important;
      }

      .m-lg-4 {
        margin: 1.5rem !important;
      }

      .mt-lg-4,
      .my-lg-4 {
        margin-top: 1.5rem !important;
      }

      .mr-lg-4,
      .mx-lg-4 {
        margin-right: 1.5rem !important;
      }

      .mb-lg-4,
      .my-lg-4 {
        margin-bottom: 1.5rem !important;
      }

      .ml-lg-4,
      .mx-lg-4 {
        margin-left: 1.5rem !important;
      }

      .m-lg-5 {
        margin: 3rem !important;
      }

      .mt-lg-5,
      .my-lg-5 {
        margin-top: 3rem !important;
      }

      .mr-lg-5,
      .mx-lg-5 {
        margin-right: 3rem !important;
      }

      .mb-lg-5,
      .my-lg-5 {
        margin-bottom: 3rem !important;
      }

      .ml-lg-5,
      .mx-lg-5 {
        margin-left: 3rem !important;
      }

      .m-lg--9 {
        margin: -10rem !important;
      }

      .mt-lg--9,
      .my-lg--9 {
        margin-top: -10rem !important;
      }

      .mr-lg--9,
      .mx-lg--9 {
        margin-right: -10rem !important;
      }

      .mb-lg--9,
      .my-lg--9 {
        margin-bottom: -10rem !important;
      }

      .ml-lg--9,
      .mx-lg--9 {
        margin-left: -10rem !important;
      }

      .m-lg--8 {
        margin: -8rem !important;
      }

      .mt-lg--8,
      .my-lg--8 {
        margin-top: -8rem !important;
      }

      .mr-lg--8,
      .mx-lg--8 {
        margin-right: -8rem !important;
      }

      .mb-lg--8,
      .my-lg--8 {
        margin-bottom: -8rem !important;
      }

      .ml-lg--8,
      .mx-lg--8 {
        margin-left: -8rem !important;
      }

      .m-lg--7 {
        margin: -6rem !important;
      }

      .mt-lg--7,
      .my-lg--7 {
        margin-top: -6rem !important;
      }

      .mr-lg--7,
      .mx-lg--7 {
        margin-right: -6rem !important;
      }

      .mb-lg--7,
      .my-lg--7 {
        margin-bottom: -6rem !important;
      }

      .ml-lg--7,
      .mx-lg--7 {
        margin-left: -6rem !important;
      }

      .m-lg--6 {
        margin: -4.5rem !important;
      }

      .mt-lg--6,
      .my-lg--6 {
        margin-top: -4.5rem !important;
      }

      .mr-lg--6,
      .mx-lg--6 {
        margin-right: -4.5rem !important;
      }

      .mb-lg--6,
      .my-lg--6 {
        margin-bottom: -4.5rem !important;
      }

      .ml-lg--6,
      .mx-lg--6 {
        margin-left: -4.5rem !important;
      }

      .m-lg--5 {
        margin: -3rem !important;
      }

      .mt-lg--5,
      .my-lg--5 {
        margin-top: -3rem !important;
      }

      .mr-lg--5,
      .mx-lg--5 {
        margin-right: -3rem !important;
      }

      .mb-lg--5,
      .my-lg--5 {
        margin-bottom: -3rem !important;
      }

      .ml-lg--5,
      .mx-lg--5 {
        margin-left: -3rem !important;
      }

      .m-lg--4 {
        margin: -1.5rem !important;
      }

      .mt-lg--4,
      .my-lg--4 {
        margin-top: -1.5rem !important;
      }

      .mr-lg--4,
      .mx-lg--4 {
        margin-right: -1.5rem !important;
      }

      .mb-lg--4,
      .my-lg--4 {
        margin-bottom: -1.5rem !important;
      }

      .ml-lg--4,
      .mx-lg--4 {
        margin-left: -1.5rem !important;
      }

      .m-lg--3 {
        margin: -1rem !important;
      }

      .mt-lg--3,
      .my-lg--3 {
        margin-top: -1rem !important;
      }

      .mr-lg--3,
      .mx-lg--3 {
        margin-right: -1rem !important;
      }

      .mb-lg--3,
      .my-lg--3 {
        margin-bottom: -1rem !important;
      }

      .ml-lg--3,
      .mx-lg--3 {
        margin-left: -1rem !important;
      }

      .m-lg--2 {
        margin: -0.5rem !important;
      }

      .mt-lg--2,
      .my-lg--2 {
        margin-top: -0.5rem !important;
      }

      .mr-lg--2,
      .mx-lg--2 {
        margin-right: -0.5rem !important;
      }

      .mb-lg--2,
      .my-lg--2 {
        margin-bottom: -0.5rem !important;
      }

      .ml-lg--2,
      .mx-lg--2 {
        margin-left: -0.5rem !important;
      }

      .m-lg--1 {
        margin: -0.25rem !important;
      }

      .mt-lg--1,
      .my-lg--1 {
        margin-top: -0.25rem !important;
      }

      .mr-lg--1,
      .mx-lg--1 {
        margin-right: -0.25rem !important;
      }

      .mb-lg--1,
      .my-lg--1 {
        margin-bottom: -0.25rem !important;
      }

      .ml-lg--1,
      .mx-lg--1 {
        margin-left: -0.25rem !important;
      }

      .m-lg-6 {
        margin: 4.5rem !important;
      }

      .mt-lg-6,
      .my-lg-6 {
        margin-top: 4.5rem !important;
      }

      .mr-lg-6,
      .mx-lg-6 {
        margin-right: 4.5rem !important;
      }

      .mb-lg-6,
      .my-lg-6 {
        margin-bottom: 4.5rem !important;
      }

      .ml-lg-6,
      .mx-lg-6 {
        margin-left: 4.5rem !important;
      }

      .m-lg-7 {
        margin: 6rem !important;
      }

      .mt-lg-7,
      .my-lg-7 {
        margin-top: 6rem !important;
      }

      .mr-lg-7,
      .mx-lg-7 {
        margin-right: 6rem !important;
      }

      .mb-lg-7,
      .my-lg-7 {
        margin-bottom: 6rem !important;
      }

      .ml-lg-7,
      .mx-lg-7 {
        margin-left: 6rem !important;
      }

      .m-lg-8 {
        margin: 8rem !important;
      }

      .mt-lg-8,
      .my-lg-8 {
        margin-top: 8rem !important;
      }

      .mr-lg-8,
      .mx-lg-8 {
        margin-right: 8rem !important;
      }

      .mb-lg-8,
      .my-lg-8 {
        margin-bottom: 8rem !important;
      }

      .ml-lg-8,
      .mx-lg-8 {
        margin-left: 8rem !important;
      }

      .m-lg-9 {
        margin: 10rem !important;
      }

      .mt-lg-9,
      .my-lg-9 {
        margin-top: 10rem !important;
      }

      .mr-lg-9,
      .mx-lg-9 {
        margin-right: 10rem !important;
      }

      .mb-lg-9,
      .my-lg-9 {
        margin-bottom: 10rem !important;
      }

      .ml-lg-9,
      .mx-lg-9 {
        margin-left: 10rem !important;
      }

      .p-lg-0 {
        padding: 0 !important;
      }

      .pt-lg-0,
      .py-lg-0 {
        padding-top: 0 !important;
      }

      .pr-lg-0,
      .px-lg-0 {
        padding-right: 0 !important;
      }

      .pb-lg-0,
      .py-lg-0 {
        padding-bottom: 0 !important;
      }

      .pl-lg-0,
      .px-lg-0 {
        padding-left: 0 !important;
      }

      .p-lg-1 {
        padding: 0.25rem !important;
      }

      .pt-lg-1,
      .py-lg-1 {
        padding-top: 0.25rem !important;
      }

      .pr-lg-1,
      .px-lg-1 {
        padding-right: 0.25rem !important;
      }

      .pb-lg-1,
      .py-lg-1 {
        padding-bottom: 0.25rem !important;
      }

      .pl-lg-1,
      .px-lg-1 {
        padding-left: 0.25rem !important;
      }

      .p-lg-2 {
        padding: 0.5rem !important;
      }

      .pt-lg-2,
      .py-lg-2 {
        padding-top: 0.5rem !important;
      }

      .pr-lg-2,
      .px-lg-2 {
        padding-right: 0.5rem !important;
      }

      .pb-lg-2,
      .py-lg-2 {
        padding-bottom: 0.5rem !important;
      }

      .pl-lg-2,
      .px-lg-2 {
        padding-left: 0.5rem !important;
      }

      .p-lg-3 {
        padding: 1rem !important;
      }

      .pt-lg-3,
      .py-lg-3 {
        padding-top: 1rem !important;
      }
      .pr-lg-3,
      .px-lg-3 {
        padding-right: 1rem !important;
      }

      .pb-lg-3,
      .py-lg-3 {
        padding-bottom: 1rem !important;
      }

      .pl-lg-3,
      .px-lg-3 {
        padding-left: 1rem !important;
      }

      .p-lg-4 {
        padding: 1.5rem !important;
      }

      .pt-lg-4,
      .py-lg-4 {
        padding-top: 1.5rem !important;
      }

      .pr-lg-4,
      .px-lg-4 {
        padding-right: 1.5rem !important;
      }

      .pb-lg-4,
      .py-lg-4 {
        padding-bottom: 1.5rem !important;
      }

      .pl-lg-4,
      .px-lg-4 {
        padding-left: 1.5rem !important;
      }

      .p-lg-5 {
        padding: 3rem !important;
      }

      .pt-lg-5,
      .py-lg-5 {
        padding-top: 3rem !important;
      }

      .pr-lg-5,
      .px-lg-5 {
        padding-right: 3rem !important;
      }

      .pb-lg-5,
      .py-lg-5 {
        padding-bottom: 3rem !important;
      }

      .pl-lg-5,
      .px-lg-5 {
        padding-left: 3rem !important;
      }

      .p-lg--9 {
        padding: -10rem !important;
      }

      .pt-lg--9,
      .py-lg--9 {
        padding-top: -10rem !important;
      }

      .pr-lg--9,
      .px-lg--9 {
        padding-right: -10rem !important;
      }

      .pb-lg--9,
      .py-lg--9 {
        padding-bottom: -10rem !important;
      }

      .pl-lg--9,
      .px-lg--9 {
        padding-left: -10rem !important;
      }

      .p-lg--8 {
        padding: -8rem !important;
      }

      .pt-lg--8,
      .py-lg--8 {
        padding-top: -8rem !important;
      }

      .pr-lg--8,
      .px-lg--8 {
        padding-right: -8rem !important;
      }

      .pb-lg--8,
      .py-lg--8 {
        padding-bottom: -8rem !important;
      }

      .pl-lg--8,
      .px-lg--8 {
        padding-left: -8rem !important;
      }

      .p-lg--7 {
        padding: -6rem !important;
      }

      .pt-lg--7,
      .py-lg--7 {
        padding-top: -6rem !important;
      }

      .pr-lg--7,
      .px-lg--7 {
        padding-right: -6rem !important;
      }

      .pb-lg--7,
      .py-lg--7 {
        padding-bottom: -6rem !important;
      }

      .pl-lg--7,
      .px-lg--7 {
        padding-left: -6rem !important;
      }

      .p-lg--6 {
        padding: -4.5rem !important;
      }

      .pt-lg--6,
      .py-lg--6 {
        padding-top: -4.5rem !important;
      }

      .pr-lg--6,
      .px-lg--6 {
        padding-right: -4.5rem !important;
      }

      .pb-lg--6,
      .py-lg--6 {
        padding-bottom: -4.5rem !important;
      }

      .pl-lg--6,
      .px-lg--6 {
        padding-left: -4.5rem !important;
      }

      .p-lg--5 {
        padding: -3rem !important;
      }

      .pt-lg--5,
      .py-lg--5 {
        padding-top: -3rem !important;
      }

      .pr-lg--5,
      .px-lg--5 {
        padding-right: -3rem !important;
      }

      .pb-lg--5,
      .py-lg--5 {
        padding-bottom: -3rem !important;
      }

      .pl-lg--5,
      .px-lg--5 {
        padding-left: -3rem !important;
      }

      .p-lg--4 {
        padding: -1.5rem !important;
      }

      .pt-lg--4,
      .py-lg--4 {
        padding-top: -1.5rem !important;
      }

      .pr-lg--4,
      .px-lg--4 {
        padding-right: -1.5rem !important;
      }

      .pb-lg--4,
      .py-lg--4 {
        padding-bottom: -1.5rem !important;
      }

      .pl-lg--4,
      .px-lg--4 {
        padding-left: -1.5rem !important;
      }

      .p-lg--3 {
        padding: -1rem !important;
      }

      .pt-lg--3,
      .py-lg--3 {
        padding-top: -1rem !important;
      }

      .pr-lg--3,
      .px-lg--3 {
        padding-right: -1rem !important;
      }

      .pb-lg--3,
      .py-lg--3 {
        padding-bottom: -1rem !important;
      }

      .pl-lg--3,
      .px-lg--3 {
        padding-left: -1rem !important;
      }

      .p-lg--2 {
        padding: -0.5rem !important;
      }

      .pt-lg--2,
      .py-lg--2 {
        padding-top: -0.5rem !important;
      }

      .pr-lg--2,
      .px-lg--2 {
        padding-right: -0.5rem !important;
      }

      .pb-lg--2,
      .py-lg--2 {
        padding-bottom: -0.5rem !important;
      }

      .pl-lg--2,
      .px-lg--2 {
        padding-left: -0.5rem !important;
      }

      .p-lg--1 {
        padding: -0.25rem !important;
      }

      .pt-lg--1,
      .py-lg--1 {
        padding-top: -0.25rem !important;
      }

      .pr-lg--1,
      .px-lg--1 {
        padding-right: -0.25rem !important;
      }

      .pb-lg--1,
      .py-lg--1 {
        padding-bottom: -0.25rem !important;
      }

      .pl-lg--1,
      .px-lg--1 {
        padding-left: -0.25rem !important;
      }

      .p-lg-6 {
        padding: 4.5rem !important;
      }

      .pt-lg-6,
      .py-lg-6 {
        padding-top: 4.5rem !important;
      }

      .pr-lg-6,
      .px-lg-6 {
        padding-right: 4.5rem !important;
      }

      .pb-lg-6,
      .py-lg-6 {
        padding-bottom: 4.5rem !important;
      }

      .pl-lg-6,
      .px-lg-6 {
        padding-left: 4.5rem !important;
      }

      .p-lg-7 {
        padding: 6rem !important;
      }

      .pt-lg-7,
      .py-lg-7 {
        padding-top: 6rem !important;
      }

      .pr-lg-7,
      .px-lg-7 {
        padding-right: 6rem !important;
      }

      .pb-lg-7,
      .py-lg-7 {
        padding-bottom: 6rem !important;
      }

      .pl-lg-7,
      .px-lg-7 {
        padding-left: 6rem !important;
      }

      .p-lg-8 {
        padding: 8rem !important;
      }

      .pt-lg-8,
      .py-lg-8 {
        padding-top: 8rem !important;
      }

      .pr-lg-8,
      .px-lg-8 {
        padding-right: 8rem !important;
      }

      .pb-lg-8,
      .py-lg-8 {
        padding-bottom: 8rem !important;
      }

      .pl-lg-8,
      .px-lg-8 {
        padding-left: 8rem !important;
      }

      .p-lg-9 {
        padding: 10rem !important;
      }

      .pt-lg-9,
      .py-lg-9 {
        padding-top: 10rem !important;
      }

      .pr-lg-9,
      .px-lg-9 {
        padding-right: 10rem !important;
      }

      .pb-lg-9,
      .py-lg-9 {
        padding-bottom: 10rem !important;
      }

      .pl-lg-9,
      .px-lg-9 {
        padding-left: 10rem !important;
      }

      .m-lg-auto {
        margin: auto !important;
      }

      .mt-lg-auto,
      .my-lg-auto {
        margin-top: auto !important;
      }

      .mr-lg-auto,
      .mx-lg-auto {
        margin-right: auto !important;
      }

      .mb-lg-auto,
      .my-lg-auto {
        margin-bottom: auto !important;
      }

      .ml-lg-auto,
      .mx-lg-auto {
        margin-left: auto !important;
      }
    }

    @media (min-width: 1200px) {
      .m-xl-0 {
        margin: 0 !important;
      }

      .mt-xl-0,
      .my-xl-0 {
        margin-top: 0 !important;
      }

      .mr-xl-0,
      .mx-xl-0 {
        margin-right: 0 !important;
      }

      .mb-xl-0,
      .my-xl-0 {
        margin-bottom: 0 !important;
      }

      .ml-xl-0,
      .mx-xl-0 {
        margin-left: 0 !important;
      }

      .m-xl-1 {
        margin: 0.25rem !important;
      }

      .mt-xl-1,
      .my-xl-1 {
        margin-top: 0.25rem !important;
      }

      .mr-xl-1,
      .mx-xl-1 {
        margin-right: 0.25rem !important;
      }

      .mb-xl-1,
      .my-xl-1 {
        margin-bottom: 0.25rem !important;
      }

      .ml-xl-1,
      .mx-xl-1 {
        margin-left: 0.25rem !important;
      }

      .m-xl-2 {
        margin: 0.5rem !important;
      }

      .mt-xl-2,
      .my-xl-2 {
        margin-top: 0.5rem !important;
      }

      .mr-xl-2,
      .mx-xl-2 {
        margin-right: 0.5rem !important;
      }

      .mb-xl-2,
      .my-xl-2 {
        margin-bottom: 0.5rem !important;
      }

      .ml-xl-2,
      .mx-xl-2 {
        margin-left: 0.5rem !important;
      }

      .m-xl-3 {
        margin: 1rem !important;
      }

      .mt-xl-3,
      .my-xl-3 {
        margin-top: 1rem !important;
      }

      .mr-xl-3,
      .mx-xl-3 {
        margin-right: 1rem !important;
      }

      .mb-xl-3,
      .my-xl-3 {
        margin-bottom: 1rem !important;
      }

      .ml-xl-3,
      .mx-xl-3 {
        margin-left: 1rem !important;
      }

      .m-xl-4 {
        margin: 1.5rem !important;
      }

      .mt-xl-4,
      .my-xl-4 {
        margin-top: 1.5rem !important;
      }

      .mr-xl-4,
      .mx-xl-4 {
        margin-right: 1.5rem !important;
      }

      .mb-xl-4,
      .my-xl-4 {
        margin-bottom: 1.5rem !important;
      }

      .ml-xl-4,
      .mx-xl-4 {
        margin-left: 1.5rem !important;
      }

      .m-xl-5 {
        margin: 3rem !important;
      }

      .mt-xl-5,
      .my-xl-5 {
        margin-top: 3rem !important;
      }

      .mr-xl-5,
      .mx-xl-5 {
        margin-right: 3rem !important;
      }

      .mb-xl-5,
      .my-xl-5 {
        margin-bottom: 3rem !important;
      }

      .ml-xl-5,
      .mx-xl-5 {
        margin-left: 3rem !important;
      }
      .m-xl--9 {
        margin: -10rem !important;
      }

      .mt-xl--9,
      .my-xl--9 {
        margin-top: -10rem !important;
      }

      .mr-xl--9,
      .mx-xl--9 {
        margin-right: -10rem !important;
      }

      .mb-xl--9,
      .my-xl--9 {
        margin-bottom: -10rem !important;
      }

      .ml-xl--9,
      .mx-xl--9 {
        margin-left: -10rem !important;
      }

      .m-xl--8 {
        margin: -8rem !important;
      }

      .mt-xl--8,
      .my-xl--8 {
        margin-top: -8rem !important;
      }

      .mr-xl--8,
      .mx-xl--8 {
        margin-right: -8rem !important;
      }

      .mb-xl--8,
      .my-xl--8 {
        margin-bottom: -8rem !important;
      }

      .ml-xl--8,
      .mx-xl--8 {
        margin-left: -8rem !important;
      }

      .m-xl--7 {
        margin: -6rem !important;
      }

      .mt-xl--7,
      .my-xl--7 {
        margin-top: -6rem !important;
      }

      .mr-xl--7,
      .mx-xl--7 {
        margin-right: -6rem !important;
      }

      .mb-xl--7,
      .my-xl--7 {
        margin-bottom: -6rem !important;
      }

      .ml-xl--7,
      .mx-xl--7 {
        margin-left: -6rem !important;
      }

      .m-xl--6 {
        margin: -4.5rem !important;
      }

      .mt-xl--6,
      .my-xl--6 {
        margin-top: -4.5rem !important;
      }

      .mr-xl--6,
      .mx-xl--6 {
        margin-right: -4.5rem !important;
      }

      .mb-xl--6,
      .my-xl--6 {
        margin-bottom: -4.5rem !important;
      }

      .ml-xl--6,
      .mx-xl--6 {
        margin-left: -4.5rem !important;
      }

      .m-xl--5 {
        margin: -3rem !important;
      }

      .mt-xl--5,
      .my-xl--5 {
        margin-top: -3rem !important;
      }

      .mr-xl--5,
      .mx-xl--5 {
        margin-right: -3rem !important;
      }

      .mb-xl--5,
      .my-xl--5 {
        margin-bottom: -3rem !important;
      }

      .ml-xl--5,
      .mx-xl--5 {
        margin-left: -3rem !important;
      }

      .m-xl--4 {
        margin: -1.5rem !important;
      }

      .mt-xl--4,
      .my-xl--4 {
        margin-top: -1.5rem !important;
      }

      .mr-xl--4,
      .mx-xl--4 {
        margin-right: -1.5rem !important;
      }

      .mb-xl--4,
      .my-xl--4 {
        margin-bottom: -1.5rem !important;
      }

      .ml-xl--4,
      .mx-xl--4 {
        margin-left: -1.5rem !important;
      }

      .m-xl--3 {
        margin: -1rem !important;
      }

      .mt-xl--3,
      .my-xl--3 {
        margin-top: -1rem !important;
      }

      .mr-xl--3,
      .mx-xl--3 {
        margin-right: -1rem !important;
      }

      .mb-xl--3,
      .my-xl--3 {
        margin-bottom: -1rem !important;
      }

      .ml-xl--3,
      .mx-xl--3 {
        margin-left: -1rem !important;
      }

      .m-xl--2 {
        margin: -0.5rem !important;
      }

      .mt-xl--2,
      .my-xl--2 {
        margin-top: -0.5rem !important;
      }

      .mr-xl--2,
      .mx-xl--2 {
        margin-right: -0.5rem !important;
      }

      .mb-xl--2,
      .my-xl--2 {
        margin-bottom: -0.5rem !important;
      }

      .ml-xl--2,
      .mx-xl--2 {
        margin-left: -0.5rem !important;
      }

      .m-xl--1 {
        margin: -0.25rem !important;
      }

      .mt-xl--1,
      .my-xl--1 {
        margin-top: -0.25rem !important;
      }

      .mr-xl--1,
      .mx-xl--1 {
        margin-right: -0.25rem !important;
      }

      .mb-xl--1,
      .my-xl--1 {
        margin-bottom: -0.25rem !important;
      }

      .ml-xl--1,
      .mx-xl--1 {
        margin-left: -0.25rem !important;
      }

      .m-xl-6 {
        margin: 4.5rem !important;
      }

      .mt-xl-6,
      .my-xl-6 {
        margin-top: 4.5rem !important;
      }

      .mr-xl-6,
      .mx-xl-6 {
        margin-right: 4.5rem !important;
      }

      .mb-xl-6,
      .my-xl-6 {
        margin-bottom: 4.5rem !important;
      }

      .ml-xl-6,
      .mx-xl-6 {
        margin-left: 4.5rem !important;
      }

      .m-xl-7 {
        margin: 6rem !important;
      }

      .mt-xl-7,
      .my-xl-7 {
        margin-top: 6rem !important;
      }

      .mr-xl-7,
      .mx-xl-7 {
        margin-right: 6rem !important;
      }

      .mb-xl-7,
      .my-xl-7 {
        margin-bottom: 6rem !important;
      }

      .ml-xl-7,
      .mx-xl-7 {
        margin-left: 6rem !important;
      }
      .m-xl-8 {
        margin: 8rem !important;
      }

      .mt-xl-8,
      .my-xl-8 {
        margin-top: 8rem !important;
      }

      .mr-xl-8,
      .mx-xl-8 {
        margin-right: 8rem !important;
      }

      .mb-xl-8,
      .my-xl-8 {
        margin-bottom: 8rem !important;
      }

      .ml-xl-8,
      .mx-xl-8 {
        margin-left: 8rem !important;
      }

      .m-xl-9 {
        margin: 10rem !important;
      }

      .mt-xl-9,
      .my-xl-9 {
        margin-top: 10rem !important;
      }

      .mr-xl-9,
      .mx-xl-9 {
        margin-right: 10rem !important;
      }

      .mb-xl-9,
      .my-xl-9 {
        margin-bottom: 10rem !important;
      }

      .ml-xl-9,
      .mx-xl-9 {
        margin-left: 10rem !important;
      }

      .p-xl-0 {
        padding: 0 !important;
      }

      .pt-xl-0,
      .py-xl-0 {
        padding-top: 0 !important;
      }

      .pr-xl-0,
      .px-xl-0 {
        padding-right: 0 !important;
      }

      .pb-xl-0,
      .py-xl-0 {
        padding-bottom: 0 !important;
      }

      .pl-xl-0,
      .px-xl-0 {
        padding-left: 0 !important;
      }

      .p-xl-1 {
        padding: 0.25rem !important;
      }

      .pt-xl-1,
      .py-xl-1 {
        padding-top: 0.25rem !important;
      }

      .pr-xl-1,
      .px-xl-1 {
        padding-right: 0.25rem !important;
      }

      .pb-xl-1,
      .py-xl-1 {
        padding-bottom: 0.25rem !important;
      }

      .pl-xl-1,
      .px-xl-1 {
        padding-left: 0.25rem !important;
      }

      .p-xl-2 {
        padding: 0.5rem !important;
      }

      .pt-xl-2,
      .py-xl-2 {
        padding-top: 0.5rem !important;
      }

      .pr-xl-2,
      .px-xl-2 {
        padding-right: 0.5rem !important;
      }

      .pb-xl-2,
      .py-xl-2 {
        padding-bottom: 0.5rem !important;
      }

      .pl-xl-2,
      .px-xl-2 {
        padding-left: 0.5rem !important;
      }

      .p-xl-3 {
        padding: 1rem !important;
      }

      .pt-xl-3,
      .py-xl-3 {
        padding-top: 1rem !important;
      }

      .pr-xl-3,
      .px-xl-3 {
        padding-right: 1rem !important;
      }

      .pb-xl-3,
      .py-xl-3 {
        padding-bottom: 1rem !important;
      }

      .pl-xl-3,
      .px-xl-3 {
        padding-left: 1rem !important;
      }

      .p-xl-4 {
        padding: 1.5rem !important;
      }

      .pt-xl-4,
      .py-xl-4 {
        padding-top: 1.5rem !important;
      }

      .pr-xl-4,
      .px-xl-4 {
        padding-right: 1.5rem !important;
      }

      .pb-xl-4,
      .py-xl-4 {
        padding-bottom: 1.5rem !important;
      }

      .pl-xl-4,
      .px-xl-4 {
        padding-left: 1.5rem !important;
      }

      .p-xl-5 {
        padding: 3rem !important;
      }

      .pt-xl-5,
      .py-xl-5 {
        padding-top: 3rem !important;
      }

      .pr-xl-5,
      .px-xl-5 {
        padding-right: 3rem !important;
      }

      .pb-xl-5,
      .py-xl-5 {
        padding-bottom: 3rem !important;
      }

      .pl-xl-5,
      .px-xl-5 {
        padding-left: 3rem !important;
      }

      .p-xl--9 {
        padding: -10rem !important;
      }

      .pt-xl--9,
      .py-xl--9 {
        padding-top: -10rem !important;
      }

      .pr-xl--9,
      .px-xl--9 {
        padding-right: -10rem !important;
      }

      .pb-xl--9,
      .py-xl--9 {
        padding-bottom: -10rem !important;
      }

      .pl-xl--9,
      .px-xl--9 {
        padding-left: -10rem !important;
      }

      .p-xl--8 {
        padding: -8rem !important;
      }

      .pt-xl--8,
      .py-xl--8 {
        padding-top: -8rem !important;
      }

      .pr-xl--8,
      .px-xl--8 {
        padding-right: -8rem !important;
      }

      .pb-xl--8,
      .py-xl--8 {
        padding-bottom: -8rem !important;
      }

      .pl-xl--8,
      .px-xl--8 {
        padding-left: -8rem !important;
      }

      .p-xl--7 {
        padding: -6rem !important;
      }

      .pt-xl--7,
      .py-xl--7 {
        padding-top: -6rem !important;
      }


      .pr-xl--7,
      .px-xl--7 {
        padding-right: -6rem !important;
      }

      .pb-xl--7,
      .py-xl--7 {
        padding-bottom: -6rem !important;
      }

      .pl-xl--7,
      .px-xl--7 {
        padding-left: -6rem !important;
      }

      .p-xl--6 {
        padding: -4.5rem !important;
      }

      .pt-xl--6,
      .py-xl--6 {
        padding-top: -4.5rem !important;
      }

      .pr-xl--6,
      .px-xl--6 {
        padding-right: -4.5rem !important;
      }

      .pb-xl--6,
      .py-xl--6 {
        padding-bottom: -4.5rem !important;
      }

      .pl-xl--6,
      .px-xl--6 {
        padding-left: -4.5rem !important;
      }

      .p-xl--5 {
        padding: -3rem !important;
      }

      .pt-xl--5,
      .py-xl--5 {
        padding-top: -3rem !important;
      }

      .pr-xl--5,
      .px-xl--5 {
        padding-right: -3rem !important;
      }

      .pb-xl--5,
      .py-xl--5 {
        padding-bottom: -3rem !important;
      }

      .pl-xl--5,
      .px-xl--5 {
        padding-left: -3rem !important;
      }

      .p-xl--4 {
        padding: -1.5rem !important;
      }

      .pt-xl--4,
      .py-xl--4 {
        padding-top: -1.5rem !important;
      }

      .pr-xl--4,
      .px-xl--4 {
        padding-right: -1.5rem !important;
      }

      .pb-xl--4,
      .py-xl--4 {
        padding-bottom: -1.5rem !important;
      }

      .pl-xl--4,
      .px-xl--4 {
        padding-left: -1.5rem !important;
      }

      .p-xl--3 {
        padding: -1rem !important;
      }

      .pt-xl--3,
      .py-xl--3 {
        padding-top: -1rem !important;
      }

      .pr-xl--3,
      .px-xl--3 {
        padding-right: -1rem !important;
      }

      .pb-xl--3,
      .py-xl--3 {
        padding-bottom: -1rem !important;
      }

      .pl-xl--3,
      .px-xl--3 {
        padding-left: -1rem !important;
      }

      .p-xl--2 {
        padding: -0.5rem !important;
      }

      .pt-xl--2,
      .py-xl--2 {
        padding-top: -0.5rem !important;
      }

      .pr-xl--2,
      .px-xl--2 {
        padding-right: -0.5rem !important;
      }

      .pb-xl--2,
      .py-xl--2 {
        padding-bottom: -0.5rem !important;
      }

      .pl-xl--2,
      .px-xl--2 {
        padding-left: -0.5rem !important;
      }

      .p-xl--1 {
        padding: -0.25rem !important;
      }

      .pt-xl--1,
      .py-xl--1 {
        padding-top: -0.25rem !important;
      }

      .pr-xl--1,
      .px-xl--1 {
        padding-right: -0.25rem !important;
      }

      .pb-xl--1,
      .py-xl--1 {
        padding-bottom: -0.25rem !important;
      }

      .pl-xl--1,
      .px-xl--1 {
        padding-left: -0.25rem !important;
      }

      .p-xl-6 {
        padding: 4.5rem !important;
      }

      .pt-xl-6,
      .py-xl-6 {
        padding-top: 4.5rem !important;
      }

      .pr-xl-6,
      .px-xl-6 {
        padding-right: 4.5rem !important;
      }

      .pb-xl-6,
      .py-xl-6 {
        padding-bottom: 4.5rem !important;
      }

      .pl-xl-6,
      .px-xl-6 {
        padding-left: 4.5rem !important;
      }

      .p-xl-7 {
        padding: 6rem !important;
      }

      .pt-xl-7,
      .py-xl-7 {
        padding-top: 6rem !important;
      }

      .pr-xl-7,
      .px-xl-7 {
        padding-right: 6rem !important;
      }

      .pb-xl-7,
      .py-xl-7 {
        padding-bottom: 6rem !important;
      }

      .pl-xl-7,
      .px-xl-7 {
        padding-left: 6rem !important;
      }

      .p-xl-8 {
        padding: 8rem !important;
      }

      .pt-xl-8,
      .py-xl-8 {
        padding-top: 8rem !important;
      }

      .pr-xl-8,
      .px-xl-8 {
        padding-right: 8rem !important;
      }

      .pb-xl-8,
      .py-xl-8 {
        padding-bottom: 8rem !important;
      }

      .pl-xl-8,
      .px-xl-8 {
        padding-left: 8rem !important;
      }

      .p-xl-9 {
        padding: 10rem !important;
      }

      .pt-xl-9,
      .py-xl-9 {
        padding-top: 10rem !important;
      }

      .pr-xl-9,
      .px-xl-9 {
        padding-right: 10rem !important;
      }

      .pb-xl-9,
      .py-xl-9 {
        padding-bottom: 10rem !important;
      }

      .pl-xl-9,
      .px-xl-9 {
        padding-left: 10rem !important;
      }

      .m-xl-auto {
        margin: auto !important;
      }

      .mt-xl-auto,
      .my-xl-auto {
        margin-top: auto !important;
      }

      .mr-xl-auto,
      .mx-xl-auto {
        margin-right: auto !important;
      }

      .mb-xl-auto,
      .my-xl-auto {
        margin-bottom: auto !important;
      }

      .ml-xl-auto,
      .mx-xl-auto {
        margin-left: auto !important;
      }
    }

    .text-monospace {
      font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }

    .text-justify {
      text-align: justify !important;
    }

    .text-nowrap {
      white-space: nowrap !important;
    }

    .text-truncate {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .text-left {
      text-align: left !important;
    }

    .text-right {
      text-align: right !important;
    }

    .text-center {
      text-align: center !important;
    }

    @media (min-width: 576px) {
      .text-sm-left {
        text-align: left !important;
      }

      .text-sm-right {
        text-align: right !important;
      }

      .text-sm-center {
        text-align: center !important;
      }
    }

    @media (min-width: 768px) {
      .text-md-left {
        text-align: left !important;
      }

      .text-md-right {
        text-align: right !important;
      }

      .text-md-center {
        text-align: center !important;
      }
    }

    @media (min-width: 992px) {
      .text-lg-left {
        text-align: left !important;
      }

      .text-lg-right {
        text-align: right !important;
      }

      .text-lg-center {
        text-align: center !important;
      }
    }

    @media (min-width: 1200px) {
      .text-xl-left {
        text-align: left !important;
      }

      .text-xl-right {
        text-align: right !important;
      }

      .text-xl-center {
        text-align: center !important;
      }
    }

    .text-lowercase {
      text-transform: lowercase !important;
    }

    .text-uppercase {
      text-transform: uppercase !important;
    }

    .text-capitalize {
      text-transform: capitalize !important;
    }

    .font-weight-light {
      font-weight: 300 !important;
    }

    .font-weight-normal {
      font-weight: 400 !important;
    }

    .font-weight-bold {
      font-weight: 600 !important;
    }

    .font-italic {
      font-style: italic !important;
    }

    .text-white {
      color: #fff !important;
    }

    .text-primary {
      color: #5e72e4 !important;
    }

    a.text-primary:hover,
    a.text-primary:focus {
      color: #324cdd !important;
    }

    .text-secondary {
      color: #f7fafc !important;
    }

    a.text-secondary:hover,
    a.text-secondary:focus {
      color: #d2e3ee !important;
    }

    .text-success {
      color: #2dce89 !important;
    }

    a.text-success:hover,
    a.text-success:focus {
      color: #24a46d !important;
    }

    .text-info {
      color: #11cdef !important;
    }

    a.text-info:hover,
    a.text-info:focus {
      color: #0da5c0 !important;
    }

    .text-warning {
      color: #fb6340 !important;
    }

    a.text-warning:hover,
    a.text-warning:focus {
      color: #fa3a0e !important;
    }

    .text-danger {
      color: #f5365c !important;
    }

    a.text-danger:hover,
    a.text-danger:focus {
      color: #ec0c38 !important;
    }

    .text-light {
      color: #adb5bd !important;
    }

    a.text-light:hover,
    a.text-light:focus {
      color: #919ca6 !important;
    }

    .text-dark {
      color: #212529 !important;
    }

    a.text-dark:hover,
    a.text-dark:focus {
      color: #0a0c0d !important;
    }

    .text-default {
      color: #172b4d !important;
    }

    a.text-default:hover,
    a.text-default:focus {
      color: #0b1526 !important;
    }

    .text-white {
      color: #fff !important;
    }

    a.text-white:hover,
    a.text-white:focus {
      color: #e6e6e6 !important;
    }

    .text-neutral {
      color: #fff !important;
    }

    a.text-neutral:hover,
    a.text-neutral:focus {
      color: #e6e6e6 !important;
    }

    .text-darker {
        color: black !important;
      }

      a.text-darker:hover,
      a.text-darker:focus {
        color: black !important;
      }

      .text-body {
        color: #525f7f !important;
      }

      .text-muted {
        color: #8898aa !important;
      }

      .text-black-50 {
        color: rgba(0, 0, 0, 0.5) !important;
      }

      .text-white-50 {
        color: rgba(255, 255, 255, 0.5) !important;
      }

      .text-hide {
        font: 0/0 a;
        color: transparent;
        text-shadow: none;
        background-color: transparent;
        border: 0;
      }

      .visible {
        visibility: visible !important;
      }

      .invisible {
        visibility: hidden !important;
      }

      @media print {

        *,
        *::before,
        *::after {
          text-shadow: none !important;
          box-shadow: none !important;
        }

        a:not(.btn) {
          text-decoration: underline;
        }

        abbr[title]::after {
          content: " ("attr(title) ")";
        }

        pre {
          white-space: pre-wrap !important;
        }

        pre,
        blockquote {
          border: 1px solid #adb5bd;
          page-break-inside: avoid;
        }

        thead {
          display: table-header-group;
        }

        tr,
        img {
          page-break-inside: avoid;
        }

        p,
        h2,
        h3 {
          orphans: 3;
          widows: 3;
        }

        h2,
        h3 {
          page-break-after: avoid;
        }

        @page {
          size: a3;
        }

        body {
          min-width: 992px !important;
        }

        .container {
          min-width: 992px !important;
        }

        .navbar {
          display: none;
        }

        .badge {
          border: 1px solid #000;
        }

        .table {
          border-collapse: collapse !important;
        }

        .table td,
        .table th {
          background-color: #fff !important;
        }

        .table-bordered th,
        .table-bordered td {
          border: 1px solid #dee2e6 !important;
        }

        .table-dark {
          color: inherit;
        }

        .table-dark th,
        .table-dark td,
        .table-dark thead th,
        .table-dark tbody+tbody {
          border-color: #e9ecef;
        }

        .table .thead-dark th {
          color: inherit;
          border-color: #e9ecef;
        }
      }

      iframe {
        border: 0;
      }

      figcaption,
      figure,
      main {
        display: block;
      }

      main {
        overflow: hidden;
      }

      .bg-blue {
        background-color: #5e72e4 !important;
      }

      a.bg-blue:hover,
      a.bg-blue:focus,
      button.bg-blue:hover,
      button.bg-blue:focus {
        background-color: #324cdd !important;
      }

      .bg-indigo {
        background-color: #5603ad !important;
      }

      a.bg-indigo:hover,
      a.bg-indigo:focus,
      button.bg-indigo:hover,
      button.bg-indigo:focus {
        background-color: #3d027b !important;
      }

      .bg-purple {
        background-color: #8965e0 !important;
      }

      a.bg-purple:hover,
      a.bg-purple:focus,
      button.bg-purple:hover,
      button.bg-purple:focus {
        background-color: #683bd7 !important;
      }

      .bg-pink {
        background-color: #f3a4b5 !important;
      }

      a.bg-pink:hover,
      a.bg-pink:focus,
      button.bg-pink:hover,
      button.bg-pink:focus {
        background-color: #ed7790 !important;
      }

      .bg-red {
        background-color: #f5365c !important;
      }

      a.bg-red:hover,
      a.bg-red:focus,
      button.bg-red:hover,
      button.bg-red:focus {
        background-color: #ec0c38 !important;
      }

      .bg-orange {
        background-color: #fb6340 !important;
      }

      a.bg-orange:hover,
      a.bg-orange:focus,
      button.bg-orange:hover,
      button.bg-orange:focus {
        background-color: #fa3a0e !important;
      }

      .bg-yellow {
        background-color: #ffd600 !important;
      }

      a.bg-yellow:hover,
      a.bg-yellow:focus,
      button.bg-yellow:hover,
      button.bg-yellow:focus {
        background-color: #ccab00 !important;
      }

      .bg-green {
        background-color: #2dce89 !important;
      }

      a.bg-green:hover,
      a.bg-green:focus,
      button.bg-green:hover,
      button.bg-green:focus {
        background-color: #24a46d !important;
      }

      .bg-teal {
        background-color: #11cdef !important;
      }

      a.bg-teal:hover,
      a.bg-teal:focus,
      button.bg-teal:hover,
      button.bg-teal:focus {
        background-color: #0da5c0 !important;
      }

      .bg-cyan {
        background-color: #2bffc6 !important;
      }

      a.bg-cyan:hover,
      a.bg-cyan:focus,
      button.bg-cyan:hover,
      button.bg-cyan:focus {
        background-color: #00f7b5 !important;
      }

      .bg-white {
        background-color: #fff !important;
      }

      a.bg-white:hover,
      a.bg-white:focus,
      button.bg-white:hover,
      button.bg-white:focus {
        background-color: #e6e6e6 !important;
      }

      .bg-gray {
        background-color: #8898aa !important;
      }

      a.bg-gray:hover,
      a.bg-gray:focus,
      button.bg-gray:hover,
      button.bg-gray:focus {
        background-color: #6a7e95 !important;
      }

      .bg-gray-dark {
        background-color: #32325d !important;
      }

      a.bg-gray-dark:hover,
      a.bg-gray-dark:focus,
      button.bg-gray-dark:hover,
      button.bg-gray-dark:focus {
        background-color: #20203c !important;
      }

      .bg-light {
        background-color: #ced4da !important;
      }

      a.bg-light:hover,
      a.bg-light:focus,
      button.bg-light:hover,
      button.bg-light:focus {
        background-color: #b1bbc4 !important;
      }

      .bg-lighter {
        background-color: #e9ecef !important;
      }

      a.bg-lighter:hover,
      a.bg-lighter:focus,
      button.bg-lighter:hover,
      button.bg-lighter:focus {
        background-color: #cbd3da !important;
      }

      .bg-gradient-primary {
        background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%) !important;
      }

      .bg-gradient-secondary {
        background: linear-gradient(87deg, #f7fafc 0, #f7f8fc 100%) !important;
      }

      .bg-gradient-success {
        background: linear-gradient(87deg, #2dce89 0, #2dcecc 100%) !important;
      }

      .bg-gradient-info {
        background: linear-gradient(87deg, #11cdef 0, #1171ef 100%) !important;
      }

      .bg-gradient-warning {
        background: linear-gradient(87deg, #fb6340 0, #fbb140 100%) !important;
      }

      .bg-gradient-danger {
        background: linear-gradient(87deg, #f5365c 0, #f56036 100%) !important;
      }

      .bg-gradient-light {
        background: linear-gradient(87deg, #adb5bd 0, #adaebd 100%) !important;
      }

      .bg-gradient-dark {
        background: linear-gradient(87deg, #212529 0, #212229 100%) !important;
      }

      .bg-gradient-default {
        background: linear-gradient(87deg, #172b4d 0, #1a174d 100%) !important;
      }

      .bg-gradient-white {
        background: linear-gradient(87deg, #fff 0, white 100%) !important;
      }

      .bg-gradient-neutral {
        background: linear-gradient(87deg, #fff 0, white 100%) !important;
      }

      .bg-gradient-darker {
        background: linear-gradient(87deg, black 0, black 100%) !important;
      }

      .bg-gradient-blue {
        background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%) !important;
      }

      .bg-gradient-indigo {
        background: linear-gradient(87deg, #5603ad 0, #9d03ad 100%) !important;
      }

      .bg-gradient-purple {
        background: linear-gradient(87deg, #8965e0 0, #bc65e0 100%) !important;
      }

      .bg-gradient-pink {
        background: linear-gradient(87deg, #f3a4b5 0, #f3b4a4 100%) !important;
      }

      .bg-gradient-red {
        background: linear-gradient(87deg, #f5365c 0, #f56036 100%) !important;
      }

      .bg-gradient-orange {
        background: linear-gradient(87deg, #fb6340 0, #fbb140 100%) !important;
      }

      .bg-gradient-yellow {
        background: linear-gradient(87deg, #ffd600 0, #beff00 100%) !important;
      }

      .bg-gradient-green {
        background: linear-gradient(87deg, #2dce89 0, #2dcecc 100%) !important;
      }

      .bg-gradient-teal {
        background: linear-gradient(87deg, #11cdef 0, #1171ef 100%) !important;
      }

      .bg-gradient-cyan {
        background: linear-gradient(87deg, #2bffc6 0, #2be0ff 100%) !important;
      }

      .bg-gradient-white {
        background: linear-gradient(87deg, #fff 0, white 100%) !important;
      }

      .bg-gradient-gray {
        background: linear-gradient(87deg, #8898aa 0, #888aaa 100%) !important;
      }

      .bg-gradient-gray-dark {
        background: linear-gradient(87deg, #32325d 0, #44325d 100%) !important;
      }

      .bg-gradient-light {
        background: linear-gradient(87deg, #ced4da 0, #cecfda 100%) !important;
      }

      .bg-gradient-lighter {
        background: linear-gradient(87deg, #e9ecef 0, #e9eaef 100%) !important;
      }

      .bg-translucent-primary {
        background-color: rgba(63, 87, 223, 0.6) !important;
      }

      a.bg-translucent-primary:hover,
      a.bg-translucent-primary:focus,
      button.bg-translucent-primary:hover,
      button.bg-translucent-primary:focus {
        background-color: rgba(42, 68, 219, 0.6) !important;
      }

      .bg-translucent-secondary {
        background-color: rgba(221, 234, 242, 0.6) !important;
      }

      a.bg-translucent-secondary:hover,
      a.bg-translucent-secondary:focus,
      button.bg-translucent-secondary:hover,
      button.bg-translucent-secondary:focus {
        background-color: rgba(202, 222, 235, 0.6) !important;
      }

      .bg-translucent-success {
        background-color: rgba(39, 177, 118, 0.6) !important;
      }

      a.bg-translucent-success:hover,
      a.bg-translucent-success:focus,
      button.bg-translucent-success:hover,
      button.bg-translucent-success:focus {
        background-color: rgba(34, 156, 104, 0.6) !important;
      }

      .bg-translucent-info {
        background-color: rgba(14, 177, 206, 0.6) !important;
      }

      a.bg-translucent-info:hover,
      a.bg-translucent-info:focus,
      button.bg-translucent-info:hover,
      button.bg-translucent-info:focus {
        background-color: rgba(12, 156, 183, 0.6) !important;
      }

      .bg-translucent-warning {
        background-color: rgba(250, 70, 29, 0.6) !important;
      }

      a.bg-translucent-warning:hover,
      a.bg-translucent-warning:focus,
      button.bg-translucent-warning:hover,
      button.bg-translucent-warning:focus {
        background-color: rgba(249, 51, 5, 0.6) !important;
      }

      .bg-translucent-danger {
        background-color: rgba(243, 20, 64, 0.6) !important;
      }

      a.bg-translucent-danger:hover,
      a.bg-translucent-danger:focus,
      button.bg-translucent-danger:hover,
      button.bg-translucent-danger:focus {
        background-color: rgba(227, 11, 54, 0.6) !important;
      }

      .bg-translucent-light {
        background-color: rgba(153, 163, 173, 0.6) !important;
      }

      a.bg-translucent-light:hover,
      a.bg-translucent-light:focus,
      button.bg-translucent-light:hover,
      button.bg-translucent-light:focus {
        background-color: rgba(139, 150, 162, 0.6) !important;
      }

      .bg-translucent-dark {
        background-color: rgba(17, 19, 21, 0.6) !important;
      }

      a.bg-translucent-dark:hover,
      a.bg-translucent-dark:focus,
      button.bg-translucent-dark:hover,
      button.bg-translucent-dark:focus {
        background-color: rgba(6, 6, 7, 0.6) !important;
      }

      .bg-translucent-default {
        background-color: rgba(15, 28, 50, 0.6) !important;
      }

      a.bg-translucent-default:hover,
      a.bg-translucent-default:focus,
      button.bg-translucent-default:hover,
      button.bg-translucent-default:focus {
        background-color: rgba(9, 17, 30, 0.6) !important;
      }

      .bg-translucent-white {
        background-color: rgba(237, 237, 237, 0.6) !important;
      }

      a.bg-translucent-white:hover,
      a.bg-translucent-white:focus,
      button.bg-translucent-white:hover,
      button.bg-translucent-white:focus {
        background-color: rgba(224, 224, 224, 0.6) !important;
      }

      .bg-translucent-neutral {
        background-color: rgba(237, 237, 237, 0.6) !important;
      }

      a.bg-translucent-neutral:hover,
      a.bg-translucent-neutral:focus,
      button.bg-translucent-neutral:hover,
      button.bg-translucent-neutral:focus {
        background-color: rgba(224, 224, 224, 0.6) !important;
      }
      .bg-translucent-darker {
        background-color: rgba(0, 0, 0, 0.6) !important;
      }

      a.bg-translucent-darker:hover,
      a.bg-translucent-darker:focus,
      button.bg-translucent-darker:hover,
      button.bg-translucent-darker:focus {
        background-color: rgba(0, 0, 0, 0.6) !important;
      }

      .section-primary {
        background-color: #f8f9fe !important;
      }

      a.section-primary:hover,
      a.section-primary:focus,
      button.section-primary:hover,
      button.section-primary:focus {
        background-color: #cbd3f8 !important;
      }

      .section-secondary {
        background-color: #f7fafc !important;
      }

      a.section-secondary:hover,
      a.section-secondary:focus,
      button.section-secondary:hover,
      button.section-secondary:focus {
        background-color: #d2e3ee !important;
      }

      .section-light {
        background-color: #ced4da !important;
      }

      a.section-light:hover,
      a.section-light:focus,
      button.section-light:hover,
      button.section-light:focus {
        background-color: #b1bbc4 !important;
      }

      .section-dark {
        background-color: #212529 !important;
      }

      a.section-dark:hover,
      a.section-dark:focus,
      button.section-dark:hover,
      button.section-dark:focus {
        background-color: #0a0c0d !important;
      }

      .section-darker {
        background-color: black !important;
      }

      a.section-darker:hover,
      a.section-darker:focus,
      button.section-darker:hover,
      button.section-darker:focus {
        background-color: black !important;
      }

      .bg-gradient-primary {
        background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%) !important;
      }

      .bg-gradient-secondary {
        background: linear-gradient(87deg, #f7fafc 0, #f7f8fc 100%) !important;
      }

      .bg-gradient-success {
        background: linear-gradient(87deg, #2dce89 0, #2dcecc 100%) !important;
      }

      .bg-gradient-info {
        background: linear-gradient(87deg, #11cdef 0, #1171ef 100%) !important;
      }

      .bg-gradient-warning {
        background: linear-gradient(87deg, #fb6340 0, #fbb140 100%) !important;
      }

      .bg-gradient-danger {
        background: linear-gradient(87deg, #f5365c 0, #f56036 100%) !important;
      }

      .bg-gradient-light {
        background: linear-gradient(87deg, #adb5bd 0, #adaebd 100%) !important;
      }

      .bg-gradient-dark {
        background: linear-gradient(87deg, #212529 0, #212229 100%) !important;
      }

      .bg-gradient-default {
        background: linear-gradient(87deg, #172b4d 0, #1a174d 100%) !important;
      }

      .bg-gradient-white {
        background: linear-gradient(87deg, #fff 0, white 100%) !important;
      }

      .bg-gradient-neutral {
        background: linear-gradient(87deg, #fff 0, white 100%) !important;
      }

      .bg-gradient-darker {
        background: linear-gradient(87deg, black 0, black 100%) !important;
      }

      .fill-primary {
        fill: #5e72e4;
      }

      .stroke-primary {
        stroke: #5e72e4;
      }

      .fill-secondary {
        fill: #f7fafc;
      }

      .stroke-secondary {
        stroke: #f7fafc;
      }

      .fill-success {
        fill: #2dce89;
      }

      .stroke-success {
        stroke: #2dce89;
      }

      .fill-info {
        fill: #11cdef;
      }

      .stroke-info {
        stroke: #11cdef;
      }

      .fill-warning {
        fill: #fb6340;
      }

      .stroke-warning {
        stroke: #fb6340;
      }

      .fill-danger {
        fill: #f5365c;
      }

      .stroke-danger {
        stroke: #f5365c;
      }

      .fill-light {
        fill: #adb5bd;
      }

      .stroke-light {
        stroke: #adb5bd;
      }

      .fill-dark {
        fill: #212529;
      }

      .stroke-dark {
        stroke: #212529;
      }

      .fill-default {
        fill: #172b4d;
      }

      .stroke-default {
        stroke: #172b4d;
      }

      .fill-white {
        fill: #fff;
      }

      .stroke-white {
        stroke: #fff;
      }

      .fill-neutral {
        fill: #fff;
      }

      .stroke-neutral {
        stroke: #fff;
      }

      .fill-darker {
        fill: black;
      }

      .stroke-darker {
        stroke: black;
      }

      .fill-opacity-8 {
        fill-opacity: .8;
      }

      .floating {
        animation: floating 3s ease infinite;
        will-change: transform;
      }

      .floating:hover {
        animation-play-state: paused;
      }

      .floating-lg {
        animation: floating-lg 3s ease infinite;
      }

      .floating-sm {
        animation: floating-sm 3s ease infinite;
      }

      @keyframes floating-lg {
        0% {
          transform: translateY(0px);
        }

        50% {
          transform: translateY(15px);
        }

        100% {
          transform: translateY(0px);
        }
      }

      @keyframes floating {
        0% {
          transform: translateY(0px);
        }

        50% {
          transform: translateY(10px);
        }

        100% {
          transform: translateY(0px);
        }
      }

      @keyframes floating-sm {
        0% {
          transform: translateY(0px);
        }

        50% {
          transform: translateY(5px);
        }

        100% {
          transform: translateY(0px);
        }
      }

      .floatfix:before,
      .floatfix:after {
        content: '';
        display: table;
      }
      .floatfix:after {
        clear: both;
      }

      .img-center {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      .opacity-1 {
        opacity: .1 !important;
      }

      .opacity-2 {
        opacity: .2 !important;
      }

      .opacity-3 {
        opacity: .3 !important;
      }

      .opacity-4 {
        opacity: .4 !important;
      }

      .opacity-5 {
        opacity: .5 !important;
      }

      .opacity-6 {
        opacity: .6 !important;
      }

      .opacity-7 {
        opacity: .7 !important;
      }

      .opacity-8 {
        opacity: .8 !important;
      }

      .opacity-8 {
        opacity: .9 !important;
      }

      .opacity-10 {
        opacity: 1 !important;
      }

      .overflow-visible {
        overflow: visible !important;
      }

      .overflow-hidden {
        overflow: hidden !important;
      }

      .top-0 {
        top: 0;
      }

      .right-0 {
        right: 0;
      }

      .bottom-0 {
        bottom: 0;
      }

      .left-0 {
        left: 0;
      }

      .top-1 {
        top: 0.25rem;
      }

      .right-1 {
        right: 0.25rem;
      }

      .bottom-1 {
        bottom: 0.25rem;
      }

      .left-1 {
        left: 0.25rem;
      }

      .top-2 {
        top: 0.5rem;
      }

      .right-2 {
        right: 0.5rem;
      }

      .bottom-2 {
        bottom: 0.5rem;
      }

      .left-2 {
        left: 0.5rem;
      }

      .top-3 {
        top: 1rem;
      }

      .right-3 {
        right: 1rem;
      }

      .bottom-3 {
        bottom: 1rem;
      }

      .left-3 {
        left: 1rem;
      }

      .top-4 {
        top: 1.5rem;
      }

      .right-4 {
        right: 1.5rem;
      }

      .bottom-4 {
        bottom: 1.5rem;
      }

      .left-4 {
        left: 1.5rem;
      }

      .top-5 {
        top: 3rem;
      }

      .right-5 {
        right: 3rem;
      }

      .bottom-5 {
        bottom: 3rem;
      }

      .left-5 {
        left: 3rem;
      }

      .top--9 {
        top: -10rem;
      }

      .right--9 {
        right: -10rem;
      }

      .bottom--9 {
        bottom: -10rem;
      }

      .left--9 {
        left: -10rem;
      }

      .top--8 {
        top: -8rem;
      }

      .right--8 {
        right: -8rem;
      }

      .bottom--8 {
        bottom: -8rem;
      }

      .left--8 {
        left: -8rem;
      }

      .top--7 {
        top: -6rem;
      }

      .right--7 {
        right: -6rem;
      }

      .bottom--7 {
        bottom: -6rem;
      }

      .left--7 {
        left: -6rem;
      }

      .top--6 {
        top: -4.5rem;
      }

      .right--6 {
        right: -4.5rem;
      }

      .bottom--6 {
        bottom: -4.5rem;
      }

      .left--6 {
        left: -4.5rem;
      }

      .top--5 {
        top: -3rem;
      }

      .right--5 {
        right: -3rem;
      }

      .bottom--5 {
        bottom: -3rem;
      }

      .left--5 {
        left: -3rem;
      }

      .top--4 {
        top: -1.5rem;
      }

      .right--4 {
        right: -1.5rem;
      }

      .bottom--4 {
        bottom: -1.5rem;
      }

      .left--4 {
        left: -1.5rem;
      }

      .top--3 {
        top: -1rem;
      }

      .right--3 {
        right: -1rem;
      }

      .bottom--3 {
        bottom: -1rem;
      }

      .left--3 {
        left: -1rem;
      }

      .top--2 {
        top: -0.5rem;
      }

      .right--2 {
        right: -0.5rem;
      }

      .bottom--2 {
        bottom: -0.5rem;
      }

      .left--2 {
        left: -0.5rem;
      }

      .top--1 {
        top: -0.25rem;
      }

      .right--1 {
        right: -0.25rem;
      }

      .bottom--1 {
        bottom: -0.25rem;
      }

      .left--1 {
        left: -0.25rem;
      }

      .top-6 {
        top: 4.5rem;
      }

      .right-6 {
        right: 4.5rem;
      }

      .bottom-6 {
        bottom: 4.5rem;
      }

      .left-6 {
        left: 4.5rem;
      }

      .top-7 {
        top: 6rem;
      }

      .right-7 {
        right: 6rem;
      }

      .bottom-7 {
        bottom: 6rem;
      }

      .left-7 {
        left: 6rem;
      }

      .top-8 {
        top: 8rem;
      }

      .right-8 {
        right: 8rem;
      }

      .bottom-8 {
        bottom: 8rem;
      }

      .left-8 {
        left: 8rem;
      }

      .top-9 {
        top: 10rem;
      }

      .right-9 {
        right: 10rem;
      }

      .bottom-9 {
        bottom: 10rem;
      }

      .left-9 {
        left: 10rem;
      }

      .center {
        left: 50%;
        transform: translateX(-50%);
      }

      .h-100vh {
        height: 100vh !important;
      }

      .row.row-grid>[class*="col-"]+[class*="col-"] {
        margin-top: 3rem;
      }

      @media (min-width: 992px) {
        .row.row-grid>[class*="col-lg-"]+[class*="col-lg-"] {
          margin-top: 0;
        }
      }

      @media (min-width: 768px) {
        .row.row-grid>[class*="col-md-"]+[class*="col-md-"] {
          margin-top: 0;
        }
      }

      @media (min-width: 576px) {
        .row.row-grid>[class*="col-sm-"]+[class*="col-sm-"] {
          margin-top: 0;
        }
      }

      .row-grid+.row-grid {
        margin-top: 3rem;
      }

      @media (min-width: 992px) {
        .mt--100 {
          margin-top: -100px !important;
        }

        .mr--100 {
          margin-right: -100px !important;
        }

        .mb--100 {
          margin-bottom: -100px !important;
        }

        .ml--100 {
          margin-left: -100px !important;
        }

        .mt--150 {
          margin-top: -150px !important;
        }

        .mb--150 {
          margin-bottom: -150px !important;
        }

        .mt--200 {
          margin-top: -200px !important;
        }

        .mb--200 {
          margin-bottom: -200px !important;
        }

        .mt--300 {
          margin-top: -300px !important;
        }

        .mb--300 {
          margin-bottom: -300px !important;
        }

        .pt-100 {
          padding-top: 100px !important;
        }

        .pb-100 {
          padding-bottom: 100px !important;
        }

        .pt-150 {
          padding-top: 150px !important;
        }

        .pb-150 {
          padding-bottom: 150px !important;
        }

        .pt-200 {
          padding-top: 200px !important;
        }

        .pb-200 {
          padding-bottom: 200px !important;
        }

        .pt-250 {
          padding-top: 250px !important;
        }

        .pb-250 {
          padding-bottom: 250px !important;
        }

        .pt-300 {
          padding-top: 300px !important;
        }

        .pb-300 {
          padding-bottom: 300px !important;
        }
      }

      [class*="shadow"] {
        transition: all 0.15s ease;
      }

      .shadow-sm--hover:hover {
        box-shadow: 0 0 0.5rem rgba(136, 152, 170, 0.075) !important;
      }

      .shadow--hover:hover {
        box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15) !important;
      }

      .shadow-lg--hover:hover {
        box-shadow: 0 0 3rem rgba(136, 152, 170, 0.175) !important;
      }

      .shadow-none--hover:hover {
        box-shadow: none !important;
      }

      .font-weight-300 {
        font-weight: 300 !important;
      }

      .font-weight-400 {
        font-weight: 400 !important;
      }

      .font-weight-500 {
        font-weight: 500 !important;
      }

      .font-weight-600 {
        font-weight: 600 !important;
      }

      .font-weight-700 {
        font-weight: 700 !important;
      }

      .font-weight-800 {
        font-weight: 800 !important;
      }

      .font-weight-900 {
        font-weight: 900 !important;
      }

      .text-underline {
        text-decoration: underline;
      }

      .text-through {
        text-decoration: line-through;
      }

      .text-xs {
        font-size: 0.75rem !important;
      }

      .text-sm {
        font-size: 0.875rem !important;
      }

      .text-lg {
        font-size: 1.25rem !important;
      }

      .text-xl {
        font-size: 1.5rem !important;
      }

      .lh-100 {
        line-height: 1;
      }

      .lh-110 {
        line-height: 1.1;
      }

      .lh-120 {
        line-height: 1.2;
      }

      .lh-130 {
        line-height: 1.3;
      }

      .lh-140 {
        line-height: 1.4;
      }

      .lh-150 {
        line-height: 1.5;
      }

      .lh-160 {
        line-height: 1.6;
      }

      .lh-170 {
        line-height: 1.7;
      }

      .lh-180 {
        line-height: 1.8;
      }

      .ls-1 {
        letter-spacing: .0625rem;
      }

      .ls-15 {
        letter-spacing: .09375rem;
      }

      .ls-2 {
        letter-spacing: 0.125rem;
      }

      .text-blue {
        color: #5e72e4 !important;
      }

      a.text-blue:hover,
      a.text-blue:focus {
        color: #324cdd !important;
      }

      .text-indigo {
        color: #5603ad !important;
      }

      a.text-indigo:hover,
      a.text-indigo:focus {
        color: #3d027b !important;
      }

      .text-purple {
        color: #8965e0 !important;
      }

      a.text-purple:hover,
      a.text-purple:focus {
        color: #683bd7 !important;
      }

      .text-pink {
        color: #f3a4b5 !important;
      }

      a.text-pink:hover,
      a.text-pink:focus {
        color: #ed7790 !important;
      }

      .text-red {
        color: #f5365c !important;
      }

      a.text-red:hover,
      a.text-red:focus {
        color: #ec0c38 !important;
      }

      .text-orange {
        color: #fb6340 !important;
      }

      a.text-orange:hover,
      a.text-orange:focus {
        color: #fa3a0e !important;
      }

      .text-yellow {
        color: #ffd600 !important;
      }

      a.text-yellow:hover,
      a.text-yellow:focus {
        color: #ccab00 !important;
      }

      .text-green {
        color: #2dce89 !important;
      }

      a.text-green:hover,
      a.text-green:focus {
        color: #24a46d !important;
      }

      .text-teal {
        color: #11cdef !important;
      }

      a.text-teal:hover,
      a.text-teal:focus {
        color: #0da5c0 !important;
      }

      .text-cyan {
        color: #2bffc6 !important;
      }

      a.text-cyan:hover,
      a.text-cyan:focus {
        color: #00f7b5 !important;
      }

      .text-white {
        color: #fff !important;
      }

      a.text-white:hover,
      a.text-white:focus {
        color: #e6e6e6 !important;
      }

      .text-gray {
        color: #8898aa !important;
      }

      a.text-gray:hover,
      a.text-gray:focus {
        color: #6a7e95 !important;
      }

      .text-gray-dark {
        color: #32325d !important;
      }

      a.text-gray-dark:hover,
      a.text-gray-dark:focus {
        color: #20203c !important;
      }

      .text-light {
        color: #ced4da !important;
      }

      a.text-light:hover,
      a.text-light:focus {
        color: #b1bbc4 !important;
      }

      .text-lighter {
        color: #e9ecef !important;
      }

      a.text-lighter:hover,
      a.text-lighter:focus {
        color: #cbd3da !important;
      }

      @media (min-width: 992px) {
        .transform-perspective-right {
          transform: scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg);
        }

        .transform-perspective-left {
          transform: scale(1) perspective(2000px) rotateY(11deg) rotateX(2deg) rotate(-2deg);
        }
      }

      .alert {
        font-size: 0.875rem;
      }

      .alert-heading {
        font-weight: 600;
        font-size: 0.9375rem;
        margin-top: .15rem;
      }

      .alert-icon {
        font-size: 1.25rem;
        margin-right: 1.25rem;
        display: inline-block;
        vertical-align: middle;
      }
      .alert-icon i.ni {
        position: relative;
        top: 1px;
      }

      .alert-text {
        display: inline-block;
        vertical-align: middle;
      }

      [class*="alert-"] .alert-link {
        color: #fff;
        border-bottom: 1px dotted rgba(255, 255, 255, 0.5);
      }

      .alert-dismissible .close {
        top: 50%;
        right: 1.5rem;
        padding: 0;
        transform: translateY(-50%);
        color: rgba(255, 255, 255, 0.6);
        opacity: 1;
      }

      .alert-dismissible .close:hover,
      .alert-dismissible .close:focus {
        color: rgba(255, 255, 255, 0.9);
        opacity: 1 !important;
      }

      @media (max-width: 575.98px) {
        .alert-dismissible .close {
          top: 1rem;
          right: .5rem;
        }
      }

      .alert-dismissible .close>span:not(.sr-only) {
        font-size: 1.5rem;
        background-color: transparent;
        color: rgba(255, 255, 255, 0.6);
      }

      .alert-dismissible .close:hover>span:not(.sr-only),
      .alert-dismissible .close:focus>span:not(.sr-only) {
        background-color: transparent;
        color: rgba(255, 255, 255, 0.9);
      }

      .avatar {
        color: #fff;
        background-color: #adb5bd;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        border-radius: 50%;
        height: 48px;
        width: 48px;
      }

      .avatar img {
        width: 100%;
        border-radius: 50%;
      }

      .avatar+.avatar-content {
        display: inline-block;
        margin-left: .75rem;
      }

      .avatar-lg {
        width: 58px;
        height: 58px;
        font-size: 0.875rem;
      }

      .avatar-sm {
        width: 36px;
        height: 36px;
        font-size: 0.875rem;
      }

      .avatar-group .avatar {
        position: relative;
        z-index: 2;
        border: 2px solid #fff;
      }

      .avatar-group .avatar:hover {
        z-index: 3;
      }

      .avatar-group .avatar+.avatar {
        margin-left: -1rem;
      }

      .badge {
        text-transform: uppercase;
      }

      .badge a {
        color: #fff;
      }

      .badge-md {
        padding: .65em 1em;
      }

      .badge-lg {
        padding: .85em 1.375em;
      }

      .badge-inline {
        margin-right: .625rem;
      }

      .badge-inline+span {
        top: 2px;
        position: relative;
      }

      .badge-inline+span>a {
        text-decoration: underline;
      }

      .btn .badge:not(:first-child) {
        margin-left: .5rem;
      }

      .btn .badge:not(:last-child) {
        margin-right: .5rem;
      }

      .badge-circle {
        text-align: center;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        font-size: .875rem;
      }

      .badge-dot {
        padding-left: 0;
        padding-right: 0;
        background: transparent;
        font-weight: 400;
        font-size: 0.875rem;
        text-transform: none;
      }

      .badge-dot strong {
        color: #32325d;
      }

      .badge-dot i {
        display: inline-block;
        vertical-align: middle;
        width: .375rem;
        height: .375rem;
        border-radius: 50%;
        margin-right: .375rem;
      }

      .badge-dot.badge-md i {
        width: .5rem;
        height: .5rem;
      }

      .badge-dot.badge-lg i {
        width: .625rem;
        height: .625rem;
      }

      .btn {
        position: relative;
        text-transform: none;
        transition: all 0.15s ease;
        letter-spacing: 0.025em;
        font-size: 0.875rem;
        will-change: transform;
      }

      .btn:hover {
        box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
        transform: translateY(-1px);
      }

      .btn:not(:last-child) {
        margin-right: .5rem;
      }

      .btn i:not(:first-child),
      .btn svg:not(:first-child) {
        margin-left: .5rem;
      }

      .btn i:not(:last-child),
      .btn svg:not(:last-child) {
        margin-right: .5rem;
      }

      .btn-group .btn,
      .input-group .btn {
        margin-right: 0;
        transform: translateY(0);
      }

      .btn-sm,
      .btn-group-sm>.btn {
        font-size: 0.75rem;
      }

      .btn-lg,
      .btn-group-lg>.btn {
        font-size: 0.875rem;
      }

      [class*="btn-outline-"] {
        border-width: 1px;
      }

      .btn-outline-secondary {
        color: #4385b1;
      }

      .btn-inner--icon i:not(.fa) {
        position: relative;
        top: 2px;
      }

      .btn-link {
        font-weight: 600;
        box-shadow: none;
      }

      .btn-link:hover {
        box-shadow: none;
        transform: none;
      }

      .btn-neutral {
        color: #5e72e4;
      }

      .btn-icon .btn-inner--icon img {
        width: 20px;
      }

      .btn-icon .btn-inner--text:not(:first-child) {
        margin-left: 0.75em;
      }

      .btn-icon .btn-inner--text:not(:last-child) {
        margin-right: 0.75em;
      }

      .btn-icon-only {
        width: 2.375rem;
        height: 2.375rem;
        padding: 0;
      }

      a.btn-icon-only {
        line-height: 2.5;
      }

      .btn-icon-only.btn-sm,
      .btn-group-sm>.btn-icon-only.btn {
        width: 2rem;
        height: 2rem;
      }

      .btn-icon-clipboard {
        margin: 0;
        padding: 1.5rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.25;
        color: #32325d;
        background-color: #f6f9fc;
        border-radius: 0.375rem;
        border: 0;
        text-align: left;
        font-family: inherit;
        display: inline-block;
        vertical-align: middle;
        text-decoration: none;
        -moz-appearance: none;
        cursor: pointer;
        width: 100%;
        margin: .5rem 0;
      }

      .btn-icon-clipboard:hover {
        background-color: #fff;
        box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 1px, rgba(0, 0, 0, 0.1) 0 4px 16px;
      }

      .btn-icon-clipboard>div {
        align-items: center;
        display: flex;
      }

      .btn-icon-clipboard i {
        box-sizing: content-box;
        color: #5e72e4;
        vertical-align: middle;
        font-size: 1.5rem;
      }

      .btn-icon-clipboard span {
        display: inline-block;
        font-size: 0.875rem;
        line-height: 1.5;
        margin-left: 16px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        vertical-align: middle;
      }

      .btn-facebook {
        color: #fff;
        background-color: #3b5999;
        border-color: #3b5999;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
      }

      .btn-facebook:hover {
        color: #fff;
        background-color: #3b5999;
        border-color: #3b5999;
      }

      .btn-facebook:focus,
      .btn-facebook.focus {
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(59, 89, 153, 0.5);
      }

      .btn-facebook.disabled,
      .btn-facebook:disabled {
        color: #fff;
        background-color: #3b5999;
        border-color: #3b5999;
      }

      .btn-facebook:not(:disabled):not(.disabled):active,
      .btn-facebook:not(:disabled):not(.disabled).active,
      .show>.btn-facebook.dropdown-toggle {
        color: #fff;
        background-color: #2d4474;
        border-color: #3b5999;
      }

      .btn-facebook:not(:disabled):not(.disabled):active:focus,
      .btn-facebook:not(:disabled):not(.disabled).active:focus,
      .show>.btn-facebook.dropdown-toggle:focus {
        box-shadow: none, 0 0 0 0 rgba(59, 89, 153, 0.5);
      }

      .btn-twitter {
        color: #fff;
        background-color: #1da1f2;
        border-color: #1da1f2;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
      }

      .btn-twitter:hover {
        color: #fff;
        background-color: #1da1f2;
        border-color: #1da1f2;
      }

      .btn-twitter:focus,
      .btn-twitter.focus {
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(29, 161, 242, 0.5);
      }

      .btn-twitter.disabled,
      .btn-twitter:disabled {
        color: #fff;
        background-color: #1da1f2;
        border-color: #1da1f2;
      }

      .btn-twitter:not(:disabled):not(.disabled):active,
      .btn-twitter:not(:disabled):not(.disabled).active,
      .show>.btn-twitter.dropdown-toggle {
        color: #fff;
        background-color: #0c85d0;
        border-color: #1da1f2;
      }

      .btn-twitter:not(:disabled):not(.disabled):active:focus,
      .btn-twitter:not(:disabled):not(.disabled).active:focus,
      .show>.btn-twitter.dropdown-toggle:focus {
        box-shadow: none, 0 0 0 0 rgba(29, 161, 242, 0.5);
      }

      .btn-google-plus {
        color: #fff;
        background-color: #dd4b39;
        border-color: #dd4b39;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
      }

      .btn-google-plus:hover {
        color: #fff;
        background-color: #dd4b39;
        border-color: #dd4b39;
      }

      .btn-google-plus:focus,
      .btn-google-plus.focus {
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(221, 75, 57, 0.5);
      }

      .btn-google-plus.disabled,
      .btn-google-plus:disabled {
        color: #fff;
        background-color: #dd4b39;
        border-color: #dd4b39;
      }

      .btn-google-plus:not(:disabled):not(.disabled):active,
      .btn-google-plus:not(:disabled):not(.disabled).active,
      .show>.btn-google-plus.dropdown-toggle {
        color: #fff;
        background-color: #c23321;
        border-color: #dd4b39;
      }

      .btn-google-plus:not(:disabled):not(.disabled):active:focus,
      .btn-google-plus:not(:disabled):not(.disabled).active:focus,
      .show>.btn-google-plus.dropdown-toggle:focus {
        box-shadow: none, 0 0 0 0 rgba(221, 75, 57, 0.5);
      }

      .btn-instagram {
        color: #fff;
        background-color: #e4405f;
        border-color: #e4405f;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
      }

      .btn-instagram:hover {
        color: #fff;
        background-color: #e4405f;
        border-color: #e4405f;
      }

      .btn-instagram:focus,
      .btn-instagram.focus {
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(228, 64, 95, 0.5);
      }

      .btn-instagram.disabled,
      .btn-instagram:disabled {
        color: #fff;
        background-color: #e4405f;
        border-color: #e4405f;
      }

      .btn-instagram:not(:disabled):not(.disabled):active,
      .btn-instagram:not(:disabled):not(.disabled).active,
      .show>.btn-instagram.dropdown-toggle {
        color: #fff;
        background-color: #d31e40;
        border-color: #e4405f;
      }

      .btn-instagram:not(:disabled):not(.disabled):active:focus,
      .btn-instagram:not(:disabled):not(.disabled).active:focus,
      .show>.btn-instagram.dropdown-toggle:focus {
        box-shadow: none, 0 0 0 0 rgba(228, 64, 95, 0.5);
      }

      .btn-pinterest {
        color: #fff;
        background-color: #bd081c;
        border-color: #bd081c;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
      }

      .btn-pinterest:hover {
        color: #fff;
        background-color: #bd081c;
        border-color: #bd081c;
      }

      .btn-pinterest:focus,
      .btn-pinterest.focus {
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(189, 8, 28, 0.5);
      }

      .btn-pinterest.disabled,
      .btn-pinterest:disabled {
        color: #fff;
        background-color: #bd081c;
        border-color: #bd081c;
      }

      .btn-pinterest:not(:disabled):not(.disabled):active,
      .btn-pinterest:not(:disabled):not(.disabled).active,
      .show>.btn-pinterest.dropdown-toggle {
        color: #fff;
        background-color: #8c0615;
        border-color: #bd081c;
      }

      .btn-pinterest:not(:disabled):not(.disabled):active:focus,
      .btn-pinterest:not(:disabled):not(.disabled).active:focus,
      .show>.btn-pinterest.dropdown-toggle:focus {
        box-shadow: none, 0 0 0 0 rgba(189, 8, 28, 0.5);
      }

      .btn-youtube {
        color: #fff;
        background-color: #cd201f;
        border-color: #cd201f;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
      }

      .btn-youtube:hover {
        color: #fff;
        background-color: #cd201f;
        border-color: #cd201f;
      }

      .btn-youtube:focus,
      .btn-youtube.focus {
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(205, 32, 31, 0.5);
      }

      .btn-youtube.disabled,
      .btn-youtube:disabled {
        color: #fff;
        background-color: #cd201f;
        border-color: #cd201f;
      }

      .btn-youtube:not(:disabled):not(.disabled):active,
      .btn-youtube:not(:disabled):not(.disabled).active,
      .show>.btn-youtube.dropdown-toggle {
        color: #fff;
        background-color: #a11918;
        border-color: #cd201f;
      }

      .btn-youtube:not(:disabled):not(.disabled):active:focus,
      .btn-youtube:not(:disabled):not(.disabled).active:focus,
      .show>.btn-youtube.dropdown-toggle:focus {
        box-shadow: none, 0 0 0 0 rgba(205, 32, 31, 0.5);
      }

      .btn-slack {
        color: #fff;
        background-color: #3aaf85;
        border-color: #3aaf85;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
      }

      .btn-slack:hover {
        color: #fff;
        background-color: #3aaf85;
        border-color: #3aaf85;
      }

      .btn-slack:focus,
      .btn-slack.focus {
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(58, 175, 133, 0.5);
      }

      .btn-slack.disabled,
      .btn-slack:disabled {
        color: #fff;
        background-color: #3aaf85;
        border-color: #3aaf85;
      }

      .btn-slack:not(:disabled):not(.disabled):active,
      .btn-slack:not(:disabled):not(.disabled).active,
      .show>.btn-slack.dropdown-toggle {
        color: #fff;
        background-color: #2d8968;
        border-color: #3aaf85;
      }

      .btn-slack:not(:disabled):not(.disabled):active:focus,
      .btn-slack:not(:disabled):not(.disabled).active:focus,
      .show>.btn-slack.dropdown-toggle:focus {
        box-shadow: none, 0 0 0 0 rgba(58, 175, 133, 0.5);
      }

      .btn-dribbble {
        color: #fff;
        background-color: #ea4c89;
        border-color: #ea4c89;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
      }

      .btn-dribbble:hover {
        color: #fff;
        background-color: #ea4c89;
        border-color: #ea4c89;
      }

      .btn-dribbble:focus,
      .btn-dribbble.focus {
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(234, 76, 137, 0.5);
      }

      .btn-dribbble.disabled,
      .btn-dribbble:disabled {
        color: #fff;
        background-color: #ea4c89;
        border-color: #ea4c89;
      }

      .btn-dribbble:not(:disabled):not(.disabled):active,
      .btn-dribbble:not(:disabled):not(.disabled).active,
      .show>.btn-dribbble.dropdown-toggle {
        color: #fff;
        background-color: #e51e6b;
        border-color: #ea4c89;
      }

      .btn-dribbble:not(:disabled):not(.disabled):active:focus,
      .btn-dribbble:not(:disabled):not(.disabled).active:focus,
      .show>.btn-dribbble.dropdown-toggle:focus {
        box-shadow: none, 0 0 0 0 rgba(234, 76, 137, 0.5);
      }

      .btn-github {
        color: #fff;
        background-color: #222222;
        border-color: #222222;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
      }

      .btn-github:hover {
        color: #fff;
        background-color: #222222;
        border-color: #222222;
      }

      .btn-github:focus,
      .btn-github.focus {
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 0 rgba(34, 34, 34, 0.5);
      }

      .btn-github.disabled,
      .btn-github:disabled {
        color: #fff;
        background-color: #222222;
        border-color: #222222;
      }

      .btn-github:not(:disabled):not(.disabled):active,
      .btn-github:not(:disabled):not(.disabled).active,
      .show>.btn-github.dropdown-toggle {
        color: #fff;
        background-color: #090909;
        border-color: #222222;
      }

      .btn-github:not(:disabled):not(.disabled):active:focus,
      .btn-github:not(:disabled):not(.disabled).active:focus,
      .show>.btn-github.dropdown-toggle:focus {
        box-shadow: none, 0 0 0 0 rgba(34, 34, 34, 0.5);
      }
      .card-translucent {
        background-color: rgba(18, 91, 152, 0.08);
      }

      .card-profile-image {
        position: relative;
      }

      .card-profile-image img {
        max-width: 180px;
        border-radius: 0.375rem;
        transform: translate(-50%, -30%);
        position: absolute;
        left: 50%;
        transition: all 0.15s ease;
      }

      .card-profile-image img:hover {
        transform: translate(-50%, -33%);
      }

      .card-profile-stats {
        padding: 1rem 0;
      }

      .card-profile-stats>div {
        text-align: center;
        margin-right: 1rem;
        padding: .875rem;
      }

      .card-profile-stats>div:last-child {
        margin-right: 0;
      }

      .card-profile-stats>div .heading {
        font-size: 1.1rem;
        font-weight: bold;
        display: block;
      }

      .card-profile-stats>div .description {
        font-size: .875rem;
        color: #adb5bd;
      }

      .card-profile-actions {
        padding: .875rem;
      }

      .card-blockquote {
        padding: 2rem;
        position: relative;
      }

      .card-blockquote .svg-bg {
        display: block;
        width: 100%;
        height: 95px;
        position: absolute;
        top: -94px;
        left: 0;
      }

      .card-lift--hover:hover {
        transform: translateY(-20px);
        transition: all 0.15s ease;
      }

      @media screen and (prefers-reduced-motion: reduce) {
        .card-lift--hover:hover {
          transition: none;
        }
      }

      .card-stats .card-body {
        padding: 1rem 1.5rem;
      }

      .card-stats .card-status-bullet {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%);
      }

      .chart {
        position: relative;
        height: 350px;
      }

      .chart-sm {
        height: 230px;
      }

      .chart-legend {
        display: flex;
        justify-content: center;
        margin-top: 2.5rem;
        font-size: 0.875rem;
        text-align: center;
        color: #8898aa;
      }

      .chart-legend-item {
        display: inline-flex;
        align-items: center;
      }

      .chart-legend-item+.chart-legend-item {
        margin-left: 1rem;
      }

      .chart-legend-indicator {
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        margin-right: 0.375rem;
        border-radius: 50%;
      }

      #chart-tooltip {
        z-index: 0;
      }

      #chart-tooltip .arrow {
        top: 100%;
        left: 50%;
        transform: translateX(-50%) translateX(-0.5rem);
      }

      .chart-info-overlay {
        position: absolute;
        top: 0;
        left: 5%;
        max-width: 350px;
        padding: 20px;
        z-index: 1;
      }

      .close {
        transition: all 0.15s ease;
      }

      .close>span:not(.sr-only) {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.6);
        line-height: 17px;
        height: 1.25rem;
        width: 1.25rem;
        border-radius: 50%;
        font-size: 1.25rem;
        display: block;
        transition: all 0.15s ease;
      }

      .close:hover,
      .close:focus {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.9);
        outline: none;
      }

      .close:hover span:not(.sr-only),
      .close:focus span:not(.sr-only) {
        background-color: transparent;
      }


      .main-content {
        position: relative;
      }

      .main-content .navbar-top {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 1;
        background-color: transparent;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }

      @media (min-width: 768px) {
        .main-content .container-fluid {
          padding-left: 39px !important;
          padding-right: 39px !important;
        }
      }

      .navbar-vertical.navbar-expand-xs.fixed-left+.main-content {
        margin-left: 250px;
      }

      .navbar-vertical.navbar-expand-xs.fixed-right+.main-content {
        margin-right: 250px;
      }

      @media (min-width: 576px) {
        .navbar-vertical.navbar-expand-sm.fixed-left+.main-content {
          margin-left: 250px;
        }

        .navbar-vertical.navbar-expand-sm.fixed-right+.main-content {
          margin-right: 250px;
        }
      }

      @media (min-width: 768px) {
        .navbar-vertical.navbar-expand-md.fixed-left+.main-content {
          margin-left: 250px;
        }

        .navbar-vertical.navbar-expand-md.fixed-right+.main-content {
          margin-right: 250px;
        }
      }

      @media (min-width: 992px) {
        .navbar-vertical.navbar-expand-lg.fixed-left+.main-content {
          margin-left: 250px;
        }

        .navbar-vertical.navbar-expand-lg.fixed-right+.main-content {
          margin-right: 250px;
        }
      }

      @media (min-width: 1200px) {
        .navbar-vertical.navbar-expand-xl.fixed-left+.main-content {
          margin-left: 250px;
        }

        .navbar-vertical.navbar-expand-xl.fixed-right+.main-content {
          margin-right: 250px;
        }
      }

      .custom-checkbox .custom-control-input~.custom-control-label {
        cursor: pointer;
        font-size: 0.875rem;
      }

      .custom-checkbox .custom-control-input:checked~.custom-control-label::before {
        border-color: #5e72e4;
      }

      .custom-checkbox .custom-control-input:checked~.custom-control-label::after {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
      }

      .custom-checkbox .custom-control-input:disabled~.custom-control-label::before {
        border-color: #e9ecef;
      }

      .custom-checkbox .custom-control-input:disabled:checked::before {
        border-color: rgba(94, 114, 228, 0.5);
      }

      .custom-control-label::before {
        border: 1px solid #cad1d7;
        transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }

      .custom-control-label span {
        position: relative;
        top: 2px;
      }

      .custom-control-label {
        margin-bottom: 0;
      }

      .custom-control-alternative .custom-control-label::before {
        border: 0;
        box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
      }

      .custom-control-alternative .custom-control-input:checked~.custom-control-label::before {
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
      }

      .custom-control-alternative .custom-control-input:active~.custom-control-label::before,
      .custom-control-alternative .custom-control-input:focus~.custom-control-label::before {
        box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
      }

      .custom-checkbox .custom-control-input~.custom-control-label {
        cursor: pointer;
        font-size: 0.875rem;
      }

      .custom-checkbox .custom-control-input:checked~.custom-control-label::before {
        border-color: #5e72e4;
      }

      .custom-checkbox .custom-control-input:checked~.custom-control-label::after {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
      }

      .custom-checkbox .custom-control-input:disabled~.custom-control-label::before {
        border-color: #e9ecef;
      }

      .custom-checkbox .custom-control-input:disabled:checked::before {
        border-color: rgba(94, 114, 228, 0.5);
      }

      .custom-radio .custom-control-input~.custom-control-label {
        cursor: pointer;
        font-size: 0.875rem;
      }

      .custom-radio .custom-control-input:checked~.custom-control-label::before {
        border-color: #5e72e4;
      }

      .custom-radio .custom-control-input:checked~.custom-control-label::after {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E");
      }

      .custom-radio .custom-control-input:disabled~.custom-control-label::before {
        border-color: #e9ecef;
      }

      .custom-radio .custom-control-input:disabled:checked::before {
        border-color: rgba(94, 114, 228, 0.5);
      }

      .custom-toggle {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 1.5rem;
      }

      .custom-toggle input {
        display: none;
      }

      .custom-toggle input:checked+.custom-toggle-slider {
        border: 1px solid #5e72e4;
      }

      .custom-toggle input:checked+.custom-toggle-slider:before {
        background: #5e72e4;
        transform: translateX(1.625rem);
      }

      .custom-toggle input:disabled+.custom-toggle-slider {
        border: 1px solid #e9ecef;
      }

      .custom-toggle input:disabled:checked+.custom-toggle-slider {
        border: 1px solid #e9ecef;
      }

      .custom-toggle input:disabled:checked+.custom-toggle-slider:before {
        background-color: #8a98eb;
      }

      .custom-toggle-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid #cad1d7;
        border-radius: 34px !important;
        background-color: transparent;
      }

      .custom-toggle-slider:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 2px;
        bottom: 2px;
        border-radius: 50% !important;
        background-color: #e9ecef;
        transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }

      .dropdown,
      .dropup,
      .dropright,
      .dropleft {
        display: inline-block;
      }

      .dropdown-menu {
        min-width: 12rem;
      }

      .dropdown-menu .dropdown-item {
        padding: .5rem 1rem;
        font-size: 0.875rem;
      }

      .dropdown-menu .dropdown-item>i,
      .dropdown-menu .dropdown-item>svg {
        margin-right: 1rem;
        font-size: 1rem;
        vertical-align: -17%;
      }

      .dropdown-header {
        padding-left: 1rem;
        padding-right: 1rem;
        color: #f6f9fc;
        font-size: .625rem;
        text-transform: uppercase;
        font-weight: 700;
      }

      .dropdown-menu a.media>div:first-child {
        line-height: 1;
      }

      .dropdown-menu a.media p {
        color: #8898aa;
      }

      .dropdown-menu a.media:hover .heading,
      .dropdown-menu a.media:hover p {
        color: #172b4d !important;
      }

      .dropdown-menu-sm {
        min-width: 100px;
        border: 0.4375rem;
      }

      .dropdown-menu-lg {
        min-width: 260px;
        border-radius: 0.4375rem;
      }

      .dropdown-menu-xl {
        min-width: 450px;
        border-radius: 0.4375rem;
      }
      .footer {
        background: #f7fafc;
        padding: 2.5rem 0;
      }

      .footer .col-footer .heading {
        color: #8898aa;
        letter-spacing: 0;
        font-size: 0.875rem;
        text-transform: uppercase;
        font-weight: 600;
        margin-bottom: 1rem;
      }

      .footer .nav .nav-item .nav-link,
      .footer .footer-link {
        color: #8898aa !important;
      }

      .footer .nav .nav-item .nav-link:hover,
      .footer .footer-link:hover {
        color: #525f7f !important;
      }

      .footer .list-unstyled li a {
        display: inline-block;
        padding: .125rem 0;
        color: #8898aa;
        font-size: 0.85rem;
      }

      .footer .list-unstyled li a:hover {
        color: #525f7f;
      }

      .footer .copyright {
        font-size: 0.875rem;
      }

      .footer-dark .col-footer .heading {
        color: #fff;
      }

      .nav-footer .nav-link {
        font-size: 0.875rem;
      }

      .nav-footer .nav-item:last-child .nav-link {
        padding-right: 0;
      }

      .footer.has-cards {
        overflow: hidden;
        padding-top: 500px;
        margin-top: -420px;
        position: relative;
        background: transparent;
        pointer-events: none;
      }

      .footer.has-cards:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 600px;
        height: 2000px;
        background: #f7fafc;
        transform: skew(0, -8deg);
      }

      .footer.has-cards .container {
        pointer-events: auto;
        position: relative;
      }

      .form-control-label {
        color: #525f7f;
        font-size: 0.875rem;
        font-weight: 600;
      }

      .form-control {
        font-size: 0.875rem;
      }

      .form-control:focus::placeholder {
        color: #adb5bd;
      }

      textarea[resize="none"] {
        resize: none !important;
      }

      textarea[resize="both"] {
        resize: both !important;
      }

      textarea[resize="vertical"] {
        resize: vertical !important;
      }

      textarea[resize="horizontal"] {
        resize: horizontal !important;
      }

      .form-control-muted {
        background-color: #F7FAFE;
        border-color: #F7FAFE;
        box-shadow: none;
      }

      .form-control-muted:focus {
        background-color: #fcfdff;
      }

      .form-control-alternative {
        box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
        border: 0;
        transition: box-shadow .15s ease;
      }

      .form-control-alternative:focus {
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
      }

      .form-control-lg {
        font-size: 1rem;
      }

      .has-success,
      .has-danger {
        position: relative;
      }

      .has-success:after,
      .has-danger:after {
        width: 19px;
        height: 19px;
        line-height: 19px;
        text-align: center;
        font-family: 'NucleoIcons';
        display: inline-block;
        position: absolute;
        right: 15px;
        top: 2px;
        transform: translateY(50%);
        border-radius: 50%;
        font-size: 9px;
        opacity: 1;
      }

      .has-success:after {
        content: "\ea26";
        color: daken(#2dce89, 18%);
        background-color: #69deac;
      }

      .has-success .form-control {
        background-color: #fff;
      }

      .has-success .form-control:focus {
        border-color: rgba(50, 151, 211, 0.25);
      }

      .has-success .form-control::placeholder {
        color: #2dce89;
      }

      .has-danger:after {
        content: "\ea53";
        color: daken(#fb6340, 18%);
        background-color: #fda08b;
      }

      .has-danger .form-control {
        background-color: #fff;
      }

      .has-danger .form-control:focus {
        border-color: rgba(50, 151, 211, 0.25);
      }

      .has-danger .form-control::placeholder {
        color: #fb6340;
      }

      .input-group {
        box-shadow: none;
        border-radius: 0.375rem;
        transition: all 0.15s ease;
      }

      .input-group .form-control {
        box-shadow: none;
      }

      .input-group .form-control:not(:first-child) {
        border-left: 0;
        padding-left: 0;
      }

      .input-group .form-control:not(:last-child) {
        border-right: 0;
        padding-right: 0;
      }

      .input-group .form-control:focus {
        box-shadow: none;
      }

      .input-group-text {
        transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }

      .input-group-alternative {
        box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
        border: 0;
        transition: box-shadow .15s ease;
      }

      .input-group-alternative .form-control,
      .input-group-alternative .input-group-text {
        border: 0;
        box-shadow: none;
      }

      .focused .input-group-alternative {
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08) !important;
      }

      .focused .input-group {
        box-shadow: none;
      }

      .focused .input-group-text {
        color: #8898aa;
        background-color: #fff;
        border-color: rgba(50, 151, 211, 0.25);
      }

      .focused .form-control {
        border-color: rgba(50, 151, 211, 0.25);
      }

      .header {
        position: relative;
      }

      .icon {
        width: 3rem;
        height: 3rem;
      }

      .icon i,
      .icon svg {
        font-size: 2.25rem;
      }

      .icon+.icon-text {
        padding-left: 1rem;
        width: calc(100% - 3rem - 1);
      }

      .icon-xl {
        width: 5rem;
        height: 5rem;
      }

      .icon-xl i,
      .icon-xl svg {
        font-size: 4.25rem;
      }

      .icon-xl+.icon-text {
        width: calc(100% - $icon-size-xl - 1);
      }

      .icon-lg {
        width: 4rem;
        height: 4rem;
      }

      .icon-lg i,
      .icon-lg svg {
        font-size: 3.25rem;
      }

      .icon-lg+.icon-text {
        width: calc(100% - $icon-size-lg - 1);
      }

      .icon-sm {
        width: 2rem;
        height: 2rem;
      }

      .icon-sm i,
      .icon-sm svg {
        font-size: 1.25rem;
      }

      .icon-sm+.icon-text {
        width: calc(100% - $icon-size-sm - 1);
      }

      .icon-shape {
        padding: 12px;
        text-align: center;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }

      .icon-shape i,
      .icon-shape svg {
        font-size: 1.25rem;
      }

      .icon-shape.icon-lg i,
      .icon-shape.icon-lg svg {
        font-size: 1.625rem;
      }

      .icon-shape.icon-sm i,
      .icon-shape.icon-sm svg {
        font-size: .875rem;
      }

      .icon-shape svg {
        width: 30px;
        height: 30px;
      }

      .icon-shape-primary {
        color: #2643e9;
        background-color: rgba(138, 152, 235, 0.5);
      }

      .icon-shape-secondary {
        color: #cfe3f1;
        background-color: rgba(255, 255, 255, 0.5);
      }

      .icon-shape-success {
        color: #1aae6f;
        background-color: rgba(84, 218, 161, 0.5);
      }

      .icon-shape-info {
        color: #03acca;
        background-color: rgba(65, 215, 242, 0.5);
      }

      .icon-shape-warning {
        color: #ff3709;
        background-color: rgba(252, 140, 114, 0.5);
      }

      .icon-shape-danger {
        color: #f80031;
        background-color: rgba(247, 103, 131, 0.5);
      }

      .icon-shape-light {
        color: #879cb0;
        background-color: rgba(201, 207, 212, 0.5);
      }

      .icon-shape-dark {
        color: #090c0e;
        background-color: rgba(56, 63, 69, 0.5);
      }

      .icon-shape-default {
        color: #091428;
        background-color: rgba(35, 65, 116, 0.5);
      }

      .icon-shape-white {
        color: #e8e3e3;
        background-color: rgba(255, 255, 255, 0.5);
      }

      .icon-shape-neutral {
        color: #e8e3e3;
        background-color: rgba(255, 255, 255, 0.5);
      }

      .icon-shape-darker {
        color: black;
        background-color: rgba(26, 26, 26, 0.5);
      }

      .input-group {
        box-shadow: none;
        border-radius: 0.375rem;
        transition: all 0.15s ease;
      }

      .input-group .form-control {
        box-shadow: none;
      }

      .input-group .form-control:not(:first-child) {
        border-left: 0;
        padding-left: 0;
      }

      .input-group .form-control:not(:last-child) {
        border-right: 0;
        padding-right: 0;
      }

      .input-group .form-control:focus {
        box-shadow: none;
      }

      .input-group-text {
        transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }

      .input-group-alternative {
        box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
        border: 0;
        transition: box-shadow .15s ease;
      }

      .input-group-alternative .form-control,
      .input-group-alternative .input-group-text {
        border: 0;
        box-shadow: none;
      }

      .focused .input-group-alternative {
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08) !important;
      }

      .focused .input-group {
        box-shadow: none;
      }

      .focused .input-group-text {
        color: #8898aa;
        background-color: #fff;
        border-color: rgba(50, 151, 211, 0.25);
      }

      .focused .form-control {
        border-color: rgba(50, 151, 211, 0.25);
      }

      .list-group-space .list-group-item {
        margin-bottom: 1.5rem;
        border-radius: 0.375rem;
      }

      .list-group-img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        vertical-align: top;
        margin: -.1rem 1.2rem 0 -.2rem;
      }

      .list-group-content {
        flex: 1;
        min-width: 0;
      }

      .list-group-content>p {
        color: #adb5bd;
        line-height: 1.5;
        margin: .2rem 0 0;
      }

      .list-group-heading {
        font-size: 1rem;
        color: #32325d;
      }

      .list-group-heading>small {
        float: right;
        color: #adb5bd;
        font-weight: 500;
      }
      .map-canvas {
        position: relative;
        width: 100%;
        height: 500px;
        border-radius: 0.375rem;
      }

      .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: all 0.15s ease;
      }

      @media screen and (prefers-reduced-motion: reduce) {
        .mask {
          transition: none;
        }
      }

      .modal-fluid .modal-dialog {
        margin-top: 0;
        margin-bottom: 0;
      }

      .modal-fluid .modal-content {
        border-radius: 0;
      }

      .modal-primary .modal-title {
        color: #fff;
      }

      .modal-primary .modal-header,
      .modal-primary .modal-footer {
        border-color: rgba(255, 255, 255, 0.075);
      }

      .modal-primary .modal-content {
        background-color: #5e72e4;
        color: #fff;
      }

      .modal-primary .modal-content .heading {
        color: #fff;
      }

      .modal-primary .close>span:not(.sr-only) {
        color: #fff;
      }

      .modal-secondary .modal-title {
        color: #212529;
      }

      .modal-secondary .modal-header,
      .modal-secondary .modal-footer {
        border-color: rgba(33, 37, 41, 0.075);
      }

      .modal-secondary .modal-content {
        background-color: #f7fafc;
        color: #212529;
      }

      .modal-secondary .modal-content .heading {
        color: #212529;
      }

      .modal-secondary .close>span:not(.sr-only) {
        color: #fff;
      }

      .modal-success .modal-title {
        color: #fff;
      }

      .modal-success .modal-header,
      .modal-success .modal-footer {
        border-color: rgba(255, 255, 255, 0.075);
      }

      .modal-success .modal-content {
        background-color: #2dce89;
        color: #fff;
      }

      .modal-success .modal-content .heading {
        color: #fff;
      }

      .modal-success .close>span:not(.sr-only) {
        color: #fff;
      }

      .modal-info .modal-title {
        color: #fff;
      }

      .modal-info .modal-header,
      .modal-info .modal-footer {
        border-color: rgba(255, 255, 255, 0.075);
      }

      .modal-info .modal-content {
        background-color: #11cdef;
        color: #fff;
      }

      .modal-info .modal-content .heading {
        color: #fff;
      }

      .modal-info .close>span:not(.sr-only) {
        color: #fff;
      }

      .modal-warning .modal-title {
        color: #fff;
      }

      .modal-warning .modal-header,
      .modal-warning .modal-footer {
        border-color: rgba(255, 255, 255, 0.075);
      }

      .modal-warning .modal-content {
        background-color: #fb6340;
        color: #fff;
      }

      .modal-warning .modal-content .heading {
        color: #fff;
      }

      .modal-warning .close>span:not(.sr-only) {
        color: #fff;
      }

      .modal-danger .modal-title {
        color: #fff;
      }

      .modal-danger .modal-header,
      .modal-danger .modal-footer {
        border-color: rgba(255, 255, 255, 0.075);
      }

      .modal-danger .modal-content {
        background-color: #f5365c;
        color: #fff;
      }

      .modal-danger .modal-content .heading {
        color: #fff;
      }

      .modal-danger .close>span:not(.sr-only) {
        color: #fff;
      }

      .modal-light .modal-title {
        color: #fff;
      }

      .modal-light .modal-header,
      .modal-light .modal-footer {
        border-color: rgba(255, 255, 255, 0.075);
      }

      .modal-light .modal-content {
        background-color: #adb5bd;
        color: #fff;
      }

      .modal-light .modal-content .heading {
        color: #fff;
      }

      .modal-light .close>span:not(.sr-only) {
        color: #fff;
      }

      .modal-dark .modal-title {
        color: #fff;
      }

      .modal-dark .modal-header,
      .modal-dark .modal-footer {
        border-color: rgba(255, 255, 255, 0.075);
      }

      .modal-dark .modal-content {
        background-color: #212529;
        color: #fff;
      }

      .modal-dark .modal-content .heading {
        color: #fff;
      }

      .modal-dark .close>span:not(.sr-only) {
        color: #fff;
      }

      .modal-default .modal-title {
        color: #fff;
      }

      .modal-default .modal-header,
      .modal-default .modal-footer {
        border-color: rgba(255, 255, 255, 0.075);
      }

      .modal-default .modal-content {
        background-color: #172b4d;
        color: #fff;
      }

      .modal-default .modal-content .heading {
        color: #fff;
      }

      .modal-default .close>span:not(.sr-only) {
        color: #fff;
      }

      .modal-white .modal-title {
        color: #212529;
      }

      .modal-white .modal-header,
      .modal-white .modal-footer {
        border-color: rgba(33, 37, 41, 0.075);
      }

      .modal-white .modal-content {
        background-color: #fff;
        color: #212529;
      }

      .modal-white .modal-content .heading {
        color: #212529;
      }

      .modal-white .close>span:not(.sr-only) {
        color: #fff;
      }

      .modal-neutral .modal-title {
        color: #212529;
      }

      .modal-neutral .modal-header,
      .modal-neutral .modal-footer {
        border-color: rgba(33, 37, 41, 0.075);
      }

      .modal-neutral .modal-content {
        background-color: #fff;
        color: #212529;
      }

      .modal-neutral .modal-content .heading {
        color: #212529;
      }

      .modal-neutral .close>span:not(.sr-only) {
        color: #fff;
      }

      .modal-darker .modal-title {
        color: #fff;
      }

      .modal-darker .modal-header,
      .modal-darker .modal-footer {
        border-color: rgba(255, 255, 255, 0.075);
      }

      .modal-darker .modal-content {
        background-color: black;
        color: #fff;
      }

      .modal-darker .modal-content .heading {
        color: #fff;
      }

      .modal-darker .close>span:not(.sr-only) {
        color: #fff;
      }

      .nav-wrapper {
        padding: 1rem 0;
        border-top-left-radius: 0.375rem;
        border-top-right-radius: 0.375rem;
      }

      .nav-wrapper+.card {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0.375rem;
        border-bottom-left-radius: 0.375rem;
      }

      .nav-link {
        color: #525f7f;
      }

      .nav-link:hover {
        color: #5e72e4;
      }

      .nav-link i.ni {
        position: relative;
        top: 2px;
      }

      .nav-pills .nav-item:not(:last-child) {
        padding-right: 1rem;
      }

      .nav-pills .nav-link {
        padding: 0.75rem 1rem;
        color: #5e72e4;
        font-weight: 500;
        font-size: 0.875rem;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
        background-color: #fff;
        transition: all 0.15s ease;
      }

      .nav-pills .nav-link:hover {
        color: #485fe0;
      }

      .nav-pills .nav-link.active,
      .nav-pills .show>.nav-link {
        color: #fff;
        background-color: #5e72e4;
      }

      @media (max-width: 575.98px) {
        .nav-pills .nav-item {
          margin-bottom: 1rem;
        }
      }

      @media (max-width: 767.98px) {
        .nav-pills:not(.nav-pills-circle) .nav-item {
          padding-right: 0;
        }
      }


      .nav-pills-circle .nav-link {
        text-align: center;
        height: 60px;
        width: 60px;
        padding: 0;
        line-height: 60px;
        border-radius: 50%;
      }

      .nav-pills-circle .nav-link-icon i,
      .nav-pills-circle .nav-link-icon svg {
        font-size: 1rem;
      }

      .navbar-horizontal .navbar-nav .nav-link {
        font-size: 0.9rem;
        font-weight: 400;
        text-transform: normal;
        letter-spacing: 0;
        transition: all 0.15s linear;
      }

      @media screen and (prefers-reduced-motion: reduce) {
        .navbar-horizontal .navbar-nav .nav-link {
          transition: none;
        }
      }

      .navbar-horizontal .navbar-nav .nav-link .nav-link-inner--text {
        margin-left: .25rem;
      }

      .navbar-horizontal .navbar-brand {
        font-size: 0.875rem;
        font-weight: 600;
        text-transform: uppercase;
        font-size: .875rem;
        letter-spacing: .05px;
      }

      .navbar-horizontal .navbar-brand img {
        height: 30px;
      }

      .navbar-horizontal .navbar-dark .navbar-brand {
        color: #fff;
      }

      .navbar-horizontal .navbar-light .navbar-brand {
        color: #32325d;
      }

      .navbar-horizontal .navbar-nav .nav-item .media:not(:last-child) {
        margin-bottom: 1.5rem;
      }

      @media (min-width: 992px) {
        .navbar-horizontal .navbar-nav .nav-item {
          margin-right: .5rem;
        }

        .navbar-horizontal .navbar-nav .nav-item [data-toggle="dropdown"]::after {
          transition: all 0.15s ease;
        }

        .navbar-horizontal .navbar-nav .nav-item.show [data-toggle="dropdown"]::after {
          transform: rotate(180deg);
        }

        .navbar-horizontal .navbar-nav .nav-link {
          padding-top: 1rem;
          padding-bottom: 1rem;
          border-radius: 0.375rem;
        }

        .navbar-horizontal .navbar-nav .nav-link i {
          margin-right: .625rem;
        }

        .navbar-horizontal .navbar-nav .nav-link-icon {
          padding-left: .5rem !important;
          padding-right: .5rem !important;
          font-size: 1rem;
          border-radius: 0.375rem;
        }

        .navbar-horizontal .navbar-nav .nav-link-icon i {
          margin-right: 0;
        }
      }

      .navbar-horizontal .navbar-transparent {
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 100;
        background-color: transparent;
        border: 0;
        box-shadow: none;
      }

      .navbar-horizontal .navbar-transparent .navbar-brand {
        color: white;
      }

      .navbar-horizontal .navbar-transparent .navbar-toggler {
        color: white;
      }


      @media (min-width: 768px) {
        .navbar-horizontal .navbar-transparent .navbar-nav .nav-link {
          color: rgba(255, 255, 255, 0.95);
        }

        .navbar-horizontal .navbar-transparent .navbar-nav .nav-link:hover,
        .navbar-horizontal .navbar-transparent .navbar-nav .nav-link:focus {
          color: rgba(255, 255, 255, 0.65);
        }

        .navbar-horizontal .navbar-transparent .navbar-nav .nav-link.disabled {
          color: rgba(255, 255, 255, 0.25);
        }

        .navbar-horizontal .navbar-transparent .navbar-nav .show>.nav-link,
        .navbar-horizontal .navbar-transparent .navbar-nav .active>.nav-link,
        .navbar-horizontal .navbar-transparent .navbar-nav .nav-link.show,
        .navbar-horizontal .navbar-transparent .navbar-nav .nav-link.active {
          color: rgba(255, 255, 255, 0.65);
        }

        .navbar-horizontal .navbar-transparent .navbar-brand {
          color: rgba(255, 255, 255, 0.95);
        }

        .navbar-horizontal .navbar-transparent .navbar-brand:hover,
        .navbar-horizontal .navbar-transparent .navbar-brand:focus {
          color: rgba(255, 255, 255, 0.95);
        }
      }

      .navbar-vertical {
        box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15) !important;
      }

      .navbar-vertical .navbar {
        border-width: 0 0 1px 0;
        border-style: solid;
      }

      .navbar-vertical .navbar-light {
        background-color: transparent;
        border-color: #f6f9fc;
      }

      .navbar-vertical .navbar-brand {
        margin-right: 0;
      }

      .navbar-vertical .navbar-brand-img,
      .navbar-vertical .navbar-brand>img {
        max-width: 100%;
        max-height: 2rem;
      }

      @media (min-width: 768px) {
        .navbar-vertical .navbar-collapse {
          margin-left: -1rem;
          margin-right: -1rem;
          padding-left: 1rem;
          padding-right: 1rem;
        }


        .navbar-vertical .navbar-collapse:before {
            content: '';
            display: block;
            margin: 1rem -1rem;
          }
        }

        .navbar-vertical .navbar-nav {
          margin-left: -1rem;
          margin-right: -1rem;
        }

        .navbar-vertical .navbar-nav .nav-link {
          padding-left: 1rem;
          padding-right: 1rem;
          font-size: 0.9rem;
        }

        .navbar-vertical .navbar-nav .nav-link.active {
          position: relative;
        }

        .navbar-vertical .navbar-nav .nav-link.active:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.25rem;
          bottom: 0.25rem;
          border-left: 2px solid #5e72e4;
        }

        .navbar-vertical .navbar-nav .nav-link>i {
          min-width: 2.25rem;
          font-size: .9375rem;
          line-height: 1.5rem;
        }

        .navbar-vertical .navbar-nav .nav-link .dropdown-menu {
          border: none;
        }

        .navbar-vertical .navbar-nav .nav-link .dropdown-menu .dropdown-menu {
          margin-left: 0.75rem;
        }

        .navbar-vertical .navbar-nav .nav-link {
          display: flex;
          align-items: center;
        }

        .navbar-vertical .navbar-nav .nav-link[data-toggle="collapse"]:after {
          display: inline-block;
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          -webkit-font-smoothing: antialiased;
          font-family: 'Font Awesome 5 Free';
          font-weight: 700;
          content: "\f105";
          margin-left: auto;
          color: #8898aa;
          transition: all 0.15s ease;
        }

        .navbar-vertical .navbar-nav .nav-link[data-toggle="collapse"][aria-expanded="true"]:after {
          transform: rotate(90deg);
        }

        .navbar-vertical .navbar-nav .nav .nav-link {
          padding-left: 3.25rem;
        }

        .navbar-vertical .navbar-nav .nav .nav .nav-link {
          padding-left: 3.75rem;
        }

        .navbar-vertical .navbar-heading {
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: .04em;
        }

        .navbar-vertical.navbar-expand-xs {
          display: block;
          position: fixed;
          top: 0;
          bottom: 0;
          width: 100%;
          max-width: 250px;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          overflow-y: auto;
        }

        .navbar-vertical.navbar-expand-xs>[class*="container"] {
          flex-direction: column;
          align-items: stretch;
          min-height: 100%;
          padding-left: 0;
          padding-right: 0;
        }

        @media all and (-ms-high-contrast: none),
        (-ms-high-contrast: active) {
          .navbar-vertical.navbar-expand-xs>[class*="container"] {
            min-height: none;
            height: 100%;
          }
        }


        .navbar-vertical.navbar-expand-xs.fixed-left {
          left: 0;
          border-width: 0 1px 0 0;
        }

        .navbar-vertical.navbar-expand-xs.fixed-right {
          right: 0;
          border-width: 0 0 0 1px;
        }

        .navbar-vertical.navbar-expand-xs .navbar-collapse {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          margin-left: -1.5rem;
          margin-right: -1.5rem;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }

        .navbar-vertical.navbar-expand-xs .navbar-collapse>* {
          min-width: 100%;
        }

        .navbar-vertical.navbar-expand-xs .navbar-nav {
          flex-direction: column;
          margin-left: -1.5rem;
          margin-right: -1.5rem;
        }

        .navbar-vertical.navbar-expand-xs .navbar-nav .nav-link {
          padding: 0.65rem 1.5rem;
        }

        .navbar-vertical.navbar-expand-xs .navbar-nav .nav-link.active:before {
          top: 0.25rem;
          bottom: 0.25rem;
          left: 0;
          right: auto;
          border-left: 2px solid #5e72e4;
          border-bottom: 0;
        }

        .navbar-vertical.navbar-expand-xs .navbar-nav .nav .nav-link {
          padding-left: 3.75rem;
        }

        .navbar-vertical.navbar-expand-xs .navbar-nav .nav .nav .nav-link {
          padding-left: 4.5rem;
        }

        .navbar-vertical.navbar-expand-xs .navbar-brand {
          display: block;
          text-align: center;
          padding-top: 1rem;
          padding-bottom: 1rem;
        }

        .navbar-vertical.navbar-expand-xs .navbar-brand-img {
          max-height: 2.5rem;
        }

        .navbar-vertical.navbar-expand-xs .navbar-user {
          margin-left: -1.5rem;
          margin-right: -1.5rem;
          padding-top: 1rem;
          padding-bottom: 0rem;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          border-top: 1px solid #e9ecef;
        }

        .navbar-vertical.navbar-expand-xs .navbar-user .dropup .dropdown-menu {
          left: 50%;
          transform: translateX(-50%);
        }

        @media (min-width: 576px) {
          .navbar-vertical.navbar-expand-sm {
            display: block;
            position: fixed;
            top: 0;
            bottom: 0;
            width: 100%;
            max-width: 250px;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            overflow-y: auto;
          }

          .navbar-vertical.navbar-expand-sm>[class*="container"] {
            flex-direction: column;
            align-items: stretch;
            min-height: 100%;
            padding-left: 0;
            padding-right: 0;
          }
        }

        @media all and (min-width: 576px) and (-ms-high-contrast: none),
        (min-width: 576px) and (-ms-high-contrast: active) {
          .navbar-vertical.navbar-expand-sm>[class*="container"] {
            min-height: none;
            height: 100%;
          }
        }

        @media (min-width: 576px) {
          .navbar-vertical.navbar-expand-sm.fixed-left {
            left: 0;
            border-width: 0 1px 0 0;
          }

          .navbar-vertical.navbar-expand-sm.fixed-right {
            right: 0;
            border-width: 0 0 0 1px;
          }


          .navbar-vertical.navbar-expand-sm .navbar-collapse {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            margin-left: -1.5rem;
            margin-right: -1.5rem;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .navbar-vertical.navbar-expand-sm .navbar-collapse>* {
            min-width: 100%;
          }

          .navbar-vertical.navbar-expand-sm .navbar-nav {
            flex-direction: column;
            margin-left: -1.5rem;
            margin-right: -1.5rem;
          }

          .navbar-vertical.navbar-expand-sm .navbar-nav .nav-link {
            padding: 0.65rem 1.5rem;
          }

          .navbar-vertical.navbar-expand-sm .navbar-nav .nav-link.active:before {
            top: 0.25rem;
            bottom: 0.25rem;
            left: 0;
            right: auto;
            border-left: 2px solid #5e72e4;
            border-bottom: 0;
          }

          .navbar-vertical.navbar-expand-sm .navbar-nav .nav .nav-link {
            padding-left: 3.75rem;
          }

          .navbar-vertical.navbar-expand-sm .navbar-nav .nav .nav .nav-link {
            padding-left: 4.5rem;
          }

          .navbar-vertical.navbar-expand-sm .navbar-brand {
            display: block;
            text-align: center;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }

          .navbar-vertical.navbar-expand-sm .navbar-brand-img {
            max-height: 2.5rem;
          }

          .navbar-vertical.navbar-expand-sm .navbar-user {
            margin-left: -1.5rem;
            margin-right: -1.5rem;
            padding-top: 1rem;
            padding-bottom: 0rem;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            border-top: 1px solid #e9ecef;
          }

          .navbar-vertical.navbar-expand-sm .navbar-user .dropup .dropdown-menu {
            left: 50%;
            transform: translateX(-50%);
          }
        }

        @media (min-width: 768px) {
          .navbar-vertical.navbar-expand-md {
            display: block;
            position: fixed;
            top: 0;
            bottom: 0;
            width: 100%;
            max-width: 250px;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            overflow-y: auto;
          }

          .navbar-vertical.navbar-expand-md>[class*="container"] {
            flex-direction: column;
            align-items: stretch;
            min-height: 100%;
            padding-left: 0;
            padding-right: 0;
          }
        }

        @media all and (min-width: 768px) and (-ms-high-contrast: none),
        (min-width: 768px) and (-ms-high-contrast: active) {
          .navbar-vertical.navbar-expand-md>[class*="container"] {
            min-height: none;
            height: 100%;
          }
        }

        @media (min-width: 768px) {
          .navbar-vertical.navbar-expand-md.fixed-left {
            left: 0;
            border-width: 0 1px 0 0;
          }

          .navbar-vertical.navbar-expand-md.fixed-right {
            right: 0;
            border-width: 0 0 0 1px;
          }

          .navbar-vertical.navbar-expand-md .navbar-collapse {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            margin-left: -1.5rem;
            margin-right: -1.5rem;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .navbar-vertical.navbar-expand-md .navbar-collapse>* {
            min-width: 100%;
          }

          .navbar-vertical.navbar-expand-md .navbar-nav {
            flex-direction: column;
            margin-left: -1.5rem;
            margin-right: -1.5rem;
          }

          .navbar-vertical.navbar-expand-md .navbar-nav .nav-link {
            padding: 0.65rem 1.5rem;
          }

          .navbar-vertical.navbar-expand-md .navbar-nav .nav-link.active:before {
            top: 0.25rem;
            bottom: 0.25rem;
            left: 0;
            right: auto;
            border-left: 2px solid #5e72e4;
            border-bottom: 0;
          }

          .navbar-vertical.navbar-expand-md .navbar-nav .nav .nav-link {
            padding-left: 3.75rem;
          }

          .navbar-vertical.navbar-expand-md .navbar-nav .nav .nav .nav-link {
            padding-left: 4.5rem;
          }

          .navbar-vertical.navbar-expand-md .navbar-brand {
            display: block;
            text-align: center;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }

          .navbar-vertical.navbar-expand-md .navbar-brand-img {
            max-height: 2.5rem;
          }

          .navbar-vertical.navbar-expand-md .navbar-user {
            margin-left: -1.5rem;
            margin-right: -1.5rem;
            padding-top: 1rem;
            padding-bottom: 0rem;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            border-top: 1px solid #e9ecef;
          }

          .navbar-vertical.navbar-expand-md .navbar-user .dropup .dropdown-menu {
            left: 50%;
            transform: translateX(-50%);
          }
        }

        @media (min-width: 992px) {
          .navbar-vertical.navbar-expand-lg {
            display: block;
            position: fixed;
            top: 0;
            bottom: 0;
            width: 100%;
            max-width: 250px;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            overflow-y: auto;
          }

          .navbar-vertical.navbar-expand-lg>[class*="container"] {
            flex-direction: column;
            align-items: stretch;
            min-height: 100%;
            padding-left: 0;
            padding-right: 0;
          }
        }

        @media all and (min-width: 992px) and (-ms-high-contrast: none),
        (min-width: 992px) and (-ms-high-contrast: active) {
          .navbar-vertical.navbar-expand-lg>[class*="container"] {
            min-height: none;
            height: 100%;
          }
        }

        @media (min-width: 992px) {
          .navbar-vertical.navbar-expand-lg.fixed-left {
            left: 0;
            border-width: 0 1px 0 0;
          }

          .navbar-vertical.navbar-expand-lg.fixed-right {
            right: 0;
            border-width: 0 0 0 1px;
          }

          .navbar-vertical.navbar-expand-lg .navbar-collapse {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            margin-left: -1.5rem;
            margin-right: -1.5rem;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .navbar-vertical.navbar-expand-lg .navbar-collapse>* {
            min-width: 100%;
          }

          .navbar-vertical.navbar-expand-lg .navbar-nav {
            flex-direction: column;
            margin-left: -1.5rem;
            margin-right: -1.5rem;
          }

          .navbar-vertical.navbar-expand-lg .navbar-nav .nav-link {
            padding: 0.65rem 1.5rem;
          }

          .navbar-vertical.navbar-expand-lg .navbar-nav .nav-link.active:before {
            top: 0.25rem;
            bottom: 0.25rem;
            left: 0;
            right: auto;
            border-left: 2px solid #5e72e4;
            border-bottom: 0;
          }

          .navbar-vertical.navbar-expand-lg .navbar-nav .nav .nav-link {
            padding-left: 3.75rem;
          }

          .navbar-vertical.navbar-expand-lg .navbar-nav .nav .nav .nav-link {
            padding-left: 4.5rem;
          }

          .navbar-vertical.navbar-expand-lg .navbar-brand {
            display: block;
            text-align: center;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }

          .navbar-vertical.navbar-expand-lg .navbar-brand-img {
            max-height: 2.5rem;
          }

          .navbar-vertical.navbar-expand-lg .navbar-user {
            margin-left: -1.5rem;
            margin-right: -1.5rem;
            padding-top: 1rem;
            padding-bottom: 0rem;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            border-top: 1px solid #e9ecef;
          }

          .navbar-vertical.navbar-expand-lg .navbar-user .dropup .dropdown-menu {
            left: 50%;
            transform: translateX(-50%);
          }
        }

        @media (min-width: 1200px) {
          .navbar-vertical.navbar-expand-xl {
            display: block;
            position: fixed;
            top: 0;
            bottom: 0;
            width: 100%;
            max-width: 250px;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            overflow-y: auto;
          }

          .navbar-vertical.navbar-expand-xl>[class*="container"] {
            flex-direction: column;
            align-items: stretch;
            min-height: 100%;
            padding-left: 0;
            padding-right: 0;
          }
        }

        @media all and (min-width: 1200px) and (-ms-high-contrast: none),
        (min-width: 1200px) and (-ms-high-contrast: active) {
          .navbar-vertical.navbar-expand-xl>[class*="container"] {
            min-height: none;
            height: 100%;
          }
        }

        @media (min-width: 1200px) {
          .navbar-vertical.navbar-expand-xl.fixed-left {
            left: 0;
            border-width: 0 1px 0 0;
          }

          .navbar-vertical.navbar-expand-xl.fixed-right {
            right: 0;
            border-width: 0 0 0 1px;
          }

          .navbar-vertical.navbar-expand-xl .navbar-collapse {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            margin-left: -1.5rem;
            margin-right: -1.5rem;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }


          .navbar-vertical.navbar-expand-xl .navbar-collapse>* {
            min-width: 100%;
          }

          .navbar-vertical.navbar-expand-xl .navbar-nav {
            flex-direction: column;
            margin-left: -1.5rem;
            margin-right: -1.5rem;
          }

          .navbar-vertical.navbar-expand-xl .navbar-nav .nav-link {
            padding: 0.65rem 1.5rem;
          }

          .navbar-vertical.navbar-expand-xl .navbar-nav .nav-link.active:before {
            top: 0.25rem;
            bottom: 0.25rem;
            left: 0;
            right: auto;
            border-left: 2px solid #5e72e4;
            border-bottom: 0;
          }

          .navbar-vertical.navbar-expand-xl .navbar-nav .nav .nav-link {
            padding-left: 3.75rem;
          }

          .navbar-vertical.navbar-expand-xl .navbar-nav .nav .nav .nav-link {
            padding-left: 4.5rem;
          }

          .navbar-vertical.navbar-expand-xl .navbar-brand {
            display: block;
            text-align: center;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }

          .navbar-vertical.navbar-expand-xl .navbar-brand-img {
            max-height: 2.5rem;
          }

          .navbar-vertical.navbar-expand-xl .navbar-user {
            margin-left: -1.5rem;
            margin-right: -1.5rem;
            padding-top: 1rem;
            padding-bottom: 0rem;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            border-top: 1px solid #e9ecef;
          }

          .navbar-vertical.navbar-expand-xl .navbar-user .dropup .dropdown-menu {
            left: 50%;
            transform: translateX(-50%);
          }
        }

        .navbar-search .input-group {
          border-radius: 2rem;
          border: 2px solid;
          background-color: transparent;
        }

        .navbar-search .input-group .input-group-text {
          background-color: transparent;
          padding-left: 1rem;
        }

        .navbar-search .form-control {
          width: 270px;
          background-color: transparent;
        }

        .navbar-search-dark .input-group {
          border-color: rgba(255, 255, 255, 0.6);
        }

        .navbar-search-dark .input-group-text {
          color: rgba(255, 255, 255, 0.6);
        }

        .navbar-search-dark .form-control {
          color: rgba(255, 255, 255, 0.9);
        }

        .navbar-search-dark .form-control::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .navbar-search-dark .focused .input-group {
          border-color: rgba(255, 255, 255, 0.9);
        }

        .navbar-search-light .input-group {
          border-color: rgba(0, 0, 0, 0.6);
        }

        .navbar-search-light .input-group-text {
          color: rgba(0, 0, 0, 0.6);
        }

        .navbar-search-light .form-control {
          color: rgba(0, 0, 0, 0.9);
        }

        .navbar-search-light .form-control::placeholder {
          color: rgba(0, 0, 0, 0.6);
        }

        .navbar-search-light .focused .input-group {
          border-color: rgba(0, 0, 0, 0.9);
        }

        @media (min-width: 768px) {
          .navbar .dropdown-menu {
            opacity: 0;
            pointer-events: none;
            margin: 0;
          }

          .navbar .dropdown-menu-arrow:before {
            background: #fff;
            box-shadow: none;
            content: '';
            display: block;
            height: 12px;
            width: 12px;
            left: 20px;
            position: absolute;
            bottom: 100%;
            transform: rotate(-45deg) translateY(12px);
            z-index: -5;
            border-radius: 2px;
          }

          .navbar .dropdown-menu-right:before {
            right: 20px;
            left: auto;
          }

          .navbar:not(.navbar-nav-hover) .dropdown-menu.show {
            opacity: 1;
            pointer-events: auto;
            animation: show-navbar-dropdown .25s ease forwards;
          }

          .navbar:not(.navbar-nav-hover) .dropdown-menu.close {
            display: block;
            animation: hide-navbar-dropdown .15s ease backwards;
          }

          .navbar.navbar-nav-hover .dropdown-menu {
            opacity: 0;
            display: block;
            pointer-events: none;
            transform: translate(0, 10px) perspective(200px) rotateX(-2deg);
            transition: visibility 0.25s, opacity 0.25s, transform 0.25s;
          }

          .navbar.navbar-nav-hover .nav-item.dropdown:hover>.dropdown-menu {
            display: block;
            opacity: 1;
            pointer-events: auto;
            visibility: visible;
            transform: translate(0, 0);
            animation: none;
          }

          .navbar .dropdown-menu-inner {
            position: relative;
            padding: 1rem;
          }

          @keyframes show-navbar-dropdown {
            0% {
              opacity: 0;
              transform: translate(0, 10px) perspective(200px) rotateX(-2deg);
              transition: visibility 0.25s, opacity 0.25s, transform 0.25s;
            }

            100% {
              transform: translate(0, 0);
              opacity: 1;
            }
          }

          @keyframes hide-navbar-dropdown {
            from {
              opacity: 1;
            }

            to {
              opacity: 0;
              transform: translate(0, 10px);
            }
          }
        }

        .navbar-collapse-header {
          display: none;
        }

        @media (max-width: 767.98px) {
          .navbar-nav .nav-link {
            padding: .625rem 0;
            color: #172b4d !important;
          }

          .navbar-nav .dropdown-menu {
            box-shadow: none;
            min-width: auto;
          }

          .navbar-nav .dropdown-menu .media svg {
            width: 30px;
          }

          .navbar-collapse {
            width: calc(100% - 1.4rem);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1050;
            margin: .7rem;
            overflow-y: auto;
            height: auto !important;
            opacity: 0;
          }

          .navbar-collapse .navbar-toggler {
            width: 20px;
            height: 20px;
            position: relative;
            cursor: pointer;
            display: inline-block;
            padding: 0;
          }

          .navbar-collapse .navbar-toggler span {
            display: block;
            position: absolute;
            width: 100%;
            height: 2px;
            border-radius: 2px;
            opacity: 1;
            background: #283448;
          }

          .navbar-collapse .navbar-toggler :nth-child(1) {
            transform: rotate(135deg);
          }

          .navbar-collapse .navbar-toggler :nth-child(2) {
            transform: rotate(-135deg);
          }

          .navbar-collapse .navbar-collapse-header {
            display: block;
            padding-bottom: 1rem;
            margin-bottom: 1rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          }

          .navbar-collapse .collapse-brand img {
            height: 36px;
          }

          .navbar-collapse .collapse-close {
            text-align: right;
          }

          .navbar-collapse.collapsing,
          .navbar-collapse.show {
            padding: 1.5rem;
            border-radius: 0.375rem;
            background: #FFF;
            box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
            animation: show-navbar-collapse .2s ease forwards;
          }

          .navbar-collapse.collapsing-out {
            animation: hide-navbar-collapse .2s ease forwards;
          }
        }

        @keyframes show-navbar-collapse {
          0% {
            opacity: 0;
            transform: scale(0.95);
            transform-origin: 100% 0;
          }

          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes hide-navbar-collapse {
          from {
            opacity: 1;
            transform: scale(1);
            transform-origin: 100% 0;
          }

          to {
            opacity: 0;
            transform: scale(0.95);
          }
        }
        .page-item.active .page-link {
          box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
        }

        .page-item .page-link,
        .page-item span {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          margin: 0 3px;
          border-radius: 50% !important;
          width: 36px;
          height: 36px;
          font-size: 0.875rem;
        }

        .pagination-lg .page-item .page-link,
        .pagination-lg .page-item span {
          width: 46px;
          height: 46px;
          line-height: 46px;
        }

        .pagination-sm .page-item .page-link,
        .pagination-sm .page-item span {
          width: 30px;
          height: 30px;
          line-height: 30px;
        }

        .popover {
          border: 0;
        }

        .popover-header {
          font-weight: 600;
        }

        .popover-primary {
          background-color: #5e72e4;
        }

        .popover-primary .popover-header {
          background-color: #5e72e4;
          color: #fff;
        }

        .popover-primary .popover-body {
          color: #fff;
        }

        .popover-primary .popover-header {
          border-color: rgba(255, 255, 255, 0.2);
        }

        .popover-primary.bs-popover-top .arrow::after,
        .popover-primary.bs-popover-auto[x-placement^="top"] .arrow::after {
          border-top-color: #5e72e4;
        }

        .popover-primary.bs-popover-right .arrow::after,
        .popover-primary.bs-popover-auto[x-placement^="right"] .arrow::after {
          border-right-color: #5e72e4;
        }

        .popover-primary.bs-popover-bottom .arrow::after,
        .popover-primary.bs-popover-auto[x-placement^="bottom"] .arrow::after {
          border-bottom-color: #5e72e4;
        }

        .popover-primary.bs-popover-left .arrow::after,
        .popover-primary.bs-popover-auto[x-placement^="left"] .arrow::after {
          border-left-color: #5e72e4;
        }

        .popover-secondary {
          background-color: #f7fafc;
        }

        .popover-secondary .popover-header {
          background-color: #f7fafc;
          color: #212529;
        }

        .popover-secondary .popover-body {
          color: #212529;
        }


        .popover-secondary .popover-header {
            border-color: rgba(33, 37, 41, 0.2);
          }

          .popover-secondary.bs-popover-top .arrow::after,
          .popover-secondary.bs-popover-auto[x-placement^="top"] .arrow::after {
            border-top-color: #f7fafc;
          }

          .popover-secondary.bs-popover-right .arrow::after,
          .popover-secondary.bs-popover-auto[x-placement^="right"] .arrow::after {
            border-right-color: #f7fafc;
          }

          .popover-secondary.bs-popover-bottom .arrow::after,
          .popover-secondary.bs-popover-auto[x-placement^="bottom"] .arrow::after {
            border-bottom-color: #f7fafc;
          }

          .popover-secondary.bs-popover-left .arrow::after,
          .popover-secondary.bs-popover-auto[x-placement^="left"] .arrow::after {
            border-left-color: #f7fafc;
          }

          .popover-success {
            background-color: #2dce89;
          }

          .popover-success .popover-header {
            background-color: #2dce89;
            color: #fff;
          }

          .popover-success .popover-body {
            color: #fff;
          }

          .popover-success .popover-header {
            border-color: rgba(255, 255, 255, 0.2);
          }

          .popover-success.bs-popover-top .arrow::after,
          .popover-success.bs-popover-auto[x-placement^="top"] .arrow::after {
            border-top-color: #2dce89;
          }

          .popover-success.bs-popover-right .arrow::after,
          .popover-success.bs-popover-auto[x-placement^="right"] .arrow::after {
            border-right-color: #2dce89;
          }

          .popover-success.bs-popover-bottom .arrow::after,
          .popover-success.bs-popover-auto[x-placement^="bottom"] .arrow::after {
            border-bottom-color: #2dce89;
          }

          .popover-success.bs-popover-left .arrow::after,
          .popover-success.bs-popover-auto[x-placement^="left"] .arrow::after {
            border-left-color: #2dce89;
          }

          .popover-info {
            background-color: #11cdef;
          }

          .popover-info .popover-header {
            background-color: #11cdef;
            color: #fff;
          }

          .popover-info .popover-body {
            color: #fff;
          }

          .popover-info .popover-header {
            border-color: rgba(255, 255, 255, 0.2);
          }

          .popover-info.bs-popover-top .arrow::after,
          .popover-info.bs-popover-auto[x-placement^="top"] .arrow::after {
            border-top-color: #11cdef;
          }

          .popover-info.bs-popover-right .arrow::after,
          .popover-info.bs-popover-auto[x-placement^="right"] .arrow::after {
            border-right-color: #11cdef;
          }

          .popover-info.bs-popover-bottom .arrow::after,
          .popover-info.bs-popover-auto[x-placement^="bottom"] .arrow::after {
            border-bottom-color: #11cdef;
          }

          .popover-info.bs-popover-left .arrow::after,
          .popover-info.bs-popover-auto[x-placement^="left"] .arrow::after {
            border-left-color: #11cdef;
          }

          .popover-warning {
            background-color: #fb6340;
          }

          .popover-warning .popover-header {
            background-color: #fb6340;
            color: #fff;
          }

          .popover-warning .popover-body {
            color: #fff;
          }

          .popover-warning .popover-header {
            border-color: rgba(255, 255, 255, 0.2);
          }

          .popover-warning.bs-popover-top .arrow::after,
          .popover-warning.bs-popover-auto[x-placement^="top"] .arrow::after {
            border-top-color: #fb6340;
          }

          .popover-warning.bs-popover-right .arrow::after,
          .popover-warning.bs-popover-auto[x-placement^="right"] .arrow::after {
            border-right-color: #fb6340;
          }

          .popover-warning.bs-popover-bottom .arrow::after,
          .popover-warning.bs-popover-auto[x-placement^="bottom"] .arrow::after {
            border-bottom-color: #fb6340;
          }

          .popover-warning.bs-popover-left .arrow::after,
          .popover-warning.bs-popover-auto[x-placement^="left"] .arrow::after {
            border-left-color: #fb6340;
          }

          .popover-danger {
            background-color: #f5365c;
          }

          .popover-danger .popover-header {
            background-color: #f5365c;
            color: #fff;
          }

          .popover-danger .popover-body {
            color: #fff;
          }

          .popover-danger .popover-header {
            border-color: rgba(255, 255, 255, 0.2);
          }

          .popover-danger.bs-popover-top .arrow::after,
          .popover-danger.bs-popover-auto[x-placement^="top"] .arrow::after {
            border-top-color: #f5365c;
          }

          .popover-danger.bs-popover-right .arrow::after,
          .popover-danger.bs-popover-auto[x-placement^="right"] .arrow::after {
            border-right-color: #f5365c;
          }

          .popover-danger.bs-popover-bottom .arrow::after,
          .popover-danger.bs-popover-auto[x-placement^="bottom"] .arrow::after {
            border-bottom-color: #f5365c;
          }

          .popover-danger.bs-popover-left .arrow::after,
          .popover-danger.bs-popover-auto[x-placement^="left"] .arrow::after {
            border-left-color: #f5365c;
          }

          .popover-light {
            background-color: #adb5bd;
          }

          .popover-light .popover-header {
            background-color: #adb5bd;
            color: #fff;
          }

          .popover-light .popover-body {
            color: #fff;
          }

          .popover-light .popover-header {
            border-color: rgba(255, 255, 255, 0.2);
          }

          .popover-light.bs-popover-top .arrow::after,
          .popover-light.bs-popover-auto[x-placement^="top"] .arrow::after {
            border-top-color: #adb5bd;
          }

          .popover-light.bs-popover-right .arrow::after,
          .popover-light.bs-popover-auto[x-placement^="right"] .arrow::after {
            border-right-color: #adb5bd;
          }

          .popover-light.bs-popover-bottom .arrow::after,
          .popover-light.bs-popover-auto[x-placement^="bottom"] .arrow::after {
            border-bottom-color: #adb5bd;
          }

          .popover-light.bs-popover-left .arrow::after,
          .popover-light.bs-popover-auto[x-placement^="left"] .arrow::after {
            border-left-color: #adb5bd;
          }

          .popover-dark {
            background-color: #212529;
          }

          .popover-dark .popover-header {
            background-color: #212529;
            color: #fff;
          }

          .popover-dark .popover-body {
            color: #fff;
          }

          .popover-dark .popover-header {
            border-color: rgba(255, 255, 255, 0.2);
          }

          .popover-dark.bs-popover-top .arrow::after,
          .popover-dark.bs-popover-auto[x-placement^="top"] .arrow::after {
            border-top-color: #212529;
          }

          .popover-dark.bs-popover-right .arrow::after,
          .popover-dark.bs-popover-auto[x-placement^="right"] .arrow::after {
            border-right-color: #212529;
          }

          .popover-dark.bs-popover-bottom .arrow::after,
          .popover-dark.bs-popover-auto[x-placement^="bottom"] .arrow::after {
            border-bottom-color: #212529;
          }

          .popover-dark.bs-popover-left .arrow::after,
          .popover-dark.bs-popover-auto[x-placement^="left"] .arrow::after {
            border-left-color: #212529;
          }

          .popover-default {
            background-color: #172b4d;
          }

          .popover-default .popover-header {
            background-color: #172b4d;
            color: #fff;
          }

          .popover-default .popover-body {
            color: #fff;
          }

          .popover-default .popover-header {
            border-color: rgba(255, 255, 255, 0.2);
          }

          .popover-default.bs-popover-top .arrow::after,
          .popover-default.bs-popover-auto[x-placement^="top"] .arrow::after {
            border-top-color: #172b4d;
          }

          .popover-default.bs-popover-right .arrow::after,
          .popover-default.bs-popover-auto[x-placement^="right"] .arrow::after {
            border-right-color: #172b4d;
          }

          .popover-default.bs-popover-bottom .arrow::after,
          .popover-default.bs-popover-auto[x-placement^="bottom"] .arrow::after {
            border-bottom-color: #172b4d;
          }

          .popover-default.bs-popover-left .arrow::after,
          .popover-default.bs-popover-auto[x-placement^="left"] .arrow::after {
            border-left-color: #172b4d;
          }

          .popover-white {
            background-color: #fff;
          }

          .popover-white .popover-header {
            background-color: #fff;
            color: #212529;
          }

          .popover-white .popover-body {
            color: #212529;
          }

          .popover-white .popover-header {
            border-color: rgba(33, 37, 41, 0.2);
          }

          .popover-white.bs-popover-top .arrow::after,
          .popover-white.bs-popover-auto[x-placement^="top"] .arrow::after {
            border-top-color: #fff;
          }

          .popover-white.bs-popover-right .arrow::after,
          .popover-white.bs-popover-auto[x-placement^="right"] .arrow::after {
            border-right-color: #fff;
          }

          .popover-white.bs-popover-bottom .arrow::after,
          .popover-white.bs-popover-auto[x-placement^="bottom"] .arrow::after {
            border-bottom-color: #fff;
          }

          .popover-white.bs-popover-left .arrow::after,
          .popover-white.bs-popover-auto[x-placement^="left"] .arrow::after {
            border-left-color: #fff;
          }

          .popover-neutral {
            background-color: #fff;
          }

          .popover-neutral .popover-header {
            background-color: #fff;
            color: #212529;
          }

          .popover-neutral .popover-body {
            color: #212529;
          }

          .popover-neutral .popover-header {
            border-color: rgba(33, 37, 41, 0.2);
          }

          .popover-neutral.bs-popover-top .arrow::after,
          .popover-neutral.bs-popover-auto[x-placement^="top"] .arrow::after {
            border-top-color: #fff;
          }

          .popover-neutral.bs-popover-right .arrow::after,
          .popover-neutral.bs-popover-auto[x-placement^="right"] .arrow::after {
            border-right-color: #fff;
          }

          .popover-neutral.bs-popover-bottom .arrow::after,
          .popover-neutral.bs-popover-auto[x-placement^="bottom"] .arrow::after {
            border-bottom-color: #fff;
          }

          .popover-neutral.bs-popover-left .arrow::after,
          .popover-neutral.bs-popover-auto[x-placement^="left"] .arrow::after {
            border-left-color: #fff;
          }

          .popover-darker {
            background-color: black;
          }

          .popover-darker .popover-header {
            background-color: black;
            color: #fff;
          }

          .popover-darker .popover-body {
            color: #fff;
          }

          .popover-darker .popover-header {
            border-color: rgba(255, 255, 255, 0.2);
          }

          .popover-darker.bs-popover-top .arrow::after,
          .popover-darker.bs-popover-auto[x-placement^="top"] .arrow::after {
            border-top-color: black;
          }

          .popover-darker.bs-popover-right .arrow::after,
          .popover-darker.bs-popover-auto[x-placement^="right"] .arrow::after {
            border-right-color: black;
          }

          .popover-darker.bs-popover-bottom .arrow::after,
          .popover-darker.bs-popover-auto[x-placement^="bottom"] .arrow::after {
            border-bottom-color: black;
          }

          .popover-darker.bs-popover-left .arrow::after,
          .popover-darker.bs-popover-auto[x-placement^="left"] .arrow::after {
            border-left-color: black;
          }

          .progress-wrapper {
            position: relative;
            padding-top: 1.5rem;
          }

          .progress {
            height: 8px;
            margin-bottom: 1rem;
            overflow: hidden;
            border-radius: 0.25rem;
            background-color: #e9ecef;
            box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
          }

          .progress .sr-only {
            width: auto;
            height: 20px;
            margin: 0 0 0 30px;
            left: 0;
            clip: auto;
            line-height: 20px;
            font-size: 13px;
          }

          .progress-heading {
            font-size: 14px;
            font-weight: 500;
            margin: 0 0 2px;
            padding: 0;
          }

          .progress-bar {
            box-shadow: none;
            border-radius: 0;
            height: auto;
          }

          .progress-info {
            margin-bottom: .5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .progress-label span {
            display: inline-block;
            color: #5e72e4;
            font-size: .625rem;
            font-weight: 600;
            text-transform: uppercase;
            background: rgba(94, 114, 228, 0.1);
            padding: .25rem 1rem;
            border-radius: 30px;
          }

          .progress-percentage {
            text-align: right;
          }

          .progress-percentage span {
            display: inline-block;
            color: #8898aa;
            font-size: .875rem;
            font-weight: 600;
          }

          .separator {
            position: absolute;
            top: auto;
            left: 0;
            right: 0;
            width: 100%;
            height: 150px;
            transform: translateZ(0);
            overflow: hidden;
            pointer-events: none;
          }

          .separator svg {
            position: absolute;
            pointer-events: none;
          }

          .separator-top {
            top: 0;
            bottom: auto;
          }

          .separator-top svg {
            top: 0;
          }

          .separator-bottom {
            top: auto;
            bottom: 0;
          }

          .separator-bottom svg {
            bottom: 0;
          }

          .separator-inverse {
            transform: rotate(180deg);
          }

          .separator-skew {
            height: 60px;
          }

          @media (min-width: 1200px) {
            .separator-skew {
              height: 70px;
            }
          }

          .table thead th {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            font-size: 0.65rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-bottom: 1px solid #e9ecef;
          }

          .table th {
            font-weight: 600;
          }

          .table td .progress {
            height: 3px;
            width: 120px;
            margin: 0;
          }

          .table td,
          .table th {
            font-size: 0.8125rem;
            white-space: nowrap;
          }

          .table.align-items-center td,
          .table.align-items-center th {
            vertical-align: middle;
          }

          .table .thead-dark th {
            background-color: #1c345d;
            color: #4d7bca;
          }

          .table .thead-light th {
            background-color: #f6f9fc;
            color: #8898aa;
          }

          .table-hover tr {
            transition: all 0.15s ease;
          }

          @media screen and (prefers-reduced-motion: reduce) {
            .table-hover tr {
              transition: none;
            }
          }

          .table-flush td,
          .table-flush th {
            border-left: 0;
            border-right: 0;
          }

          .table-flush tbody tr:first-child td,
          .table-flush tbody tr:first-child th {
            border-top: 0;
          }

          .table-flush tbody tr:last-child td,
          .table-flush tbody tr:last-child th {
            border-bottom: 0;
          }

          .card .table {
            margin-bottom: 0;
          }

          .card .table td,
          .card .table th {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          p {
            font-size: 1rem;
            font-weight: 300;
            line-height: 1.7;
          }

          .lead {
            font-size: 1.25rem;
            font-weight: 300;
            line-height: 1.7;
            margin-top: 1.5rem;
          }

          .lead+.btn-wrapper {
            margin-top: 3rem;
          }


          .description {
            font-size: 0.875rem;
          }

          .heading {
            letter-spacing: 0.025em;
            font-size: 0.95rem;
            text-transform: uppercase;
            font-weight: 600;
          }

          .heading-small {
            padding-top: .25rem;
            padding-bottom: .25rem;
            font-size: .75rem;
            text-transform: uppercase;
            letter-spacing: .04em;
          }

          .heading-title {
            letter-spacing: 0.025em;
            font-size: 1.375rem;
            font-weight: 600;
            text-transform: uppercase;
          }

          .heading-section {
            letter-spacing: 0.025em;
            font-size: 1.375rem;
            font-weight: 600;
            text-transform: uppercase;
          }

          .heading-section img {
            display: block;
            width: 72px;
            height: 72px;
            margin-bottom: 1.5rem;
          }

          .heading-section.text-center img {
            margin-left: auto;
            margin-right: auto;
          }

          .display-1 span,
          .display-2 span,
          .display-3 span,
          .display-4 span {
            display: block;
            font-weight: 300;
          }

          article h4:not(:first-child),
          article h5:not(:first-child) {
            margin-top: 3rem;
          }

          article h4,
          article h5 {
            margin-bottom: 1.5rem;
          }

          article figure {
            margin: 3rem 0;
          }

          article h5+figure {
            margin-top: 0;
          }

          .datepicker {
            border-radius: 0.375rem;
            direction: ltr;
          }

          .datepicker-inline {
            width: 220px;
          }

          .datepicker-rtl {
            direction: rtl;
          }

          .datepicker-rtl.dropdown-menu {
            left: auto;
          }

          .datepicker-rtl table tr td span {
            float: right;
          }

          .datepicker-dropdown {
            top: 0;
            left: 0;
            padding: 20px 22px;
            box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
          }

          .datepicker-dropdown.datepicker-orient-left:before {
            left: 6px;
          }

          .datepicker-dropdown.datepicker-orient-left:after {
            left: 7px;
          }

          .datepicker-dropdown.datepicker-orient-right:before {
            right: 6px;
          }

          .datepicker-dropdown.datepicker-orient-right:after {
            right: 7px;
          }

          .datepicker-dropdown.datepicker-orient-bottom:before {
            top: -7px;
          }

          .datepicker-dropdown.datepicker-orient-bottom:after {
            top: -6px;
          }

          .datepicker-dropdown.datepicker-orient-top:before {
            bottom: -7px;
            border-bottom: 0;
            border-top: 7px solid white;
          }

          .datepicker-dropdown.datepicker-orient-top:after {
            bottom: -6px;
            border-bottom: 0;
            border-top: 6px solid #fff;
          }

          .datepicker table {
            margin: 0;
            -webkit-touch-callout: none;
            user-select: none;
          }

          .datepicker table tr td {
            border-radius: 50%;
          }

          .datepicker table tr th {
            border-radius: 0.375rem;
            font-weight: 500;
          }

          .datepicker table tr td,
          .datepicker table tr th {
            transition: all 0.15s ease;
            width: 36px;
            height: 36px;
            border: none;
            text-align: center;
            font-size: 0.875rem;
          }

          .table-striped .datepicker table tr td,
          .table-striped .datepicker table tr th {
            background-color: transparent;
          }

          .datepicker table tr td.old,
          .datepicker table tr td.new {
            color: #adb5bd;
          }

          .datepicker table tr td.day:hover,
          .datepicker table tr td.focused {
            background: white;
            cursor: pointer;
          }

          .datepicker table tr td.disabled,
          .datepicker table tr td.disabled:hover {
            background: none;
            color: #dee2e6;
            cursor: default;
          }

          .datepicker table tr td.highlighted {
            border-radius: 0;
          }

          .datepicker table tr td.highlighted.focused {
            background: #5e72e4;
          }

          .datepicker table tr td.highlighted.disabled,
          .datepicker table tr td.highlighted.disabled:active {
            background: #5e72e4;
            color: #ced4da;
          }

          .datepicker table tr td.today {
            background: white;
          }

          .datepicker table tr td.today.focused {
            background: white;
          }

          .datepicker table tr td.today.disabled,
          .datepicker table tr td.today.disabled:active {
            background: white;
            color: #8898aa;
          }

          .datepicker table tr td.range {
            background: #5e72e4;
            color: #fff;
            border-radius: 0;
          }

          .datepicker table tr td.range.focused {
            background: #3b53de;
          }

          .datepicker table tr td.range.disabled,
          .datepicker table tr td.range.disabled:active,
          .datepicker table tr td.range.day.disabled:hover {
            background: #324cdd;
            color: #8a98eb;
          }

          .datepicker table tr td.range.highlighted.focused {
            background: #cbd3da;
          }

          .datepicker table tr td.range.highlighted.disabled,
          .datepicker table tr td.range.highlighted.disabled:active {
            background: #e9ecef;
            color: #dee2e6;
          }

          .datepicker table tr td.range.today.disabled,
          .datepicker table tr td.range.today.disabled:active {
            background: #5e72e4;
            color: #fff;
          }

          .datepicker table tr td.day.range-start {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }

          .datepicker table tr td.day.range-end {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }

          .datepicker table tr td.day.range-start.range-end {
            border-radius: 50%;
          }

          .datepicker table tr td.selected,
          .datepicker table tr td.selected.highlighted,
          .datepicker table tr td.selected:hover,
          .datepicker table tr td.selected.highlighted:hover,
          .datepicker table tr td.day.range:hover {
            background: #5e72e4;
            color: #fff;
          }

          .datepicker table tr td.active,
          .datepicker table tr td.active.highlighted,
          .datepicker table tr td.active:hover,
          .datepicker table tr td.active.highlighted:hover {
            background: #5e72e4;
            color: #fff;
            box-shadow: none;
          }

          .datepicker table tr td span {
            display: block;
            width: 23%;
            height: 54px;
            line-height: 54px;
            float: left;
            margin: 1%;
            cursor: pointer;
            border-radius: 4px;
          }

          .datepicker table tr td span:hover,
          .datepicker table tr td span.focused {
            background: #e9ecef;
          }

          .datepicker table tr td span.disabled,
          .datepicker table tr td span.disabled:hover {
            background: none;
            color: #dee2e6;
            cursor: default;
          }

          .datepicker table tr td span.active,
          .datepicker table tr td span.active:hover,
          .datepicker table tr td span.active.disabled,
          .datepicker table tr td span.active.disabled:hover {
            text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
          }

          .datepicker table tr td span.old,
          .datepicker table tr td span.new {
            color: #8898aa;
          }

          .datepicker .datepicker-switch {
            width: 145px;
          }

          .datepicker .datepicker-switch,
          .datepicker .prev,
          .datepicker .next,
          .datepicker tfoot tr th {
            cursor: pointer;
          }

          .datepicker .datepicker-switch:hover,
          .datepicker .prev:hover,
          .datepicker .next:hover,
          .datepicker tfoot tr th:hover {
            background: #e9ecef;
          }

          .datepicker .prev.disabled,
          .datepicker .next.disabled {
            visibility: hidden;
          }


          .datepicker .cw {
            font-size: 10px;
            width: 12px;
            padding: 0 2px 0 5px;
            vertical-align: middle;
          }

          /*! nouislider - 14.0.1 - 6/21/2019 */
          /* Functional styling;
           * These styles are required for noUiSlider to function.
           * You don't need to change these rules to apply your design.
           */
          .noUi-target,
          .noUi-target * {
            -webkit-touch-callout: none;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-user-select: none;
            -ms-touch-action: none;
            touch-action: none;
            -ms-user-select: none;
            -moz-user-select: none;
            user-select: none;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
          }

          .noUi-target {
            position: relative;
            direction: ltr;
          }

          .noUi-base,
          .noUi-connects {
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 1;
          }

          /* Wrapper for all connect elements.
           */
          .noUi-connects {
            overflow: hidden;
            z-index: 0;
          }

          .noUi-connect,
          .noUi-origin {
            will-change: transform;
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            -ms-transform-origin: 0 0;
            -webkit-transform-origin: 0 0;
            -webkit-transform-style: preserve-3d;
            transform-origin: 0 0;
            transform-style: flat;
          }

          .noUi-connect {
            height: 100%;
            width: 100%;
          }

          .noUi-origin {
            height: 10%;
            width: 10%;
          }

          /* Offset direction
           */
          html:not([dir="rtl"]) .noUi-horizontal .noUi-origin {
            left: auto;
            right: 0;
          }

          /* Give origins 0 height/width so they don't interfere with clicking the
           * connect elements.
           */
          .noUi-vertical .noUi-origin {
            width: 0;
          }

          .noUi-horizontal .noUi-origin {
            height: 0;
          }

          .noUi-handle {
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            position: absolute;
          }

          .noUi-touch-area {
            height: 100%;
            width: 100%;
          }

          .noUi-state-tap .noUi-connect,
          .noUi-state-tap .noUi-origin {
            -webkit-transition: transform 0.3s;
            transition: transform 0.3s;
          }

          .noUi-state-drag * {
            cursor: inherit !important;
          }

          /* Slider size and handle placement;
           */
          .noUi-horizontal {
            height: 18px;
          }

          .noUi-horizontal .noUi-handle {
            width: 34px;
            height: 28px;
            left: -17px;
            top: -6px;
          }

          .noUi-vertical {
            width: 18px;
          }

          .noUi-vertical .noUi-handle {
            width: 28px;
            height: 34px;
            left: -6px;
            top: -17px;
          }

          html:not([dir="rtl"]) .noUi-horizontal .noUi-handle {
            right: -17px;
            left: auto;
          }

          /* Styling;
           * Giving the connect element a border radius causes issues with using transform: scale
           */
          .noUi-target {
            background: #FAFAFA;
            border-radius: 4px;
            border: 1px solid #D3D3D3;
            box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;
          }

          .noUi-connects {
            border-radius: 3px;
          }

          .noUi-connect {
            background: #3FB8AF;
          }

          /* Handles and cursors;
           */
          .noUi-draggable {
            cursor: ew-resize;
          }

          .noUi-vertical .noUi-draggable {
            cursor: ns-resize;
          }

          .noUi-handle {
            border: 1px solid #D9D9D9;
            border-radius: 3px;
            background: #FFF;
            cursor: default;
            box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;
          }

          .noUi-active {
            box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;
          }

          /* Handle stripes;
           */
          .noUi-handle:before,
          .noUi-handle:after {
            content: "";
            display: block;
            position: absolute;
            height: 14px;
            width: 1px;
            background: #E8E7E6;
            left: 14px;
            top: 6px;
          }

          .noUi-handle:after {
            left: 17px;
          }

          .noUi-vertical .noUi-handle:before,
          .noUi-vertical .noUi-handle:after {
            width: 14px;
            height: 1px;
            left: 6px;
            top: 14px;
          }

          .noUi-vertical .noUi-handle:after {
            top: 17px;
          }

          /* Disabled state;
           */
          [disabled] .noUi-connect {
            background: #B8B8B8;
          }

          [disabled].noUi-target,
          [disabled].noUi-handle,
          [disabled] .noUi-handle {
            cursor: not-allowed;
          }

          /* Base;
           *
           */
          .noUi-pips,
          .noUi-pips * {
            -moz-box-sizing: border-box;
            box-sizing: border-box;
          }

          .noUi-pips {
            position: absolute;
            color: #999;
          }

          /* Values;
           *
           */
          .noUi-value {
            position: absolute;
            white-space: nowrap;
            text-align: center;
          }

          .noUi-value-sub {
            color: #ccc;
            font-size: 10px;
          }

          /* Markings;
           *
           */
          .noUi-marker {
            position: absolute;
            background: #CCC;
          }

          .noUi-marker-sub {
            background: #AAA;
          }

          .noUi-marker-large {
            background: #AAA;
          }

          /* Horizontal layout;
           *
           */
          .noUi-pips-horizontal {
            padding: 10px 0;
            height: 80px;
            top: 100%;
            left: 0;
            width: 100%;
          }

          .noUi-value-horizontal {
            -webkit-transform: translate(-50%, 50%);
            transform: translate(-50%, 50%);
          }

          .noUi-rtl .noUi-value-horizontal {
            -webkit-transform: translate(50%, 50%);
            transform: translate(50%, 50%);
          }

          .noUi-marker-horizontal.noUi-marker {
            margin-left: -1px;
            width: 2px;
            height: 5px;
          }

          .noUi-marker-horizontal.noUi-marker-sub {
            height: 10px;
          }

          .noUi-marker-horizontal.noUi-marker-large {
            height: 15px;
          }

          /* Vertical layout;
           *
           */
          .noUi-pips-vertical {
            padding: 0 10px;
            height: 100%;
            top: 0;
            left: 100%;
          }

          .noUi-value-vertical {
            -webkit-transform: translate(0, -50%);
            transform: translate(0, -50%);
            padding-left: 25px;
          }

          .noUi-rtl .noUi-value-vertical {
            -webkit-transform: translate(0, 50%);
            transform: translate(0, 50%);
          }

          .noUi-marker-vertical.noUi-marker {
            width: 5px;
            height: 2px;
            margin-top: -1px;
          }

          .noUi-marker-vertical.noUi-marker-sub {
            width: 10px;
          }

          .noUi-marker-vertical.noUi-marker-large {
            width: 15px;
          }

          .noUi-tooltip {
            display: block;
            position: absolute;
            border: 1px solid #D9D9D9;
            border-radius: 3px;
            background: #fff;
            color: #000;
            padding: 5px;
            text-align: center;
            white-space: nowrap;
          }

          .noUi-horizontal .noUi-tooltip {
            -webkit-transform: translate(-50%, 0);
            transform: translate(-50%, 0);
            left: 50%;
            bottom: 120%;
          }

          .noUi-vertical .noUi-tooltip {
            -webkit-transform: translate(0, -50%);
            transform: translate(0, -50%);
            top: 50%;
            right: 120%;
          }

          .noUi-target {
            background: #eceeef;
            border-radius: 5px;
            border: 0;
            box-shadow: inset 0 1px 2px rgba(90, 97, 105, 0.1);
            margin: 15px 0;
            cursor: pointer;
          }

          .noUi-horizontal {
            height: 5px;
          }

          html:not([dir="rtl"]) .noUi-horizontal .noUi-handle {
            right: -10px;
          }

          .noUi-vertical {
            width: 5px;
          }

          .noUi-connect {
            background: #5e72e4;
            box-shadow: none;
          }

          .noUi-handle:after,
          .noUi-handle:before {
            content: none;
          }

          .noUi-handle:focus {
            outline: none;
          }

          .noUi-horizontal .noUi-handle,
          .noUi-vertical .noUi-handle {
            top: -5px;
            width: 15px;
            height: 15px;
            border-radius: 100%;
            box-shadow: none;
            cursor: pointer;
            background-color: #5e72e4;
            border: 0;
            transition: box-shadow .15s, transform .15s;
          }

          .noUi-horizontal .noUi-handle.noUi-active,
          .noUi-vertical .noUi-handle.noUi-active {
            box-shadow: 0px 0px 0px 2px #5e72e4;
          }

          .input-slider--cyan .noUi-connect {
            background: #2bffc6;
          }

          /* Disabled state */
          [disabled] .noUi-connect,
          [disabled].noUi-connect {
            background: #b2b2b2;
          }

          [disabled] .noUi-handle,
          [disabled].noUi-origin {
            cursor: not-allowed;
          }

          /* Range slider value labels */
          .range-slider-value {
            font-size: 0.75rem;
            font-weight: 500;
            background-color: rgba(33, 37, 41, 0.7);
            color: #fff;
            border-radius: 10px;
            padding: .4em .8em .3em .85em;
          }

          .range-slider-wrapper .upper-info {
            font-weight: 400;
            margin-bottom: 5px;
          }

          .input-slider-value-output {
            background: #333;
            color: #fff;
            padding: 4px 8px;
            position: relative;
            top: 12px;
            font-size: 11px;
            border-radius: 2px;
          }

          .input-slider-value-output:after {
            bottom: 100%;
            left: 10px;
            border: solid transparent;
            content: " ";
            height: 0;
            width: 0;
            position: absolute;
            pointer-events: none;
            border-color: rgba(136, 183, 213, 0);
            border-bottom-color: #333;
            border-width: 4px;
            margin-left: -4px;
          }

          .input-slider-value-output.left:after {
            left: 10px;
            right: auto;
          }

          .input-slider-value-output.right:after {
            right: 10px;
            left: auto;
          }

          .scrollbar-inner {
            height: 100%;
          }

          .scrollbar-inner:not(:hover) .scroll-element {
            opacity: 0;
          }

          .scrollbar-inner .scroll-element {
            transition: opacity 300ms;
            margin-right: 2px;
          }

          .scrollbar-inner .scroll-element .scroll-bar,
          .scrollbar-inner .scroll-element .scroll-element_track {
            transition: background-color 300ms;
          }

          .scrollbar-inner .scroll-element .scroll-element_track {
            background-color: transparent;
          }

          .scrollbar-inner .scroll-element.scroll-y {
            width: 3px;
            right: 0;
          }

          .scrollbar-inner .scroll-element.scroll-x {
            height: 3px;
            bottom: 0;
          }

          .ct-navbar {
            background-color: #5e72e4;
            box-shadow: rgba(116, 129, 141, 0.1) 0px 1px 1px 0px;
            padding-top: .5rem;
            padding-bottom: .5rem;
          }

          @media (max-width: 991.98px) {
            .ct-navbar {
              padding-right: .5rem;
              padding-left: .5rem;
            }

            .ct-navbar .navbar-nav-scroll {
              max-width: 100%;
              height: 2.5rem;
              margin-top: .25rem;
              overflow: hidden;
              font-size: .875rem;
            }

            .ct-navbar .navbar-nav-scroll .navbar-nav {
              padding-bottom: 2rem;
              overflow-x: auto;
              white-space: nowrap;
              -webkit-overflow-scrolling: touch;
            }
          }

          @media (min-width: 768px) {
            @supports (position: sticky) {
              .ct-navbar {
                position: sticky;
                top: 0;
                z-index: 1071;
              }
            }
          }

          .ct-navbar .navbar-nav .nav-link {
            padding-right: .5rem;
            padding-left: .5rem;
            color: rgba(255, 255, 255, 0.9) !important;
          }

          .ct-navbar .navbar-nav .nav-link.active,
          .ct-navbar .navbar-nav .nav-link:hover {
            color: #fff !important;
            background-color: transparent !important;
          }

          .ct-navbar .navbar-nav .nav-link.active {
            font-weight: 500;
          }

          .ct-navbar .navbar-nav-svg {
            display: inline-block;
            width: 1rem;
            height: 1rem;
            vertical-align: text-top;
          }

          .ct-navbar .dropdown-menu {
            font-size: .875rem;
          }

          .ct-navbar .dropdown-item.active {
            font-weight: 500;
            color: #212529;
            background-color: transparent;
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23292b2c' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: .4rem .87rem;
            background-size: .75rem .75rem;
            padding-left: 25px;
          }
          .github-corner {
            position: fixed;
            right: 0;
            z-index: 1080;
          }

          .github-corner:hover .octo-arm {
            animation: octocat-wave 560ms ease-in-out;
          }

          .github-corner svg {
            fill: #fff;
            color: #5e72e4;
          }

          @keyframes octocat-wave {

            0%,
            100% {
              transform: rotate(0);
            }

            20%,
            60% {
              transform: rotate(-25deg);
            }

            40%,
            80% {
              transform: rotate(10deg);
            }
          }

          .ct-clipboard {
            position: relative;
            display: none;
            float: right;
          }

          .ct-clipboard+.highlight {
            margin-top: 0;
          }

          .btn-clipboard {
            position: absolute;
            top: 1rem;
            right: 1rem;
            z-index: 10;
            display: block;
            padding: .25rem .5rem;
            font-size: 75%;
            cursor: pointer;
            background-color: transparent;
            border: 0;
            border-radius: .25rem;
            color: #fff;
            background-color: #5e72e4;
          }

          .btn-clipboard:hover {
            color: #fff;
            background-color: #324cdd;
          }

          @media (min-width: 768px) {
            .ct-clipboard {
              display: block;
            }
          }

          .ct-example-row .row>.col span,
          .ct-example-row .row>[class^="col-"] span {
            display: block;
            padding: .75rem;
            color: #393f49;
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 16px;
            font-size: 0.875rem;
            border-radius: .25rem;
            margin: 1rem 0;
          }


          .ct-example-row .no-gutters>.col span,
          .ct-example-row .no-gutters>[class^="col-"] span {
            border-radius: 0;
          }

          .ct-example-row .flex-items-top,
          .ct-example-row .flex-items-middle,
          .ct-example-row .flex-items-bottom {
            min-height: 6rem;
            background-color: rgba(255, 0, 0, 0.1);
          }

          .ct-example-row-flex-cols .row {
            min-height: 10rem;
            background-color: rgba(255, 0, 0, 0.1);
          }

          .ct-example-row-flex-cols .row+.row {
            margin-top: 1rem;
          }

          .ct-highlight {
            background-color: rgba(94, 114, 228, 0.15);
            border: 1px solid rgba(94, 114, 228, 0.15);
          }

          .example-container {
            width: 800px;
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
          }

          .example-row {
            display: flex;
            flex-wrap: wrap;
            margin-right: -15px;
            margin-left: -15px;
          }

          .example-content-main {
            position: relative;
            width: 100%;
            min-height: 1px;
            padding-right: 15px;
            padding-left: 15px;
          }

          @media (min-width: 576px) {
            .example-content-main {
              flex: 0 0 50%;
              max-width: 50%;
            }
          }

          @media (min-width: 992px) {
            .example-content-main {
              flex: 0 0 66.666667%;
              max-width: 66.666667%;
            }
          }

          .example-content-secondary {
            position: relative;
            width: 100%;
            min-height: 1px;
            padding-right: 15px;
            padding-left: 15px;
          }

          @media (min-width: 576px) {
            .example-content-secondary {
              flex: 0 0 50%;
              max-width: 50%;
            }
          }

          @media (min-width: 992px) {
            .example-content-secondary {
              flex: 0 0 33.333333%;
              max-width: 33.333333%;
            }
          }

          .ct-example-container {
            min-width: 16rem;
            max-width: 25rem;
            margin-right: auto;
            margin-left: auto;
          }

          .ct-example-container-header {
            height: 3rem;
            margin-bottom: .5rem;
            background-color: white;
            border-radius: .25rem;
          }

          .ct-example-container-sidebar {
            float: right;
            width: 4rem;
            height: 8rem;
            background-color: #cbd2f6;
            border-radius: .25rem;
          }

          .ct-example-container-body {
            height: 8rem;
            margin-right: 4.5rem;
            background-color: #cbd2f6;
            border-radius: .25rem;
          }

          .ct-example-container-fluid {
            max-width: none;
          }

          .ct-example {
            position: relative;
            margin: 1rem -15px 0;
          }

          .ct-example::after {
            display: block;
            clear: both;
            content: "";
          }

          @media (min-width: 576px) {
            .ct-example {
              margin-right: 0;
              margin-left: 0;
            }
          }

          .ct-example+.highlight,
          .ct-example+.clipboard+.highlight {
            margin-top: 0;
          }

          .ct-example+p {
            margin-top: 2rem;
          }

          .ct-example .pos-f-t {
            position: relative;
            margin: -1rem;
          }

          @media (min-width: 576px) {
            .ct-example .pos-f-t {
              margin: -1.5rem;
            }
          }

          .ct-example .custom-file-input:lang(es)~.custom-file-label::after {
            content: "Elegir";
          }

          .ct-example>.form-control+.form-control {
            margin-top: .5rem;
          }

          .ct-example>.nav+.nav,
          .ct-example>.alert+.alert,
          .ct-example>.navbar+.navbar,
          .ct-example>.progress+.progress,
          .ct-example>.progress+.btn,
          .ct-example .badge,
          .ct-example .btn {
            margin-top: .5rem;
            margin-bottom: .5rem;
          }

          .ct-example .btn-group {
            margin-top: .5rem;
            margin-bottom: .5rem;
          }

          .ct-example .btn-group .btn {
            margin: 0;
          }

          .ct-example .alert {
            margin: 0;
          }

          .ct-example .alert+.alert {
            margin-top: 1.25rem;
          }

          .ct-example .badge {
            margin-right: .5rem;
          }

          .ct-example>.dropdown-menu:first-child {
            position: static;
            display: block;
          }

          .ct-example>.form-group:last-child {
            margin-bottom: 0;
          }

          .ct-example>.close {
            float: none;
          }

          .ct-example-type .table .type-info {
            color: #999;
            vertical-align: middle;
          }

          .ct-example-type .table td {
            padding: 1rem 0;
            border-color: #eee;
          }

          .ct-example-type .table tr:first-child td {
            border-top: 0;
          }

          .ct-example-type h1,
          .ct-example-type h2,
          .ct-example-type h3,
          .ct-example-type h4,
          .ct-example-type h5,
          .ct-example-type h6 {
            margin-top: 0;
            margin-bottom: 0;
          }

          .ct-example-bg-classes p {
            padding: 1rem;
          }

          .ct-example>img+img {
            margin-left: .5rem;
          }

          .ct-example>.btn-group {
            margin-top: .25rem;
            margin-bottom: .25rem;
          }

          .ct-example>.btn-toolbar+.btn-toolbar {
            margin-top: .5rem;
          }

          .ct-example-control-sizing select,
          .ct-example-control-sizing input[type="text"]+input[type="text"] {
            margin-top: .5rem;
          }
          .ct-example-form .input-group {
            margin-bottom: .5rem;
          }

          .ct-example>textarea.form-control {
            resize: vertical;
          }

          .ct-example>.list-group {
            max-width: 400px;
          }

          .ct-example .fixed-top,
          .ct-example .sticky-top {
            position: static;
            margin: -1rem -1rem 1rem;
          }

          .ct-example .fixed-bottom {
            position: static;
            margin: 1rem -1rem -1rem;
          }

          @media (min-width: 576px) {

            .ct-example .fixed-top,
            .ct-example .sticky-top {
              margin: -1.5rem -1.5rem 1rem;
            }

            .ct-example .fixed-bottom {
              margin: 1rem -1.5rem -1.5rem;
            }
          }

          .ct-example .pagination {
            margin-top: .5rem;
            margin-bottom: .5rem;
          }

          .modal {
            z-index: 1072;
          }

          .modal .tooltip,
          .modal .popover {
            z-index: 1073;
          }
          .modal-backdrop {
            z-index: 1071;
          }

          .ct-example-modal {
            background-color: #fafafa;
          }

          .ct-example-modal .modal {
            position: relative;
            top: auto;
            right: auto;
            bottom: auto;
            left: auto;
            z-index: 1;
            display: block;
          }

          .ct-example-modal .modal-dialog {
            left: auto;
            margin-right: auto;
            margin-left: auto;
          }

          .ct-example-tabs .nav-tabs {
            margin-bottom: 1rem;
          }

          .ct-example-popover-static {
            padding-bottom: 1.5rem;
            background-color: #f9f9f9;
          }

          .ct-example-popover-static .popover {
            position: relative;
            display: block;
            float: left;
            width: 260px;
            margin: 1.25rem;
          }

          .tooltip-demo a {
            white-space: nowrap;
          }

          .ct-example-tooltip-static .tooltip {
            position: relative;
            display: inline-block;
            margin: 10px 20px;
            opacity: 1;
          }

          .scrollspy-example {
            position: relative;
            height: 200px;
            margin-top: .5rem;
            overflow: auto;
          }

          .scrollspy-example-2 {
            position: relative;
            height: 350px;
            overflow: auto;
          }

          .ct-example-border-utils [class^="border"] {
            display: inline-block;
            width: 5rem;
            height: 5rem;
            margin: .25rem;
            background-color: #f5f5f5;
          }

          .ct-example-border-utils-0 [class^="border"] {
            border: 1px solid #e9ecef;
          }

          .highlight {
            padding: 0;
            margin-top: 1rem;
            -ms-overflow-style: -ms-autohiding-scrollbar;
          }

          @media (min-width: 576px) {
            .highlight {
              padding: 0;
            }
          }

          .ct-content .highlight {
            margin-right: -15px;
            margin-left: -15px;
          }

          @media (min-width: 576px) {
            .ct-content .highlight {
              margin-right: 0;
              margin-left: 0;
            }
          }

          .ct-example {
            margin-bottom: 2rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid #e9ecef;
          }

          .ct-example .tab-content .tab-example-result {
            background-color: #f5f7f9;
            border: 1px solid #e6ecf1;
            padding: 1.25rem;
            border-radius: .25rem;
          }

          .ct-example .nav-tabs-code {
            margin-bottom: .375rem;
          }

          .ct-example .nav-tabs-code .nav-link {
            font-size: .875rem;
          }

          .ct-example .nav-tabs-code .nav-link:active,
          .ct-example .nav-tabs-code .nav-link.active {
            color: #5e72e4;
          }

          .icon-examples {
            margin-top: 1rem;
          }

          .btn-icon-clipboard {
            margin: 0px;
            padding: 24px;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.25;
            color: #393f49;
            background-color: #f8f9fa;
            border-radius: 4px;
            border: 0px none;
            text-align: left;
            font-family: inherit;
            display: inline-block;
            vertical-align: middle;
            text-decoration: none;
            -moz-appearance: none;
            cursor: pointer;
            width: 100%;
            margin: .5rem 0;
          }

          .btn-icon-clipboard:hover {
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 16px;
          }

          .btn-icon-clipboard>div {
            align-items: center;
            display: flex;
          }

          .btn-icon-clipboard i {
            box-sizing: content-box;
            color: #393f49;
            vertical-align: middle;
            font-size: 1.5rem;
          }

          .btn-icon-clipboard span {
            display: inline-block;
            font-size: .875rem;
            line-height: 1.5;
            color: #393f49;
            margin-left: 16px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            vertical-align: middle;
          }

          code[class*="language-"],
          pre[class*="language-"] {
            font-family: Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace;
            font-size: 14px;
            line-height: 1.375;
            direction: ltr;
            text-align: left;
            white-space: pre;
            word-spacing: normal;
            word-break: normal;
            -moz-tab-size: 4;
            -o-tab-size: 4;
            tab-size: 4;
            -webkit-hyphens: none;
            -moz-hyphens: none;
            -ms-hyphens: none;
            hyphens: none;
            background: #f5f7ff;
            color: #5e6687;
            border-radius: .25rem;
          }

          pre[class*="language-"]::-moz-selection,
          pre[class*="language-"] ::-moz-selection,
          code[class*="language-"]::-moz-selection,
          code[class*="language-"] ::-moz-selection {
            text-shadow: none;
            background: #dfe2f1;
          }

          pre[class*="language-"]::selection,
          pre[class*="language-"] ::selection,
          code[class*="language-"]::selection,
          code[class*="language-"] ::selection {
            text-shadow: none;
            background: #dfe2f1;
          }

          /* Code blocks */
          pre[class*="language-"] {
            padding: 1.25rem;
            margin: 0;
            overflow: auto;
          }

          /* Inline code */
          :not(pre)>code[class*="language-"] {
            padding: .1em;
            border-radius: .3em;
          }

          .token.comment,
          .token.prolog,
          .token.doctype,
          .token.cdata {
            color: #898ea4;
          }

          .token.punctuation {
            color: #5e6687;
          }

          .token.namespace {
            opacity: .7;
          }

          .token.operator,
          .token.boolean,
          .token.number {
            color: #c76b29;
          }

          .token.property {
            color: #c08b30;
          }

          .token.tag {
            color: #3d8fd1;
          }

          .token.string {
            color: #22a2c9;
          }

          .token.selector {
            color: #6679cc;
          }

          .token.attr-name {
            color: #c76b29;
          }

          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #22a2c9;
          }

          .token.attr-value,
          .token.keyword,
          .token.control,
          .token.directive,
          .token.unit {
            color: #ac9739;
          }

          .token.statement,
          .token.regex,
          .token.atrule {
            color: #22a2c9;
          }

          .token.placeholder,
          .token.variable {
            color: #3d8fd1;
          }

          .token.deleted {
            text-decoration: line-through;
          }

          .token.inserted {
            border-bottom: 1px dotted #202746;
            text-decoration: none;
          }

          .token.italic {
            font-style: italic;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.important {
            color: #c94922;
          }

          .token.entity {
            cursor: help;
          }

          pre>code.highlight {
            outline: 0.4em solid #c94922;
            outline-offset: .4em;
          }

          /* overrides color-values for the Line Numbers plugin
           * http://prismjs.com/plugins/line-numbers/
           */
          .line-numbers .line-numbers-rows {
            border-right-color: #dfe2f1;
          }

          .line-numbers-rows>span:before {
            color: #979db4;
          }

          /* overrides color-values for the Line Highlight plugin
           * http://prismjs.com/plugins/line-highlight/
           */
          .line-highlight {
            background: rgba(107, 115, 148, 0.2);
            background: -webkit-linear-gradient(left, rgba(107, 115, 148, 0.2) 70%, rgba(107, 115, 148, 0));
            background: linear-gradient(to right, rgba(107, 115, 148, 0.2) 70%, rgba(107, 115, 148, 0));
          }

          .docs {
            background: #FFF;
          }

          .docs h6 {
            font-size: 1rem;
            font-weight: 600;
          }

          .ct-content {
            order: 1;
          }

          .ct-content>h2[id],
          .ct-content>h3[id],
          .ct-content>h4[id] {
            pointer-events: none;
          }

          .ct-content>h2[id]>div,
          .ct-content>h2[id]>a,
          .ct-content>h3[id]>div,
          .ct-content>h3[id]>a,
          .ct-content>h4[id]>div,
          .ct-content>h4[id]>a {
            pointer-events: auto;
          }

          .ct-content>h2[id]::before,
          .ct-content>h3[id]::before,
          .ct-content>h4[id]::before {
            display: block;
            height: 6rem;
            margin-top: -6rem;
            visibility: hidden;
            content: "";
          }

          .ct-content>table {
            width: 100%;
            max-width: 100%;
            margin-bottom: 1rem;
          }

          @media (max-width: 991.98px) {
            .ct-content>table {
              display: block;
              overflow-x: auto;
              -ms-overflow-style: -ms-autohiding-scrollbar;
            }

            .ct-content>table.table-bordered {
              border: 0;
            }
          }

          .ct-content>table>thead>tr>th,
          .ct-content>table>thead>tr>td,
          .ct-content>table>tbody>tr>th,
          .ct-content>table>tbody>tr>td,
          .ct-content>table>tfoot>tr>th,
          .ct-content>table>tfoot>tr>td {
            padding: 1rem;
            vertical-align: top;
            border: 1px solid #e9ecef;
          }

          .ct-content>table>thead>tr>th>p:last-child,
          .ct-content>table>thead>tr>td>p:last-child,
          .ct-content>table>tbody>tr>th>p:last-child,
          .ct-content>table>tbody>tr>td>p:last-child,
          .ct-content>table>tfoot>tr>th>p:last-child,
          .ct-content>table>tfoot>tr>td>p:last-child {
            margin-bottom: 0;
          }

          .ct-content>table td:first-child>code {
            white-space: nowrap;
          }

          .ct-content>h2:not(:first-child) {
            margin-top: 3rem;
            font-size: 1.5rem;
            font-weight: 600;
          }

          .ct-content>h3 {
            margin-top: 2.5rem;
            font-size: 1.25rem;
            font-weight: 600;
          }

          .ct-content>ul li,
          .ct-content>ol li {
            margin-bottom: .25rem;
          }

          @media (min-width: 992px) {

            .ct-content>ul,
            .ct-content>ol,
            .ct-content>p {
              max-width: 80%;
            }
          }


          .ct-page-title {
            padding-left: 1.25rem;
            border-left: 2px solid #5e72e4;
            margin-bottom: 1.5rem;
          }

          .ct-title {
            margin-top: 1rem;
            margin-bottom: .5rem;
            font-weight: 300;
          }

          @media (min-width: 576px) {
            .ct-title {
              font-size: 1.5rem;
              font-weight: 600;
            }
          }

          .ct-lead {
            color: #3b454e;
            font-weight: 500;
          }

          @media (min-width: 576px) {
            .ct-lead {
              max-width: 80%;
              margin-bottom: 1rem;
              font-size: .875rem;
            }
          }

          .ct-text-purple {
            color: #5e72e4;
          }

          .ct-text-purple-bright {
            color: #9da9f2;
          }

          .ct-tabs-example .nav-link i {
            margin-right: 5px;
          }

          .color-swatch {
            margin: 1rem 0;
            border-radius: .25rem;
            background-color: #F4F5F7;
          }

          .color-swatch:after {
            content: " ";
            display: table;
            clear: both;
          }

          .color-swatch-header {
            position: relative;
            height: 0;
            padding-bottom: 50%;
            border-radius: .25rem .25rem 0 0;
            border: 1px solid transparent;
          }

          .color-swatch-header.is-light {
            border-color: #C1C7D0;
          }

          .color-swatch-header .pass-fail {
            position: absolute;
            width: 100%;
            bottom: 0;
          }

          .color-swatch-header .pass-fail-item-wrap {
            position: relative;
            float: left;
            left: 50%;
            -webkit-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            transform: translateX(-50%);
          }

          .color-swatch-header .pass-fail-item-group {
            display: inline-block;
            padding: 0 5px;
          }

          .color-swatch-header .pass-fail-item {
            float: left;
            display: inline-block;
            text-align: center;
            padding: 2px;
          }

          .color-swatch-header .pass-fail-item.white .example {
            color: #fff;
          }

          .color-swatch-header .pass-fail-item.small .example {
            font-size: 10px;
          }

          .color-swatch-header .pass-fail-item .lozenge {
            font-size: 11px;
            text-transform: uppercase;
            font-weight: 600;
            background: #000;
            color: #fff;
            padding: 2px 4px;
            line-height: 10px;
            border-radius: 4px;
            letter-spacing: 0.05em;
          }

          .color-swatch-body {
            position: relative;
            left: 50%;
            float: left;
            padding: 10px 0;
            -webkit-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            transform: translateX(-50%);
          }

          .color-swatch-body .prop-item-wrap {
            float: left;
            padding: 0 15px;
            min-width: 65px;
          }

          .color-swatch-body .prop-item {
            padding: 15px 0;
          }

          .color-swatch-body .prop-item .label {
            font-size: 11px;
            color: #62748C;
            text-transform: uppercase;
            line-height: 16px;
          }

          .color-swatch-body .prop-item .value {
            font-size: 14px;
          }

          .table-colors {
            font-weight: 600;
            font-size: 16px;
            width: 100%;
          }

          .table-colors td,
          .table-colors:first-child td,
          .table-colors td:first-child,
          .table-colors:first-child td:first-child,
          .table-colors td:last-child,
          .table-colors:first-child td:last-child {
            background: rgba(255, 255, 255, 0.9);
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            padding: 10px;
          }

          .table-colors tr:last-child td,
          .table-colors:first-child tr:last-child td {
            border-bottom: none;
          }

          .table-colors td:nth-child(1),
          .table-colors:first-child td:nth-child(1) {
            line-height: 40px;
          }

          .table-colors .swatch,
          .table-colors:first-child .swatch {
            float: left;
            height: 40px;
            width: 40px;
            margin-right: 20px;
            display: inline-block;
            border-radius: 4px;
            border: 1px solid transparent;
          }

          .table-colors .swatch.is-light,
          .table-colors:first-child .swatch.is-light {
            border-color: #C1C7D0;
          }

          .table-colors .lozenge,
          .table-colors:first-child .lozenge {
            float: left;
            margin: 5px 10px 0 0;
            font-size: 10px;
            display: inline-block;
            text-transform: uppercase;
            font-weight: 600;
            background: #97A0AF;
            color: #042A53;
            padding: 2px 4px;
            line-height: 10px;
            border-radius: 4px;
            letter-spacing: 0.05em;
          }

          .ct-toc {
            order: 2;
            padding-top: 2rem;
            padding-bottom: 1.5rem;
            font-size: .875rem;
          }

          @supports (position: sticky) {
            .ct-toc {
              position: sticky;
              top: 4rem;
              height: calc(100vh - 4rem);
              overflow-y: auto;
            }
          }

          .section-nav {
            padding-left: 0;
            border-left: 1px solid #eee;
          }

          .section-nav ul {
            padding-left: 1rem;
          }

          .section-nav ul ul {
            display: none;
          }

          .toc-entry {
            display: block;
            font-size: 1rem;
          }

          .toc-entry a {
            display: block;
            padding: .125rem 1.5rem;
            color: #99979c;
            font-size: 90%;
          }

          .toc-entry a:hover {
            color: #5e72e4;
            text-decoration: none;
          }

          .ct-sidebar {
            order: 0;
            border-bottom: 1px solid #e6ecf1;
            background-color: #f5f7f9;
          }

          @media (min-width: 768px) {
            .ct-sidebar {
              border-right: 1px solid #e6ecf1;
            }

            @supports (position: sticky) {
              .ct-sidebar {
                position: sticky;
                top: 4rem;
                z-index: 1000;
                height: calc(100vh - 4rem);
              }
            }
          }

          @media (min-width: 1200px) {
            .ct-sidebar {
              flex: 0 1 320px;
            }
          }

          .ct-links {
            padding-top: 2rem;
            padding-bottom: 1rem;
            margin-right: -15px;
            margin-left: -15px;
          }

          @media (min-width: 768px) {
            @supports (position: sticky) {
              .ct-links {
                max-height: calc(100vh - 5rem);
                overflow-y: auto;
              }
            }
          }

          @media (min-width: 768px) {
            .ct-links {
              display: block !important;
            }
          }

          .ct-search {
            position: relative;
            padding: 1rem 15px;
            margin-right: -15px;
            margin-left: -15px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          }

          .ct-search .form-control:focus {
            border-color: #9da9f2;
            box-shadow: 0 0 0 3px rgba(157, 169, 242, 0.25);
          }

          .ct-search-docs-toggle {
            line-height: 1;
            color: #212529;
          }

          .ct-sidenav {
            display: none;
          }

          .ct-toc-link {
            display: block;
            padding: .25rem 1.5rem;
            font-weight: 600;
            font-size: .875rem;
            color: #0d2b3e;
          }

          .ct-toc-link:hover {
            color: rgba(0, 0, 0, 0.85);
            text-decoration: none;
          }

          .ct-toc-item.active {
            margin-bottom: 1rem;
          }

          .ct-toc-item.active:not(:first-child) {
            margin-top: 1rem;
          }

          .ct-toc-item.active>.ct-toc-link {
            color: rgba(0, 0, 0, 0.85);
          }

          .ct-toc-item.active>.ct-toc-link:hover {
            background-color: transparent;
          }

          .ct-toc-item.active>.ct-sidenav {
            display: block;
          }

          .ct-sidebar .nav>li>a {
            display: block;
            padding: .25rem 1.5rem;
            font-size: 84%;
            color: #4c555a;
          }

          .ct-sidebar .nav>li>a:hover {
            color: rgba(0, 0, 0, 0.85);
            text-decoration: none;
            background-color: transparent;
          }

          .ct-sidebar .nav>.active>a {
            font-weight: 500;
            color: #0099e5;
            background-color: transparent;
            padding-left: 2rem;
            position: relative;
          }

          .ct-sidebar .nav>.active>a:before {
            content: '';
            position: absolute;
            height: 16px;
            width: 2px;
            background-color: #0099e5;
            top: 50%;
            left: 1.5rem;
            transform: translateY(-50%);
          }

          .ct-sidebar .nav>.active:hover>a {
            color: #0099e5;
          }

          .scrollbar-inner {
            height: 100%;
          }

          .scrollbar-inner:not(:hover) .scroll-element {
            opacity: 0;
          }

          .scrollbar-inner .scroll-element {
            transition: opacity 300ms;
            margin-right: 2px;
          }

          .scrollbar-inner .scroll-element .scroll-bar,
          .scrollbar-inner .scroll-element .scroll-element_track {
            transition: background-color 300ms;
          }


.scrollbar-inner .scroll-element .scroll-element_track {
    background-color: transparent;
  }

  .scrollbar-inner .scroll-element.scroll-y {
    width: 3px;
    right: 0;
  }

  .scrollbar-inner .scroll-element.scroll-x {
    height: 3px;
    bottom: 0;
  }

  .ct-footer {
    font-size: 85%;
    text-align: center;
    background-color: #f7f7f7;
  }

  .ct-footer a {
    font-weight: 500;
    color: #525f7f;
  }

  .ct-footer a:hover,
  .ct-footer a:focus {
    color: #5e72e4;
  }

  .ct-footer p {
    margin-bottom: 0;
  }

  @media (min-width: 576px) {
    .ct-footer {
      text-align: left;
    }
  }

  .ct-footer-links {
    padding-left: 0;
    margin-bottom: 1rem;
  }

  .ct-footer-links li {
    display: inline-block;
  }

  .ct-footer-links li+li {
    margin-left: 1rem;
  }

  h1 {
    color: blue;
}
.red{
color: red;
}








          `}</style>

  )

  export default Style
