<template>
<div>
<div>
<pre>
  {{JSON.stringify(formValues,null,2)}}
</pre>
</div>

<form>
  <div>
    <label for="name">Name</label>
    <input type="text " id="name" v-model="formValues.name">
  </div>
  <label for="profile">Profile</label>
  <textarea name="profile" id="profile" cols="30" rows="10" v-model="formValues.profileSummary" ></textarea>
  <div>
    <label for="country">Country</label>
    <select name="country" id="country" v-model="formValues.country">
      <option value="">Select a country</option>
      <option value="india">India</option>
      <option value="singapore">Singapore</option>
    </select>
  </div>

  <div>
    <label for="country">Job location</label>
    <select name="country" id="country" multiple v-model="formValues.jobLocation">
      <option value="">Select a country</option>
      <option value="india">India</option>
      <option value="singapore">Singapore</option>
    </select>
  </div>

  <div>
    <input type="checkbox" id='remoteWork'  v-model="formValues.remoteWork" true-value="yes" false-value="no" />
    <label for="remoteWork">Open to remote work</label>
  </div>

  <div>
    <label for="">Skill set</label>
    <input type="checkbox" id="html" value="html" v-model="formValues.skillSet"/>
    <label for="html">HTML</label>
    <input type="checkbox" id="css" value="css" v-model="formValues.skillSet" />
    <label for="css">CSS</label>
    <input type="checkbox" id="javascript" value="javascript"  v-model="formValues.skillSet" />
    <label for="javascript">Javascript</label>
  </div>

  <div>
    <label for="">yearsOfExperience</label>
    <input type="radio" id="0-2" value="0-2" v-model="formValues.yearsOfExperience" />
    <label for="0-2">0-2</label>
    <input type="radio" id="3-5" value="3-5" v-model="formValues.yearsOfExperience" />
    <label for="3-5">3-5</label>
  </div>

  <div>
    <button @click="submitForm">Submit</button>
  </div>

</form> 
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      formValues: {
        name: '',
        profileSummary: '',
        country:'',
        jobLocation:[],
        remoteWork: "no",
        skillSet:[],
        yearsOfExperience:''
      }
    }
  },
  methods: {
    submitForm(event) {
      event.preventDefault()
      console.log('form values',this.formValues);
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.underline {
 text-decoration: underline;
}

.promoted {
 font-style: italic ;
}

.new {
  color:green
}
.sold-out {
  color: red
}
</style>
