<template>
    <div class="input_section">
    <div class="input-container">
      <input v-model="dataOne" class="input-box" readonly />
      <button @click="copyFirstData" class="copy-button">
        <font-awesome-icon icon="copy" />
      </button>
    </div>
    <div class="input-container">
        <input v-model="dataTwo" class="input-box" readonly />
      <button @click="copySecondData" class="copy-button">
        <font-awesome-icon icon="copy" />
      </button>
    </div>
</div>
  </template>
  <script>
  import { ref, onMounted } from 'vue';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faCopy } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  library.add(faCopy);
  export default {
    components: {
      FontAwesomeIcon,
    },
    setup() {
    const dataOne = ref('copy data one');
    const dataTwo = ref('copy data two');
    const isInIframe = () => {
      try {
        return window.self !== window.top;
      } catch (e) {
        return true;
      }
    };
    const sendMessageToParent = (data) => {
      const message = { 
        type: 'copy',
        data: data,
      };
      window.parent.postMessage(message, '*');
    };
    const copyFirstData = () => {
      if (isInIframe()) {
        sendMessageToParent(dataOne.value);
      } else {
        navigator.clipboard.writeText(dataOne.value)
      }
    };

    const copySecondData = () => {
      if (isInIframe()) {
        sendMessageToParent(dataTwo.value);
      } else {
        navigator.clipboard.writeText(dataTwo.value)
      }
    };

    onMounted(() => {
      window.addEventListener('message', handleMessage);
    });

    const handleMessage = (event) => {
      if (event.data.type === 'copy') {
        const { data } = event.data;
        copyFirstData(data);
        copySecondData(data)
      }
    };
    return {
      dataOne,
      dataTwo,
      copyFirstData,
      copySecondData
    };
  }
  };
  </script>
  <style>
  .input_section{
    display: flex;
    flex-direction: column;
    padding-top: 1rem;  
    gap: 1rem;
  }
  .input-container {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    width: 60%;
    margin: auto;

  }
  .input-box {
    flex: 1;
    padding: 5px;
    outline: none;
    border: 1px solid transparent;  
  }
  .copy-button {
    margin-left: 5px;
    background: none;
    border: none;
    cursor: pointer;
  }
  </style>