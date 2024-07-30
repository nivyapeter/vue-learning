<template>
  <div class="accordion">
    <div>
      <input type="radio" id="section1" name="accordion" class="accordion__input" checked />
      <label for="section1" class="accordion__label">Section #1</label>
      <div class="accordion__content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, possimus?</p>
      </div>
    </div>
    <div>
      <input type="radio" id="section2" name="accordion" class="accordion__input" />
      <label for="section2" class="accordion__label">Section #2</label>
      <div class="accordion__content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
          earum, magnam? Alias error, placeat! Accusamus accusantium alias eum
          iure laborum odit porro quaerat? Animi enim id labore officiis quam
          sint.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue';

// const data = ref({
//  label: "Section 1",
//  content:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, earum, magnam? Alias error, placeat! Accusamus accusantium alias eum iure laborum odit porro quaerat? Animi enim id labore officiis quam sint."
// },
// {
//  label: "Section 2",
//  content:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, earum, magnam? Alias error, placeat! Accusamus accusantium alias eum iure laborum odit porro quaerat? Animi enim id labore officiis quam sint."
// }
// )
</script>

<style scoped>
.accordion {
  max-width: 400px;
  margin: 2rem auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  overflow: hidden;
  background-color: purple;
}

.accordion:first-child {
  display: block;
}
.accordion__label,
.accordion__content {
  padding: 14px 20px;
}
.accordion__label {
  display: block;
  color: white;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  transition: background-color 0.1s;
}
.accordion__label:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.accordion__content {
  background: white;
  line-height: 1.6;
  font-size: 0.85em;
  display: none;
}
.accordion__input {
  display: none;
}
.accordion__input:checked ~ .accordion__content {
  display: block;
}
</style>
