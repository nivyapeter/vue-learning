<template>
<div>
<div>{{greet}}{{name}}</div>
<div v-text="channel"></div>
<div v-html='channel'></div>
<h2 v-bind:id='headingId'>heading</h2>
<button :disabled='isDisable'>Bind</button>
<h2 class='underline'>underline text</h2>
<h2 :class='status'>status</h2>
<h2 :class="isPromoted && 'promoted'">Promoted</h2>
<h2 :class="isSoldOut ? 'sold-out' : 'new'">Solout?: movie</h2>
<h2 :class="isSoldOut ? ['new','promoted'] : ['sold-out']">Newly promoted movie</h2>

<h2 :class="[isPromoted && 'promoted',isSoldOut ? 'sold-out' : 'new']">Array conditional</h2>

<h2 :class="{
  promoted: isPromoted,
  new: !isSoldOut,
  'sold-out':isSoldOut
  }">object conditional</h2>

<h2 :style="{color:highLightColor,fontSize:headerSize + 'px'}">Inline style</h2>

<h2 :style='headerStyleObject'>style object</h2>

<div :style="[baseStyleObject,successStyleObject]">Success style</div>


</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      greet: 'hello',
      name:'Nivya',
      channel:'<b>code evolution</b>',
      headingId: 'heading',
      isDiasbled: false,
      status: 'danger',
      isPromoted: false,
      isSoldOut: true,
      highLightColor: 'orange',
      headerSize:50,
      headerStyleObject: {
        color: 'red',
        padding:'20px',
        fontSize:'60px'
      },
      baseStyleObject: {
        fontSize:'50px',
        padding:'10px'
      },
      successStyleObject: {
        color:'green',
        backgroundColor: 'lightgreen',
        border: '1px solid green',
        padding:'20px'
      }

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
