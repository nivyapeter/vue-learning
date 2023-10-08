<template>
  <div class="create-panel">
    <div class="create-panel__section">
      <label for="Name">id:</label>
      <input type="text" v-model="newStudent.id"/>
    </div>
    <div class="create-panel__section">
      <label for="Name">Name:</label>
      <input type="text" v-model="newStudent.name"/>
    </div>
  </div>
  <button @click="addStudent">Create</button>
</template>

<script setup lang="ts">
// import { reactive } from 'vue';


// const classObject = reactive({
//     "name" : "class A" ,
//     "teacherName" : "Mary" ,
//     "students" : [ 
//         {
//             "name" : "Ravi" ,
//             "id" : "101" ,
//             "marks" : [
//                 {"subject" : "English" , "mark" : 25}, 
//                 {"subject" : "Maths", "mark" : 48}, 
//                 {"subject" : "Physics", "mark" : 40}, 
//                 {"subject" : "Chemistry", "mark" : 30},
//                 {"subject" : "Computer", "mark" : 20}
//             ]
//         },
//         {
//             "name" : "Aju" ,
//             "id" :  "102",
//             "marks" : [
//                 {"subject" : "English" , "mark" : 35}, 
//                 {"subject" : "Maths", "mark" : 38}, 
//                 {"subject" : "Physics", "mark" : 33}, 
//                 {"subject" : "Chemistry", "mark" : 34},
//                 {"subject" : "Computer", "mark" : 30}
//             ]
//         },
//     ]
// })

const newStudent = {
    name:'',
    id:''
}
const addStudent = () => {
//     classObject.students.push({
//     name: newStudent.name, id: newStudent.id,
//     marks: []
// })
// console.log(classObject.students);

//   newStudent.id = ''
//   newStudent.name=''
}

</script>

<style  scoped>
.create-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;
}

.create-panel__section {
    display: flex ;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
</style>
