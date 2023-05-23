# vue-learning

- npm install @vue/cli
- vue --version
- vue create hello-world
- cd hello-world
- npm run serve
- To set up local development server on port 8080

# To bind data into UI

## masthash text binding

- for binding fully text or half text
- syntax: {{name}}

## v-text directory binding

- for binding only fully text
  ```
   <div v-text='name'></div>
  ```

## v-html director

- for binding html elemnt on UI
  ```
    <div v-html='channel></div>
  ```

## v-bind directory

- To bind attributes and classes dynamically on ui

```
<h2 v-bind:id='heading'>heading</h2>
<h2 v-bind:class='heading>heading</h2>
```

## v-bind shorthand

- v-bind: can be written as just :

## conditional rendering in vue

- v-if
- v-else-if
- v-else
- v-show

## List rendering

- v-for

## Event handling

- v-on:click=""
- shorthand @click

## Form handling

- v-model

```
## v-modifiers

v-once - Render the corresponding HTML element only once

v-pre - Skip compilation for the corresponding element

```

## Method vs Computed property

```
- Method will call for every change in the ui but the computed property will not.so for better performance of the app always recommand methods.
```
